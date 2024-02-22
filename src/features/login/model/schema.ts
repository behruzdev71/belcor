import * as yup from 'yup'

export const loginSchema = yup.object().shape({
  username: yup.string().required('необходим username'),
  password: yup.string().required('необходим пароль')
})
