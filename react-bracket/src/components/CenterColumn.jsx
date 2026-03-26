import Matchup from './Matchup';

export default function CenterColumn({ games, onPick, onSelect }) {
  const ff0 = games['ff_0'];
  const ff1 = games['ff_1'];
  const champ = games['champ'];
  const champion = champ?.winner;

  return (
    <div className="center-column">
      <div className="ff-section">
        <div className="ff-label">FINAL FOUR</div>
        <div className="ff-sublabel">East vs South · Indianapolis</div>
        <Matchup
          gameKey="ff_0"
          game={ff0}
          onPick={onPick}
          onSelect={onSelect}
          compact
        />
      </div>

      <div className="champ-section">
        <div className="champ-label">CHAMPIONSHIP</div>
        <div className="champ-sublabel">Apr 6 · Indianapolis</div>
        <Matchup
          gameKey="champ"
          game={champ}
          onPick={onPick}
          onSelect={onSelect}
          compact
        />
        <div className={`champion-trophy ${champion ? 'has-champ' : ''}`}>
          <div className="trophy-icon">🏆</div>
          <div className="trophy-label">Champion</div>
          <div className="trophy-name">{champion || '?'}</div>
        </div>
      </div>

      <div className="ff-section">
        <div className="ff-label">FINAL FOUR</div>
        <div className="ff-sublabel">West vs Midwest · Indianapolis</div>
        <Matchup
          gameKey="ff_1"
          game={ff1}
          onPick={onPick}
          onSelect={onSelect}
          compact
        />
      </div>
    </div>
  );
}
