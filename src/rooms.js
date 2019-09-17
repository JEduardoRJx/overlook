class Rooms {
  constructor(data) {
    this.totalRooms = data.rooms;
    this.totalBookings = data.bookings;
    this.roomsBookedToday = [];
    this.bookingsToday = [];
    this.todaysTotalRevenue = 0;
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

  

}

export default Rooms