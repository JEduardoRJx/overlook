class Bookings {
  constructor(data) {
    this.bookings = data
  }

  getTotalRoomsAvailable(date) {
    let roomsAvailable = this.bookings.filter(booked => booked.date !== date).length;
    return parseInt(`${roomsAvailable}`)
  }
}

export default Bookings