// const { ajax } = rxjs.ajax;

// const githubUsers = `https://api.github.com/users?per_page=2`;

// const users = ajax(githubUsers);

// const subscribe = users.subscribe(
//     res => console.log(res),
//     err => console.error(err)
// );

// const { ajax } = rxjs.ajax;

// const githubUsers = `https://api.github.com/users?per_page=2`;

// const users = ajax.getJSON(githubUsers);

// const subscribe = users.subscribe(
//     res => console.log(res),
//     err => console.error(err)
// );

// const { ajax } = rxjs.ajax;

// const githubUsers = `https://api.github.com/error`;

// const users = ajax.getJSON(githubUsers);

// const subscribe = users.subscribe(
//     res => console.log(res),
//     err => console.error(err)
// );

// RxJS v6+
const { ajax } = rxjs.ajax;

const githubUsers = `https://api.github.com/error`;

const users = ajax({
    url: githubUsers,
    method: 'GET',
    headers: {
        /*some headers*/
    },
    body: {
        /*in case you need a body*/
    }
});

const subscribe = users.subscribe(
    res => console.log(res),
    err => console.error(err)
);