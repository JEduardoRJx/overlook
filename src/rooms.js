class Rooms {
  constructor(data) {
    this.totalRooms = data.rooms;
    this.totalBookings = data.bookings;
    this.todayRooms = [];
    this.todaysBookings = [];
    this.todaysTotalRevenue = 0;
  }

  getTodaysBookings(date) {
    this.todaysBookings = this.totalBookings.filter(booked => booked.date === date)
    return this.todaysBookings.length
  }

  getTotalRoomsAvailable(date) {
    let totalBookedToday = this.getTodaysBookings(date)
    let roomsAvailableToday = 50 - totalBookedToday;
    // console.log(this.todaysBookings)
    console.log(this.todaysBookings[0]);
    return roomsAvailableToday;
  }

  getTodaysRooms() {
    this.todaysRooms = this.totalRooms.reduce((acc, room) => {
      this.todaysBookings.forEach(bookedRoom => {
        if (room.number === bookedRoom.roomNumber) {
          acc.push(room);
        }
      });
      return acc;
    }, []);
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