// custom error handling logic
const retryThreeTimes = obs =>
  obs.retry(3).catch(_ => Rx.Observable.of('ERROR!'));
const examplePromise = val =>
  new Promise(resolve => resolve(`Complete: ${val}`));

//faking request
const subscribe = Rx.Observable.of('some_url')
  .mergeMap(url => examplePromise(url))
  // could reuse error handling logic in multiple places with let
  .let(retryThreeTimes)
  //output: Complete: some_url
  .subscribe(result => console.log(result));

const customizableRetry = retryTimes => obs =>
  obs.retry(retryTimes).catch(_ => Rx.Observable.of('ERROR!'));

//faking request
const secondSubscribe = Rx.Observable.of('some_url')
  .mergeMap(url => examplePromise(url))
  // could reuse error handling logic in multiple places with let
  .let(customizableRetry(3))
  //output: Complete: some_url
  .subscribe(result => console.log(result));