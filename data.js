export const columns = [
  { key: 'btc', name: 'BTC' },
  { key: 'eth', name: 'ETH' },
  { key: 'etc', name: 'ETC' }
]

export const rows = [
  { key: 'proofOfWork', name: 'Proof of Work', text: 'ETH is switching to Proof of Stake in the near future. ETC is committed to remaining on the more secure Proof of Work indefinitely.' },
  { key: 'limitedSupply', name: 'Known Supply', text: 'BTC and ETC have a fixed emission curve, as shown above. ETH has an unknown future supply that can be changed at any time.' },
  { key: 'programmable', name: 'Programmable', text: 'ETH and ETC use the same underlying EVM to enable Smart Contracts; any contract deployed on ETH can be deployed on ETC.' },
  { key: 'premine', name: 'No Pre-mine', text: 'About 70m ETH was pre-allocated to investors and developers. ETC and BTC distributions were not pre-mined.' },
  { key: 'foundation', name: 'Centralized Foundation', text: 'BTC and ETC have no central leadership or foundation to direct development, making them more decentralized and resilient.' },
  { key: 'irregularState', name: 'Irregular State', text: 'ETC exits in response to ETH\'s TheDAO bailout hardfork. This "irregular state change" is a permenant reminder that your ETH can be confiscated.' },
  { key: 'l1scalability', name: 'Layer 1 Scalabiltiy', text: 'ETH\'s attempt to scale Layer 1 necessarily creates state bloat, security and availability tradeoffs for only a meager increase in throughput.' },
  { key: 'l2scalability', name: 'Layer 2 Scalabiltiy', text: 'It is possible to scale to a greater extent without sacrificing security by using Layer 2 solutions such as Lighting, State Channels, Optimistic Rollup, etc.' }
]

export const data = {
  etc: {
    proofOfWork: { value: 1 },
    limitedSupply: { value: 1 },
    programmable: { value: 1 },
    premine: { value: 1 },
    foundation: { value: 1 },
    irregularState: { value: 1 },
    l1scalability: { value: 0 },
    l2scalability: { value: 1 }
  },
  btc: {
    proofOfWork: { value: 1 },
    limitedSupply: { value: 1 },
    programmable: { value: 2 },
    premine: { value: 1 },
    foundation: { value: 1 },
    irregularState: { value: 1 },
    l1scalability: { value: 0 },
    l2scalability: { value: 1 }
  },
  eth: {
    proofOfWork: { value: 2 },
    limitedSupply: { value: 0 },
    programmable: { value: 1 },
    premine: { value: 0 },
    foundation: { value: 0 },
    irregularState: { value: 0 },
    l1scalability: { value: 2 },
    l2scalability: { value: 1 }
  }
}