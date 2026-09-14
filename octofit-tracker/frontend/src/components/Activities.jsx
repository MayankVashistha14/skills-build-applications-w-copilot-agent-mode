import CollectionView from './CollectionView.jsx'

export default function Activities() {
  return <CollectionView resource="activities" title="Activity feed" description="Recent movement across your OctoFit community." columns={[{ key: 'type', label: 'Activity' }, { key: 'duration', label: 'Minutes' }, { key: 'calories', label: 'Calories' }, { key: 'recordedAt', label: 'Recorded' }]} />
}