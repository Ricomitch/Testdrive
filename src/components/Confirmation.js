import React, { useState, useEffect } from 'react'
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
import confirm from '../Assets/finished-builder.svg'
import HashLoader from 'react-spinners/HashLoader'

const Confirmation = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 6000)
  }, [])

  return (
    <div>
      {loading ? (
        <HashLoader
          color='red'
          loading={loading}
          // cssOverride={override}
          size={100}
        />
      ) : (
        <Container>
          <div className='base-form'>
            <h1 style={{ textAlign: 'center', color: 'white' }}>
              {' '}
              Confirmation
            </h1>
            <img src={confirm} />
            <br />
            <h2
              style={{ textAlign: 'center', color: 'white', fontSize: '30px' }}
            >
              We've received your
              <br />
              test drive request.
            </h2>
            <h3
              style={{ textAlign: 'center', color: 'white', fontSize: '18px' }}
            >
              We will be reaching out to <br />
              confirm shortly.
            </h3>
          </div>
          <h3
            style={{ textAlign: 'center', color: 'white', paddingTop: '15px' }}
          >
            {' '}
            Powered by{' '}
            <img src={motive} style={{ height: '17px', paddingLeft: '2px' }} />
          </h3>
        </Container>
      )}
    </div>
  )
}

export default Confirmation
