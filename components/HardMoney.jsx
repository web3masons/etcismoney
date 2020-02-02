import React from 'react'
import Chart from './Chart'

export const text = `
Money exists in many forms with varying degrees of usefulness.

This is a new paragraph and it's cool. This is not a new paragarph.
This is a line break and doens't do much.

Hello.
`

const HardMoney = () => (
  <>
    <h1 className="title">
      <a href="https://etcis.money">
        <b>etc</b>is.money
      </a>
    </h1>
    <h3 className="subtitle">
      An opinionated reminder about the quailities of "hard money" and how they
      relate to
      <br />
      <br />
      Ethereum Classic
      <br />
      <br />
      <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMzMuNyAyMjAuNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTMzLjcgMjIwLjU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMDAwMDAwO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTIuNCw5OC44bDY1LTI3LjRsNjMsMjguMUw2Ny4zLDBMMi40LDk4Ljh6IE0yLjYsMTI5LjJsNjQuOSwzNy42bDY2LjItMzcuNmwtNjUuNiw5MS4zTDIuNiwxMjkuMnoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTY3LjcsODQuOEwwLDExMy4zbDY3LjcsMzcuNmw2NS44LTM2LjhMNjcuNyw4NC44eiIvPgo8L3N2Zz4K" />
    </h3>
    <div className="hard-money big-text">
      <div>
        <p>
          There are many different types of money, each with it's own degree of
          usefulness. The usefulness of money can be measured with 7 major
          traits:
        </p>
        <ul className="grid">
          <li>
            <b>Fungible</b>
            <br />A given unit is interchangeable with any other unit
          </li>
          <li>
            <b>Durable</b>
            <br />
            Cryptocurrency does not degrade over time like physical money
          </li>
          <li>
            <b>Divisible</b>
            <br />
            One unit has 18 decimal places
          </li>
          <li>
            <b>Portable</b>
            <br />
            Frictionless transfers to anywhere in the universe
          </li>
          <li>
            <b>Acceptable</b>
            <br />
            Available on a wide variety of exchanges
          </li>
          <li>
            <b>Uncounterfitable</b>
            <br />
            Cryptographically secure ownership
          </li>
          <li className="span-columns">
            <b>Limited in Supply</b>
            <br />
            Last but not least, the supply (emission) is limited to prevent
            devaluing by inflation; certainty about future supply provides a
            stronger store of value
          </li>
        </ul>
      </div>
    </div>
    <div className="big-text alt">
      <p>
        Like Bitcoin, Ethereum Classic has a <b>fixed emission schedule</b>.
      </p>
      <p>
        ETC is the only major Smart Contract platform with a{' '}
        <b>known future supply</b>.
      </p>
      <p>Here's what that future supply looks like:</p>
    </div>
  </>
)

export default HardMoney
