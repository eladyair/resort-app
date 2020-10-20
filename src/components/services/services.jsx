import React, { useState } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

// Components
import Title from '../title/title';

const Services = () => {
    const [services, setServices] = useState([
        {
            icon: <FaCocktail />,
            title: 'free cocktails',
            info: 'Lorem ipsum dolor sit amet consectetur adiipsdasdfd elit. Magni corsporsit!'
        },
        {
            icon: <FaHiking />,
            title: 'Endless Hiking',
            info: 'Lorem ipsum dolor sit amet consectetur adiipsdasdfd elit. Magni corsporsit!'
        },
        {
            icon: <FaShuttleVan />,
            title: 'Free Shuttles',
            info: 'Lorem ipsum dolor sit amet consectetur adiipsdasdfd elit. Magni corsporsit!'
        },
        {
            icon: <FaBeer />,
            title: 'Stronger Beer',
            info: 'Lorem ipsum dolor sit amet consectetur adiipsdasdfd elit. Magni corsporsit!'
        }
    ]);

    return (
        <section className='services'>
            <Title title='Services' />
            <div className='services-center'>
                {services.map((service, index) => {
                    return (
                        <article key={index} className='service'>
                            <span>{service.icon}</span>
                            <h6>{service.title}</h6>
                            <p>{service.info}</p>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Services;
