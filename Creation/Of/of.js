// RxJS v6+
// const { of } = rxjs;
// //emits any number of provided values in sequence
// const source = of(1, 2, 3, 4, 5);
// //output: 1,2,3,4,5
// const subscribe = source.subscribe(val => console.log(val));

// RxJS v6+
const { of } = rxjs;
//emits values of any type
const source = of({ name: 'Brian' }, [1, 2, 3], function hello() {
    return 'Hello';
});
//output: {name: 'Brian'}, [1,2,3], function hello() { return 'Hello' }
const subscribe = source.subscribe(val => console.log(val));