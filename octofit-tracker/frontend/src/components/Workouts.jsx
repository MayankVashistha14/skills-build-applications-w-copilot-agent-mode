import CollectionView from './CollectionView.jsx'

export default function Workouts() {
  return <CollectionView resource="workouts" title="Workout library" description="A growing set of sessions for every kind of day." columns={[{ key: 'name', label: 'Workout' }, { key: 'difficulty', label: 'Difficulty' }, { key: 'duration', label: 'Minutes' }, { key: 'category', label: 'Category' }]} />
}