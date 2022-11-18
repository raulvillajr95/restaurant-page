const content = document.querySelector('div#content')

function contact() {
  let img = document.createElement('img')
  img.setAttribute('src', "https://images.squarespace-cdn.com/content/v1/5e78653ea96b4e646ba71d8f/1592841951202-CNFCE5UK5HRNI6GXM5V6/headernoshadow.jpg")
  img.setAttribute('alt', "Welcome. We're so glad you're here!")
  img.style.width = "20rem"
  img.style.marginTop = "2rem"
  content.appendChild(img)

  let h1 = document.createElement('h1')
  h1.textContent = 'Contact Us';
  h1.style.color = "#E51636"
  h1.style.marginTop = "2rem"
  content.appendChild(h1)

  function liStyle(li) {
    li.style.width = "20rem"
    li.style.marginTop = "2rem"
    li.style.color = "#141414"
    li.style.fontSize = "1.25rem"
  }

  let ul = document.createElement('ul')
  ul.style.listStyle = "none"

  let li1 = document.createElement('li')
  li1.textContent = "Phone: (800) 323 - 3434"
  liStyle(li1);
  ul.appendChild(li1)
  let li2 = document.createElement('li')
  li2.textContent = "Fax: (800) 454 - 4545"
  liStyle(li2);
  ul.appendChild(li2)
  content.appendChild(ul)
}

export {contact};