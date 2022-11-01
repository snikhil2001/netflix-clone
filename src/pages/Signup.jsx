import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackgroundImage from "../components/BackgoundImage";
import Header from "../components/Header";
import { firebaseAuth } from "../utils/firebase-config";

export default function Signup(props) {
  const [showpassword, setshowpassword] = useState(false);
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
  const handleSignUp = async () => {
    try {
      const { email, password } = formValue;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
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
        <Header login />
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>Unlimited Movies , TV shows , and more</h1>
            <h4>Watch anywhere. Cancel anytime</h4>
            <h6>
              Ready to watch ? Enter your email to create or restart membership
            </h6>
          </div>
          <div className="form">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={formValue.email}
              onChange={handleChange}
            />
            {showpassword && (
              <input
                type="password"
                placeholder="Password "
                name="password"
                value={formValue.password}
                onChange={handleChange}
              />
            )}

            {!showpassword && (
              <button onClick={() => setshowpassword(true)}>
                Get's Started
              </button>
            )}
          </div>
          <button onClick={handleSignUp}>Sign Up</button>
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
    .body {
      gap: 1rem;
      .text {
        gap: 1rem;
        text-align: center;
        font-size: 2rem;
        h1 {
          padding: 0 25rem;
        }
      }
      .form {
        display: grid;
        grid-template-columns: ${(showpassword) =>
          showpassword ? "1fr 1fr" : "2fr 1fr"};
        width: 60%;
        input {
          color: black;
          border: none;
          padding: 1.5rem;
          font-size: 1.2rem;
          border: 1px solid black;
          &: focus {
            outline: none;
          }
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          // border-radius: 0.2rem;
          font-weight: bolder;
          font-size: 1.05rem;
          color: white;
        }
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
`;
