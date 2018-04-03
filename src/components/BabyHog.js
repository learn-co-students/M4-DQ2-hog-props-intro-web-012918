import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import Baby from '../assets/baby-hog.png'
import SunBaby from '../assets/sun-eyes.png'
import BlueBaby from '../assets/blue-eyes.png'
import GlowingBaby from '../assets/glowing-eyes.png'

const imgMapper = {
  'blue': BlueBaby,
  'glowing': GlowingBaby,
  'sun': SunBaby,
  'baby': Baby
}

class BabyHog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: props.hog.name,
      weight: props.hog.weight,
      eyeColor: '',
      image: Baby,
      imgHeight: 200
    }
  }

  selectImg() {
    switch (this.props.eyeColor) {
      case 'blue':
        return imgMapper.blue;
      case 'glowing':
        return imgMapper.glowing;
      case 'sun':
        return imgMapper.sun;
      default:
        return imgMapper.baby;
    }
  }

  changeWeight = (event) => {
    event.preventDefault()
    if (event.target.id === "increase") {
      this.setState({
        imgHeight: this.state.imgHeight + 10
      })
    } else {
      this.setState({
        imgHeight: this.state.imgHeight - 10
      })
    }
  }

  setEyeColor = () => {
    this.setState({
      eyeColor: this.props.eyeColor
    })
  }

  render() {
    return (
        <li className="hogbabies">
          <h1>{this.state.name}</h1>
          <h3>Weight: {this.state.weight}</h3>
          <h4>Eye Color: {this.props.eyeColor}</h4>
          <div className="wrap-crap">
            <Button animated id="increase" onClick={this.changeWeight}>
              <Button.Content id="increase" visible>Increase Weight</Button.Content>
              <Button.Content id="increase" hidden>
                <Icon id="increase" name='plus' />
              </Button.Content>
            </Button>

            <Button animated id="decrease" onClick={this.changeWeight}>
              <Button.Content id="decrease" visible>Decrease Weight</Button.Content>
              <Button.Content id="decrease" hidden>
                <Icon id="decrease" name='minus' />
              </Button.Content>
            </Button>
          </div>


          <img src={this.selectImg()} style={{height: `${this.state.imgHeight}px`}} alt="MasterBlasterJrJr" />


        </li>
    )
  }
}

export default BabyHog;
