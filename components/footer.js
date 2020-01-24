import React from 'react'
import { generateGraphPoints } from '../utils'

const graphPoints = generateGraphPoints()

const Footer = () => (
  <div>
    <pre>{JSON.stringify(graphPoints, null, 2)}</pre>
  </div>
)

export default Footer
