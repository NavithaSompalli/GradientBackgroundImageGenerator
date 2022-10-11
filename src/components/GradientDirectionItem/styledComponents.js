import styled from 'styled-components/macro'

export const ButtonListItemContainer = styled.li`
  margin: 10px;
`

export const CustomButton = styled.button`
  height: 40px;
  width: 100px;
  border-radius: 5px;
  border: none;
  outline: none;

  background-color: ${props =>
    props.isActiveDirection ? '#ffffff' : '#ededed'};
  color: #00c9b7;
  opacity: ${props => (props.isActiveDirection ? '1' : '0.5')};
`
