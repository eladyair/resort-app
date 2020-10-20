import styled from 'styled-components';

// Resources
import defaultImg from '../../images/room-1.jpeg';

const StyledHero = styled.header`
    min-height: 60vh;
    background: url(${props => (props.hero ? props.hero : defaultImg)}) center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default StyledHero;
