import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const SignupPage = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values) => {
    // Handle form submission logic here
    console.log(values);
  };

  return (
    <Container>
      <Title>Signup</Title>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Input type="email" name="email" placeholder="Email" />
          <Error name="email" component="div" />
          <Input type="password" name="password" placeholder="Password" />
          <Error name="password" component="div" />
          <Button type="submit">Sign Up</Button>
        </Form>
      </Formik>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
`;

const Input = styled(Field)`
  padding: 8px;
  margin-bottom: 8px;
  width: 200px;
`;

const Error = styled(ErrorMessage)`
  color: red;
  margin-bottom: 8px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;


export default SignupPage;