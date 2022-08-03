import styled, { css } from 'styled-components'
import dealerImage from '../Assets/istockphoto-1351218700-170667a.jpeg'

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  outline: none;
  border: none;
  background-color: inherit;
  color: #ffffff;
  font-size: 18px;
  margin: 5px 0px;
  padding: 0;
  margin-bottom: 4px;
`

export const Select = styled.select`
  width: 100%;
  box-sizing: border-box;
  outline: none;
  border: none;
  background-color: inherit;
  color: #ffffff;
  font-size: 18px;
  margin: 5px 0px;
  padding: 0;
  margin-bottom: 4px;
`

export const InputLabel = styled.label`
  display: block;
  font-size: 14px;
  margin-top: 4px;
`
export const InputField = styled.div`
  background-color: #1b1b1b;
  box-sizing: border-box;
  border: 1px solid #808080;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 15px;
  margin: 10px;
`
export const InputError = styled.div`
  font-size: 14px;
  margin-top: 4px;
  color: red;
`

export const Flex = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-item: ${(props) => props.alignItems};
`

export const ApplicationRootStyles = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${dealerImage});
  background-repeat: no-repeat;
  background-color: #1b1b1b;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  .base-form {
    width: 600px;
  }
`

export const Button = styled.button`
  margin-right: 10px;
  box-sizing: border-box;
  padding: 16px 60px;
  font-size: 18px;
  font-family: 'DM Sans';
  outline: none;
  border: none;
  cursor: pointer;
  color: #fff;
  border-radius: 15px;
  background-color: red;
  :hover {
    background-color: #1c68ff;
  }
  :active {
    background-color: #2f74ff;
  }
`

export const Container = styled.div`
  border-radius: 5px;
  background-color: #232323;
  padding: 40px;
`
