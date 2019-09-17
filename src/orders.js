class Orders {
  constructor(data) {
    this.orders = data.roomServices;
    this.todaysTotalRevenue  = 0;
    this.allOrdersForRoomServiceToday = [];
    this.roomServiceOrdersAnyDay = [];
    this.customerID = null;
    this.datesAndDollarAmountsForRoomService = {}
    this.totalAmountForRoomServiceToday = 0;
    this.totalAmountForRoomServiceEver = 0;
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

  setDatesAndDollarAmountsForRoomService() {
    this.datesAndDollarAmountsForRoomService = this.orders.reduce((acc, order) => {
      let totalRoomService = 0;
      if (!acc[order.date]) {
        acc[order.date] = 0;
      }
      totalRoomService += order.totalCost;
      acc[order.date] = totalRoomService;
      return acc;
    }, {});
  }

  getDollarAmountForRoomServiceToday() {
    let total = 0;
    this.allOrdersForRoomServiceToday.forEach(order => {
      total += order.totalCost;
    })
    this.totalAmountForRoomServiceToday = total;
  }

  getTotalRoomServiceAmountEver() {
    let total = 0;
    this.orders.forEach(order => {
      total += order.totalCost;
    })
    this.totalAmountForRoomServiceEver = parseFloat(total.toFixed(2));
  }


}

export default Orders