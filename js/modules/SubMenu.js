export default class SubMenu {
  constructor (submenuOne, submenuTwo) {
    this.containerSubmenuOne = document.querySelector(submenuOne);
    this.containerSubmenuTwo = document.querySelector(submenuTwo);
    this.body = document.querySelector('body')
    this.leaveSubmenu = {
      one: '',
      two: '',
      body: ''
    } 
  }

  addEvents() {
    this.containerSubmenuOne.addEventListener('click', () => {
      this.leaveSubmenu.one = event.currentTarget
      this.containerSubmenuOne.classList.add('active')
      this.eventBody()

      this.containerSubmenuTwo.addEventListener('click', () => {
        this.containerSubmenuTwo.classList.toggle('active')
        this.leaveSubmenu.two = event.currentTarget
      })
    })
  }
  eventBody() {
    this.body.addEventListener('click', () => {
      this.leaveSubmenu.body = event.target
      if ( this.leaveSubmenu.body != this.leaveSubmenu.one  && this.leaveSubmenu.body != this.leaveSubmenu.two){
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
