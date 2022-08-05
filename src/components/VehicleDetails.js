import React, { useState, useContext } from 'react'
import { useForm } from 'react-hook-form'

import {
  Container,
  Button,
  Flex,
  Input,
  InputField,
  InputLabel,
  Select,
} from '../styling/styles'
import motive from '../Assets/motive-white.png'
import { FormStepContext } from '../utilites/FormStepContext'
import { STEPS } from '../utilites/steps'

const VehicleDetails = () => {
  const [vehicle, setVehicle] = useState({
    carYear: 0,
    carMake: ' ',
    carModel: ' ',
    carTrim: ' ',
  })

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const { step, setStep } = useContext(FormStepContext)

  const handleChange = (e) => {
    setVehicle({
      // ...vehicle,
      [e.target.name]: e.target.value,
    })
    console.log(e)
  }

  const onSubmit = (data) => {
    setStep(STEPS.SCHEDULER)
    console.log(data)
  }

  // console.log()

  return (
    <Container>
      <div className='base-form'>
        <h1 style={{ textAlign: 'center', color: 'white' }}> Vehicle Info</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField>
            <Flex alignItems='center' justifyContent='space-between'>
              <InputLabel htmlFor='Year' children='Year' />
            </Flex>
            <Select id='year' {...register('year')}>
              <option value='0'></option>
              <option value='2023'>2023</option>
              <option value='2022'>2022</option>
              <option value='2021'>2021</option>
              <option value='2020'>2020</option>
              <option value='2019'>2019</option>
            </Select>
          </InputField>
          <InputField>
            <div>
              <InputLabel htmlFor='Make' children='Make' />
            </div>
            <Select id='make' {...register('make')}>
              <option value='0'></option>
              <option value='mercedes'>Mercedes</option>
              <option value='bmw'>BMW</option>
              <option value='maserati'>Maserati</option>
              <option value='infinity'>Infinity</option>
              <option value='audi'>Audi</option>
            </Select>
          </InputField>
          <InputField>
            <div>
              <InputLabel htmlFor='Model' children='Model' />
            </div>
            <Select id='model' {...register('model')}>
              <option value='0'></option>
              <option value='340i'>340i</option>
              <option value='440i'>440i</option>
              <option value='X3'>X3</option>
              <option value='X5'>X5</option>
              <option value='X7'>X7</option>
            </Select>
          </InputField>
          <InputField>
            <div>
              <InputLabel htmlFor='Trim' children='Trim' />
            </div>
            <Select id='trim' {...register('trim')}>
              <option value='0'></option>
              <option value='340i'>M50i</option>
              <option value='440i'>sDrive40i</option>
              <option value='X3'>xDrive40e</option>
              <option value='X5'>xDrive40i</option>
              <option value='X7'>xDrive45e</option>
            </Select>
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
