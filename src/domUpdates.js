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
    $('."display-customer-tab"').hide()
  },

  displayCustomerName(customerName) {
    console.log(customerName)
    $('.no-customer').hide ();
    $('.display-name-background').show()
    
    //AM HERE 9/15/2019
    // $('.display-name').text(customerName);
  }

}