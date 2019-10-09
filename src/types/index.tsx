import { IObservableArray } from 'mobx'

export type Job = {
  _id: string
  startTime: number
  name: string
  duration: number
  description: string
  group: string
  jenkinses?: { [_: string]: JenkinsBuild }
  jenkinsURLs?: string[]
  result?: string | null
  tums?: number
  tests?: Test[]
  steps?: Step[]
  stepsBinned?: IObservableArray<{ '_id': string, 'stdDev': number, 'avg': number, 'count': number }>
  stepsByName?: IObservableArray<{ '_id': string, 'runId': string, 'duration': number }>
  reserveClients?: IObservableArray<{ 'clients': object, 'queues': object[] }>
  pool: string
  priority: number
  team: string
  parameters: { [_: string]: string | number }
}

export type JenkinsBuild = {
  actions: object[]
  duration: number
  fullDisplayName: string
  result: string
  timestamp: number
}

export type Step = {
  _id: string
  description: string
  runId: string
  timestamp: number
  duration?: number
}

export type Test = {
  _id: string
  testId: string
  suiteName: string
  className: string
  steps: Step[]
  startTime: number
  endTime?: number
  launchTime?: number
  createTime: number
  result: string
  reschedule: { type: string }
  suiteId: string
  build: number
  reserve: string
  tums: number
  esn?: string
  dums: number
  bug: string
  duration: number
  failedStepDesc: string
  failedStep: number
  runnerError: string
  jenkins: string
  DEVICE_POOL: string
  family: string
  version: string
  batchName: string
  team: string
  network: { rxBytes: number, txBytes: number }
  prBranch: string
  errorMsg: string
  gridHeader: string
  testLogs: TestLog[]
  debugFiles: { logfile: string, adbStdout: string, storyboard: string, deviceInfo: string, testentry: string, appLogFile: string }
  crash: string[]
}

export type TestLog = {
  description: string
  duration: number
  mono: number
  startTimestamp: number
  step: number
  timestamp: number
  type: string
}

export interface ITimeLineEntryBase {
  id: string
  description: string
  value: number
}

export interface ITimeLineEntryStep extends ITimeLineEntryBase {
  group: 'step'
  duration: number
  screenshot?: ITimeLineEntryScreenshot
}

export interface ITimeLineEntryScreenshot extends ITimeLineEntryBase {
  group: 'screenshot'
  stepId?: string
  url: string
}

export type ITimeLineEntry = ITimeLineEntryStep | ITimeLineEntryScreenshot

export interface IScreenshot {
  id: string
  metadata: { name: string }
  stats: { atimeMs: number }
}

export type Suite = {
  _id: string
  count: number
  tums: number
  dums: number
  results: Test[]
}

export interface ICompareTransition {
  name: string
  from: Test
  to: Test
}

export interface ICompareTransitionsResult {
  pf: ICompareTransition[]
  fp: ICompareTransition[]
  old: ICompareTransition[]
  new: ICompareTransition[]
}

export interface ICompareErrors {
  from_mixed_grid: string
  to_mixed_grid: string
  mixed_grid: string
  non_unique_from: string
  non_unique_to: string
}

export interface ICompareResult {
  errors: Partial<ICompareErrors>
  transitions: ICompareTransitionsResult
}
