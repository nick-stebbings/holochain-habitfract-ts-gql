// #region Global Imports
import React from 'react'
import { Formik, Form, Field } from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// #endregion Global Imports

// #region Local Imports
// import { LoginFormActions } from "@Actions";
import { Container, Top, MainText, SubText, Middle, Bottom } from './styled'
// #endregion Local Imports

// #region Interface Imports
import { ILoginForm } from './LoginForm'
// #endregion Interface Imports

export const LoginForm: React.FunctionComponent<ILoginForm.IProps> = (
  _props: ILoginForm.IProps,
) => {
  // const loginForm = useSelector((state: IStore) => state.loginForm);
  // const dispatch = useDispatch();
  const initialValues: ILoginForm.LoginFormValues = { username: '' }
  const navigate = useNavigate()

  return (
    <Container>
      <Top>
        <MainText>Welcome</MainText>
      </Top>
      <Middle>
        <SubText>Create a username and start managing your habits!</SubText>
      </Middle>
      <Bottom>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            console.log({ values, actions })
            localStorage.setItem('username', values.username)

            navigate('/profile')
            actions.setSubmitting(false)
          }}
        >
          {({ touched, errors, values, handleSubmit }) => {
            return (
              <Form className="bg-red-300" onSubmit={handleSubmit}>
                <label htmlFor="username">
                  Username:
                  <Field
                    id="username"
                    name="username"
                    placeholder="Pick a username"
                  />
                </label>

                <button type="submit">Submit</button>
              </Form>
            )
          }}
        </Formik>
      </Bottom>
    </Container>
  )
}
