class Orders {
  constructor(data) {
    this.orders = data.roomServices;
    this.todaysTotalRevenue  = 0;
    this.allOrdersForRoomServiceToday = []
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

}

export default Orders