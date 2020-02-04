const myBtn = document.getElementById('myBtn');
const content = document.getElementById('content');

myBtn.addEventListener('click', postData);


function getData() {
    url = "https://api.github.com/users";
    fetch(url)
    .then(response=>response.json())
    .then((data)=> {
        console.log(data);
    })
}


function postData() {
    url = "http://dummy.restapiexample.com/api/v1/create";
    data = {
        "status": "success",
        "data": {
            "name": "Suraj",
            "salary": "123",
            "age": "23",
            "id": 25
        }
    }

    params= {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body:data                  //JSON.stringify(data) //given post data was first object so we have convert it into json

    }
    fetch(url, params).then(response=> response.json())
    .then((data)=> {
        console.log(data);
    })
}

