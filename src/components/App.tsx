/// <reference path='../../index.d.ts'/>

import { hot } from 'react-hot-loader/root'
import * as React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { inject, observer } from 'mobx-react'
import { Container, Image, Menu, Segment } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { AppStore } from '../stores/AppStore'
import StatePreserver from '../utils/StatePreserver'
import { About } from './About'
import { MainPage } from './MainPage'

import * as logo from '../../assets/img/logo.png'

interface AppProps {
  appStore?: AppStore
}

@inject('appStore')
@observer
class App extends React.Component<AppProps, {}> {

  constructor(props: AppProps) {
    super(props)
    new StatePreserver(this.props.appStore)
  }

  render() {
    return (
      <HelmetProvider>
        <Router>
          <Container fluid>
            <Helmet defaultTitle='Demo' />
            <Segment basic style={{ marginTop: '5em' }}>
              <Menu borderless fixed='top'>
                <Menu.Item as={Link} to='/' className='brand'>
                  <Image spaced size='mini' src={logo} /> Demo
                </Menu.Item>
                <Menu.Item as={Link} to='/about' position='right'>About</Menu.Item>
              </Menu>

              <Route exact path='/' component={MainPage} />
              <Route exact path='/about' component={About} />
            </Segment>
          </Container>
        </Router>
      </HelmetProvider>
    )
  }
}

export default hot(App)