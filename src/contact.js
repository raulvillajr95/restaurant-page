const content = document.querySelector('div#content')

function contact() {
  let img = document.createElement('img')
  img.setAttribute('src', "https://images.squarespace-cdn.com/content/v1/5e78653ea96b4e646ba71d8f/1592841951202-CNFCE5UK5HRNI6GXM5V6/headernoshadow.jpg")
  img.setAttribute('alt', "Welcome. We're so glad you're here!")
  content.appendChild(img)

  let h1 = document.createElement('h1')
  h1.textContent = 'Contact Us';
  content.appendChild(h1)

  let ul = document.createElement('ul')
  let li1 = document.createElement('li')
  li1.textContent = "Phone: (800) 323 - 3434"
  ul.appendChild(li1)
  let li2 = document.createElement('li')
  li2.textContent = "Fax: (800) 454 - 4545"
  ul.appendChild(li2)
  content.appendChild(ul)
}

export {contact};