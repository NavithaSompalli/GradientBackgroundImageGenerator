import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  AppContainer,
  Heading,
  Direction,
  ColorBtnDirections,
  ColorTheColor,
  ColorPickerInputContainer,
  ColorHashCode,
  ColorInput,
  ColorInputCard,
  CustomButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    isActionBtnId: gradientDirectionsList[0].directionId,
    colorHashCode1: '#8ae323',
    colorHashCode2: '#014f7b',
    bgHashCode1: '#8ae323',
    bgHashCode2: ' #014f7b',
  }

  getGradientDirection = id => {
    this.setState({isActionBtnId: id})
  }

  generateColorGradientImage = event => {
    event.preventDefault()
    const {colorHashCode1, colorHashCode2} = this.state

    this.setState({
      bgHashCode1: colorHashCode1,
      bgHashCode2: colorHashCode2,
    })
  }

  onChangeColorHashCode1 = event => {
    this.setState({colorHashCode1: event.target.value})
  }

  onChangeColorHashCode2 = event => {
    this.setState({colorHashCode2: event.target.value})
  }

  render() {
    const {
      isActionBtnId,
      colorHashCode1,
      bgHashCode1,
      colorHashCode2,
      bgHashCode2,
    } = this.state

    console.log(bgHashCode1)
    return (
      <AppContainer
        data-testid="gradientGenerator"
        style={{
          background: `linear-gradient(to ${isActionBtnId.toLowerCase()}, ${bgHashCode1}, ${bgHashCode2})`,
        }}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Direction>Choose Direction</Direction>
        <ColorBtnDirections>
          {gradientDirectionsList.map(directionItem => (
            <GradientDirectionItem
              key={directionItem.directionId}
              directions={directionItem}
              getGradientDirection={this.getGradientDirection}
              isActiveDirection={directionItem.directionId === isActionBtnId}
            />
          ))}
        </ColorBtnDirections>
        <ColorTheColor>Pick the Colors</ColorTheColor>
        <ColorPickerInputContainer onSubmit={this.generateColorGradientImage}>
          <ColorInputCard>
            <ColorHashCode>{colorHashCode1}</ColorHashCode>
            <ColorInput
              type="color"
              value={colorHashCode1}
              onChange={this.onChangeColorHashCode1}
            />
          </ColorInputCard>

          <ColorInputCard>
            <ColorHashCode>{colorHashCode2}</ColorHashCode>
            <ColorInput
              type="color"
              value={this.colorHashCode2}
              onChange={this.onChangeColorHashCode2}
            />
          </ColorInputCard>
        </ColorPickerInputContainer>
        <CustomButton type="submit">Generate</CustomButton>
      </AppContainer>
    )
  }
}

export default GradientGenerator
