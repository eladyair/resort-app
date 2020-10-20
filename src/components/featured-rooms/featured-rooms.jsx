import React, { Component } from 'react';
import { RoomContext } from '../../context/room/room.context';

// Components
import Loading from '../loading/loading';
import Room from '../room/room';
import Title from '../title/title';

export default class FeaturedRooms extends Component {
    // Consuming context - Option 1 (Only In React Classes)
    static contextType = RoomContext;

    render() {
        let { loading, featuredRooms: rooms } = this.context;

        rooms = rooms.map(room => <Room key={room.id} room={room} />);

        return (
            <section className='featured-rooms'>
                <Title title='featured rooms' />
                <div className='featured-rooms-center'>{loading ? <Loading /> : rooms}</div>
            </section>
        );
    }
}
