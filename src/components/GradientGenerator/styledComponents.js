import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-size: cover;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: bold;
  color: #ffffff;
`
export const Direction = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
  color: #ffffff79;
`

export const ColorBtnDirections = styled.ul`
  list-style-type: none;
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const ColorTheColor = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #ffffff79;
`
export const ColorPickerInputContainer = styled.form`
  width: 50%;
  display: flex;
  justify-content: row;
  justify-content: space-around;
  align-items: center;
`

export const ColorHashCode = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #ffffff79;
`

export const ColorInput = styled.input`
  height: 40px;
  width: 100px;
  border: none;
  outline: none;
`
export const ColorInputCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
export const CustomButton = styled.button`
  margin-top: 60px;
  height: 40px;
  width: 100px;
  background-color: #00c9b7;
  border: none;
  outline: none;
  border-radius: 5px;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: bold;
  align-self: center;
  margin-left: 50px;
`
