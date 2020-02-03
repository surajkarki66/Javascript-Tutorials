// Promise has three main things
// resolve
// reject
// pending

function promiseFunc() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = false;
            if (!error) {
                console.log('Function: Your promise has been resolved');
                resolve();
            }

            else {
                console.log('Function: i am rejected');
                reject();
            }
        }, 2000)
    })
}
/*
//promiseFunc()
promiseFunc().then(function() {
    console.log('Me: Thank you');
}).catch(function(error) {
    console.log('Me: You sucks' + error);
})
*/



// Use-> Substitute of callback function.

const proLang = [
    {name: "Python", rank: 1},
    {name: "Javascript", rank: 2}
]


function proLangCheck(prolang) {
    return new Promise(function(resolve, reject) {
        setTimeout(function () {
            proLang.push(prolang);
            console.log("New programming language has been pushed");
            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject();
            }

        }, 5000);
    })
}

let newProlang = {name: 'Java', rank: 3}

proLangCheck(newProlang).then(function() {
    console.log(`${newProlang.name} has been fetched.`);
    // you can call another function here.
}).catch(function() {
    console.log("Sorry");
})


// function inside then is run as resolve.
// function inside catch is run as reject.
