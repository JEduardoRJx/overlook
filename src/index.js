// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

$('#main').show().siblings('section').hide();

//Tab transitions
$('.nav-icons').on('click', function () {
  $(this).addClass('tab-active');
  $(this).siblings().removeClass('tab-active');
  let attrValue = $(this).attr('href');
  $(attrValue).show().siblings('section').hide();
});

