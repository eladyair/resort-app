import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Hero from '../../components/hero/hero';
import Banner from '../../components/banner/banner';

const Error = () => {
    return (
        <Hero>
            <Banner title='404' subtitle='page not found'>
                <Link to='/' className='btn-primary'>
                    return home
                </Link>
            </Banner>
        </Hero>
    );
};

export default Error;
