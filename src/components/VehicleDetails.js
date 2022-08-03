import React, { useState } from 'react'
import {
  Container,
  Button,
  Flex,
  Input,
  InputField,
  InputLabel,
} from '../styling/styles'
import motive from '../Assets/motive-white.png'

const VehicleDetails = () => {
  const [state, setState] = useState({
    carYear: 0,
    carMake: ' ',
    carModel: ' ',
    carTrim: ' ',
  })

  const handleChange = (e) => {
    setState({
      // ...state,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Container>
      <div className='base-form'>
        <h1 style={{ textAlign: 'center', color: 'white' }}> Vehicle Info</h1>
        <form>
          <InputField>
            <Flex alignItems='center' justifyContent='space-between'>
              <InputLabel htmlFor='Year' children='Year' />
            </Flex>
            <Input
              id='year'
              name='year'
              value={state.carYear}
              onChange={handleChange}
            >
              <option value='2023'>2023</option>
              <option value='2022'>2022</option>
              <option value='2021'>2021</option>
              <option value='2020'>2020</option>
              <option value='2019'>2019</option>
            </Input>
          </InputField>
          <InputField>
            <div>
              <InputLabel htmlFor='Make' children='Make' />
            </div>
            <Input
              id='make'
              name='make'
              value={state.carMake}
              onChange={handleChange}
            >
              <option value='mercedes'>Mercedes</option>
              <option value='bmw'>BMW</option>
              <option value='maserati'>Maserati</option>
              <option value='infinity'>Infinity</option>
              <option value='audi'>Audi</option>
            </Input>
          </InputField>
          <InputField>
            <div>
              <InputLabel htmlFor='Model' children='Model' />
            </div>
            <Input
              id='model'
              name='model'
              value={state.carModel}
              onChange={handleChange}
            >
              <option value='340i'>340i</option>
              <option value='440i'>440i</option>
              <option value='X3'>X3</option>
              <option value='X5'>X5</option>
              <option value='X7'>X7</option>
            </Input>
          </InputField>
          <InputField>
            <div>
              <InputLabel htmlFor='Trim' children='Trim' />
            </div>
            <Input
              id='trim'
              name='trim'
              value={state.carTrim}
              onChange={handleChange}
            >
              <option value='340i'>M50i</option>
              <option value='440i'>sDrive40i</option>
              <option value='X3'>xDrive40e</option>
              <option value='X5'>xDrive40i</option>
              <option value='X7'>xDrive45e</option>
            </Input>
          </InputField>
          <Flex justifyContent='flex-end'>
            <Button children='Next' />
          </Flex>
        </form>
      </div>
      <h3 style={{ textAlign: 'center', color: 'white', paddingTop: '15px' }}>
        {' '}
        Powered by{' '}
        <img src={motive} style={{ height: '17px', paddingLeft: '2px' }} />
      </h3>
    </Container>
  )
}

export default VehicleDetails
