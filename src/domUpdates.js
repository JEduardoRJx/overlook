import $ from 'jquery';
// import './css/base.scss';
import Rooms from '../src/rooms.js';

export default {

  
  displayDate(date) {
    date = date.split('/');
    let dateFormat = `${date[1]}/${date[2]}/${date[0]}`;
    $('.todays-date').text(dateFormat);
  },
  
  displayTotalRoomsAvailable(totalRoomsAvail) {
    $('.total-rooms-available').text(totalRoomsAvail)
  },

  displayPercentRoomsOccupied(percentRoomsOccupied) {
    $('.percent-rooms-occupied').text(`${percentRoomsOccupied}%`);
  },
  
  displayTotalRevenue(totalRev) {
    $('.total-revenue').text(`$${totalRev}`);
  },

  displayAllCustomers(customers) {
    customers.allCustomers.forEach(customer => {
      $('.all-customers').append(`<div class="individual-customer" id="${customer.id}">${customer.name}</div>`)
    });
  },

  displayNoCustomer() {
    $('.no-customer').show();
    $('.display-customer-tab').hide()
  },

  displayCustomerInformation(customerName) {
    $('.no-customer').hide();
    $('.display-customer-tab').show();
    $('.display-name-customer-tab').text(customerName);
  },

  displayAllOrdersForRoomServiceToday(allOrders) {
    
    allOrders.forEach(order => {
      $('.room-service-today-background').append(`<div class="individual-order">${order.food}</div>`)
    })
  },

  displayRoomServiceOrdersAnyDay(ordersAnyDay) {
    $('.display-room-service-any-day').children().remove();
    ordersAnyDay.forEach(order => {
      $('.display-room-service-any-day').append(`<div class="individual-order">${order.food}</div>`)
    });
  }

}