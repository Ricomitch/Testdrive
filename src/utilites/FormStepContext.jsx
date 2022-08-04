import { createContext } from 'react'
import { STEPS } from './steps'

export const FormStepContext = createContext({
  step: STEPS.VEHICLE,
  setStep: () => {},
})
