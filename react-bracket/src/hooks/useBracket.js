import { useState, useCallback } from 'react';
import { REGIONS, REGION_ORDER, FF_MATCHUPS, AI_PICKS } from '../data/bracketData';

function buildInitialState() {
  const state = {};

  for (const rid of REGION_ORDER) {
    const { r64 } = REGIONS[rid];
    // Round of 64: 8 games, slots come from the bracket data
    for (let i = 0; i < 8; i++) {
      state[`${rid}_r64_${i}`] = { top: r64[i].top, bottom: r64[i].bottom, winner: null };
    }
    // Round of 32: 4 games
    for (let i = 0; i < 4; i++) {
      state[`${rid}_r32_${i}`] = { top: null, bottom: null, winner: null };
    }
    // Sweet 16: 2 games
    for (let i = 0; i < 2; i++) {
      state[`${rid}_s16_${i}`] = { top: null, bottom: null, winner: null };
    }
    // Elite 8: 1 game
    state[`${rid}_e8`] = { top: null, bottom: null, winner: null };
  }

  // Final Four: 2 games
  for (let i = 0; i < 2; i++) {
    state[`ff_${i}`] = { top: null, bottom: null, winner: null };
  }

  // Championship
  state['champ'] = { top: null, bottom: null, winner: null };

  return state;
}

function propagate(prev) {
  const s = { ...prev };

  for (const rid of REGION_ORDER) {
    // r64 → r32
    for (let i = 0; i < 4; i++) {
      const a = s[`${rid}_r64_${i * 2}`];
      const b = s[`${rid}_r64_${i * 2 + 1}`];
      const key = `${rid}_r32_${i}`;
      const newTop = a.winner || null;
      const newBot = b.winner || null;
      if (s[key].top !== newTop || s[key].bottom !== newBot) {
        const invalidWinner =
          s[key].winner && s[key].winner !== newTop && s[key].winner !== newBot
            ? null
            : s[key].winner;
        s[key] = { top: newTop, bottom: newBot, winner: invalidWinner };
      }
    }
    // r32 → s16
    for (let i = 0; i < 2; i++) {
      const a = s[`${rid}_r32_${i * 2}`];
      const b = s[`${rid}_r32_${i * 2 + 1}`];
      const key = `${rid}_s16_${i}`;
      const newTop = a.winner || null;
      const newBot = b.winner || null;
      if (s[key].top !== newTop || s[key].bottom !== newBot) {
        const invalidWinner =
          s[key].winner && s[key].winner !== newTop && s[key].winner !== newBot
            ? null
            : s[key].winner;
        s[key] = { top: newTop, bottom: newBot, winner: invalidWinner };
      }
    }
    // s16 → e8
    {
      const a = s[`${rid}_s16_0`];
      const b = s[`${rid}_s16_1`];
      const key = `${rid}_e8`;
      const newTop = a.winner || null;
      const newBot = b.winner || null;
      if (s[key].top !== newTop || s[key].bottom !== newBot) {
        const invalidWinner =
          s[key].winner && s[key].winner !== newTop && s[key].winner !== newBot
            ? null
            : s[key].winner;
        s[key] = { top: newTop, bottom: newBot, winner: invalidWinner };
      }
    }
  }

  // e8 → Final Four
  for (let i = 0; i < 2; i++) {
    const [ridA, ridB] = FF_MATCHUPS[i];
    const a = s[`${ridA}_e8`];
    const b = s[`${ridB}_e8`];
    const key = `ff_${i}`;
    const newTop = a.winner || null;
    const newBot = b.winner || null;
    if (s[key].top !== newTop || s[key].bottom !== newBot) {
      const invalidWinner =
        s[key].winner && s[key].winner !== newTop && s[key].winner !== newBot
          ? null
          : s[key].winner;
      s[key] = { top: newTop, bottom: newBot, winner: invalidWinner };
    }
  }

  // FF → Championship
  {
    const a = s['ff_0'];
    const b = s['ff_1'];
    const newTop = a.winner || null;
    const newBot = b.winner || null;
    if (s['champ'].top !== newTop || s['champ'].bottom !== newBot) {
      const invalidWinner =
        s['champ'].winner && s['champ'].winner !== newTop && s['champ'].winner !== newBot
          ? null
          : s['champ'].winner;
      s['champ'] = { top: newTop, bottom: newBot, winner: invalidWinner };
    }
  }

  return s;
}

function applyAIPicks(state) {
  let s = { ...state };

  for (const rid of REGION_ORDER) {
    const picks = AI_PICKS[rid];
    for (let i = 0; i < 8; i++) {
      s[`${rid}_r64_${i}`] = { ...s[`${rid}_r64_${i}`], winner: picks.r64[i] };
    }
    s = propagate(s);
    for (let i = 0; i < 4; i++) {
      s[`${rid}_r32_${i}`] = { ...s[`${rid}_r32_${i}`], winner: picks.r32[i] };
    }
    s = propagate(s);
    for (let i = 0; i < 2; i++) {
      s[`${rid}_s16_${i}`] = { ...s[`${rid}_s16_${i}`], winner: picks.s16[i] };
    }
    s = propagate(s);
    s[`${rid}_e8`] = { ...s[`${rid}_e8`], winner: picks.e8 };
    s = propagate(s);
  }

  s = propagate(s);

  for (let i = 0; i < 2; i++) {
    s[`ff_${i}`] = { ...s[`ff_${i}`], winner: AI_PICKS.ff[i * 2] }; // East/West winners
  }
  // ff_0 winner = East (Duke), ff_1 winner = West (Arizona)
  s['ff_0'] = { ...s['ff_0'], winner: AI_PICKS.ff[0] };
  s['ff_1'] = { ...s['ff_1'], winner: AI_PICKS.ff[2] };
  s = propagate(s);
  s['champ'] = { ...s['champ'], winner: AI_PICKS.champ };

  return s;
}

export function useBracket() {
  const [games, setGames] = useState(() => buildInitialState());
  const [selectedGame, setSelectedGame] = useState(null);

  const pick = useCallback((gameKey, winner) => {
    setGames(prev => {
      const game = prev[gameKey];
      if (!game) return prev;
      const newWinner = game.winner === winner ? null : winner;
      const updated = { ...prev, [gameKey]: { ...game, winner: newWinner } };
      return propagate(updated);
    });
  }, []);

  const loadAI = useCallback(() => {
    setGames(prev => applyAIPicks(buildInitialState()));
  }, []);

  const reset = useCallback(() => {
    setGames(buildInitialState());
    setSelectedGame(null);
  }, []);

  const countPicks = () => Object.values(games).filter(g => g.winner !== null).length;

  return { games, pick, loadAI, reset, countPicks, selectedGame, setSelectedGame };
}
