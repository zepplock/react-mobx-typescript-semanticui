import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import { Header, Segment } from 'semantic-ui-react'
import { inject, observer } from 'mobx-react'
import { AppStore } from '../stores/AppStore'

interface AppProps {
  appStore: AppStore
}

@inject('appStore')
@observer
export class About extends React.Component<AppProps, {}> {

  render() {
    return (
      <div>
        <Helmet><title>About</title></Helmet>
        <Header as='h2' attached='top'>
          About
        </Header>
        <Segment attached>
        An (almost) empty project with React/Mobx/Typescript/SemanticUI
        </Segment>
      </div >
    )
  }

}
