// RxJS v6+
// const { generate } = rxjs;

// generate(
//     2,
//     x => x <= 8,
//     x => x + 3
// ).subscribe(console.log);

const { generate } = rxjs;

generate(
    2,
    x => x <= 38,
    x => x + 3,
    x => '.'.repeat(x)
).subscribe(console.log);