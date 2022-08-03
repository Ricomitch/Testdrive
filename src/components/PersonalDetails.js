import React from 'react'
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

const PersonalDetails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  const onError = (errors, event) => {
    console.log(errors)
    console.log(event)
  }

  return (
    <Container>
      <div className='base-form'>
        <h1 style={{ textAlign: 'center', color: 'white' }}> Contact Info</h1>

        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <InputField style={{ margin: '10px 0' }} error={errors.firstName}>
            <Flex alignItems='center' justifyContent='space-between'>
              <InputLabel htmlFor='FirstName' children='First Name' />
              {errors.firstName && (
                <InputError children={errors.firstName.message} />
              )}
            </Flex>
            <Input
              id='firstName'
              {...register('firstName', {
                required: 'First name required',
              })}
            ></Input>
          </InputField>

          <InputField style={{ margin: '10px 0' }} error={errors.lastName}>
            <Flex alignItems='center' justifyContent='space-between'>
              <InputLabel htmlFor='LastName' children='Last Name' />
              {errors.lastName && (
                <InputError children={errors.lastName.message} />
              )}
            </Flex>
            <Input
              id='lastName'
              {...register('lastName', {
                required: 'Last name required',
              })}
            ></Input>
          </InputField>

          <InputField style={{ margin: '10px 0' }} error={errors.phoneNumber}>
            <Flex alignItems='center' justifyContent='space-between'>
              <InputLabel htmlFor='Phonenumber' children='Phone Number' />
              {errors.phoneNumber && (
                <InputError children={errors.phoneNumber.message} />
              )}
            </Flex>
            <Input
              id='phoneNumber'
              maxLength={10}
              {...register('phoneNumber', {
                required: 'Valid phone number required',
                pattern: {
                  message: 'Invalid phone number',
                  value: /^\d{10}$/,
                },
              })}
            ></Input>
          </InputField>

          <InputField style={{ margin: '10px 0' }} error={errors.email}>
            <Flex alignItems='center' justifyContent='space-between'>
              <InputLabel htmlFor='Email' children='Email' />
              {errors.email && <InputError children={errors.email.message} />}
            </Flex>
            <Input
              id='email'
              type='email'
              {...register('email', {
                required: 'Valid email required',
              })}
            ></Input>
          </InputField>

          <Flex justifyContent='flex-end'>
            <Button children='Submit' />
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

export default PersonalDetails
