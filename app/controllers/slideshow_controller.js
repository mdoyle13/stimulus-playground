import { Controller } from "stimulus";

export default class extends Controller {
  static targets = [ "slide" ]
  
  // connect() {
  //   console.log(this.slideTargets.length)
  // }

  initialize() {
    this.showCurrentSlide()
    
    // example of how to set some data attributes on the html
    this.data.set("initialized", true)
  }
  
  isFirstSlide() {
    if (this.index == 0) {
      return true
    } else {
      return false
    }
    return false
  }
  
  isLastSlide(idx) {
    if ((this.slideTargets.length - 1) == idx) {
      return true
    } else {
      return false
    }
  }

  next() {
    if (this.isLastSlide(this.index)) {
      this.alert = "true"
    } else {
        this.index++
    }
    
  }

  previous() {
    if (this.isFirstSlide()) {
      //
    } else {
      this.index--
    }
  }
  
  get index() {
    return parseInt(this.data.get("index"))
  }
  
  set index(value) {
    console.log('index set', value)
    this.data.set("index", value)
    this.showCurrentSlide()
  }
  
  get alert() {
    console.log('getter for alert called')
    return this.data.get("alert")
  }
  
  set alert(param) {
    this.data.set("alert", param)
    console.log('i did it')
  }
  
  showCurrentSlide() {
    this.slideTargets.forEach((el, i) => {
      el.classList.toggle("slide--current", this.index == i)
    })
  }
}