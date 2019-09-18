import chai from 'chai';
import Orders from '../src/orders.js';
import sampleData from '../src/sampleData.js';
const expect = chai.expect;

describe('Orders', () => {
  let orders;
  beforeEach(() => {
    orders = new Orders(sampleData);
  });

  it('should be a function', () => {
    expect(Orders).to.be.a('function');
  });

  it('should hold all orders', () => {
    expect(orders.orders).to.be.a('array');
    expect(orders.orders.length).to.equal(20)
  });

  it('should start day with 0 revenue', () => {
    expect(orders.todaysTotalRevenue).to.equal(0);
  });

  it('all orders for room service today should start as an empty array', () => {
    expect(orders.allOrdersForRoomServiceToday).to.be.a('array');
  });

  it('room service any other day should start as an empty array', () => {
    expect(orders.roomServiceOrdersAnyDay).to.be.a('array');
  });

  it.skip('should be a function', () => {
    expect(Orders).to.be.a('function');
  });

  it.skip('should be a function', () => {
    expect(Orders).to.be.a('function');
  });

  it.skip('should be a function', () => {
    expect(Orders).to.be.a('function');
  });

  it.skip('should be a function', () => {
    expect(Orders).to.be.a('function');
  });

  it.skip('should be a function', () => {
    expect(Orders).to.be.a('function');
  });

  it.skip('should be a function', () => {
    expect(Orders).to.be.a('function');
  });


});