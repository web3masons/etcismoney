import React, { useEffect, useState } from 'react'

import { startDate, formatNumber, calculateBlockEmission } from '../utils'

import Chart from './Chart'

const apiUrl = 'https://etc.blockscout.com/api/v2/stats'

const estimagedTotal = 200e6

function useCountdown (url) {
  const [data, setData] = useState([])
  let currentBlock, currentEmission, currentMined
  function tick () {
    const thisEra = Math.floor(currentBlock / 5e6)
    const nextEra = thisEra + 1
    const targetBlock = nextEra * 5e6
    const difference = (targetBlock - currentBlock) * 15 * 1000
    setData({
      currentBlock,
      thisEra,
      currentEmission,
      currentMined,
      nextEra,
      targetBlock,
      ready: true,
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    })
    setTimeout(tick, 1000)
  }
  async function fetchUrl () {
    try {
      const response = await fetch(url)
      const json = await response.json()
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
        <Chart />
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
      </div>
    </>
  )
}

export default CountdownTimer
