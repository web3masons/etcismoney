import React, { useEffect, useState } from 'react'

import { startDate, formatNumber, calculateBlockEmission, defaultAverageBlockTime } from '../utils'

import Chart from './Chart'

const apiUrl = 'https://etc.blockscout.com/api/v2/stats'

const estimagedTotal = 200e6

function useCountdown (url) {
  const [data, setData] = useState([])
  let currentBlock, currentEmission, currentMined, start
  function tick () {
    const thisEra = Math.floor(currentBlock / 5e6)
    const nextEra = thisEra + 1
    const targetBlock = nextEra * 5e6
    const elapsed = new Date() - start
    const blockTime = (new Date() - startDate) / currentBlock
    const difference = (targetBlock - currentBlock) * blockTime
    const timeDiff = difference - elapsed
    setData({
      currentBlock,
      thisEra,
      currentEmission,
      currentMined,
      nextEra,
      blockTime,
      targetBlock,
      ready: true,
      days: Math.floor(timeDiff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeDiff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((timeDiff / 1000 / 60) % 60),
      seconds: Math.floor((timeDiff / 1000) % 60)
    })
    setTimeout(tick, 1000)
  }
  async function fetchUrl () {
    try {
      const response = await fetch(url)
      const json = await response.json()
      start = new Date().getTime()
      currentBlock = parseInt(json.total_blocks)
      currentEmission = calculateBlockEmission(currentBlock)
      currentMined = Math.floor((currentEmission / estimagedTotal) * 100)
      tick()
    } catch {}
  }
  useEffect(() => { fetchUrl() }, [])
  return data
}

function CountdownTimer () {
  const countdown = useCountdown(apiUrl)

  return (
    <>
      <div className="chart-grid">
        <Chart currentBlock={countdown.currentBlock} />
        <div className="description">
          <p>
            Every Era of <b>5,000,000</b> blocks, mining rewards are reduced by{' '}
            <b>20%</b>.
          </p>
          <p>
            About <b>{countdown.currentMined}%</b> of the ETC that will ever
            exist has already been mined. Over 99% will be mined by around{' '}
            <b>2065</b>.
          </p>
          <p>
            <a
              href="https://ecips.ethereumclassic.org/ECIPs/ecip-1017"
              target="_blank"
            >
              ➡ Learn More about ECIP-1017
            </a>
          </p>
        </div>
      </div>
      <div className="countdown">
        <p>
          The latest block is <b>{formatNumber(countdown.currentBlock)}</b>. The
          next Era will arrive at block{' '}
          <b>{formatNumber(countdown.targetBlock)}</b> in about:
        </p>
        <div className="grid">
          <div>
            <div>{countdown.days || 0}</div>
            days
          </div>
          <div>
            <div>{countdown.hours || 0}</div>
            hours
          </div>
          <div>
            <div>{countdown.minutes || 0}</div>
            minutes
          </div>
          <div>
            <div>{countdown.seconds || 0}</div>
            seconds
          </div>
        </div>
        <p>
          (based on average block time of <b>{Math.round(countdown.blockTime / 1000, 2)}</b> seconds)
        </p>
      </div>
    </>
  )
}

export default CountdownTimer
