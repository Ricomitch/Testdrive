import React, { useState, useContext } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useForm } from 'react-hook-form'
import {
  Container,
  Button,
  Flex,
  Input,
  InputField,
  InputLabel,
  InputError,
} from '../styling/styles'
import motive from '../Assets/motive-white.png'
import TimePicker from 'react-time-picker'
import { FormStepContext } from '../utilites/FormStepContext'
import { STEPS } from '../utilites/steps'

const Scheduler = () => {
  const [selectedDate, setSelectedDate] = useState(null)
  const [value, onChange] = useState('10:00')

  const { handleSubmit } = useForm()

  const { setStep } = useContext(FormStepContext)

  const onSubmit = (data) => {
    setStep(STEPS.PERSONAL)
    console.log(data)
  }

  return (
    <Container>
      <div className='base-form'>
        <h1 style={{ textAlign: 'center', color: 'white' }}> Availablity</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField>
            <Flex alignItems='center' justifyContent='space-between'>
              <InputLabel htmlFor='SelectDay' children='Select a Day' />
            </Flex>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              minDate={new Date('08-01-2022')}
              maxDate={new Date('08-14-2022')}
            />
          </InputField>

          <InputField>
            <Flex alignItems='center' justifyContent='space-between'>
              <InputLabel htmlFor='SelectTime' children='Select a Time' />
            </Flex>{' '}
            <Input></Input>
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

export default Scheduler
