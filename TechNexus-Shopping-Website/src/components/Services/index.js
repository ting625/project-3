
import React from 'react';
import { useHistory } from 'react-router-dom';
import Icon1 from '../../images/laptop.png';
import Icon2 from '../../images/camera.png';
import Icon3 from '../../images/pro-video.png';
import Icon4 from '../../images/smartwatch.png';
import Icon5 from '../../images/smart-phone.png';
import Icon6 from '../../images/tablet.png';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from './ServicesElements';

const Services = () => {
  const history = useHistory();

  const navigateToShop = () => {
    history.push('/shop');
  };

  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Products</ServicesH1>
      <ServicesWrapper>
        <ServicesCard onClick={navigateToShop}>
          <ServicesIcon src={Icon1} />
          <ServicesH2>LAPTOP</ServicesH2>
          <ServicesP>
            Combine cutting-edge performance with portability, empowering you to
            work, create, and play from anywhere.
          </ServicesP>
        </ServicesCard>
        <ServicesCard onClick={navigateToShop}>
          <ServicesIcon src={Icon2} />
          <ServicesH2>CAMERA</ServicesH2>
          <ServicesP>
            Capture every moment in stunning detail with our cameras, designed
            for precision, clarity, and ease of use, whether you're a
            professional or a hobbyist.
          </ServicesP>
        </ServicesCard>
        <ServicesCard onClick={navigateToShop}>
          <ServicesIcon src={Icon3} />
          <ServicesH2>PRO VIDEO</ServicesH2>
          <ServicesP>
            Elevate your storytelling with our professional video equipment,
            delivering unmatched quality, versatility, and control for cinematic
            results every time.
          </ServicesP>
        </ServicesCard>
        <ServicesCard onClick={navigateToShop}>
          <ServicesIcon src={Icon4} />
          <ServicesH2>SMART WATCH</ServicesH2>
          <ServicesP>
            Offer seamless integration of fitness tracking, notifications, and
            health monitoring in a sleek, wearable design.
          </ServicesP>
        </ServicesCard>
        <ServicesCard onClick={navigateToShop}>
          <ServicesIcon src={Icon5} />
          <ServicesH2>SMART PHONE</ServicesH2>
          <ServicesP>
            Design for seamless connectivity, stunning visuals, and superior
            performance in the palm of your hand.
          </ServicesP>
        </ServicesCard>
        <ServicesCard onClick={navigateToShop}>
          <ServicesIcon src={Icon6} />
          <ServicesH2>TABLETS</ServicesH2>
          <ServicesP>
            Combine the power of a computer with the portability of a smartphone,
            offering a versatile solution for work, creativity, and entertainment
            on the go.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
