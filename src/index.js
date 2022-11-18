import { home } from "./home.js";
import { menu } from "./menu.js";
import { contact } from "./contact.js";

const content = document.querySelector('div#content')

function tabButtons() {
  let homeBtn = document.createElement('button')
  let menuBtn = document.createElement('button')
  let contactBtn = document.createElement('button')

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

  content.appendChild(homeBtn)
  content.appendChild(menuBtn)
  content.appendChild(contactBtn)
}

function clearPage() {
  for (let i = content.children.length - 1; i > 2; i--) {
    content.removeChild(content.children[i])
  }
}

tabButtons()

home()