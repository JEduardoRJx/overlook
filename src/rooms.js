class Rooms {
  constructor(data) {
    this.totalRooms = data.rooms;
    this.totalBookings = data.bookings;
    this.roomsBookedToday = [];
    this.bookingsToday = [];
    this.todaysTotalRevenue = 0;
  }

  getTodaysBookings(date) {
    this.bookingsToday = this.totalBookings.filter(booked => booked.date === date)
    return this.bookingsToday.length
  }

  getTotalRoomsAvailable(date) {
    let totalBookedToday = this.getTodaysBookings(date);
    let roomsAvailableToday = this.totalRooms.length - totalBookedToday;
    return roomsAvailableToday;
  }

  getTodaysRooms() {
    this.todaysRooms = this.totalRooms.reduce((acc, room) => {
      this.bookingsToday.forEach(bookedRoom => {
        if (room.number === bookedRoom.roomNumber) {
          acc.push(room);
        }
      });
      return acc;
    }, []);
    return this.todaysRooms;
  }

  calculateTodaysTotalRevenue() {
    this.todaysTotalRevenue = this.totalRooms.reduce((acc, room) => {
      return acc += room.costPerNight;
    }, 0);
    this.todaysTotalRevenue = parseFloat(this.todaysTotalRevenue.toFixed(2));
    return this.todaysTotalRevenue;
  }
}

export default Rooms