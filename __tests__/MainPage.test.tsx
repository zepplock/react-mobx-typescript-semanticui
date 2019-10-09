import * as React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { mount } from 'enzyme'
import { HelmetProvider } from 'react-helmet-async'

import { AppStore } from '../src/stores/AppStore'
import { MainPage } from '../src/components/MainPage'

describe('Main Page', () => {
  it('loads', async () => {

    const appStore = new AppStore()

    const wrapper = mount(
      <HelmetProvider>
        <MemoryRouter>
          <MainPage appStore={appStore} />
        </MemoryRouter>
      </HelmetProvider>
    )

    expect(wrapper.find(MainPage)).toHaveLength(1)
    expect(wrapper.text()).toContain('0 total')
  })

  it('counts', async () => {

    const appStore = new AppStore()

    const wrapper = mount(
      <HelmetProvider>
        <MemoryRouter>
          <MainPage appStore={appStore} />
        </MemoryRouter>
      </HelmetProvider>
    )

    expect(wrapper.find('button')).toHaveLength(1)
    wrapper.find('button').simulate('click')
    expect(wrapper.text()).toContain('42 total')

  })
})
