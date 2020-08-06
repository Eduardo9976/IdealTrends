export default class SubMenu {
  constructor (submenuOne, submenuTwo) {
    this.containerSubmenuOne = document.querySelector(submenuOne);
    this.containerSubmenuTwo = document.querySelector(submenuTwo);
    this.ref = document.querySelectorAll(submenuTwo);

    this.handleClick = this.handleClick.bind(this);
    this.handleSecondClick = this.handleSecondClick.bind(this);
    }

  addEvents () {
    this.containerSubmenuOne.addEventListener('click', this.handleClick);
  }
  handleClick () {
    event.target.classList.toggle('active');
    event.target.addEventListener('click', this.handleSecondClick);
  }
  handleSecondClick () {   
    const body = document.querySelector('body')
    body.addEventListener('click', (event) => {
        if (event.target === this.containerSubmenuOne || event.target === this.containerSubmenuTwo) { 
        } else {
            this.containerSubmenuOne.classList.remove('active')
            this.containerSubmenuTwo.classList.remove('active')
        }
     })
  }
  init() {
    if (this.containerSubmenuOne && this.containerSubmenuTwo)
    this.addEvents();
  }
}
