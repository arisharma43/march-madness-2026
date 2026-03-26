import { useCallback } from 'react';
import { useBracket } from './hooks/useBracket';
import Region from './components/Region';
import CenterColumn from './components/CenterColumn';
import AnalysisPanel from './components/AnalysisPanel';
import { REGIONS } from './data/bracketData';

const TOTAL_PICKS = 63;

function ProgressBar({ count }) {
  const pct = Math.round((count / TOTAL_PICKS) * 100);
  return (
    <div className="progress-wrapper">
      <div className="progress-bar-bg">
        <div className="progress-bar-fill" style={{ width: `${pct}%` }} />
      </div>
      <span className="progress-text">{count} / {TOTAL_PICKS} picks ({pct}%)</span>
    </div>
  );
}

function UpsetSummary({ games }) {
  const upsets = [];
  for (const rid of ['east', 'south', 'west', 'midwest']) {
    REGIONS[rid].r64.forEach((matchup, i) => {
      if (!matchup.upsetAlert) return;
      const gameKey = `${rid}_r64_${i}`;
      const game = games[gameKey];
      if (game?.winner === matchup.bottom) {
        upsets.push({ winner: matchup.bottom, over: matchup.top, region: REGIONS[rid].name });
      }
    });
  }
  if (upsets.length === 0) return null;
  return (
    <div className="upset-summary">
      <span className="upset-summary-icon">⚡</span>
      {upsets.map((u, i) => (
        <span key={i} className="upset-chip">
          {u.winner} over {u.over} ({u.region})
        </span>
      ))}
    </div>
  );
}

export default function App() {
  const { games, pick, loadAI, reset, countPicks, selectedGame, setSelectedGame } = useBracket();

  const handleSelect = useCallback((gameKey) => {
    setSelectedGame(gameKey === selectedGame ? null : gameKey);
  }, [selectedGame, setSelectedGame]);

  const handleExport = useCallback(() => {
    let text = 'MARCH MADNESS 2026 BRACKET\n' + '='.repeat(40) + '\n\n';
    for (const rid of ['east', 'south', 'west', 'midwest']) {
      text += `=== ${REGIONS[rid].name} ===\n`;
      for (const [round, label] of [['r64', 'Round of 64'], ['r32', 'Round of 32'], ['s16', 'Sweet 16'], ['e8', 'Elite 8']]) {
        text += `\n${label}:\n`;
        const keys = round === 'e8' ? [`${rid}_e8`] : Array.from({ length: { r64: 8, r32: 4, s16: 2 }[round] }, (_, i) => `${rid}_${round}_${i}`);
        for (const key of keys) {
          const g = games[key];
          const a = g?.top || 'TBD', b = g?.bottom || 'TBD';
          const w = g?.winner ? ` → ${g.winner}` : '';
          text += `  ${a} vs ${b}${w}\n`;
        }
      }
      text += '\n';
    }
    text += '=== FINAL FOUR ===\n';
    for (const id of ['ff_0', 'ff_1']) {
      const g = games[id];
      text += `  ${g?.top || 'TBD'} vs ${g?.bottom || 'TBD'}${g?.winner ? ` → ${g.winner}` : ''}\n`;
    }
    text += '\n=== CHAMPIONSHIP ===\n';
    const ch = games['champ'];
    text += `  ${ch?.top || 'TBD'} vs ${ch?.bottom || 'TBD'}${ch?.winner ? ` → ${ch.winner}` : ''}\n`;
    if (ch?.winner) text += `\n🏆 CHAMPION: ${ch.winner}\n`;

    navigator.clipboard.writeText(text)
      .then(() => alert('Bracket copied to clipboard!'))
      .catch(() => alert('Could not copy — check clipboard permissions.'));
  }, [games]);

  const picks = countPicks();

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-title">
          <span className="header-icon">🏀</span>
          <h1>March Madness 2026</h1>
          <span className="header-badge">Interactive Bracket</span>
        </div>
        <div className="header-sub">
          Click any team to pick them · Click a matchup border to see scouting analysis
        </div>
      </header>

      <div className="toolbar">
        <ProgressBar count={picks} />
        <div className="toolbar-actions">
          <button className="btn btn-ai" onClick={loadAI} title="Load AI-recommended picks based on KenPom, CBS, Jay Bilas & Vegas odds">
            🤖 AI Picks
          </button>
          <button className="btn btn-reset" onClick={reset}>
            ↺ Reset
          </button>
          <button className="btn btn-export" onClick={handleExport}>
            📋 Export
          </button>
        </div>
      </div>

      <UpsetSummary games={games} />

      <div className="bracket-scroll-container">
        <div className="bracket-layout">
          {/* Left side: East (top) + South (bottom) */}
          <div className="bracket-side left">
            <Region rid="east" games={games} onPick={pick} onSelect={handleSelect} reversed={false} />
            <Region rid="south" games={games} onPick={pick} onSelect={handleSelect} reversed={false} />
          </div>

          <CenterColumn games={games} onPick={pick} onSelect={handleSelect} />

          {/* Right side: West (top) + Midwest (bottom), mirrored */}
          <div className="bracket-side right">
            <Region rid="west" games={games} onPick={pick} onSelect={handleSelect} reversed={true} />
            <Region rid="midwest" games={games} onPick={pick} onSelect={handleSelect} reversed={true} />
          </div>
        </div>
      </div>

      <div className="legend">
        <div className="legend-title">Sources Used for AI Picks</div>
        <div className="legend-items">
          <div className="legend-item"><span className="tag kenpom-tag">KenPom</span> Adjusted efficiency margin &amp; tempo</div>
          <div className="legend-item"><span className="tag cbs-tag">CBS</span> Isaac Trotter scouting reports (matchup-by-matchup)</div>
          <div className="legend-item"><span className="tag bilas-tag">Bilas</span> Jay Bilas ESPN full bracket predictions</div>
          <div className="legend-item"><span className="tag bpi-tag">BPI</span> ESPN win probabilities &amp; Giant Killers model</div>
          <div className="legend-item"><span className="tag vegas-tag">Vegas</span> Championship odds (Duke +360, Michigan +370, Arizona +380)</div>
        </div>
      </div>

      {selectedGame && (
        <AnalysisPanel
          gameKey={selectedGame}
          game={games[selectedGame]}
          onClose={() => setSelectedGame(null)}
        />
      )}
    </div>
  );
}
