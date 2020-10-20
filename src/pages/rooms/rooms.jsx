import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

// Components
import Hero from '../../components/hero/hero';
import Banner from '../../components/banner/banner';
import Rooms from '../../components/rooms/rooms';

const RoomsPage = () => {
    return (
        <Fragment>
            <Hero hero='roomsHero'>
                <Banner title='our rooms' subtitle=''>
                    <Link to='/' className='btn-primary'>
                        return home
                    </Link>
                </Banner>
            </Hero>
            <Rooms />
        </Fragment>
    );
};

export default RoomsPage;
