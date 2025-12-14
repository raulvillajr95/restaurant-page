const content = document.querySelector('div#content')

function home() {
  let img = document.createElement('img')
  let h1 = document.createElement('h1')
  let p = document.createElement('p')

  img.style.width = "20rem"
  img.style.marginTop = "2rem"
  h1.style.color = "#E51636"
  h1.style.width = "20rem"
  h1.style.marginTop = "2rem"
  p.style.width = "20rem"
  p.style.marginTop = "2rem"
  p.style.color = "#141414"
  p.style.fontSize = "1.25rem"

  img.setAttribute('src', "https://upload.wikimedia.org/wikipedia/commons/0/02/Chick-fil-A_Logo.svg")
  img.setAttribute('alt', "chick-fil-a logo")
  h1.textContent = 'Classic taste in every bite.';
  p.textContent = 'We are open 6 days a week, 24hrs hours a day, just to serve you!'

  content.appendChild(img)
  content.appendChild(h1)
  content.appendChild(p)
}

export {home};
