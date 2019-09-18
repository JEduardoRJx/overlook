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

  it('customerID should start as null', () => {
    expect(orders.customerID).to.equal(null);
  });

  it('all dates and dollar amouns for room service for a customer should be an array', () => {
    expect(orders.allDatesAndDollarAmountsRoomServiceForCustomer).to.be.a('array');
  });

  it('total amount of room service for a customer today should start as 0', () => {
    expect(orders.totalAmountRoomServiceForCustomerToday).to.equal(0);
  });

  it('total amount of room service for a customer ever should start as 0', () => {
    expect(orders.totalAmountRoomServiceForCustomerEver).to.equal(0);
  });

  it('should calculate today\'s total revenue', () => {
    orders.calculateTodaysTotalRevenue('2019/07/29')
    expect(orders.todaysTotalRevenue).to.equal(14.9);
  });

  it('should get all orders for room service today', () => {
    orders.getAllOrdersForRoomServiceToday('2019/07/29');
    expect(orders.allOrdersForRoomServiceToday.length).to.equal(1);
  });

  it('should get room service orders for any day', () => {
    orders.getRoomServiceOrdersAnyDay('2019/07/29');
    expect(orders.roomServiceOrdersAnyDay.length).to.equal(1);
  });

  it('should set customer id', () => {
    orders.setCustomerID(14);
    expect(orders.customerID).to.equal(14);
  });

  it('should set all dates and dollar amouns for room service for a customer', () => {
    orders.setCustomerID(14)
    orders.setAllDatesAndDollarAmountsRoomServiceForCustomer(orders.customerID);
    expect(orders.allDatesAndDollarAmountsRoomServiceForCustomer ).to.deep.equal([
      {
        userID: 14,
        date: '2019/07/29',
        food: 'Rustic Concrete Sandwich',
        totalCost: 14.9
      }
    ]);
  });

  it.skip('', () => {
    expect(orders).to.equal();
  });

  it.skip('', () => {
    expect(orders).to.equal();
  });


});