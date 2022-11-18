import { home } from "./home.js";
import { menu } from "./menu.js";
import { contact } from "./contact.js";

const content = document.querySelector('div#content')
content.style.display = "flex"
content.style.flexDirection = "column"
content.style.justifyContent = "space-around"
content.style.alignItems = "center"
content.style.fontFamily = "Arial"
content.style.height = "90vh"

function tabButtons() {
  let btnContainer = document.createElement('div');
  btnContainer.style.display = "flex"
  btnContainer.style.justifyContent = "space-around"
  btnContainer.style.alignItems = "center"
  btnContainer.style.height = "3rem"
  btnContainer.style.width = "15rem"

  function btnStyle(btn) {
    btn.style.borderRadius = "0.2rem"
    btn.style.borderStyle = "none"
    btn.style.height = "1.75rem"
    btn.style.width = "4.5rem"
    btn.style.backgroundColor = "#E51636"
    btn.style.color = "white"
  }

  let homeBtn = document.createElement('button')
  btnStyle(homeBtn)
  let menuBtn = document.createElement('button')
  btnStyle(menuBtn)
  let contactBtn = document.createElement('button')
  btnStyle(contactBtn)

  homeBtn.textContent = 'Home';
  menuBtn.textContent = 'Menu';
  contactBtn.textContent = 'Contact';

  homeBtn.addEventListener('click', () => {
    clearPage()
    home()
  })
  menuBtn.addEventListener('click', () => {
    clearPage()
    menu()
  })
  contactBtn.addEventListener('click', () => {
    clearPage()
    contact()
  })

  btnContainer.appendChild(homeBtn)
  btnContainer.appendChild(menuBtn)
  btnContainer.appendChild(contactBtn)

  content.appendChild(btnContainer)
}

function clearPage() {
  for (let i = content.children.length - 1; i > 0; i--) {
    content.removeChild(content.children[i])
  }
}

tabButtons()

home()