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

  content.appendChild(homeBtn)
  content.appendChild(menuBtn)
  content.appendChild(contactBtn)

  return content
}

tabButtons()

home()
menu()
contact()