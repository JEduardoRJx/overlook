class Rooms {
  constructor(data) {
    this.totalRooms = data.rooms;
    this.totalBookings = data.bookings;
    this.roomsBookedToday = [];
    this.bookingsToday = [];
    this.todaysTotalRevenue = 0;
    this.customerID = null;
    this.dateWithMostRoomsAvail;
  }

  getTotalBookingsToday(date) {
    this.bookingsToday = this.totalBookings.filter(booked => booked.date === date)
    return this.bookingsToday.length
  }

  getTotalRoomsAvailableToday(date) {
    let totalBookedToday = this.getTotalBookingsToday(date);
    let roomsAvailableToday = this.totalRooms.length - totalBookedToday;
    return roomsAvailableToday;
  }

  getRoomsBookedToday() {
    this.roomsBookedToday = this.totalRooms.reduce((acc, room) => {
      this.bookingsToday.forEach(bookedRoom => {
        if (room.number === bookedRoom.roomNumber) {
          acc.push(room);
        }
      });
      return acc;
    }, []);
    return this.roomsBookedToday;
  }

  calculateTodaysTotalRevenue() {
    this.todaysTotalRevenue = this.roomsBookedToday.reduce((acc, room) => {
      return acc += room.costPerNight;
    }, 0);
    this.todaysTotalRevenue = parseFloat(this.todaysTotalRevenue.toFixed(2));
    return this.todaysTotalRevenue;
  }

  setCustomerID(customerID) {
    this.customerID = customerID
  }
  
  getMostPopularBookingDate() {
    let numBookingsForDate = this.totalBookings.reduce((acc, book) => {
      if (!acc[book.date]) {
        acc[book.date] = 0;
      }
      acc[book.date]++
      return acc;
    }, {});
    
    this.mostPopularBookingDate = Object.keys(numBookingsForDate).sort((a, b) => {
      return numBookingsForDate[b] - numBookingsForDate[a];
    })[0];
  }

  getDateWithMostRoomsAvail() {
    let numBookingsForDate = this.totalBookings.reduce((acc, book) => {
      if (!acc[book.date]) {
        acc[book.date] = 0;
      }
      acc[book.date]++
      return acc;
    }, {});

    this.dateWithMostRoomsAvail = Object.keys(numBookingsForDate).sort((a, b) => {
      return numBookingsForDate[a] - numBookingsForDate[b];
    })[0];
  }

}

export default Rooms