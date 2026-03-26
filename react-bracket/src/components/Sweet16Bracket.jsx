import { SWEET16_ONWARD_BRACKET } from '../data/bracketData';

function MatchupRow({ matchup, compact = false }) {
  return (
    <div className={`sweet16-matchup ${compact ? 'compact' : ''}`}>
      <div className={`sweet16-team ${matchup.winner === matchup.top ? 'winner' : ''}`}>
        <span>{matchup.top}</span>
      </div>
      <div className="sweet16-divider" />
      <div className={`sweet16-team ${matchup.winner === matchup.bottom ? 'winner' : ''}`}>
        <span>{matchup.bottom}</span>
      </div>
    </div>
  );
}

export default function Sweet16Bracket() {
  const { s16, e8, ff, champ } = SWEET16_ONWARD_BRACKET;

  return (
    <section className="sweet16-bracket" aria-label="Sweet 16 and onward bracket">
      <div className="sweet16-header">
        <h2>Sweet 16 and Onward (Separate Bracket)</h2>
        <p>Updated with real results so far, then fresh picks from the Sweet 16 through the championship.</p>
      </div>

      <div className="sweet16-grid">
        <div className="sweet16-round">
          <div className="sweet16-round-label">Sweet 16</div>
          <div className="sweet16-list">
            {s16.map((matchup, index) => (
              <MatchupRow key={`s16-${index}`} matchup={matchup} />
            ))}
          </div>
        </div>

        <div className="sweet16-round">
          <div className="sweet16-round-label">Elite 8</div>
          <div className="sweet16-list">
            {e8.map((matchup, index) => (
              <MatchupRow key={`e8-${index}`} matchup={matchup} compact />
            ))}
          </div>
        </div>

        <div className="sweet16-round">
          <div className="sweet16-round-label">Final Four</div>
          <div className="sweet16-list">
            {ff.map((matchup, index) => (
              <MatchupRow key={`ff-${index}`} matchup={matchup} compact />
            ))}
          </div>
        </div>

        <div className="sweet16-round champ">
          <div className="sweet16-round-label">Championship</div>
          <div className="sweet16-list">
            <MatchupRow matchup={champ} compact />
            <div className="sweet16-champion">
              <span className="sweet16-trophy">🏆</span>
              <span className="sweet16-name">{champ.winner}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
