import { extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'Please fill out the required field.',
})

extend('email', {
  ...email,
  message: 'Must be a valid email address.',
})