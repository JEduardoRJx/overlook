// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'
import domUpdates from '../src/domUpdates';
import Main from '../src/main.js';
import Rooms from '../src/rooms.js';
import Orders from '../src/orders.js';
import Customers from '../src/customers.js';

import sampleData from '../src/sampleData.js'


console.log('This is the JavaScript entry file - your code begins here.');
//CODE BELOW
let usersResponse = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users').then(response => response.json());
let roomsResponse = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms').then(response => response.json());;
let bookingResponse = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings').then(response => response.json());;
let roomServiceResponse = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/room-services/roomServices').then(response => response.json());
let hotelData = {users: [], rooms: [], bookings: [], roomServices: []};
let main, rooms, orders, customers;


Promise.all([usersResponse, roomsResponse, bookingResponse, roomServiceResponse])
  .then(data => {
    hotelData['users'] = data[0].users;
    hotelData['rooms'] = data[1].rooms;
    hotelData['bookings'] = data[2].bookings;
    hotelData['roomServices'] = data[3].roomServices
    return hotelData
  })
  .then(hotelData => loadTabs(hotelData))
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
  date = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
  date = date.split('/').map(num => (num < 10) ? '0' + num : num).join('/');
  return date;
}
// loadTabs()

function loadTabs(hotelData) {
  main = new Main(hotelData);
  orders = new Orders(hotelData);
  rooms = new Rooms(hotelData);
  customers = new Customers(hotelData);
  displayRoomInfo(rooms);
  getTodaysTotalRevenue(rooms, orders);
  displayCustomersAside(customers);
  handleDisplayNoCustomer();
  selectingACustomer(orders, rooms, customers);
  addCustomer(customers);
  handleOrders(orders);
  handleRooms(rooms, domUpdates);
}

function displayRoomInfo(rooms) {
  let totalRoomsAvail = rooms.getTotalRoomsAvailableToday(getDate());
  let percentRoomsOccupied = ((50 - totalRoomsAvail) / 50)* 100;
  domUpdates.displayDate(getDate());
  domUpdates.displayTotalRoomsAvailable(totalRoomsAvail);
  domUpdates.displayPercentRoomsOccupied(percentRoomsOccupied);
}

function getTodaysTotalRevenue(rooms, orders) {
  rooms.getRoomsBookedToday();
  rooms.calculateTodaysTotalRevenue();
  orders.calculateTodaysTotalRevenue(getDate());
  let totalRev = parseFloat((rooms.todaysTotalRevenue + orders.todaysTotalRevenue).toFixed(2));
  domUpdates.displayTotalRevenue(totalRev);
}

function displayCustomersAside(customers) {
  domUpdates.displayAllCustomers(customers);
  $('.search-customer-input').keyup(searchCustomer);
}

function searchCustomer() {
  let inputVal = $('.search-customer-input').val().toUpperCase();
  let allCustomers = Array.from($('.all-customers').children());
  allCustomers.forEach(customer => {
    if($(customer).text().toUpperCase().includes(inputVal)) {
      $(customer).show(customer).siblings().hide();
    }
  });
}

function handleDisplayNoCustomer() {
  if (Object.keys(customers.customer).length === 0) {
    domUpdates.displayNoCustomer();
  }
}

function selectingACustomer(orders, rooms, customers) {
  $('.individual-customer').on('click', (event) => {
    let customerID = parseInt(event.currentTarget.id);
    customers.selectCustomer(customerID);
    orders.setCustomerID(customerID);
    rooms.setCustomerID(customerID);
    allDatesAndDollarAmountsRoomServiceForCustomer(orders, customerID);
    displayTotalAmountRoomServiceForCustomerToday(orders, customerID);
    displayTotalAmountRoomServiceForCustomerEver(orders, customerID);
    domUpdates.displayCustomerInformationCustomerTab(customers.customer.name);
  }); 
}

function addCustomer(customers) {
  $(document).ready(function() {
    $('.add-customer-btn').on('click', () => {
      if($('.add-customer-input').val() !== '') {
        customers.addCustomer($('.add-customer-input').val())
        $('.add-customer-input').val('');
        domUpdates.displayCustomerInformation(customers.customer.name)
      }
    });
  });
}

//ORDERS
function handleOrders(orders) {
  displayAllordersForRoomService(orders, getDate());
  displayRoomServiceOrdersAnyDay(orders);
}

function displayAllordersForRoomService(orders) {
  orders.getAllOrdersForRoomServiceToday(getDate());
  domUpdates.displayAllOrdersForRoomServiceToday(orders.allOrdersForRoomServiceToday);
}

function displayRoomServiceOrdersAnyDay(orders) {
  $(document).ready(function() {
    $('.room-service-any-day-btn').on('click', () => {
      if($('.room-service-any-day-input').val() !== '') {
        let date = $('.room-service-any-day-input').val();
        orders.getRoomServiceOrdersAnyDay(date);
        domUpdates.displayRoomServiceOrdersAnyDay(orders.roomServiceOrdersAnyDay);
      }
    });
  });
}

function allDatesAndDollarAmountsRoomServiceForCustomer(orders, customerID) {
  orders.setAllDatesAndDollarAmountsRoomServiceForCustomer(customerID);
  domUpdates.displayAllDatesAndDollarAmountsRoomServiceForCustomer(orders.allDatesAndDollarAmountsRoomServiceForCustomer);
}

function displayTotalAmountRoomServiceForCustomerToday(orders, customerID) {
  orders.getAmountRoomServiceForCustomerToday(customerID);
  domUpdates.displayAmountRoomServiceForCustomerToday(orders.totalAmountRoomServiceForCustomerToday);
}

function displayTotalAmountRoomServiceForCustomerEver(orders, customerID) {
  orders.getTotalAmountRoomServiceForCustomerEver(customerID);
  domUpdates.displayTotalRoomServiceAmountEver(orders.totalAmountRoomServiceForCustomerEver);
}

export function handleRooms(rooms, dUpdates) {
  rooms.getMostPopularBookingDate();
  dUpdates.displayMostPopularBookingDate(rooms.mostPopularBookingDate);
  rooms.getDateWithMostRoomsAvail();
  dUpdates.displayDateWithMostRoomsAvail(rooms.dateWithMostRoomsAvail);
  listenForBookingServiceSearch(rooms, domUpdates)
  // domUpdates.selectingARoom(rooms)
}

function listenForBookingServiceSearch(rooms, domUpdates) {
  domUpdates.displayBookingSearch(rooms, domUpdates);
}