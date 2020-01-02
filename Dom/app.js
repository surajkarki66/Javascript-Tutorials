// Document Object Model

//Finding elements
let link = document.getElementsByTagName("a")[0];
console.log(link.href);

let para = document.getElementById("code");
console.log(para);
console.log(para.childNodes);   

let image = document.getElementById("image");
console.log(image.src);
console.log(image.alt);

// Changing the document->Almost everything about the dom data structure can be changed
let paragraphs = document.getElementsByTagName("p");
document.body.insertBefore(paragraphs[2],paragraphs[0]); //One goes to first paragraph node
document.body.insertBefore(paragraphs[3],paragraphs[1]);

let a = document.getElementsByTagName("a");
console.log(a[1]);

document.body.insertBefore(a[1],paragraphs[0]);


// Creating nodes

function replaceImages() {
    let images = document.getElementsByTagName("img");
    //console.log(images);
    for (i=images.length-1; i>=0;i--) {
        let image = images[i];
        //console.log(image);

        if (image.alt) {
            //console.log(image.alt);
            let text = document.createTextNode(image.alt);
            //console.log(text);
            image.parentNode.replaceChild(text,image); // Image tag is replaced by alt text of their respective image.

        }
    }
}


// Attributes

let paras =   document.getElementsByTagName("p");
for (let para of Array.from(paras)) {
    if(para.getAttribute("data-classified") == "secret") {
       para.remove();
       //console.log(para);
    }

    if(para.getAttribute("data-classified")=="unclassified") {
        para.setAttribute("data-unclassified","true");
    }
}

let hs = document.getElementsByTagName("h1");
for (let h of Array.from(hs) ) {
    //console.log(h);
    h.setAttribute("class","headings");

    if (h.getAttribute("class") == "headings") {
       // h.removeAttribute();
    }
}

// Layout

let para1 = document.body.getElementsByTagName("p")[0];
console.log("clientHeight:",para1.clientHeight);
console.log("offsetHeight",para1.offsetHeight);

function time(name, action) {
    let start = Date.now();
    action();
    console.log(name, "took", Date.now()-start,"ms");
}

time("naive",()=> {
    let target = document.getElementById("one");
    while(target.offsetWidth <2000) {
        target.appendChild(document.createTextNode("Suraj"));
    }
})


// Styling

let p = document.getElementById("para");
console.log(p.style);
console.log(p.style.color);
p.style.color = "red";
p.style.fontfamily = "Arial";
console.log(p.style.fontFamily)

// Query selectors

function count(selector) {
    return document.querySelectorAll(selector).length;
}

console.log(count("p"))  // all <p> elements
console.log(count(".animal")); // class animal
console.log(count(".character"))
console.log(count("p .animal")); // animal inside of p tag


