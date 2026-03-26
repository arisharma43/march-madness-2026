import { TEAM_INFO, REGIONS } from '../data/bracketData';

function getAnalysisData(gameKey) {
  // Try to find r64 analysis data
  const parts = gameKey.split('_');
  if (parts.length < 3) return null;
  const [rid, round, idx] = parts;
  if (round === 'r64' && REGIONS[rid]) {
    return REGIONS[rid].r64[parseInt(idx)];
  }
  return null;
}

export default function Matchup({ gameKey, game, onPick, onSelect, reversed = false, compact = false }) {
  const { top, bottom, winner } = game;
  const analysis = getAnalysisData(gameKey);

  const topInfo = top ? TEAM_INFO[top] : null;
  const botInfo = bottom ? TEAM_INFO[bottom] : null;

  function TeamRow({ name, side }) {
    const isEmpty = !name;
    const isPicked = winner === name;
    const info = name ? TEAM_INFO[name] : null;
    const seed = info?.seed ?? (name ? '?' : null);

    // Find seed from r64 data
    let displaySeed = null;
    if (analysis) {
      displaySeed = side === 'top' ? null : null;
    }
    // Get seed from regions data
    const ridParts = gameKey.split('_');
    const rid = ridParts[0];
    if (rid && REGIONS[rid]) {
      REGIONS[rid].r64.forEach(m => {
        if (m.top === name) displaySeed = TEAM_INFO[m.top]?.seed ?? null;
        if (m.bottom === name) displaySeed = TEAM_INFO[m.bottom]?.seed ?? null;
      });
    }

    const classes = [
      'team-row',
      isPicked ? 'picked' : '',
      isEmpty ? 'empty' : '',
      !isEmpty && !isPicked ? 'available' : '',
    ].filter(Boolean).join(' ');

    return (
      <div
        className={classes}
        onClick={() => {
          if (!isEmpty) {
            onPick(gameKey, name);
          }
        }}
        title={isEmpty ? '' : `Pick ${name}`}
      >
        <span className="team-seed">{displaySeed || (isEmpty ? '' : '·')}</span>
        <span className="team-name">{isEmpty ? 'TBD' : name}</span>
        {isPicked && <span className="check">✓</span>}
        {info?.injury && <span className="injury-dot" title={info.injury}>⚠</span>}
      </div>
    );
  }

  const hasUpset = analysis?.upsetAlert;
  const winProb = analysis?.winProb;

  return (
    <div
      className={`matchup ${hasUpset ? 'has-upset' : ''} ${compact ? 'compact' : ''}`}
      onClick={(e) => {
        if (e.target.closest('.team-row')) return;
        if (analysis || top || bottom) onSelect(gameKey);
      }}
    >
      {hasUpset && <div className="upset-flag">⚡ Upset Alert</div>}
      <TeamRow name={top} side="top" />
      <div className="matchup-divider" />
      <TeamRow name={bottom} side="bottom" />
      {winProb !== undefined && !compact && (
        <div className="win-prob-bar">
          <div className="win-prob-fill" style={{ width: `${winProb}%` }} />
        </div>
      )}
    </div>
  );
}
