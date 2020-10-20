import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

// Components
import Hero from '../../components/hero/hero';
import Banner from '../../components/banner/banner';
import Services from '../../components/services/services';
import FeaturedRooms from '../../components/featured-rooms/featured-rooms';

const Home = () => {
    return (
        <Fragment>
            <Hero>
                <Banner title='luxurious rooms' subtitle='deluxe rooms statrting at $299'>
                    <Link to='/rooms' className='btn-primary'>
                        our rooms
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
        </Fragment>
    );
};

export default Home;
