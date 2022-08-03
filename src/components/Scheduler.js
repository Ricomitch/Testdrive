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

const Scheduler = () => {
  return (
    <Container>
      <div className='base-form'>
        <h1 style={{ textAlign: 'center', color: 'white' }}> Availablity</h1>
      </div>
      <Flex justifyContent='flex-end'>
        <Button children='Submit' />
      </Flex>
      <h3 style={{ textAlign: 'center', color: 'white', paddingTop: '15px' }}>
        {' '}
        Powered by{' '}
        <img src={motive} style={{ height: '17px', paddingLeft: '2px' }} />
      </h3>
    </Container>
  )
}

export default Scheduler
