import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import LandingPageContainer from './landing_page/LandingPageContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPageContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
