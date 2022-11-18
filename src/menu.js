const content = document.querySelector('div#content')

function menu() {
  let img = document.createElement('img')
  img.setAttribute('src', "https://www.cfacdn.com/img/order/menu/Online/Entrees/Jul19_CFASandwich_pdp.png")
  img.setAttribute('alt', "chick-fil-a chicken sandwich")
  img.style.width = "20rem"
  img.style.marginTop = "2rem"
  content.appendChild(img)

  let h1 = document.createElement('h1')
  h1.textContent = 'Chick-fil-A Menu';
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
  li1.textContent = "Chick Sandwich"
  liStyle(li1);
  ul.appendChild(li1)
  let li2 = document.createElement('li')
  li2.textContent = "Chick Fries"
  liStyle(li2);
  ul.appendChild(li2)
  let li3 = document.createElement('li')
  li3.textContent = "Chick Milkshake"
  liStyle(li3);
  ul.appendChild(li3)
  content.appendChild(ul)
}

export {menu};