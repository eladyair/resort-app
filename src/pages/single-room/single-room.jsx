import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

// Context
import { RoomContext } from '../../context/room/room.context';

// Resources
import defaultImg from '../../images/room-1.jpeg';

// Components
import StyledHero from '../../components/hero/hero.styled';
import Banner from '../../components/banner/banner';

export default class SinglRoom extends Component {
    constructor(props) {
        super(props);

        this.state = {
            slug: this.props.match.params.id,
            defaultImg,
            room: null
        };
    }

    static contextType = RoomContext;

    componentDidMount() {}

    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);

        if (!room) {
            return (
                <div className='error'>
                    <h3>no such room could be found...</h3>
                    <Link to='/rooms' className='btn-primary'>
                        back to rooms
                    </Link>
                </div>
            );
        }

        const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;

        // Excluding the bigger room img from the rest of the images
        const [mainImg, ...restImgs] = images;
        return (
            <Fragment>
                <StyledHero hero={mainImg}>
                    <Banner title={`${name} room`}>
                        <Link to='/rooms' className='btn-primary'>
                            back to rooms
                        </Link>
                    </Banner>
                </StyledHero>
                <section className='single-room'>
                    <div className='single-room-images'>
                        {restImgs.map((img, index) => (
                            <img key={index} src={img} alt={name} />
                        ))}
                    </div>
                    <div className='single-room-info'>
                        <article className='desc'>
                            <h3>details</h3>
                            <p>{description}</p>
                        </article>
                        <article className='info'>
                            <h3>info</h3>
                            <h6>price : ${price}</h6>
                            <h6>size : ${size} SQFT</h6>
                            <h6>max capacity : {capacity > 1 ? ` ${capacity} people` : ` ${capacity} perosn`}</h6>
                            <h6>{pets ? 'pets allowed' : 'no pets allowed'}</h6>
                            <h6>{breakfast && 'free breakfast included'}</h6>
                        </article>
                    </div>
                </section>
                <section className='room-extras'>
                    <h6>extras</h6>
                    <ul className='extras'>
                        {extras.map((ext, index) => (
                            <li key={index}>- {ext}</li>
                        ))}
                    </ul>
                </section>
            </Fragment>
        );
    }
}
