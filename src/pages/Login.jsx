import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackgroundImage from "../components/BackgoundImage";
import Header from "../components/Header";
import { firebaseAuth } from "../utils/firebase-config";

export default function Login(props) {
  const [formValue, setformValue] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setformValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };
  const handleLogin = async () => {
    try {
      const { email, password } = formValue;
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) {
      return navigate("/");
    }
  });

  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header />
        <div className="form-container flex column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className="title">
              <h3>Login</h3>
            </div>
            <div className="container flex column">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={formValue.email}
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Password "
                name="password"
                value={formValue.password}
                onChange={handleChange}
              />

              <button onClick={handleLogin}>Log In </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-rows: 15vh 85vh;
  }
  .form-container {
    gap: 2rem;
    height: 80vh;
    .form {
      padding: 2rem;
      background-color: #000000b0;
      width: 25vw;
      gap: 2rem;
      color: white;
      .container {
        gap: 2rem;
        input {
          padding: 0.5rem 1rem;
          width: 15rem;
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          border-radius: 0.2rem;
          font-weight: bolder;
          font-size: 1.05rem;
          color: white;
        }
      }
    }
  }
`;
