import React from 'react'
import { rows, columns, data } from '../data'

const Table = () => (
  <div className="table">
    <p>While you're here, let's compare and contrast the properties of some other chains in a maximally unbiased way:</p>
    <table>
      <thead>
        <tr>
          <td></td>
          {columns.map(({ key, name }) => (
            <td className={key} key={key}>{name}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(r => (
          <tr key={r.key}>
            <td>{r.name}</td>
            {columns.map(c => {
              const { value = 0 } = data[c.key][r.key] || {}
              let icon = '❌'
              if (value === 1) {
                icon = '✅'
              }
              if (value === 2) {
                icon = '✴️'
              }
              return <td className={c.key} key={c.key}>{icon}</td>
            })}
            <td>{r.text}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default Table
