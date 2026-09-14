import CollectionView from './CollectionView.jsx'

export default function Teams() {
  return <CollectionView resource="teams" title="Teams" description="Find your crew and keep each other moving." columns={[{ key: 'name', label: 'Team' }, { key: 'description', label: 'Description' }, { key: 'memberCount', label: 'Members' }, { key: 'points', label: 'Points' }]} />
}