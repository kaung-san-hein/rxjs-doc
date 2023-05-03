// const { of, concat } = rxjs;

// concat(
//     of(1, 2, 3),
//     // subscribed after first completes
//     of(4, 5, 6),
//     // subscribed after second completes
//     of(7, 8, 9)
// ).subscribe(console.log);

// const { concat, empty } = rxjs;
// const { delay, startWith } = rxjs.operators;

// // elems
// const userMessage = document.getElementById('message');

// // helper
// const delayedMessage = (message, delayedTime = 1000) => {
//     return empty().pipe(startWith(message), delay(delayedTime));
// };

// concat(
//     delayedMessage('Get Ready!'),
//     delayedMessage(3),
//     delayedMessage(2),
//     delayedMessage(1),
//     delayedMessage('Go!'),
//     delayedMessage('', 2000)
// ).subscribe((message) => (userMessage.innerHTML = message));


const { interval, of, concat } = rxjs;

// when source never completes, any subsequent observables never run
concat(interval(1000), of('This', 'Never', 'Runs'))
    .subscribe(console.log);