import CollectionView from './CollectionView.jsx'

export default function Leaderboard() {
  return <CollectionView resource="leaderboard" title="Leaderboard" description="See who is setting the pace this week." columns={[{ key: 'rank', label: 'Rank' }, { key: 'username', label: 'Athlete' }, { key: 'points', label: 'Points' }, { key: 'streak', label: 'Streak' }]} />
}