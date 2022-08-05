import React, { useState, useContext } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { setMinutes, setHours } from 'date-fns'

import { useForm, Controller } from 'react-hook-form'
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

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

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

            <Controller
              control={control}
              name='date-input'
              render={({ field }) => (
                <DatePicker
                  placeholderText='Select date'
                  onChange={(date) => field.onChange(date)}
                  selected={field.value}
                  minDate={new Date('08-01-2022')}
                  maxDate={new Date('08-14-2022')}

                  // withPortal
                />
              )}
            />
          </InputField>

          <InputField>
            <Flex alignItems='center' justifyContent='space-between'>
              <InputLabel htmlFor='SelectTime' children='Select a Time' />
            </Flex>

            <Controller
              control={control}
              name='time-input'
              render={({ field }) => (
                <DatePicker
                  dateFormat='hh:mm aa'
                  placeholderText='Select time'
                  onChange={(date) => field.onChange(date)}
                  selected={field.value}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={30}
                  timeCaption='time'
                  minTime={setHours(setMinutes(new Date(), 0), 9)}
                  maxTime={setHours(setMinutes(new Date(), 0), 17)}
                  // withPortal
                />
              )}
            />
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
