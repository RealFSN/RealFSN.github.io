const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/cat-image.jpg") {
        myImage.setAttribute("src", "images/cat-2083492_640.jpg");
    } else {
        myImage.setAttribute("src", "images/cat-image.jpg");
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else { 
        localStorage.setItem("name", myName);
        myHeading.textContent = `I Really Like Cats, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `I Really Like Cats, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
}