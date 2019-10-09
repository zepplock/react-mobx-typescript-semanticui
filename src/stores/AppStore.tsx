import * as _ from 'lodash'
import { observable, action, computed } from 'mobx'

export class AppStore {

  // storage
  @observable counter = 0

  constructor() {
    const searchParams = new URLSearchParams(location.search)
    for (let entry of searchParams.entries()) {
      const key = entry[0]
      const value = entry[1]

      if (['counter'].includes(key)) {
        // convert strings to int
        this[key] = (parseInt(value))
      }
      else {
        this[key] = value
      }
    }
  }

  // actions
  @action
  incrementCounter = (): void => {
    this.counter += 1
  }

  // computed
  @computed get total() {
    return this.counter * 42
}

}