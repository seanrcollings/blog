import React, { Component } from 'react';
import ReactCrop from 'react-image-crop';
import getCroppedImg from './crop';

export default class AvatarModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      crop: {
        aspect: 1 / 1,
      }
    }
  }

  setCrop = (crop) => {
    this.setState({ crop })
  }

  onComplete = () => {
    console.log(getCroppedImg(document.getElementsByClassName('ReactCrop__image')[0], this.state.crop, 'avatar'))
  }

  render() {
    if (this.props.avatar !== null) {
      return (
        <div className="avatar-modal-wrapper">
          <div className='avatar-modal'>
            <h2 className="avatar-modal-title">Crop the Image for Your Avatar</h2>
            <ReactCrop
              src={this.props.avatar}
              crop={this.state.crop}
              onChange={this.setCrop}
            />
            <button className='avatar-modal-button' onClick={this.onComplete}>OK</button>
          </div>
        </div>
      )
    } else { return null }
  }
}