import { Controller } from "stimulus";

export default class extends Controller {
  static targets = [ "slide" ]
  
  connect() {
    console.log(this.slideTargets.length)
  }

  initialize() {
    this.showSlide(0)
    
    // example of how to set some data attributes on the html
    this.data.set("initialized", true)
    
    console.log(this.data.get("alert"))
  
    if (this.data.get("alert") == "true") {
      alert('i should alert')
    }
  }
  
  isFirstSlide() {
    if ((this.index -1) == 0) {
      return true
    } else {
      return false
    }
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
      alert('sorry last slide');
    } else {
        this.showSlide(this.index + 1)
    }
    
  }

  previous() {
    if (this.isFirstSlide) {
      alert("sorry can't go back anymore")
    } else {
      this.showSlide(this.index - 1)  
    }
  }

  showSlide(index) {
    this.index = index
    this.slideTargets.forEach((el, i) => {
      el.classList.toggle("slide--current", index == i)
    })
  }
}