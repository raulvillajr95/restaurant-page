const content = document.querySelector('div#content')

function home() {
  let img = document.createElement('img')
  let h1 = document.createElement('h1')
  let p = document.createElement('p')

  img.setAttribute('src', "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fvignette4.wikia.nocookie.net%2Flogopedia%2Fimages%2F6%2F68%2FChick-fil-A_logo_2012.png%2Frevision%2Flatest%3Fcb%3D20130511041847&f=1&nofb=1&ipt=42510cac832c0ac5435e064c37d1144c9a8da37dc89aa05721010b22f44bf593&ipo=images")
  img.setAttribute('alt', "chick-fil-a logo")
  h1.textContent = 'Classic taste in every bite';
  p.textContent = 'We are open 6 days a week, 24hrs hours a day, just to serve you!'

  content.appendChild(img)
  content.appendChild(h1)
  content.appendChild(p)
}

export {home};