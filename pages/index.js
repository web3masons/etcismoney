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
    </Head>
    <div style={{ width: '800px', margin: 'auto', textAlign: 'center' }}>
      <HardMoney />
      <Countdown />
      <Table />
      <Footer />
    </div>
  </>
)

export default Home
