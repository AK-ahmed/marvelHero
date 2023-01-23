const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/m1.jfif") {
    myImage.setAttribute("src", "images/m2.jfif");
  } else {
    myImage.setAttribute("src", "images/m1.jfif");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome Hero, ${myName}`;
  }
}

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome Hero, ${storedName}`;
  }
  
  
  myButton.onclick = () => {
    setUserName();
  };
  