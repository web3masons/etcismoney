const blockPerEra = 5000000
const reductionRate = 0.2
const staticReward = 5
const maxUncleRewards = 2
const uncleInclusionReward = 1 / 32
const era1UncleMinerReward = 7 / 8
const era2UncleMinerReward = 1 / 32
const initialAmount = 72002454.77
const averageUncles = 0.054
const averageBlockTime = 15
const startDate = new Date('07/30/2015').getTime()

const averageBaseUncleEmission = staticReward * averageUncles * maxUncleRewards

function calculateEraEmission (uncleMinerReward) {
  return (
    staticReward +
    (uncleMinerReward * averageBaseUncleEmission) +
    (uncleInclusionReward * averageBaseUncleEmission)
  )
}

const era1Emission = calculateEraEmission(era1UncleMinerReward)
const era2Emission = calculateEraEmission(era2UncleMinerReward)

export function calculateBlockEmission (block) {
  const maxEras = block / blockPerEra
  let totalEmission = initialAmount
  for (let era = 0; era < maxEras; era++) {
    const isFirstEra = era === 0
    const isLastEra = era + 1 > maxEras
    const thisEraBlocks = isLastEra ? (block - era * blockPerEra) : blockPerEra
    const thisEraEmission = isFirstEra ? era1Emission : era2Emission * Math.pow(1 - reductionRate, era)
    totalEmission += thisEraBlocks * thisEraEmission
  }
  return Math.floor(totalEmission)
}

export function generateGraphPoints (resolution = 50, endBlock = 100000000) {
  // estimate the time based on seconds
  const interval = endBlock / resolution
  return new Array(resolution + 1).fill(null).map((n, i) => {
    const block = interval * i
    const date = new Date(startDate + (block * averageBlockTime * 1000))
    // todo time etc.
    return { block, emission: calculateBlockEmission(block), date }
  })
}
