headerLink = Array.from(document.querySelectorAll('.header a'))

headerLink.forEach((item) => {
  item.addEventListener('click', function () {
    for (let i = 0; i < headerLink.length; i++) {
      headerLink[i].classList.remove('active')
    }
    this.classList.add('active')
  })
})
