import React from 'react'
import Head from 'next/head'

import '../style.scss'

import HardMoney from '../components/HardMoney'
import Countdown from '../components/Countdown'
import Table from '../components/Table'
import Footer from '../components/Footer'

const Home = () => (
  <>
    <Head>
      <title>ETC is money</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <div className="container">
      <HardMoney />
      <Countdown />
      <Table />
      <div className="choose">
        <p>
        Choose <b>unstoppability</b>.
          <br />
        Choose <b>principles</b>.
          <br />
        Choose <b>money</b>.
          <br />
        Choose <b>ETC</b>.
        </p>
      </div>
      <Footer />
    </div>
  </>
)

export default Home
