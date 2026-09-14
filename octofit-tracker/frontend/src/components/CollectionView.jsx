import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

function formatValue(value) {
  if (value === null || value === undefined) return '-'
  if (typeof value === 'object') return JSON.stringify(value)
  return String(value)
}

export default function CollectionView({ resource, title, description, columns }) {
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true

    fetchCollection(resource)
      .then((data) => {
        if (active) {
          setItems(data)
          setStatus('ready')
        }
      })
      .catch((requestError) => {
        if (active) {
          setError(requestError.message)
          setStatus('error')
        }
      })

    return () => {
      active = false
    }
  }, [resource])

  return (
    <section className="collection-view">
      <div className="view-heading">
        <div>
          <span className="eyebrow">DATASET / {resource.toUpperCase()}</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <span className="item-count">{items.length} records</span>
      </div>

      {status === 'loading' && <div className="empty-state">Loading records...</div>}
      {status === 'error' && <div className="alert alert-danger">{error}</div>}
      {status === 'ready' && items.length === 0 && (
        <div className="empty-state">No records have been logged yet.</div>
      )}
      {status === 'ready' && items.length > 0 && (
        <div className="table-responsive data-table-wrap">
          <table className="table data-table align-middle mb-0">
            <thead>
              <tr>
                {columns.map((column) => <th key={column.key}>{column.label}</th>)}
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={item._id || item.id || index}>
                  {columns.map((column) => (
                    <td key={column.key}>{formatValue(item[column.key])}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}