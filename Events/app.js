// handling events
/*
window.addEventListener("click", ()=> {
    console.log("You bitch!!");
});
*/


// Events and dom nodes.
let button = document.querySelector("button");
button.addEventListener("click",()=>{
    console.log("Button clicked!!");
});



/*
let image = document.querySelector("img");
image.addEventListener("click",()=> {
    console.log("Wow you just click the image.")
})


*/

// Act one time

let buttonOnce = document.querySelector(".once");

function once() {
    console.log("Done");
    buttonOnce.removeEventListener("click",once);
}

buttonOnce.addEventListener("click",once);


// Events Objects
let t = document.querySelector("button");
t.addEventListener("click",event=> {
    if (event.t==0) {
        console.log("Left");
    }
    else if (event.t==1) {
        console.log("Middle");
    }
    else if (event.t==2) {
        console.log("Right");
    } 

    else {
        console.log("NUll");
    }

})

// Propagation

let para1 = document.querySelector("p");
let btn = document.querySelector(".btn-propagation");


para1.addEventListener("click",()=>{
    console.log("You just click the para");
});

btn.addEventListener("click",event=>{
    console.log("Handler for button");
    if (event.btn==2) {
        event.stopPropagation();
    }
})

document.body.addEventListener("click",event=> {
    if (event.target.nodeName=="BUTTON"){
        console.log("Clicked",event.target.nodeName,event.target.textContent);
    }
})

// Default actions

let link = document.querySelector("a");
link.addEventListener("click",event=> {
    console.log("Nope.");
    event.preventDefault();
    
})


// Key Events
// keydown->until pressing, keyup->releasing

window.addEventListener("keydown",event=> {
    if (event.key=="r") {
        document.body.style.background="red";
    }
})

window.addEventListener("keyup",event=>{
    if (event.key=="r") {
        document.body.style.background="";
    }
})


window.addEventListener("keydown", event=> {
    if (event.key==" " && event.ctrlKey){
        console.log("Continuing");
    }
})

/*

// Pointer Events

window.addEventListener("click", event=> {
    let dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = (event.pageX-4) + "px";
    dot.style.top = (event.pageY-4) + "px";
    document.body.appendChild(dot); 

    window.addEventListener("keydown", event=> {
        if (event.key == "x") {
            document.body.style.background = "white";
            dot.style.color = "white";
        }
    });
    
    
    
});
*/


// Mouse Motion

let lastX; // track the last observed mouseX position
let bar = document.querySelector("div");
bar.addEventListener("mousedown", event=> {
    if (event.button==0) {
        lastX = event.clientX;
        window.addEventListener("mousemove",moved);
        event.preventDefault(); // Prevent selection
    }
});

function moved(event) {
    if (event.button==0) {
        window.removeEventListener("mousemove",moved);

    }
    else
    {
        let dist = event.clientX - lastX;
        let newWidth = Math.max(10,bar.offsetWidth + dist);
        bar.style.width = newWidth + "px";
        lastX = event.clientX;
    }
}


// Touch events