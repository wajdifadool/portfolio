document.addEventListener('DOMContentLoaded', () => {
  // Make each project-box clickable

  document.querySelectorAll('.project-box').forEach(function (box) {
    console.log(box)
    box.addEventListener('click', function () {
      const link = this.getAttribute('data-link')
      window.open(link, '_blank')
    })
  })

  const navLinks = document.querySelectorAll('.main-nav ul li a')

  navLinks.forEach((link) => {
    link.addEventListener('click', function (event) {
      // Remove Active class from all list items
      const listItem = document.querySelectorAll('.main-nav ul li')

      listItem.forEach((elemnent) => {
        elemnent.classList.remove('active')
      })
      //   Add active to the clicked item
      this.parentElement.classList.add('active')
    })
  })
})
