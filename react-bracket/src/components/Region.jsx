import Matchup from './Matchup';
import { REGIONS } from '../data/bracketData';

const ROUNDS = [
  { key: 'r64', count: 8, label: 'Round of 64' },
  { key: 'r32', count: 4, label: 'Round of 32' },
  { key: 's16', count: 2, label: 'Sweet 16' },
  { key: 'e8',  count: 1, label: 'Elite 8' },
];

// Groups consecutive pairs of matchups with a bracket connector
function RoundColumn({ rid, roundKey, count, games, onPick, onSelect, reversed }) {
  const gameKeys = roundKey === 'e8'
    ? [`${rid}_e8`]
    : Array.from({ length: count }, (_, i) => `${rid}_${roundKey}_${i}`);

  if (roundKey === 'e8') {
    return (
      <div className="round-col e8-col">
        <div className="round-label">Elite 8</div>
        <div className="e8-wrapper">
          <Matchup
            gameKey={gameKeys[0]}
            game={games[gameKeys[0]]}
            onPick={onPick}
            onSelect={onSelect}
            reversed={reversed}
          />
        </div>
      </div>
    );
  }

  // Pair matchups into bracket groups
  const groups = [];
  for (let i = 0; i < gameKeys.length; i += 2) {
    groups.push([gameKeys[i], gameKeys[i + 1]]);
  }

  return (
    <div className={`round-col round-${roundKey}`}>
      <div className="round-label">{ROUNDS.find(r => r.key === roundKey)?.label}</div>
      <div className="matchup-groups">
        {groups.map(([keyA, keyB], gi) => (
          <div key={gi} className="bracket-group">
            <div className="bracket-pair">
              <Matchup gameKey={keyA} game={games[keyA]} onPick={onPick} onSelect={onSelect} reversed={reversed} />
              <Matchup gameKey={keyB} game={games[keyB]} onPick={onPick} onSelect={onSelect} reversed={reversed} />
            </div>
            <div className={`bracket-connector ${reversed ? 'rev' : ''}`}>
              <span className="connector-line top-line" />
              <span className="connector-line mid-line" />
              <span className="connector-line bot-line" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Region({ rid, games, onPick, onSelect, reversed = false }) {
  const region = REGIONS[rid];

  return (
    <div className={`region ${reversed ? 'region-reversed' : ''}`}>
      <div className="region-label">
        <span>{region.name}</span>
      </div>
      <div className="region-rounds">
        {ROUNDS.map(({ key, count }) => (
          <RoundColumn
            key={key}
            rid={rid}
            roundKey={key}
            count={count}
            games={games}
            onPick={onPick}
            onSelect={onSelect}
            reversed={reversed}
          />
        ))}
      </div>
    </div>
  );
}
