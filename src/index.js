// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'
import domUpdates from './domUpdates';


console.log('This is the JavaScript entry file - your code begins here.');
//CODE BELOW
let usersResponse = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users').then(response => response.json());
let roomsResponse = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms').then(response => response.json());;
let bookingResponse = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings').then(response => response.json());;
let roomServiceResponse = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/room-services/roomServices').then(response => response.json());
let hotelData = {users: [], rooms: [], bookings: [], roomServices: []};

Promise.all([usersResponse, roomsResponse, bookingResponse, roomServiceResponse])
  .then(data => {
    hotelData['users'] = data[0].users;
    hotelData['rooms'] = data[1].rooms;
    hotelData['bookings'] = data[2].bookings;
    hotelData['roomServices'] = data[3].roomServices
    return hotelData
  })
  .then(hotelData => {
    customer
  })
  .then(hotelData => console.log("hotelData", hotelData))
  .catch(error => console.log(error));

//Hide all the sections besides the MAIN section on page load
$('#main').show().siblings('section').hide();

//Tab transitions
$('.nav-icons').on('click', function () {
  $(this).addClass('tab-active');
  $(this).siblings().removeClass('tab-active');
  let attrValue = $(this).attr('href');
  $(attrValue).show().siblings('section').hide();
});


let getDate = () => {
  let date = new Date();
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
}

// let bookings = new Bookings()
// function displayTotalRoomsAvailable(date) {
domUpdates.displayTotalRoomsAvailable(getDate());
// }

$('.todays-date').text(getDate)

// function getRoomsAvailalbeToday(getDate()) {
//   return `${bookings.filter(booked => booked.date !== date).length}`
// }