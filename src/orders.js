class Orders {
  constructor(data) {
    this.orders = data.roomServices;
    this.todaysTotalRevenue  = 0;
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
}

export default Orders