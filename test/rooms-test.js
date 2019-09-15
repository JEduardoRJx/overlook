import chai from 'chai';
import Rooms from '../src/rooms.js';
import sampleData from '../src/sampleData.js';
const expect = chai.expect;

describe('Rooms', () => {
  let rooms;
  beforeEach(() => {
    rooms = new Rooms(sampleData);
  });

  it('should be a function', () => {
    expect(Rooms).to.be.a('function');
  });

  it('shuld return amount of rooms', ()=> {
    expect(rooms.totalRooms.length).to.equal(20);
  });

  it('should return amount of totalBookings', () => {
    expect(rooms.totalBookings.length).to.equal(20);
  });

  it('should return a booking user', ()=> {
    expect(rooms.totalBookings[0].userID).to.equal(4);
  });

  it('should return a booking date', ()=> {
    expect(rooms.totalBookings[0].date).to.equal('2019/10/19');
  });

  it('should return a booking room number', ()=> {
    expect(rooms.totalBookings[0].roomNumber).to.equal(5);
  });

  it('should return room number', ()=> {
    expect(rooms.totalRooms[0].number).to.equal(1);
  });

  it('should return room type', ()=> {
    expect(rooms.totalRooms[0].roomType).to.equal('residential suite');
  });

  it('should return if room has a bidet', ()=> {
    expect(rooms.totalRooms[0].bidet).to.equal(false);
  });

  it('should return rooms bedsize', ()=> {
    expect(rooms.totalRooms[0].bedSize).to.equal('twin');
  });

  it('should return rooms number of beds', ()=> {
    expect(rooms.totalRooms[0].numBeds).to.equal(1);
  });

  it('should return rooms number of beds', ()=> {
    expect(rooms.totalRooms[0].costPerNight).to.equal(265.03);
  });

  it('should return total bookings today', ()=> {
    expect(rooms.getTotalBookingsToday('2019/10/19')).to.equal(1);
  });

  it('should return total rooms available', () => {
    expect(rooms.getTotalRoomsAvailableToday('2019/10/19')).to.equal(19);
  });

  it('should get number of rooms booked today', () => {
    rooms.getTotalBookingsToday('2019/10/19');
    rooms.getRoomsBookedToday();
    expect(rooms.roomsBookedToday.length).to.equal(1);
  });

  it('should calculate todays total revenue', ()=> {
    rooms.getTotalBookingsToday('2019/10/19');
    rooms.getRoomsBookedToday();
    rooms.calculateTodaysTotalRevenue();
    expect(rooms.todaysTotalRevenue).to.equal(246.65);
  });

});