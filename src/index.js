// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

$('.main-icon').on('click', () => {
  $('a.main-icon').addClass('tab-active');
  $('a.orders-icon').removeClass('tab-active');
  $('a.rooms-icon').removeClass('tab-active')
  $('a.customer-icon').removeClass('tab-active')

});

$('.orders-icon').on('click', () => {
  $('a.orders-icon').toggleClass('tab-active');
  $('a.main-icon').removeClass('tab-active');
  $('a.rooms-icon').removeClass('tab-active');
  $('a.customer-icon').removeClass('tab-active');
});

$('.rooms-icon').on('click', () => {
  $('a.rooms-icon').toggleClass('tab-active');
  $('a.main-icon').removeClass('tab-active');
  $('a.orders-icon').removeClass('tab-active');
  $('a.customer-icon').removeClass('tab-active');
});

$('.customer-icon').on('click', () => {
  $('a.customer-icon').toggleClass('tab-active');
  $('a.main-icon').removeClass('tab-active');
  $('a.orders-icon').removeClass('tab-active');
  $('a.rooms-icon').removeClass('tab-active');
});
