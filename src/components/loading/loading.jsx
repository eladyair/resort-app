import React from 'react';

// Resources
import loadingGif from '../../images/gif/loading-arrow.gif';

const Loading = () => {
    return (
        <div className='loading'>
            <img src={loadingGif} alt='Loading' />
        </div>
    );
};

export default Loading;
