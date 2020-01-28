import React from 'react'
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
  Area
} from 'recharts'
import { formatMillions, formatDate, formatNumber, generateGraphPoints } from '../utils'

const color1 = '#00ff00'
const color2 = '#ff0000'
const color3 = '#0000ff'
const height = 350

const data = generateGraphPoints()
const theTime = new Date().getTime()
const { date: now } = data.find(d => d.date > theTime)

const MyTooltip = ({ active, payload }) => {
  if (!active) { return null }
  const { block, date, emission } = payload[0].payload
  const era = Math.floor(block / 5e6) + 1
  return (
    <div className="custom-tooltip">
      <b>{formatDate(date, true)}</b>
      <br />
      Era {era}, Block {formatMillions(block)}
      <br />
      Est. ETC: {formatNumber(emission)}
    </div>
  )
}

const chart = () => {
  return (
    <div className="chart-container">
      <div>
        <div style={{ width: '100%', height: `${height}px` }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              id="chart"
              width={500}
              height={300}
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorEmission" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={color1} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={color1} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                minTickGap="150"
                tickFormatter={t => `　${formatDate(t)}　`}
              />
              <YAxis tickFormatter={formatMillions} />
              <Tooltip content={MyTooltip} />
              <Area
                type="monotone"
                stroke={color1}
                dataKey="emission"
                fill="url(#colorEmission)"
              />
              <ReferenceLine x={now} label="Now" stroke={color2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default chart
