import React from 'react';
import styled from 'styled-components'
import AlphaMatteImg from './graphics/AlphaMatteImg'
import Flowers from './movieclips/Flowers'
import Bird from './movieclips/Bird'
import { withFlutter } from './hoc/motion'
import { useParallax } from './hooks/parallax'

const Wrapper = styled.div`
  width: 825px;
  max-width: 100%;
  position: relative;
  ::before {
    content: "";
    display: block;
    padding-top: 83.33%;
  }
`
const YellowFlowers = styled(Flowers)`
    position: absolute;
    top: 25%;
    left: 37.21%;
    width: 40.72%;
    height: auto;
`;

const TableShadow = styled(AlphaMatteImg)`
    position: absolute;
    top: 33.33%;
    left: 37.69%;
    width: 54.3%;
    height: auto;
`;

const Table = styled(AlphaMatteImg)`
    position: absolute;
    top: 18.21%;
    left: 8.36%;
    width: 79.87%;
    height: auto;
`;

const Mate = styled(AlphaMatteImg)`
    position: absolute;
    top: 19.44%;
    left: 51.27%;
    width: 23.03%;
    height: auto;
    transition: transform 800ms ease-out;
`;

const SmallFlower = styled(AlphaMatteImg)`
    position: absolute;
    top: 5.86%;
    left: 61.69%;
    width: 14.9%;
    height: auto;
`;

const BigFlower = styled(AlphaMatteImg)`
    position: absolute;
    top: 0%;
    right: 0%;
    width: 22.06%;
    height: auto;
`;

const Window = styled(AlphaMatteImg)`
    position: absolute;
    top: 1.38%;
    left: 70.06%;
    width: 18.18%;
    height: auto;
`;

const Smock = styled(AlphaMatteImg)`
    position: absolute;
    top: 19.13%;
    left: 0%;
    width: 35.75%;
    height: auto;
`;

const Number = styled.img`
    position: absolute;
    left: 19.27%;
    top: 37.8%;
    width: 4.24%;
    height: auto;
`;

const BigBird = styled(Bird)`
    display: block;
    position: absolute;
    left: 3%;
    top: 3.4%;
    width: 28%;
    height: auto;
`;

const SmallBird = styled(Bird)`
    display: block;
    position: absolute;
    left: 66.78%;
    top: 12.8%;
    width: 10.42%;
    height: auto;
    transform: scaleX(-1);
`;

const ParallaxWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  transition: transform 800ms ease-out;
`;

const BirdChair = (props) => {

    const scrollY = useParallax([-0.25, 0.025, -0.05], -250, 250)

  return (
    <Wrapper className={props.className}>
      <ParallaxWrapper style={{ transform: `translate3d(0,${scrollY[1]}px,0)`}}>
        <BigFlower src={require('../../assets/imgs/del-socorro-del-socorro/flower.jpg')} />
        <Window src={require('../../assets/imgs/del-socorro-del-socorro/window.jpg')} />
        <SmallFlower src={require('../../assets/imgs/del-socorro-del-socorro/flower.jpg')} />
        <SmallBird />
      </ParallaxWrapper>
      <ParallaxWrapper style={{ transform: `translate3d(0,${scrollY[0]}px,0)`}}>
        <YellowFlowers src={require('../../assets/imgs/del-socorro-del-socorro/flowers.jpg')} />
        <TableShadow src={require('../../assets/imgs/del-socorro-del-socorro/shadow.jpg')} />
        <Table src={require('../../assets/imgs/del-socorro-del-socorro/table.jpg')} />
        <Mate src={require('../../assets/imgs/del-socorro-del-socorro/mate.jpg')} style={{ transform: `translate3d(0,${scrollY[2]}px,0)`}} />
        <Smock src={require('../../assets/imgs/del-socorro-del-socorro/smock.jpg')} />
        <Number src={require('../../assets/imgs/del-socorro-del-socorro/number.png')} />
        <BigBird />
      </ParallaxWrapper>
    </Wrapper>
  );
}

export default BirdChair