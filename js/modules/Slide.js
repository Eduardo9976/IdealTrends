export default class Slide {
  constructor (imgs, controls) {
    this.imgs = document.querySelector(imgs)
    this.eachImage = [...this.imgs.children]
    this.controls = document.querySelector(controls)
    this.eachControl = [...this.controls.children]
    this.random;

    this.handleClick = this.handleClick.bind(this)
  }
  addEvents() {
    this.eachControl.forEach((item, index) => {
      item.addEventListener('click', () => {
        clearInterval(this.random)
        this.handleClick(index)
      })
    })
  }

  handleClick(index) {
    this.removeClass()
    this.eachImage[index].classList.add('active')
    this.eachControl[index].classList.add('ativo')
  }

  removeClass() {
    this.eachImage.forEach((element) => {
      element.classList.remove('active')
    })
    this.eachControl.forEach((item) => {
      item.classList.remove('ativo')
    })
  }

  randomImage() {
    let index = 0
    this.random = setInterval(() => {
      index += 1
      if ( index > (this.eachImage.length -1)) {
        index = 0
      }

      this.removeClass()
      this.eachImage[index].classList.add('active')
      this.eachControl[index].classList.add('ativo')
    }, 3000)
  }

  init () {
    this.eachImage[0].classList.add('active')
    this.eachControl[0].classList.add('ativo')
    this.randomImage()
    this.addEvents()
  }
}
