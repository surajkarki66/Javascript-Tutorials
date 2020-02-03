for (let i=1;i<10;i++)
{
  console.log(i);
}

function loop(n)
{
  for(let i=1;i<n;i++)
  {
    console.log(i);
  }
}

loop(10);


//passing action

function Loop(n, action)
{
  for(let i=1;i<n;i++)
  {
    action(i);
  }
}

Loop(10,console.log);




let labels = [];
Loop(5, i => {
labels.push(`Unit ${i + 1}`);
});
console.log(labels);


let names = [];
Loop(10,i=> {
  names.push("Suraj",i);
})
console.log(names);
