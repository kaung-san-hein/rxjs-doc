//return basic observable
const sample = val => Rx.Observable.of(val).delay(5000);
//convert basic observable to promise
const example = sample('First Example')
    .toPromise()
    //output: 'First Example'
    .then(result => {
        console.log('From Promise:', result);
    });