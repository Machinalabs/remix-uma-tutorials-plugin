import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteProps,
} from "react-router-dom"

import { ErrorView, HomeView, TutorialView } from "./views"
import { DefaultLayout, TwoPanelLayout } from "./layouts"
import { RightPanel } from "./components"

interface Props extends RouteProps {
  component: any // TODO: new (props: any) => React.Component
  from: string
}

const RouteWithDefaultLayout = ({ component: Component, ...rest }: Props) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <DefaultLayout {...rest}>
          <Component {...matchProps} />
        </DefaultLayout>
      )}
    />
  )
}

const RouteWithTwoPanelsLayout = ({ component: Component, ...rest }: Props) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <TwoPanelLayout {...rest} rightPanel={<RightPanel />}>
          <Component {...matchProps} />
        </TwoPanelLayout>
      )}
    />
  )
}

export const Routes = () => (
  <Router>
    <Switch>
      <RouteWithDefaultLayout exact={true} path="/" component={HomeView} from="/" />
      <RouteWithTwoPanelsLayout exact={true} path="/tutorial" component={TutorialView} from="/tutorial" />
      <Route exact={true} path="/error">
        <ErrorView />
      </Route>
    </Switch>
  </Router>
)
