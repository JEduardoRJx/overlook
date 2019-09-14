import chai from 'chai';
import Bookings from '../src/bookings.js';
import sampleData from '../src/sampleData.js'
const expect = chai.expect;

describe('Bookings', () => {
  let bookings;
  beforeEach(() => {
    bookings = new Bookings(sampleData.bookings)
  });

  it('should be a function', () => {
    expect(Bookings).to.be.a('function');
  });

  it('shuld return length of bookings', ()=> {
    expect(bookings.bookings.length).to.equal(20);
  });

  it('should return a booking user', ()=> {
    expect(bookings.bookings[0].userID).to.equal(4);
  });

  it('should return a booking date', ()=> {
    expect(bookings.bookings[0].date).to.equal('2019/10/19');
  });

  it('should return a booking room number', ()=> {
    expect(bookings.bookings[0].roomNumber).to.equal(5);
  });

  it('should return total rooms available', () => {
    expect(bookings.getTotalRoomsAvailable('2019/10/19')).to.equal(19)
  });

});