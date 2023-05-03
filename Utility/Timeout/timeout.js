// RxJS v6+
const { of } = rxjs;
const { concatMap, timeout, catchError, delay } = rxjs.operators;

// simulate request
function makeRequest(timeToDelay) {
    return of('Request Complete!').pipe(delay(timeToDelay));
}

of(1000, 3000, 2000)
    .pipe(
        concatMap(duration =>
            makeRequest(duration).pipe(
                timeout(2500),
                catchError(error => of(`Request timed out after: ${duration}`))
            )
        )
    )
    /*
     *  "Request timed out after: 4000"
     *  "Request timed out after: 3000"
     *  "Request Complete!"
     */
    .subscribe(val => console.log(val));