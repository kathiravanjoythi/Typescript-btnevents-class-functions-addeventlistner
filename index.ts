// Import stylesheets
import './style.css';

// Write TypeScript code!
// const appDiv: HTMLElement = document.getElementById('app');
// appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;




class TsClass {
  constructor() {
    let btn = document.getElementById("coolbutton");
    btn.addEventListener("mouseenter", (e: Event) => {
      this.onClicked(); 
    })

    btn.addEventListener("mouseleave", (e:Event) => {
      mysampleFunction();
    });
  }

    onClicked() {
    console.log("mouse enter")    
  }
}

// start the app
new TsClass();

function mysampleFunction() {
 console.log("mouse leave")
}

// mysampleFunction();
