class Customers {
  constructor(data) {
    this.allCustomers = data.users;
    this.customer = {};
  }

  selectCustomer(customerID) {
    this.customer = this.allCustomers.find(customer => customer.id === customerID);
  }




}

export default Customers