import React from 'react'

import { AppState, AppProps } from './types'

class Application extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)

    this.state = {
      playerName: '',
      difficulty: 0,
      currentYear: 0,
      gold: 0,
      food: 0,
      research: 0,
      divinity: 0,
      fields: 0,
      barracks: 0,
      houses: 0,
      soldiers: 0,
      citizen: 0,
    }
  }

  render() {
    return null
  }
}

export default Application
