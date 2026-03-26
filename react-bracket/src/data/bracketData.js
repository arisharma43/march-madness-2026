// ─────────────────────────────────────────────────
// 2026 NCAA Tournament Data
// Sources: KenPom, CBS Sports (Isaac Trotter), Jay Bilas (ESPN),
//          ESPN BPI, Vegas odds, ESPN Giant Killers model
// ─────────────────────────────────────────────────

export const TEAM_INFO = {
    'Duke': { record: '32-2', kenpom: 1, kenpomOff: 4, kenpomDef: 2, keyPlayers: ['Cameron Boozer (22.7 PPG, 10.2 RPG, 41% 3P)', 'Isaiah Evans (14.5 PPG)', 'Cayden Boozer (6.5 PPG)'], note: 'Only team top-4 nationally in both offensive AND defensive efficiency. Boozer is the clear frontrunner for national player of the year.', odds: '+360' },
    'Siena': { record: '—', kenpom: null, keyPlayers: ['Gavin Doty', 'Justice Shoats', 'Brendan Coyle'], note: 'Talented mid-major guards but outmanned by Duke\'s size across the board.' },
    'Ohio State': { record: '—', kenpom: 19, keyPlayers: ['Bruce Thornton', 'Juni Mobley'], note: 'Far better backcourt than TCU, ranked 19th nationally since Jan 1.' },
    'TCU': { record: '—', kenpom: 49, keyPlayers: ['David Punch', 'Xavier Edmonds', 'Jayden Pierre', 'Brock Harding'], note: 'Defense is absolutely legit. Punch/Edmonds a terrific frontcourt 1-2 punch. Won\'t let you access anything easily.' },
    "St John's": { record: '—', kenpom: null, keyPlayers: ['Rick Pitino system'], note: 'Won Big East regular season AND tournament. Averaged 7.5 more scoring opportunities (No. 1 in Big East). Pitino\'s pressure D will rattle opponents.' },
    'Northern Iowa': { record: '—', kenpom: null, keyPlayers: ['Trey Campbell'], note: 'Leads nation in scoring defense (61.3 PPG). Veteran backcourt won\'t cough it up. But reliant on Campbell\'s shot-making.' },
    'Kansas': { record: '—', kenpom: null, keyPlayers: ['Darryn Peterson', 'Flory Bidunga', 'Melvin Council'], note: 'Peterson is a difference-maker. Bidunga is a paint menace. Cal Baptist can\'t shoot enough 3s to threaten.' },
    'CA Baptist': { record: '—', kenpom: null, keyPlayers: ['Dom Daniels'], note: 'Reliant on Daniels\' iso brilliance. Just 10+ 3-pointers twice all season — not enough vs. KU.' },
    'Louisville': { record: '—', kenpom: null, keyPlayers: ['Mikel Brown Jr.'], note: '16-2 when hitting 35%+ from 3, 7-8 otherwise. Predictable offense. Lacks athleticism vs South Florida.' },
    'South Florida': { record: '—', kenpom: null, keyPlayers: ['Joseph Pinion', 'Wes Enis', 'Izaiyah Nelson'], note: 'Won 19 of last 22 (two OT losses, one by 1 pt). Pinion/Enis elite snipers. Nelson two-way menace. More athletic than Louisville.' },
    'Michigan St': { record: '—', kenpom: null, keyPlayers: ['Coen Carr'], note: 'Too big, too strong, too physical for mid-majors. Jay Bilas\' pick to win the EAST and reach the title game.' },
    'N Dakota St': { record: '—', kenpom: null, keyPlayers: ['Trevian Carson'], note: 'Good system — inverts floor with Carson as post-up hub — but outmanned.' },
    'UCLA': { record: '—', kenpom: null, keyPlayers: ['Donovan Dent', 'Skyy Clark', 'Trent Perry', 'Tyler Bilodeau'], note: 'Was No. 3 offense nationally before Bilodeau knee injury. Three-guard lineup creates advantages vs UCF.', injury: 'Tyler Bilodeau — knee strain, questionable' },
    'UCF': { record: '—', kenpom: null, keyPlayers: ['Jamichael Stillwell'], note: 'Goes to the glass at will. Stillwell impossible to keep off boards. Game becomes dogfight if Bilodeau misses it.' },
    'UConn': { record: '—', kenpom: null, keyPlayers: ['UConn system'], note: 'Offense is too layered. Perennial Final Four contender. Multiple experts have them in the Elite 8.' },
    'Furman': { record: '—', kenpom: null, keyPlayers: ['Alex Wilkins (freshman)', 'Cooper Bowser'], note: 'Wilkins is a star. Tall shooters. But first time facing a high-major team all year.' },

    'Florida': { record: '—', kenpom: 4, kenpomOff: 9, kenpomDef: 6, keyPlayers: ['Rueben Chinyelu', 'Alex Condon', 'Tommy Haugh'], note: '+454 combined rebound/TO margin — No. 1 in the nation. Behemoth frontline makes them virtually upset-proof.', odds: '+750' },
    'PV/LEH': { record: '—', kenpom: null, keyPlayers: ['Nasir Whitlock (Lehigh)'], note: 'Lehigh wins the First Four behind Whitlock\'s playmaking. But no path against Florida.' },
    'Clemson': { record: '—', kenpom: null, keyPlayers: [], note: 'Wants to slow game down. Missing Carter Welling (torn ACL) — was their best per-minute rebounder. Guards don\'t have enough juice.', injury: 'Carter Welling — torn ACL, out' },
    'Iowa': { record: '—', kenpom: null, keyPlayers: ['Bennett Stirtz'], note: 'McCollum-Stirtz braintrust is 14-4 in win-or-go-home games. Moves without ball exceptionally. Perfect style to beat Clemson.' },
    'Vanderbilt': { record: '—', kenpom: null, keyPlayers: ['Tyler Tanner', 'Duke Miles'], note: 'Exceptional at handling the ball — pressing Tanner is inviting danger. Mark Byington always has 3-4 reliable decision-makers on floor.' },
    'McNeese': { record: '28-5', kenpom: null, keyPlayers: ['Larry Johnson (52 dunks)', 'Tyshawn Archie', 'Garwey Dual'], note: 'Back after first-round win last year. Scores 21.3 PPG off turnovers (100th percentile). But Vanderbilt won\'t cough it up.' },
    'Nebraska': { record: '—', kenpom: null, keyPlayers: ['Pryce Sandfort', 'Braden Frager', 'Flory Bidunga'], note: 'Best no-middle defense in college basketball. Troy shoots 28% on guarded catch-and-shoot 3s — exactly what Nebraska forces.' },
    'Troy': { record: '—', kenpom: null, keyPlayers: ['Thomas Dowd', 'Victor Valdes'], note: 'Good offensive rebounder. Valdes is a jumbo playmaker. But needs double-digit 3s to win — only done 3x in last 14 games.' },
    'North Carolina': { record: '—', kenpom: null, keyPlayers: ['Seth Trimble', 'Henri Veesaar'], note: 'Trimble one of college basketball\'s best transition scorers. Veesaar is quality. But Caleb Wilson (star freshman) OUT.', injury: 'Caleb Wilson — broken thumb, out for season' },
    'VCU': { record: '—', kenpom: null, keyPlayers: ['Phil Martelli Jr. (coach)'], note: '16 of last 17 wins. All 8 rotation players hitting 18+ threes. 39% ESPN upset probability vs UNC (highest in field). Versatile, balanced attack.' },
    'Illinois': { record: '—', kenpom: null, kenpomOff: 2, keyPlayers: ['Kylan Boswell', 'Ben Humrichous', 'Andrej Stojakovic'], note: 'No. 2 offense in the nation. Penn allows 1.2 PPP vs top-100 teams (356th nationally). Illini will score at will.' },
    'Penn': { record: '—', kenpom: null, keyPlayers: ['TJ Power (44% 3P on 173 att)'], note: 'Power is a former 5-star who\'s found himself. But minimal rim protection — fatal vs Illinois\'s massive frontline.' },
    "Saint Mary's": { record: '—', kenpom: null, keyPlayers: ['Andrew McKeever (7\'3")', 'Harry Wessels (7\'1")', 'Joshua Dent'], note: 'Giant frontcourt. But Dent has 19.9% turnover rate — Texas A&M will feast on that with their pressing style.' },
    'Texas A&M': { record: '—', kenpom: null, keyPlayers: ['Bucky McMillan (coach)', 'Rashaun Agee'], note: 'Buckyball philosophy — no fluke. Will harass Saint Mary\'s guards for 40 minutes. Agee can force bigs to guard in space.' },
    'Houston': { record: '—', kenpom: 5, kenpomOff: 14, kenpomDef: 5, keyPlayers: ['Kelvin Sampson (coach)'], note: 'Hall of Fame coach. Roster continuity from last year\'s title game. 12-1 championship odds. Gary Parrish\'s pick to WIN IT ALL.', odds: '12-1' },
    'Idaho': { record: '—', kenpom: null, keyPlayers: [], note: 'No Big Sky team has won an NCAA Tournament game since 2006. Houston\'s trapping defense smothers Idaho\'s post-up approach.' },

    'Arizona': { record: '32-2', kenpom: 2, kenpomOff: 5, kenpomDef: 3, keyPlayers: ['Jaden Bradley (13.4 PPG, 4.6 APG, Big 12 POY)', 'Brayden Burries (16.0 PPG, 37% 3P, lottery pick)', 'Koa Peat (13.8 PPG, 5.3 RPG)'], note: 'Six projected NBA players. Top-5 offense, top-3 defense. "Best roster in the country." CBS: pound-for-pound best team.', odds: '+380' },
    'Long Island': { record: '—', kenpom: null, keyPlayers: ['Shadrak Lasu (6\'8" C)'], note: 'Lasu at 6-8 is a problem vs Arizona\'s enormous frontline. LIU also likes to play fast — more possessions = more Arizona paint dominance.' },
    'Villanova': { record: '—', kenpom: null, keyPlayers: ['Acaden Lewis', 'Tyler Perkins', 'Devin Askew', 'Bryce Lindsay'], note: 'Offense nearly 10 pts/100 possessions worse without Matt Hodge (season-ending knee). Guards have carried team but Utah State is healthier/deeper.', injury: 'Matt Hodge — season-ending knee injury, out' },
    'Utah State': { record: '—', kenpom: null, keyPlayers: ['Mason Falslev (MW POY)', 'MJ Collins', 'Drake Allen'], note: 'Underseeded by committee. Healthier, deeper, better than Villanova right now. Falslev is Mountain West POY.' },
    'Wisconsin': { record: '—', kenpom: null, kenpomOff: 3, keyPlayers: ['Nick Boyd', 'John Blackwell', 'Nolan Winter'], note: 'No. 3 offense in America since New Year\'s Day. Boyd and Blackwell both impossible to keep out of the paint. Ball control will limit High Point.' },
    'High Point': { record: '—', kenpom: null, keyPlayers: ['Rob Martin', 'Scotty Washington', 'Owen Aquino', 'Terry Anderson'], note: 'Scores 19.5 PPG off turnovers. Only 12-seed with 20%+ upset probability per ESPN. Deep, balanced squad. Will be competitive.' },
    'Arkansas': { record: '26-8', kenpom: null, keyPlayers: ['Darius Acuff Jr.', 'Meleek Thomas', 'Trevon Brazile'], note: 'SEC Tournament Champions. Acuff is disgustingly good. Multiple capable scorers. Hawaii just lacks offensive juice to compete.' },
    "Hawai'i": { record: '—', kenpom: null, keyPlayers: ['Dre Bullock', 'Isaac Johnson (7\')'], note: 'Best Big West team in modern era. Excellent coach, positional size, great defense. But can\'t outscore Arkansas offensively.' },
    'BYU': { record: '—', kenpom: null, keyPlayers: ['AJ Dybantsa (freshman star)', 'Aleksej Kostic', 'Robert Wright'], note: 'Dybantsa is one of the best freshmen in the country. Texas just played 48 hrs ago in Dayton — brutal travel spot.' },
    'Texas': { record: '—', kenpom: null, keyPlayers: ['Dailyn Swain', 'Tramon Mark', 'Jordan Pope'], note: '37% upset probability per ESPN. Just beat NC State in First Four. Swain matchup with Dybantsa is intriguing. BUT: can\'t defend without fouling — epidemic.' },
    'Gonzaga': { record: '—', kenpom: null, keyPlayers: ['Graham Ike', 'Mark Few (coach)'], note: 'Ike devours mid-major frontcourts. Zags crave transition-heavy games — exactly what Kennesaw invites. Perennial contender.' },
    'Kennesaw St': { record: '—', kenpom: null, keyPlayers: ['RJ Johnson'], note: 'Star Simeon Cottle kicked off team after FBI gambling probe. Johnson has stepped up but the depth hit is significant.' },
    'Miami': { record: '—', kenpom: null, keyPlayers: ['Malik Reneau', 'Noam Dovrat', 'Dante Allen'], note: 'Poor 3-point shooting team all year. Can\'t big-boy Missouri — Mitchell is perfect matchup for Reneau.' },
    'Missouri': { record: '—', kenpom: null, keyPlayers: ['Mark Mitchell'], note: 'Swarms the paint, lives with open jumpers. Mitchell is ideal matchup vs Miami\'s Reneau. Two-way wings feel like the difference.' },
    'Purdue': { record: '—', kenpom: null, kenpomOff: 2, keyPlayers: ['Purdue bigs'], note: 'No. 2 offensive efficiency nationally. Queens has no interior answers for Purdue\'s size.', odds: null },
    'Queens': { record: '—', kenpom: null, keyPlayers: ['Chris Ashby', 'Jordan Watford (freshman)'], note: 'Ashby is a net-shredder, Watford a quality freshman. But interior defense has zero answers for Purdue.' },

    'Michigan': { record: '31-3', kenpom: 3, kenpomOff: 8, kenpomDef: 1, keyPlayers: ['Dusty May (coach)'], note: '"Best Michigan team in history" per analysts. #1 defensive efficiency nationally. 44.8% eFG allowed in 2nd half — No. 4 overall, No. 1 among high-majors.', odds: '+370' },
    'Howard': { record: '—', kenpom: null, keyPlayers: [], note: 'UMBC beat Howard in the First Four. Michigan\'s defense will be dominant from the opening tip.' },
    'Georgia': { record: '—', kenpom: null, keyPlayers: ['Somto Cyril (79 dunks)', 'Blue Cain', 'Jeremiah Wilkinson'], note: 'Top-8 transition offense. Cyril is a man amongst boys in the paint. But SLU\'s two-way wings are the difference.' },
    'Saint Louis': { record: '—', kenpom: null, keyPlayers: ['Robbie Avila', 'two-way wings'], note: 'Also top-8 in transition offense. Avila can pass/dribble/shoot. SLU\'s wings defend and create. A genuinely fun upset pick.' },
    'Texas Tech': { record: '—', kenpom: null, keyPlayers: ['Christian Anderson', 'Grant McCasland (coach)'], note: 'Anderson is best player on the floor. McCasland is a shrewd in-game mastermind. BUT without Toppin, become a jump-shooting team vs a tough Akron defense.' },
    'Akron': { record: '29-5', kenpom: null, keyPlayers: ['Tavari Johnson (37%+ 3P)', 'Shammah Scott (37%+ 3P)', 'Bowen Hardman (37%+ 3P)', 'Evan Mahaffey'], note: '3rd straight tournament. Three senior guards ALL shooting 37%+ from three with 70+ makes each. Mahaffey started at Ohio State. Could hang around in this one.' },
    'Alabama': { record: '23-9', kenpom: null, keyPlayers: ['Labaron Philon Jr. (21.7 PPG)', 'Latrell Wrightsell Jr.', 'Houston Mallette'], note: '91.7 PPG — best scoring in country. BUT Aden Holloway (2nd leading scorer) arrested on felony drug charge, out for tournament. Offense is 10 pts/100 possessions worse without him.', injury: 'Aden Holloway — arrested, out for tournament' },
    'Hofstra': { record: '—', kenpom: null, keyPlayers: ['Cruz Davis', 'Preston Edmead (freshman)'], note: 'Two excellent vroom-vroom guards. But relies on perimeter creation — no interior threats vs. Alabama\'s bigs. Philon is the best player on the floor.' },
    'Tennessee': { record: '—', kenpom: null, keyPlayers: ["Ja'Kobi Gillespie", 'Nate Ament'], note: 'Gillespie would be the best player on the floor. Ament isn\'t far behind. More pathways to advantages than SMU.' },
    'M-OH/SMU': { record: '—', kenpom: null, keyPlayers: ['Jaron Pierre (SMU)', 'BJ Edwards (SMU, questionable)'], note: 'SMU beats Miami OH in First Four. But Mustangs haven\'t been up to snuff vs elite competition. Forced into contested shots.', injury: 'BJ Edwards (SMU) — questionable' },
    'Virginia': { record: '—', kenpom: null, keyPlayers: ['Tony Bennett system'], note: 'Size, skill, shooting too overwhelming for Wright State. Pack-Line defense will smother Wright State\'s freshmen.' },
    'Wright St': { record: '—', kenpom: null, keyPlayers: ['Michael Cooper (freshman)', 'Kellen Pickett (freshman)'], note: 'Six of top-8 players are freshmen or sophomores. A year away from being truly dangerous. Cooper is a quality guard.' },
    'Kentucky': { record: '—', kenpom: null, keyPlayers: ['Denzel Aberdeen', 'Otega Oweh', 'Collin Chandler', 'Malachi Moreno'], note: 'Strong matchup advantages across the board vs Santa Clara. Best at transition — Santa Clara\'s biggest weakness. Moreno more physical than Oboye.' },
    'Santa Clara': { record: '—', kenpom: null, keyPlayers: ['Allen Graves (freshman)', 'Christian Hammond', 'Elijah Mahi'], note: 'Nine-man rotation of real talent. Graves, Hammond, Mahi all quality players. But transition defense is a hot spot against Kentucky\'s best strength.' },
    'Iowa State': { record: '—', kenpom: null, keyPlayers: ['Joshua Jefferson', 'T.J. Otzelberger (coach)'], note: 'Jefferson is dominant as both passer and scorer. Trapping defense gives teams fits. Jumped to #2 seed — expert consensus Final Four pick.', odds: null },
    'Tennessee St': { record: '—', kenpom: null, keyPlayers: ['Travis Harper', 'Aaron Nkrumah'], note: 'No interior oomph to handle Jefferson. Only two shooters that defenses respect — Iowa State\'s traps will exploit the rest.' },
};

// ─────────────────────────────────────────────────
// BRACKET STRUCTURE
// r64[i] = { top, bottom, time, cbsPick, bilasPick, winProb, upsetChance, analysis }
// ─────────────────────────────────────────────────
export const REGIONS = {
    east: {
        name: 'EAST',
        r64: [
            { top: 'Duke', bottom: 'Siena', time: '3/19, 1:50 PM', cbsPick: 'Duke', bilasPick: 'Duke', winProb: 99, analysis: 'Duke is the second-biggest team in the sport. Size overwhelms mid-major foes. Cameron Boozer\'s combo of scoring, rebounding and playmaking is elite. Even missing Foster/Ngongba, the "smallest" rotation player is Cayden Boozer at 6\'4". Siena\'s Doty and Shoats are talented but this is all Duke.' },
            { top: 'Ohio State', bottom: 'TCU', time: '3/19, 11:15 AM', cbsPick: 'TCU', bilasPick: 'TCU', winProb: 45, upsetAlert: true, analysis: 'Ohio State has a far better backcourt in Thornton and Mobley. They\'ve been 19th nationally since Jan 1 vs TCU\'s 49th. BUT TCU\'s defense is absolutely legit, forcing a boatload of tough shots. David Punch and Xavier Edmonds form a terrific frontcourt. Both CBS and Jay Bilas pick TCU — the defense makes it real.' },
            { top: "St John's", bottom: 'Northern Iowa', time: '3/20, 6:10 PM', cbsPick: "St John's", bilasPick: "St John's", winProb: 72, analysis: "St John's won both the Big East regular season and tournament. Rick Pitino's pressure defense will force turnovers. UNI leads the nation in scoring defense (61.3 PPG) and won't cough it up, but St John's has too much athleticism. Trey Campbell must be exceptional for UNI to survive — very risky." },
            { top: 'Kansas', bottom: 'CA Baptist', time: '3/20, 8:45 PM', cbsPick: 'Kansas', bilasPick: 'Kansas', winProb: 88, analysis: 'Cal Baptist relies on Dom Daniels\' isolation brilliance. It\'s made 10+ threes just twice all season — a fatal flaw against KU. Flory Bidunga is a menace at the rim (exactly where CBU likes to score), and Melvin Council will make Daniels\' life miserable. When Darryn Peterson goes off, this is over early.' },
            { top: 'Louisville', bottom: 'South Florida', time: '3/19, 12:30 PM', cbsPick: 'South Florida', bilasPick: 'South Florida', winProb: 39, upsetAlert: true, analysis: 'South Florida won 19 of last 22 (two OT losses, one by 1 pt). More athletic than Louisville across the board. Joseph Pinion and Wes Enis are elite snipers. Izaiyah Nelson is a two-way menace. Louisville\'s offense is predictable — 16-2 when shooting 35%+ from three, but 7-8 when it doesn\'t. Both CBS and Bilas back South Florida.' },
            { top: 'Michigan St', bottom: 'N Dakota St', time: '3/19, 3:05 PM', cbsPick: 'Michigan St', bilasPick: 'Michigan St', winProb: 93, analysis: 'Michigan State just does not lose to these types of teams — too big, too strong, too physical. NDSU\'s Trevian Carson is a stud big guard, and their inverted floor sets are clever, but MSU can simply leave Coen Carr on an island in that matchup and stay out of rotation. Note: Jay Bilas has Michigan State going all the way to the title game.' },
            { top: 'UCLA', bottom: 'UCF', time: '3/20, 6:25 PM', cbsPick: 'UCLA', bilasPick: 'UCLA', winProb: 64, analysis: 'UCLA was the No. 3 offense in the country during a 20-game stretch — before Bilodeau\'s knee injury. If he plays, UCLA should win comfortably. If not, UCF\'s Jamichael Stillwell (impossible to keep off the boards) makes this a dogfight. Dent, Clark, and Perry can still create against this UCF defense regardless.' },
            { top: 'UConn', bottom: 'Furman', time: '3/20, 9:00 PM', cbsPick: 'UConn', bilasPick: 'UConn', winProb: 97, analysis: 'Furman\'s Alex Wilkins is a star freshman, and the Paladins have tall shooters and Cooper Bowser as a legit big. But UConn\'s offense is far too layered, and this is the first time Furman has played a high-major team all year. The Huskies\' experience in big games is unmatched.' },
        ],
    },
    south: {
        name: 'SOUTH',
        r64: [
            { top: 'Florida', bottom: 'PV/LEH', time: '3/20, 8:25 PM', cbsPick: 'Florida', bilasPick: 'Florida', winProb: 99, analysis: 'No team wins the possession battle like Florida. +454 combined rebound/turnover margin — No. 1 in the nation. Behemoth frontline of Chinyelu, Condon, and Haugh makes them virtually upset-proof. Lehigh wins the First Four behind Nasir Whitlock\'s brilliance but has no path here.' },
            { top: 'Clemson', bottom: 'Iowa', time: '3/20, 5:50 PM', cbsPick: 'Iowa', bilasPick: 'Iowa', winProb: 40, upsetAlert: true, analysis: 'Clemson wants to drag this into the mud — but Iowa is fine with that. Bennett Stirtz will be the best player on the floor. McCollum and Stirtz are 14-4 in win-or-go-home games. McCollum-coached teams move without the ball exceptionally — exactly what you must do to beat Clemson. Plus Clemson is missing Carter Welling (torn ACL). Both CBS and Bilas take Iowa.' },
            { top: 'Vanderbilt', bottom: 'McNeese', time: '3/19, 2:15 PM', cbsPick: 'Vanderbilt', bilasPick: 'Vanderbilt', winProb: 65, analysis: 'McNeese scores 21.3 PPG off turnovers (100th percentile) and wants to press. But Vanderbilt is exceptional at protecting the ball — Tanner and Miles are sure-handed, and pressing Tanner invites transition danger the other way. McNeese is back after last year\'s first-round win but Vanderbilt\'s ball security neutralizes their biggest weapon.' },
            { top: 'Nebraska', bottom: 'Troy', time: '3/19, 11:40 AM', cbsPick: 'Nebraska', bilasPick: 'Nebraska', winProb: 78, analysis: 'Nebraska runs the best no-middle defense in college basketball. Troy shoots just 28% on guarded catch-and-shoot 3s — exactly the type of shot Nebraska forces. Troy needs 10+ threes to win, a feat it\'s accomplished just 3x in the last 14 games. Victor Valdes and Thomas Dowd are quality, but the 3-point reliance is a fatal weakness here.' },
            { top: 'North Carolina', bottom: 'VCU', time: '3/19, 5:50 PM', cbsPick: 'UNC', bilasPick: 'VCU', winProb: 39, upsetAlert: true, analysis: 'BIGGEST UPSET ALERT: ESPN\'s Giant Killers model gives VCU a 39% chance — highest in the field. UNC lost star freshman Caleb Wilson to a broken thumb for the season. VCU has won 16 of its last 17 games with all 8 rotation players hitting 18+ threes. CBS gives UNC the slight edge (Trimble + Veesaar are best players on floor), but Bilas goes VCU. This is the most dangerous upset in the bracket.' },
            { top: 'Illinois', bottom: 'Penn', time: '3/19, 8:25 PM', cbsPick: 'Illinois', bilasPick: 'Illinois', winProb: 91, analysis: 'Illinois has the No. 2 offense in the nation and Penn allows 1.2 PPP vs top-100 teams (356th nationally). Penn\'s TJ Power is dangerous (44% from 3 on 173 attempts) but Penn has minimal rim protection — a fatal matchup against Illinois\'s gargantuan frontline. Illinois will name its score in this one.' },
            { top: "Saint Mary's", bottom: 'Texas A&M', time: '3/19, 6:35 PM', cbsPick: 'Texas A&M', bilasPick: 'Texas A&M', winProb: 42, upsetAlert: true, analysis: 'CBS is fully converted to "Buckyball Believer." Texas A&M will harass Saint Mary\'s guards for 40 minutes — especially Dent (19.9% turnover rate). The Aggies\' pressing style is perfect vs. this lineup. Saint Mary\'s giant frontcourt (McKeever at 7\'3", Wessels at 7\'1") can fight on glass, but it won\'t be enough against Agee\'s aggressive play.' },
            { top: 'Houston', bottom: 'Idaho', time: '3/19, 9:10 PM', cbsPick: 'Houston', bilasPick: 'Houston', winProb: 97, analysis: 'No Big Sky team has won an NCAA Tournament game since 2006. Houston\'s trapping defense is built to smother teams that rely on post-up play — exactly Idaho\'s style. Just 28.4% of Houston\'s shots come at the rim (last in country) but it doesn\'t matter here. Hall of Fame coach Kelvin Sampson has this team ready.' },
        ],
    },
    west: {
        name: 'WEST',
        r64: [
            { top: 'Arizona', bottom: 'Long Island', time: '3/20, 12:35 PM', cbsPick: 'Arizona', bilasPick: 'Arizona', winProb: 99, analysis: 'LIU\'s starting center is 6\'8" — a massive problem against Arizona\'s enormous frontline. LIU also likes to play fast, which means more possessions for Arizona to rack up paint points. Jaden Bradley (Big 12 POY), Brayden Burries (lottery pick), Koa Peat — Arizona has 6 projected NBA players. This won\'t be close.' },
            { top: 'Villanova', bottom: 'Utah State', time: '3/20, 3:10 PM', cbsPick: 'Utah State', bilasPick: 'Utah State', winProb: 42, upsetAlert: true, analysis: 'CBS calls Utah State "underseeded by the committee." Villanova is nearly 10 PPP worse without Matt Hodge (season-ending knee). Mason Falslev is Mountain West POY and Utah State is healthier, deeper, and better right now. Both CBS and Bilas take Utah State. Villanova guards have carried the team but can\'t overcome the roster deficit.' },
            { top: 'Wisconsin', bottom: 'High Point', time: '3/19, 12:50 PM', cbsPick: 'Wisconsin', bilasPick: 'Wisconsin', winProb: 80, analysis: 'High Point scores 19.5 PPG off turnovers but Wisconsin\'s Boyd/Blackwell backcourt almost never coughs it up (over-20% TO rate just twice all year). Since New Year\'s, Wisconsin is the No. 3 offense nationally. Nolan Winter expected to play. High Point is genuinely good (only 12-seed with 20%+ upset chance per ESPN), but Wisconsin\'s mental toughness from Boyd is the difference.' },
            { top: 'Arkansas', bottom: "Hawai'i", time: '3/19, 3:25 PM', cbsPick: 'Arkansas', bilasPick: 'Arkansas', winProb: 82, analysis: 'Darius Acuff Jr. has been disgustingly good. Hawaii has real qualities — best Big West team in modern era, positional size, excellent coaching, great point-of-attack defense with Dre Bullock. But Hawaii just lacks the offensive firepower. Hunter Erickson needs a massive day and it still likely won\'t be enough. Arkansas in a competitive game.' },
            { top: 'BYU', bottom: 'Texas', time: '3/19, 6:25 PM', cbsPick: 'BYU', bilasPick: 'Texas', winProb: 63, upsetAlert: true, analysis: '37% ESPN upset probability for Texas. Bilas goes with Texas (Swain vs Dybantsa is intriguing; Pope/Mark are veterans). CBS goes BYU — AJ Dybantsa is one of the best freshmen in the country, and Texas just played 48 hours ago after winning in Dayton. The travel burden for Texas is brutal. BYU at home-ish venue with Dybantsa at the peak is dangerous.' },
            { top: 'Gonzaga', bottom: 'Kennesaw St', time: '3/19, 9:00 PM', cbsPick: 'Gonzaga', bilasPick: 'Gonzaga', winProb: 94, analysis: 'Kennesaw State lost star Simeon Cottle after the FBI\'s gambling investigation. RJ Johnson has stepped up but the talent deficit is massive. Graham Ike devours mid-major frontcourts and the Zags crave transition-heavy games — exactly what Kennesaw State\'s style invites. Gonzaga rolls here.' },
            { top: 'Miami', bottom: 'Missouri', time: '3/20, 9:10 PM', cbsPick: 'Missouri', bilasPick: 'Missouri', winProb: 41, upsetAlert: true, analysis: 'Missouri\'s Mark Mitchell is the ideal matchup for Miami\'s Malik Reneau. Mizzou swarms the paint and lives with open jumpers — and Miami has been a poor 3-point shooting team all year. Phillips and Udeh feel like a wash in the paint. SLU\'s two-way wings feel like the difference. Both CBS and Bilas pick Missouri.' },
            { top: 'Purdue', bottom: 'Queens', time: '3/20, 6:35 PM', cbsPick: 'Purdue', bilasPick: 'Purdue', winProb: 96, analysis: 'Queens has real guard play in Chris Ashby and freshman Jordan Watford, but their interior defense has zero answers for Purdue\'s size. Purdue has the No. 2 offensive efficiency in the nation. The inside game ends this one early.' },
        ],
    },
    midwest: {
        name: 'MIDWEST',
        r64: [
            { top: 'Michigan', bottom: 'Howard', time: '3/19, 6:10 PM', cbsPick: 'Michigan', bilasPick: 'Michigan', winProb: 98, analysis: 'Opponents shoot just 44.8% eFG against Michigan in the second half — No. 4 nationally, No. 1 among high-majors. "Best Michigan team in history" per multiple analysts. Howard won the First Four but has no path here. Dusty May has this group locked in defensively in a way few teams in the country match.' },
            { top: 'Georgia', bottom: 'Saint Louis', time: '3/19, 8:45 PM', cbsPick: 'Saint Louis', bilasPick: 'Saint Louis', winProb: 42, upsetAlert: true, analysis: 'Both teams are top-8 in transition offense — this will be a wild game of runs. Georgia\'s Somto Cyril (79 dunks!) is a man amongst boys. Saint Louis counters with Robbie Avila (can pass/dribble/shoot but zero dunks). SLU\'s collection of two-way wings defending Blue Cain and Wilkinson feels like the difference. Both CBS and Bilas back SLU.' },
            { top: 'Texas Tech', bottom: 'Akron', time: '3/20, 11:40 AM', cbsPick: 'Texas Tech', bilasPick: 'Texas Tech', winProb: 62, analysis: 'Akron is legitimately dangerous — 29-5, three senior guards ALL hitting 37%+ from three with 70+ makes. Evan Mahaffey started at Ohio State. CBS acknowledges this could be a shooting contest, which favors Akron. But Christian Anderson is the best player on the floor and Grant McCasland is one of the sharpest in-game coaches in the country. Tech\'s experience carries it.' },
            { top: 'Alabama', bottom: 'Hofstra', time: '3/20, 2:15 PM', cbsPick: 'Alabama', bilasPick: 'Alabama', winProb: 74, analysis: 'Alabama\'s Aden Holloway was ARRESTED on a felony drug charge and is OUT — massive blow. Offense is 10 PPP worse without him. But Labaron Philon (21.7 PPG) is still the best player on the floor. Oats has depth — Allen, Bol Bowen, Jemison can cover. Hofstra relies on perimeter creation and has no interior threats for Alabama\'s bigs. Philon, Wrightsell Jr., and Mallette carry it.' },
            { top: 'Tennessee', bottom: 'M-OH/SMU', time: '3/20, 3:25 PM', cbsPick: 'Tennessee', bilasPick: 'Tennessee', winProb: 72, analysis: 'SMU beats Miami (Ohio) in the First Four but enters tired and thin. Tennessee has more pathways to create advantages. Ja\'Kobi Gillespie is the best player on the floor, Nate Ament isn\'t far behind. Tennessee\'s bigs are more reliable at this stage. SMU\'s guards will be forced into contested shots all game.' },
            { top: 'Virginia', bottom: 'Wright St', time: '3/20, 12:50 PM', cbsPick: 'Virginia', bilasPick: 'Virginia', winProb: 90, analysis: 'Virginia\'s size, skill, and shooting are too overwhelming. Wright State has quality in freshman Cooper and Pickett, but six of their top-8 players are freshmen or sophomores — a year away from being truly dangerous. The Pack-Line defense and Virginia\'s layered offense is too much for this Wright State group right now.' },
            { top: 'Kentucky', bottom: 'Santa Clara', time: '3/20, 11:15 AM', cbsPick: 'Kentucky', bilasPick: 'Kentucky', winProb: 75, analysis: 'Kentucky has strong matchup advantages across the board. Aberdeen handles Santa Clara\'s guards. Oweh/Williams cover Mahi. Chandler matches Hammond. Moreno is far more physical than Oboye. Santa Clara\'s nine-man rotation with Graves, Hammond, and Mahi is quality, but their transition defense is a major hot spot — and Kentucky is at its absolute best in transition. Cats win by four.' },
            { top: 'Iowa State', bottom: 'Tennessee St', time: '3/20, 1:50 PM', cbsPick: 'Iowa State', bilasPick: 'Iowa State', winProb: 96, analysis: 'Tennessee State has no interior oomph to handle Joshua Jefferson as a passer or scorer. They only have two shooters (Harper and Nkrumah) that defenses respect — Iowa State\'s trapping defense will abuse the rest of the lineup. Iowa State jumped to a #2 seed for a reason and should advance comfortably here.' },
        ],
    },
};

// AI-recommended picks for every round
// Based on blending: KenPom power ratings, CBS scouting (Trotter), Jay Bilas,
// ESPN BPI win probabilities, Vegas odds, and injury reports
export const AI_PICKS = {
    east: {
        r64: ['Duke', 'TCU', "St John's", 'Kansas', 'South Florida', 'Michigan St', 'UCLA', 'UConn'],
        r32: ['Duke', "St John's", 'Michigan St', 'UConn'],
        s16: ['Duke', 'UConn'],
        e8: 'Duke',
    },
    south: {
        r64: ['Florida', 'Iowa', 'Vanderbilt', 'Nebraska', 'VCU', 'Illinois', 'Texas A&M', 'Houston'],
        r32: ['Florida', 'Nebraska', 'Illinois', 'Houston'],
        s16: ['Florida', 'Houston'],
        e8: 'Florida',
    },
    west: {
        r64: ['Arizona', 'Utah State', 'Wisconsin', 'Arkansas', 'BYU', 'Gonzaga', 'Missouri', 'Purdue'],
        r32: ['Arizona', 'Arkansas', 'Gonzaga', 'Purdue'],
        s16: ['Arizona', 'Purdue'],
        e8: 'Arizona',
    },
    midwest: {
        r64: ['Michigan', 'Saint Louis', 'Texas Tech', 'Alabama', 'Tennessee', 'Virginia', 'Kentucky', 'Iowa State'],
        r32: ['Michigan', 'Alabama', 'Virginia', 'Iowa State'],
        s16: ['Michigan', 'Iowa State'],
        e8: 'Michigan',
    },
    ff: ['Duke', 'Florida', 'Arizona', 'Michigan'],
    champ: 'Duke',
};

export const REGION_ORDER = ['east', 'south', 'west', 'midwest'];

// Which region winners meet in each FF game: [regionA, regionB]
export const FF_MATCHUPS = [
    ['east', 'south'],
    ['west', 'midwest'],
];

// Separate bracket that starts at the Sweet 16 using results so far.
export const SWEET16_ONWARD_BRACKET = {
    s16: [
        { top: 'Duke', bottom: "St John's", winner: 'Duke' },
        { top: 'Michigan St', bottom: 'UConn', winner: 'UConn' },
        { top: 'Iowa', bottom: 'Nebraska', winner: 'Iowa' },
        { top: 'Illinois', bottom: 'Houston', winner: 'Houston' },
        { top: 'Arizona', bottom: 'Arkansas', winner: 'Arizona' },
        { top: 'Texas', bottom: 'Purdue', winner: 'Purdue' },
        { top: 'Michigan', bottom: 'Alabama', winner: 'Michigan' },
        { top: 'Tennessee', bottom: 'Iowa State', winner: 'Iowa State' },
    ],
    e8: [
        { top: 'Duke', bottom: 'UConn', winner: 'Duke' },
        { top: 'Iowa', bottom: 'Houston', winner: 'Houston' },
        { top: 'Arizona', bottom: 'Purdue', winner: 'Arizona' },
        { top: 'Michigan', bottom: 'Iowa State', winner: 'Michigan' },
    ],
    ff: [
        { top: 'Duke', bottom: 'Houston', winner: 'Duke' },
        { top: 'Arizona', bottom: 'Michigan', winner: 'Michigan' },
    ],
    champ: { top: 'Duke', bottom: 'Michigan', winner: 'Duke' },
};