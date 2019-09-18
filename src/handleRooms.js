export function handleRooms(rooms, dUpdates) {
  rooms.getMostPopularBookingDate();
  dUpdates.displayMostPopularBookingDate(rooms.mostPopularBookingDate);
  rooms.getDateWithMostRoomsAvail();
  dUpdates.displayDateWithMostRoomsAvail(rooms.dateWithMostRoomsAvail);
}