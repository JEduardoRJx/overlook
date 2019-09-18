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

  it('customer should start with an empty object', () => {
    expect(customers.customer).to.deep.equal({});
  });

  it('should be able to select a customer', () => {
    customers.selectCustomer(1);
    expect(customers.customer).to.deep.equal({id: 1, name: "Matilde Larson"});
  });

  it('should be able to add a customer', () => {
    customers.addCustomer('Pablo Sanchez');
    expect(customers.customer).to.deep.equal({id: 21, name: 'Pablo Sanchez'});
  });

});