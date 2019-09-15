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
      $('.all-customers').append(`<div class="individual-customer">${customer.name}</div>`)
    });
  },

  displaySelectCustomer() {
    $('.no-customer').show();
  }

}