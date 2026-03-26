import { REGIONS, TEAM_INFO } from '../data/bracketData';

function getRoundLabel(round) {
  const map = { r64: 'Round of 64', r32: 'Round of 32', s16: 'Sweet 16', e8: 'Elite 8', ff: 'Final Four', champ: 'Championship' };
  return map[round] || round;
}

function TeamCard({ name, side }) {
  if (!name) return <div className="ap-team-card empty"><span>TBD</span></div>;
  const info = TEAM_INFO[name] || {};
  return (
    <div className={`ap-team-card ${side}`}>
      <div className="ap-team-header">
        <span className="ap-team-name">{name}</span>
        {info.record && <span className="ap-record">{info.record}</span>}
        {info.odds && <span className="ap-odds">{info.odds}</span>}
      </div>
      {info.kenpom && (
        <div className="ap-kenpom">
          <span className="ap-tag kenpom-tag">KenPom #{info.kenpom}</span>
          {info.kenpomOff && <span className="ap-tag off-tag">Off #{info.kenpomOff}</span>}
          {info.kenpomDef && <span className="ap-tag def-tag">Def #{info.kenpomDef}</span>}
        </div>
      )}
      {info.injury && (
        <div className="ap-injury">
          <span className="injury-icon">⚠</span> {info.injury}
        </div>
      )}
      {info.keyPlayers?.length > 0 && (
        <div className="ap-players">
          <div className="ap-section-label">Key Players</div>
          <ul>
            {info.keyPlayers.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        </div>
      )}
      {info.note && (
        <div className="ap-note">{info.note}</div>
      )}
    </div>
  );
}

export default function AnalysisPanel({ gameKey, game, onClose }) {
  if (!gameKey || !game) return null;

  const parts = gameKey.split('_');
  const rid = parts[0];
  const round = parts[1] === 'e8' || parts.length === 2 ? parts[1] : `${parts[1]}`;
  const idx = parts[2] ? parseInt(parts[2]) : null;

  let analysis = null;
  let time = null;
  let cbsPick = null;
  let bilasPick = null;
  let winProb = null;
  let upsetAlert = false;

  if (rid !== 'ff' && rid !== 'champ' && REGIONS[rid]) {
    if (round === 'r64' && idx !== null) {
      const g = REGIONS[rid].r64[idx];
      if (g) {
        analysis = g.analysis;
        time = g.time;
        cbsPick = g.cbsPick;
        bilasPick = g.bilasPick;
        winProb = g.winProb;
        upsetAlert = g.upsetAlert;
      }
    }
  }

  const roundLabel = round === 'e8' ? 'Elite 8' : getRoundLabel(round);

  return (
    <div className="analysis-panel" role="dialog" aria-modal="true">
      <div className="ap-overlay" onClick={onClose} />
      <div className="ap-drawer">
        <div className="ap-header">
          <div className="ap-header-left">
            <span className="ap-round-badge">{roundLabel}</span>
            {time && <span className="ap-time">{time}</span>}
            {upsetAlert && <span className="ap-upset-badge">⚡ Upset Alert</span>}
          </div>
          <button className="ap-close" onClick={onClose} aria-label="Close">✕</button>
        </div>

        <div className="ap-teams">
          <TeamCard name={game.top} side="top" />
          <div className="ap-vs">VS</div>
          <TeamCard name={game.bottom} side="bottom" />
        </div>

        {winProb !== undefined && (
          <div className="ap-prob-section">
            <div className="ap-prob-label">
              Favorite win probability: <strong>{winProb}%</strong>
              {game.top && <span> ({game.top})</span>}
            </div>
            <div className="ap-prob-bar-bg">
              <div className="ap-prob-bar-fill" style={{ width: `${winProb}%` }} />
            </div>
          </div>
        )}

        {(cbsPick || bilasPick) && (
          <div className="ap-expert-picks">
            <div className="ap-section-title">Expert Picks</div>
            <div className="ap-expert-grid">
              {cbsPick && (
                <div className="ap-expert-card">
                  <div className="ap-expert-source">CBS Sports (Isaac Trotter)</div>
                  <div className="ap-expert-pick">{cbsPick}</div>
                </div>
              )}
              {bilasPick && (
                <div className="ap-expert-card">
                  <div className="ap-expert-source">Jay Bilas (ESPN)</div>
                  <div className="ap-expert-pick">{bilasPick}</div>
                </div>
              )}
              {cbsPick && bilasPick && (
                <div className="ap-expert-card consensus">
                  <div className="ap-expert-source">AI Consensus</div>
                  <div className="ap-expert-pick">
                    {cbsPick === bilasPick ? cbsPick : `Split: ${cbsPick} / ${bilasPick}`}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {analysis && (
          <div className="ap-analysis">
            <div className="ap-section-title">Scouting Report</div>
            <p>{analysis}</p>
          </div>
        )}

        {game.top && game.bottom && (
          <div className="ap-pick-actions">
            <div className="ap-section-title">Make Your Pick</div>
            <div className="ap-pick-btns">
              <button
                className={`ap-pick-btn ${game.winner === game.top ? 'active' : ''}`}
                onClick={() => { /* handled by Matchup */ }}
              >
                {game.top}
                {game.winner === game.top && ' ✓'}
              </button>
              <button
                className={`ap-pick-btn ${game.winner === game.bottom ? 'active' : ''}`}
                onClick={() => { /* handled by Matchup */ }}
              >
                {game.bottom}
                {game.winner === game.bottom && ' ✓'}
              </button>
            </div>
            <p className="ap-hint">Click a team name in the bracket to pick them as the winner.</p>
          </div>
        )}

        {!analysis && !cbsPick && (
          <div className="ap-no-data">
            <p>Detailed scouting analysis is available for Round of 64 matchups. Make your picks and advance teams to later rounds to unlock this game!</p>
          </div>
        )}
      </div>
    </div>
  );
}
