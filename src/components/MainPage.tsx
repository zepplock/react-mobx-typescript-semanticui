import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import { inject, observer } from 'mobx-react'
import { Button, Divider, Icon, Header, Label, Segment } from 'semantic-ui-react'
import { AppStore } from '../stores/AppStore'


interface AppProps {
  appStore: AppStore
}

@inject('appStore')
@observer
export class MainPage extends React.Component<AppProps, {}> {

  onClick = () => {
    this.props.appStore.incrementCounter()
  }
  render() {
    const { appStore } = this.props

    return (
      <div>
        <Helmet><title>Main Page</title></Helmet>
        <Segment>
          <Header>
            Interactive Demo
            <Header.Subheader>Click on a gem</Header.Subheader>
          </Header>
          <Button as='div' labelPosition='right' onClick={this.onClick}>
            <Button icon>
              <Icon name='gem' />
            </Button>
            <Label as='a' basic pointing='left'>{appStore.counter}</Label>
          </Button>
          <Divider />
          {appStore.total} total
        </Segment>
      </div>
    )
  }
}
