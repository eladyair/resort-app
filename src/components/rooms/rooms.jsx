import React from 'react';

// Context
// With a render props way
import { RoomConsumer } from '../../context/room/room.context';
// With an HOC way
import { withRoomConsumner } from '../../context/room/room.context';

// Components
import RoomFilter from './room-filter/room-filter';
import RoomList from './room-list/room-list';
import Loading from '../loading/loading';

// HOC way
//___________

// Consuming context - Option 3 (Using an HOC consumer, used both in React classes & React functional components)
const Rooms = ({ context }) => {
    const { loading, rooms, sortedRooms } = context;

    if (loading) {
        return <Loading />;
    }
    return (
        <div>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
        </div>
    );
};

export default withRoomConsumner(Rooms);

// Render Props Way
//__________________
// const Rooms = () => {
// // Consuming context - Option 2 (Using a context consumer, used both in React classes & React functional components)
// return (
//     <RoomConsumer>
//         {value => {
//             const { loading, rooms, sortedRooms } = value;
//             if (loading) {
//                 return <Loading />;
//             }
//             return (
//                 <div>
//                     <RoomFilter rooms={rooms} />
//                     <RoomList rooms={sortedRooms} />
//                 </div>
//             );
//         }}
//     </RoomConsumer>
// );
// };

// export default Rooms;
