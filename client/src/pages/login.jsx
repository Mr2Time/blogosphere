import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setAuth } from "../reducers/userSlice";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.user.auth);

  const handleSubmit = (values) => {
    axios
      .post("http://localhost:4000/api/auth", {
        email: values.email,
        password: values.password,
      })
      .then((res) => {
        setLoading(true);
        dispatch(setUser(res.data.user));
        dispatch(setAuth(true));
        localStorage.setItem("token", res.data.user.id);
        console.log(res);
        navigate("/account");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      {!auth ? (
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            }
            if (!values.password) {
              errors.password = "Required";
            }
            return errors;
          }}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          <Form>
            <Field type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit">Submit</button>
            <p>
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </Form>
        </Formik>
      ) : (
        <h1>Logged in</h1>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 92vh;
  background: radial-gradient(
      circle at top left,
      rgba(44, 19, 185, 0.3),
      transparent 60%
    ),
    radial-gradient(
      circle at bottom right,
      rgba(56, 160, 229, 0.46),
      transparent 60%
    ),
    white;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;

    input {
      margin: 10px;
      padding: 5px;
      width: 300px;
      height: 40px;
      border-radius: 5px;
      border: none;
      box-shadow: 0 0 5px 0 #85dbf6;
      font-size: 1.2em;
      &:focus {
        outline: none;
      }
    }

    button {
      margin: 10px;
      padding: 5px;
      width: 200px;
      height: 40px;
      border-radius: 5px;
      border: none;
      background-color: #85dbf6;
      cursor: pointer;

      &:hover {
        background-color: #80e9e2;
      }
    }

    a {
      color: #000000;
      font-weight: bold;
      position: relative;
    }
  }
`;
export default Login;
