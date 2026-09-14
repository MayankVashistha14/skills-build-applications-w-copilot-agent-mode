import CollectionView from './CollectionView.jsx'

export default function Users() {
  return <CollectionView resource="users" title="Athletes" description="Everyone showing up, one session at a time." columns={[{ key: 'name', label: 'Name' }, { key: 'username', label: 'Username' }, { key: 'email', label: 'Email' }, { key: 'createdAt', label: 'Joined' }]} />
}