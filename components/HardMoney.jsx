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
    <h1>ETC is Money</h1>
    <p>
      An opinionated reminder about the properties of "hard money" and how it
      relates to Ethereum Classic
    </p>
    <div className="grid">
      <div className="hard-money">
        <p>
          There are many different types of money, each with it's own degree of
          usefulness. The usefulness of money can be measured with 7 major
          traits:
        </p>
        <ul className="grid">
          <li>
            <b>Fungible</b>
            <br />
            A given unit is interchangeable with any other unit
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
            Last but not least, the supply (emission) is limited to prevent devaluing
            by inflation; certainty about future supply provides a stronger store of value
          </li>
        </ul>
      </div>
      <Chart />
    </div>
  </>
)

export default HardMoney
