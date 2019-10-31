function Swiper(option) {
  this.option = option
  this.init()
}

Swiper.prototype = {
  index: 0,
  init() {
    $('.images>img').eq(this.slideIndex(this.index)).addClass('current').siblings().addClass('enter')
    $('.images>img').css({ 'transition-duration': this.duration + 's' })
    this.main()
  },
  main() {
    const delay = this.option.delay
    const slide = () => {
      $('.images>img').eq(this.slideIndex(this.index)).addClass('leave').one('transitionend', function() {
        $(this).removeClass('current leave').addClass('enter')
      })
      $('.images>img').eq(this.slideIndex(this.index + 1)).removeClass('enter leave').addClass('current')
      this.index += 1
      setTimeout(slide, delay)
    }
    setTimeout(slide, delay);
  },
  slideIndex(index) {
    return index % 3
  }
}

new Swiper({ duration: 1, delay: 1000 })