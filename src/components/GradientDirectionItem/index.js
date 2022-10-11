import {ButtonListItemContainer, CustomButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directions, getGradientDirection, isActiveDirection} = props
  const {directionId, value, displayText} = directions
  console.log(isActiveDirection)
  const onChangeDirection = () => {
    getGradientDirection(directionId)
  }

  return (
    <ButtonListItemContainer>
      <CustomButton
        type="button"
        onClick={onChangeDirection}
        isActiveDirection={isActiveDirection}
        value={value}
      >
        {displayText}
      </CustomButton>
    </ButtonListItemContainer>
  )
}

export default GradientDirectionItem
