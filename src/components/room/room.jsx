import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Resources
import defaultImg from '../../images/room-1.jpeg';

const Room = ({ room }) => {
    const { name, slug, price, images } = room;

    const featuredImg = images[0];

    return (
        <article className='room'>
            <div className='img-container'>
                <img src={featuredImg || defaultImg} alt={name} />
                <div className='price-top'>
                    <h6>${price}</h6> <p>per night</p>
                </div>
                <Link to={`rooms/${slug}`} className='btn-primary room-link'>
                    Featurs
                </Link>
            </div>
            <p className='room-info'>{name}</p>
        </article>
    );
};

Room.propTypes = {
    room: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired
    })
};

export default Room;
