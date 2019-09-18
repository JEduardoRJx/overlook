class Orders {
  constructor(data) {
    this.orders = data.roomServices;
    this.todaysTotalRevenue  = 0;
    this.allOrdersForRoomServiceToday = [];
    this.roomServiceOrdersAnyDay = [];
    this.customerID = null;
    this.allDatesAndDollarAmountsRoomServiceForCustomer = []
    this.totalAmountRoomServiceForCustomerToday = 0;
    this.totalAmountRoomServiceForCustomerEver = 0;
  }

  calculateTodaysTotalRevenue(date) {
    this.todaysTotalRevenue  = this.orders.reduce((acc, order) => {
      if (order.date === date) {
        return acc += order.totalCost;
      }
      return acc;
    }, 0);
    this.todaysTotalRevenue  = parseFloat(this.todaysTotalRevenue .toFixed(2));
    return this.todaysTotalRevenue ;
  }

  getAllOrdersForRoomServiceToday(date) {
    this.allOrdersForRoomServiceToday = this.orders.filter(order => order.date === date);
  }

  getRoomServiceOrdersAnyDay(date) {
    this.roomServiceOrdersAnyDay = this.orders.filter(order => order.date === date);
  }

  setCustomerID(customerID) {
    this.customerID = customerID
  }

  setAllDatesAndDollarAmountsRoomServiceForCustomer(customerID) {
    this.allDatesAndDollarAmountsRoomServiceForCustomer = this.orders.filter(order => {
      return order.userID === customerID;
    });
  }

  getAmountRoomServiceForCustomerToday(customerID) {
    let total = 0;
    this.allOrdersForRoomServiceToday.forEach(order => {
      if (order.userID === customerID) {
        total += order.totalCost;
      }
    });
    this.totalAmountRoomServiceForCustomerToday = total;
  }

  getTotalAmountRoomServiceForCustomerEver(customerID) {
    let total = 0;
    this.orders.forEach(order => {
      if (order.userID === customerID) {
        total += order.totalCost;
      }
    })
    this.totalAmountRoomServiceForCustomerEver = parseFloat(total.toFixed(2));
  }
}

export default Orders