export default class Slide {
  constructor (imgs, controls) {
    this.imgs = Array.from(document.querySelector(imgs).children);
    this.controls = document.querySelectorAll(controls);
    this.control = Array.from(this.controls[0].children);
    this.funcInterval = '';
  }

  removeActiveImgs () {
    this.imgs.forEach((item) => {
        item.classList.remove('active');
    })
  }
  removeAtivocontrols () {
    this.control.forEach((element) => {
        element.classList.remove('ativo');
    })
  }
  addEvent () {
    this.control.forEach((element, index) => {
        element.addEventListener('click', () => {
            clearInterval(this.funcInterval);
            this.removeActiveImgs();
            this.imgs[index].classList.add('active');
            this.handleStyleControl(index);
        })
    })        
  }
  handleStyleControl (index) {
    this.removeAtivocontrols();
    this.control[index].classList.add('ativo');
  }
  randomImg() {
    let loops = [];
    this.imgs.forEach((item, index) => {
        loops.push(index);          
    })
    let index = 0
    this.funcInterval = setInterval(()=> {
        index += 1;
        if (index > (loops.length - 1)) {
            index = 0;
    }
    this.removeActiveImgs();
    this.removeAtivocontrols();
    this.imgs[index].classList.add('active');
    this.controls[0].children[index].classList.add('ativo');
    }, 3000)
  }
  init () {
    if (this.imgs && this.controls) {
        this.addEvent();
        this.imgs[0].classList.add('active');
        this.controls[0].children[0].classList.add('ativo');
        this.randomImg();
    }
  }
}
