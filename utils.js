// ecip 1017
const eraBlocks = 5000000
const staticReward = 5
const reductionRate = 0.2
const initialUncleMinerReward = 7 / 8
const adjustedUncleMinerReward = 1 / 32
const uncleInclusionReward = 1 / 32
const maxUncleRewards = 2
const initialAmount = 72002454.77
const averageUncles = 0.054
const blockTime = 15
const startDate = '' // 07 30 2016

const initialEmission =
  staticReward +
  (initialUncleMinerReward * staticReward * averageUncles * maxUncleRewards) +
  (uncleInclusionReward * staticReward * averageUncles * maxUncleRewards)

const adjustedStaticReward = staticReward - (staticReward * reductionRate)

const adjustedEmission =
  adjustedStaticReward +
  adjustedUncleMinerReward * adjustedStaticReward * averageUncles * maxUncleRewards +
  uncleInclusionReward * adjustedStaticReward * averageUncles * maxUncleRewards

export function calculateEmission (blockNumber) {
  const block = 2650000 * 2
  // console.log({ initialEmission, adjustedEmission })
  const eras = block / eraBlocks
  let totalEmission = initialAmount
  for (let era = 0; era < eras; era++) {
    const isLastEra = era + 1 > eras
    const thisEraBlocks = era * eraBlocks
    const nextEraBlocks = (era + 1) * eraBlocks
    const blocksToCount = isLastEra ? block - thisEraBlocks : nextEraBlocks
    // TODO adjust yearly
    const thisEmission = era === 0 ? initialEmission : adjustedEmission
    totalEmission += blocksToCount * thisEmission
    // console.log( thisEraBlocks)
    console.log({
      era,
      block,
      blocksToCount,
      totalEmission
    })
  }
}
//   // TODO run this for each era with different numbers.
//   // const rewardsPerBlock = config.staticReward
//   // const baseReward = blockNumber * config.staticReward
//   if (blockNumber < eraBlocks) {

//   }
//   const uncleMinerReward = config.staticReward * (blockNumber <= eraBlocks ? initialUncleMinerReward : adjustedUncleMinerReward);
//   const uncleInclusionreward =

// }
