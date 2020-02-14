import React from "react";
import Head from "next/head";

import "../style.scss";

import HardMoney from "../components/HardMoney";
import Countdown from "../components/Countdown";
import Table from "../components/Table";
import Footer from "../components/Footer";

const title = "ETC is Money";
const description =
  "A maximally biased reminder about Hard Money and how it relates to Ethereum Classic";
const favicon = "./favicon.ico";
const socialImage = "https://etcis.money/social.png";

const Home = () => (
  <>
    <Head>
      <title>{title}</title>
      <link rel="icon" type="image/png" href={favicon} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={description}
      />
      <meta property="og:site_name" content={title} />
      <meta property="og:url" content="https://etcis.money" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link rel="apple-touch-icon" href={favicon} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:image" content={socialImage} />
      <meta name="twitter:image" content={socialImage} />
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
);

export default Home;
