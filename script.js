'use strict';
console.log('JS connected');

$(() => {
  const windowHeight = $(window).height();
  const windowWidth = $(window).width()
  $('.land').css('height', windowHeight);

  const header = $('#header');
  $(window).scroll(function() {
    header.css('opacity', '0');
  })
  header.on('mouseenter', function() {
    header.css('opacity', '1')
  })

  const viewSecond = $('.view-second');
  const hiddenLinks = $('.hidden-links');

  viewSecond.on('mouseenter', function() {
    hiddenLinks.addClass('animated fadeInLeft')
  })

  viewSecond.on('mouseout', function() {
    hiddenLinks.removeClass('animate');
    hiddenLinks.removeClass('fadeInLeft');
  })

  const github = $('#github-logo');
  const email = $('#email-logo');
  const linkedIn = $('#linked-in');

  github.on('mouseenter', function() {
    github.addClass('animated bounce')
  })

  github.on('mouseout', function() {
    github.removeClass('animated');
    github.removeClass('bounce')
  })

  email.on('mouseenter', function() {
    email.addClass('animated rubberBand')
  })

  email.on('mouseout', function() {
    email.removeClass('animated');
    email.removeClass('rubberBand')
  })

  linkedIn.on('mouseenter', function() {
    linkedIn.addClass('animated jello')
  })

  linkedIn.on('mouseout', function() {
    linkedIn.removeClass('animated');
    linkedIn.removeClass('jello')
  })


});
