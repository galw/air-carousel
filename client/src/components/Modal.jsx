import React from 'react';
import styled from 'styled-components';
////////////////////////////
// styles for each component
const ModalBackdrop = styled.div`
  display: flex;
  flex: 1;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.3);
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  background-color: #fff;
  width: 100%;
  height: 100%;
`;

const ImageWrapper = styled.div`
display: flex;
flex-direction: row;
align-self: center;
justify-self: center;
`
const MainImage = styled.img`
  border-radius: 15px;
  align-items: center;
  justify-self: center;
`;

const CloseButton = styled.button`
  align-self: flex-start;
  justify-self: flex-end;
`;

const Arrow = styled.a`
  align-self: center;
  padding: 3%;
`;

///////////////////////
// main Modal component
export default class Modal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentImage: 0
    }
  }

  render() {
    if(!this.props.show){
      return null;
    }
    return (
    <ModalBackdrop>
      <ModalBody>
        <Arrow>&#10094;</Arrow>
        <ImageWrapper>
          <MainImage src={this.props.imgs[this.state.currentImage].image} />
        </ImageWrapper>
        <Arrow>&#10095;</Arrow>
        <CloseButton onClick={this.props.showModal}>Close</CloseButton>
      </ModalBody>
    </ModalBackdrop>);
  }
};