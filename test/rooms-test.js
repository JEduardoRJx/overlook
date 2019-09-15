import chai from 'chai';
import Rooms from '../src/rooms.js';
import sampleData from '../src/sampleData.js'
const expect = chai.expect;

describe('Rooms', () => {
  let rooms;
  beforeEach(() => {
    rooms = new Rooms(sampleData)
  });

  it('should be a function', () => {
    expect(Rooms).to.be.a('function');
  });

  it('shuld return length of rooms', ()=> {
    expect(rooms.totalRooms.length).to.equal(20);
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

  it('should return total bookings today', ()=> {
    expect(rooms.getTotalBookingsToday('2019/10/19')).to.equal(1)
  })

  it('should return total rooms available', () => {
    expect(rooms.getTotalRoomsAvailableToday('2019/10/19')).to.equal(19);
  });

  it.skip('should get rooms booked today', () => {
    rooms.getTotalBookingsToday('2019/10/19');
    rooms.getRoomsBookedToday();
    expect(rooms.todayRooms.length).to.equal(1)
  })

});