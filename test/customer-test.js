import chai from 'chai';
import Customers from '../src/customers.js';
import sampleData from '../src/sampleData.js';
const expect = chai.expect;

describe('Customers', () => {
  let customers;
  beforeEach(() => {
    customers = new Customers(sampleData);
  });

  it('should be a function', () => {
    expect(Customers).to.be.a('function');
  });

  it('should hold all the customer data', () => {
    expect(customers.allCustomers.length).to.equal(20);
  });

});