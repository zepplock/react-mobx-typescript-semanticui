import { observe } from 'mobx'
import { AppStore } from '../stores/AppStore'

export default class StatePreserver {

  serializable = [
    'counter',
  ]

  constructor(store: AppStore) {
    observe(store, (change) => this.updateURL(change))
  }

  updateURL = (change) => {
    const params = new URLSearchParams()
    this.serializable.forEach(a => change.object[a] && params.append(a, change.object[a]))
    const newurl = window.location.origin + window.location.pathname + '?' + params.toString()
    window.history.replaceState({ path: newurl }, '', newurl)
  }
}
