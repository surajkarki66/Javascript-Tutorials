let todo = []

function remember(task)
{
    todo.push(task);
    console.log(todo);
}

function getTask()
{
    return todo.shift();
}





remember([1,2,3,"suraj"]);
console.log(getTask());


function remove(array, index) {
    return array.slice(0, index)
    .concat(array.slice(index + 1));
    }
console.log(remove(["a", "b", "c", "d", "e"], 2));


