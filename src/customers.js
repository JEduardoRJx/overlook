class Customers {
  constructor(data) {
    this.allCustomers = data.users;
    this.customer = {};
  }

  selectCustomer(customerID) {
    this.customer = this.allCustomers.find(customer => customer.id === customerID);
  }

  addCustomer(customerName) {
    let newCustomer = {
      id: this.allCustomers.length + 1,
      name: customerName
    }
    this.allCustomers.push(newCustomer);
    this.selectCustomer(newCustomer.id);
  }




}

export default Customers