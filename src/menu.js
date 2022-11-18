const content = document.querySelector('div#content')

function menu() {
  let img = document.createElement('img')
  img.setAttribute('src', "https://www.cfacdn.com/img/order/menu/Online/Entrees/Jul19_CFASandwich_pdp.png")
  img.setAttribute('alt', "chick-fil-a chicken sandwich")
  content.appendChild(img)

  let h1 = document.createElement('h1')
  h1.textContent = 'Chick-fil-A Menu';
  content.appendChild(h1)

  let ul = document.createElement('ul')
  let li1 = document.createElement('li')
  li1.textContent = "Chick Sandwich"
  ul.appendChild(li1)
  let li2 = document.createElement('li')
  li2.textContent = "Chick Fries"
  ul.appendChild(li2)
  let li3 = document.createElement('li')
  li3.textContent = "Chick Milkshake"
  ul.appendChild(li3)
  content.appendChild(ul)
}

export {menu};