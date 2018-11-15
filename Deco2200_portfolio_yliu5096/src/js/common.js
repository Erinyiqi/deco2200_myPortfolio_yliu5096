var wow = new WOW({
  boxClass: 'wow',
  animatedClass: 'animated',
  offset: 0,
  mobile: false,
  live: true
});
wow.init();

function canShow (dom, effect = "fadeInUp") {
  if (Array.isArray(dom)) {
    dom.each((index, item) => {
      canSingleShow(item, effect)
    })
  } else {
    canSingleShow(dom, effect)
  }
}

function canSingleShow (dom, effect = "fadeInUp") {
  if ($(dom) == null) {
    return
  }
  if ($(dom).hasClass("animated")) {
    return
  }
  effect = "animated " + effect.trim()
  if ($(dom).offset().top + $(dom).height() / 3 < $(window).height() + $(window).scrollTop()) {
    $(dom).removeClass('hide').addClass(effect)
  }
}