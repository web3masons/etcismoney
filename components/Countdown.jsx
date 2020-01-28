import React, { useEffect, useState } from 'react'

import { startDate, formatNumber, calculateBlockEmission } from '../utils'

const apiUrl = 'https://blockscout.com/etc/mainnet/api?module=block&action=eth_block_number'

const estimagedTotal = 200e6

function useCountdown (url) {
  const [data, setData] = useState([])
  let currentBlock, currentEmission, currentMined
  function tick () {
    const thisEra = Math.floor(currentBlock / 5e6)
    const nextEra = thisEra + 1
    const targetBlock = nextEra * 5e6
    const targetTime = startDate + (targetBlock * 15 * 1000)
    const difference = +new Date(targetTime) - +new Date()
    setData({
      currentBlock,
      thisEra,
      currentEmission,
      currentMined,
      nextEra,
      targetBlock,
      targetTime,
      ready: true,
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    })
    setTimeout(tick, 1000)
  }
  async function fetchUrl () {
    const response = await fetch(url)
    const json = await response.json()
    currentBlock = parseInt(json.result.slice(2), 16)
    currentEmission = calculateBlockEmission(currentBlock)
    currentMined = Math.floor((currentEmission / estimagedTotal) * 100)
    tick()
  }
  useEffect(() => { fetchUrl() }, [])
  return data
}

function CountdownTimer () {
  const countdown = useCountdown(apiUrl)

  return (
    <div className="countdown">
      <p>
        Like Bitcoin, Etheruem Classic has a fixed emission schedule.
        <br />
        ETC is the only major Smart Contract platform with a known future
        supply.
      </p>
      <p>
        Every <b>5,000,000</b> blocks, mining rewards are reduced by{' '}
        <b>20%</b>.
        <br />
        About <b>{countdown.currentMined}%</b> of ETC that will ever exist has already been mined. The rest will be
        mined by around <b>2065</b>.
      </p>
      <p>
        The latest block is <b>{formatNumber(countdown.currentBlock)}</b>. The
        next Era will arrive at block{' '}
        <b>{formatNumber(countdown.targetBlock)}</b> in about:
      </p>
      <div className="grid">
        <div>
          <div>{countdown.days || '?'}</div>
          days
        </div>
        <div>
          <div>{countdown.hours || '?'}</div>
          hours
        </div>
        <div>
          <div>{countdown.minutes || '?'}</div>
          minutes
        </div>
        <div>
          <div>{countdown.seconds || '?'}</div>
          seconds
        </div>
      </div>
      <p>
        <a
          href="https://ecips.ethereumclassic.org/ECIPs/ecip-1017"
          target="_blank"
        >
          Learn More about ECIP-1017
        </a>
      </p>
    </div>
  )
}

export default CountdownTimer
