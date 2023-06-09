const { of } = rxjs;
const { concatMap, delay, mergeMap } = rxjs.operators;

//emit delay value
const source = of(2000, 1000);
// map value from source into inner observable, when complete emit result and move to next
const example = source.pipe(
    concatMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
);
//output: With concatMap: Delayed by: 2000ms, With concatMap: Delayed by: 1000ms
const subscribe = example.subscribe(val =>
    console.log(`With concatMap: ${val}`)
);

const mergeMapExample = source
    .pipe(
        // just so we can log this after the first example has run
        // delay(5000),
        mergeMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
    )
    .subscribe(val => console.log(`With mergeMap: ${val}`));