import styled from 'styled-components';
import bg_mobile_light from '../../images/bg-mobile-light.jpg';
import bg_desktop_light from '../../images/bg-desktop-light.jpg';

const BackgroundCss = styled.div`
    
    height: 100%;
    width: 100%;
    background-color: var(--very-light-grayish-blue);
    position: absolute;    
    
    header{
        /* max-width: 100%; */
        width: 100%;
        height: 30%;
        background-image: url(${bg_mobile_light});
    }

    @media screen and (min-width: 375px){
        header{
            background-image: url(${bg_desktop_light});
            max-width: 100%;
            background-repeat: no-repeat;
            background-size: cover;
        }
    }
`;

export default BackgroundCss;