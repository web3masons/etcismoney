import React from 'react'
import { rows, columns, data } from '../data'

const Table = () => (
  <div className="table">
    <p>
      Let's compare and contrast the properties of some other chains in a{' '}
      <b>maximally biased</b> way:
    </p>
    <div>
      <table>
        <thead>
          <tr>
            <td></td>
            {columns.map(({ key, name }) => (
              <td className={key} key={key}>
                {name}
              </td>
            ))}
            <td></td>
          </tr>
        </thead>
        <tbody>
          {rows.map(r => (
            <tr key={r.key}>
              <td>{r.name}</td>
              {columns.map(c => {
                const { value = 0 } = data[c.key][r.key] || {}
                let icon = ''
                if (value === 1) {
                  icon = '🥳'
                }
                if (value === 2) {
                  icon = '🤷🏻‍♀️'
                }
                const className = `${c.key} ${!value ? 'off' : ''}`
                return (
                  <td className={className} key={c.key}>
                    {icon}
                  </td>
                )
              })}
              <td>{r.text}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)

export default Table
