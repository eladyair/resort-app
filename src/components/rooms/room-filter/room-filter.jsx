import React, { useContext } from 'react';

// Context
import { RoomContext } from '../../../context/room/room.context';

// Components
import Title from '../../title/title';

// Get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(i => i[value]))];
};

// Consuming context - Option 4 (Using hook of useContext, only in functional components)
const RoomFilter = ({ rooms }) => {
    const context = useContext(RoomContext);

    const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = context;

    let roomTypes = getUnique(rooms, 'type');
    roomTypes = ['all', ...roomTypes];

    let capacities = getUnique(rooms, 'capacity');
    //capacities = ['1', ...capacities];

    return (
        <section className='filter-container'>
            <Title title='search rooms' />
            <form className='filter-form'>
                {/* select type - room types */}
                <div className='form-group'>
                    <label htmlFor='type'>room type</label>
                    <select name='type' id='type' className='form-control' value={type} onChange={handleChange}>
                        {roomTypes.map((roomType, index) => (
                            <option key={index} value={roomType}>
                                {roomType}
                            </option>
                        ))}
                    </select>
                </div>
                {/* end select type - room types */}

                {/* select type -guests */}
                <div className='form-group'>
                    <label htmlFor='capacity'>Guests</label>
                    <select name='capacity' id='capacity' className='form-control' value={capacity} onChange={handleChange}>
                        {capacities.map((capcity, index) => (
                            <option key={index} value={capcity}>
                                {capcity}
                            </option>
                        ))}
                    </select>
                </div>
                {/* end select type - guests */}

                {/* range type -price */}
                <div className='form-group'>
                    <label htmlFor='price'>room price ${price}</label>
                    <input
                        type='range'
                        className='form-control'
                        name='price'
                        id='price'
                        min={minPrice}
                        max={maxPrice}
                        value={price}
                        onChange={handleChange}
                    />
                </div>
                {/* end range type - price */}

                {/* input type - size */}
                <div className='form-group'>
                    <label htmlFor='size'>room size</label>
                    <div className='size-inputs'>
                        <input type='number' className='size-input' name='minSize' id='size' value={minSize} onChange={handleChange} />
                        <input type='number' className='size-input' name='maxSize' id='size' value={maxSize} onChange={handleChange} />
                    </div>
                </div>
                {/* end input type - size */}

                {/* checkbox type - extras */}
                <div className='form-group'>
                    <div className='single-extra'>
                        <input type='checkbox' name='breakfast' id='breakfast' checked={breakfast} onChange={handleChange} />
                        <label htmlFor='breakfast'>breakfast</label>
                    </div>
                    <div className='single-extra'>
                        <input type='checkbox' name='pets' id='pets' checked={pets} onChange={handleChange} />
                        <label htmlFor='pets'>pets</label>
                    </div>
                </div>
                {/* end checkbox type - extras  */}
            </form>
        </section>
    );
};

export default RoomFilter;
