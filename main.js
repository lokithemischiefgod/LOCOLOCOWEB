import $ from 'jquery';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  getDirection: true,
  scrollFromAnywhere: true
});

$(function() {
  $('nav a').on('click', function(e) {
    e.preventDefault();
    const target = $(this).attr('href');
    const section = $(target)[0];
    scroll.scrollTo(section);
  });
});

scroll.on('scroll', (obj) => {
  const sections = $('section');
  sections.each(function () {
    const top = $(this).offset().top;
    const height = $(this).outerHeight();
    if (obj.scroll.y >= top && obj.scroll.y < top + height) {
      const id = $(this).attr('id');
      $('nav a').removeClass('active');
      $(`nav a[href="#${id}"]`).addClass('active');
    }
  });
});
