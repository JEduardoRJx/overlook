import $ from 'jquery';
// import './css/base.scss';
import Rooms from '../src/rooms.js';
// import Orders from '../src/rooms.js';

export default {


  breakDownDate(date) {
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
  },

  hideSectionsBesidesMain() {
    $('#main').show().siblings('section').hide();
  },

  tabTransitions() {
    $('.nav-icons').on('click', function () {
      $(this).addClass('tab-active');
      $(this).siblings().removeClass('tab-active');
      let attrValue = $(this).attr('href');
      $(attrValue).show().siblings('section').hide();
    });
  },

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

  displayCustomerInformationCustomerTab(customerName) {
    $('.no-customer').hide();
    $('.display-customer-tab').show();
    $('.display-name-customer-tab').text(customerName);
  },

  displayAllOrdersForRoomServiceToday(allOrders) {
    
    allOrders.forEach(order => {
      $('.order-service-today-background').append(`<div class="individual-order">${order.food}</div>`)
    })
  },

  displayRoomServiceOrdersAnyDay(ordersAnyDay) {
    $('.display-order-service-any-day').children().remove();
    ordersAnyDay.forEach(order => {
      $('.display-order-service-any-day').append(`<div class="individual-order">${order.food}</div>`)
    });
  },

  displayAllDatesAndDollarAmountsRoomServiceForCustomer(datesAndDollarAmounts) {
    $('.display-dates-and-dollar-amounts').children().remove();

    datesAndDollarAmounts.forEach(day => {
      $('.display-dates-and-dollar-amounts').append(`<div class='individual-day-dollar-amount'>${day.date} = $${day.totalCost}</div>`);
    })
  },

  displayAmountRoomServiceForCustomerToday(totalAmountForRoomServiceToday) {
    if (totalAmountForRoomServiceToday === 0){
      $('.display-amount-room-service-today').text(`No Valid Data Exists`);
    } else {
      $('.display-amount-room-service-today').text(`$${totalAmountForRoomServiceToday}`);
    }
  },

  displayTotalRoomServiceAmountEver(totalAmountForRoomServiceEver) {
    if (totalAmountForRoomServiceEver === 0){
      $('.display-amount-room-service-ever').text(`No Valid Data Exists`);
    } else {
      $('.display-amount-room-service-ever').text(`$${totalAmountForRoomServiceEver}`);
    }
  },

  displayMostPopularBookingDate(mostPopularBookingDate) {
    $('.most-popular-booking-date').text(mostPopularBookingDate);
  },

  displayDateWithMostRoomsAvail(dateWithMostRoomsAvail) {
    $('.date-with-most-rooms-avail').text(dateWithMostRoomsAvail);
  },

  displayBookingSearch(rooms) {
      $('.booking-service-any-day-btn').on('click', () => {
        if($('.booking-service-any-day-input').val() !== '') {
          let date = $('.booking-service-any-day-input').val();
          rooms.setRoomsAvailable(date);
          this.displayRoomsAvailable(rooms.roomsAvailableForSpecificDate);
          $('.booking-service-any-day-input').val('');
        }
      });
  },

  displayRoomsAvailable(roomsAvailableForSpecificDate) {
    $('.booking-search-rooms-result').children().remove();
    roomsAvailableForSpecificDate.forEach(room => {
    $('.booking-search-rooms-result').append(`<div class="individual-room" id="${room.number}">
      <h3>${room.roomType.toUpperCase()}</h3>
      <p>${room.bedSize.toUpperCase()} SIZE BED</p>
      <p>Num. Beds ${room.numBeds}</p>
      <p>Bidet: ${room.bidet}</p>
      <p>$${room.costPerNight} per. Night</p>
    </div>`)
    });
  },

  // selectingARoom(rooms) {
  //   $('.individual-room').on('click', () => {
  //     console.log("hey2")
  //     let roomID = parseInt(event.currentTarget.id);
  //     rooms.selectRoom(roomID)
  //   });
  // }


}