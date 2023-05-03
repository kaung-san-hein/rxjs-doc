// RxJS v6+
const { of } = rxjs;
const { timeoutWith, delay, concatMap } = rxjs.operators;

const fakeRequest = delayTime => of('!response!').pipe(delay(delayTime));
const requestTimeoutLogger = of('logging request timeout');
const timeoutThreshold = 1000;

of(timeoutThreshold + 1, timeoutThreshold - 1, timeoutThreshold + 3)
    .pipe(
        concatMap(e =>
            fakeRequest(e).pipe(timeoutWith(timeoutThreshold, requestTimeoutLogger))
        )
    )
    .subscribe(console.log);

/*
  OUTPUT:
    logging request timeout
    !response!
    logging request timeout
*/