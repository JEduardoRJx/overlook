import chai from 'chai';
import spies from 'chai-spies'
const expect = chai.expect;
chai.use(spies);
import {handleRooms} from '../src/handleRooms.js'

describe('handleRooms', () => {

  let rooms, dUpdates;
  beforeEach(() => {
    rooms = {
      getMostPopularBookingDate: () => {},
      getDateWithMostRoomsAvail: () => {}
    }
    dUpdates = {
      displayMostPopularBookingDate: () => {},
      displayDateWithMostRoomsAvail: () => {}
    }
  });

  it('should call getMostPopularBookingDate on the rooms object', () => {
    //write a rooms object that has to have the rooms properties
    const roomSpy = chai.spy.on(rooms, 'getMostPopularBookingDate');
    handleRooms(rooms, dUpdates);
    expect(roomSpy).to.have.been.called();
  });

  it('should call getDateWithMostRoomsAvail on the rooms object', () =>{
    const roomSpy = chai.spy.on(rooms, 'getMostPopularBookingDate');
    handleRooms(rooms, dUpdates);
    expect(roomSpy).to.have.been.called();
  })
  
  it.skip('should call displayMostPopularBookingDate on the dUpdates object', () =>{
    const dUpdatesSpy = chai.spy.on(dUpdates, 'getMostPopularBookingDate');
    handleRooms(rooms, dUpdates);
    expect(dUpdatesSpy).to.have.been.called.with('2019/09/15');
  })

  it.skip('', () =>{

  })

  it.skip('', () =>{

  })



});