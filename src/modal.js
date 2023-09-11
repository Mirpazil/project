import React from "react";
import "./Modal.css";
import google from "./icons8-google-48.png"
import facebook from "./icons8-facebook-48.png"

function Modal({ isOpen, toggleModal }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">

        <title>Sign Up Example</title>

        <span class="background"></span>
        <span class="centering">
          <form class="my-form">
            <span class="signup-welcome-row">
              <h1>Sign Up!</h1>
            </span>
            <span class="socials-row">
              <a href="#" title="Use Google">
                <img src={google} ></img>
                Use Google
              </a>
              <a href="#" title="Use Facebook">
                <img src={facebook} ></img>
                Use Facebook
              </a>
            </span>
            <span class="divider">
              <span class="divider-line"></span>
              OR
              <span class="divider-line"></span>
            </span>

            <div class="my-form__content">
              <div class="text-field">
                <label for="email">Email:</label>
                <input aria-label="Email" type="email" id="email" className="email" placeholder="Your Email" autocomplete="off" required></input>
              </div>
              <div class="text-field">
                <label for="password">Password:</label>
                <input aria-label="Password" type="password" id="email" className="password" placeholder="Your New Password" autocomplete="off" required></input>
              </div>
              <input type="submit" class="my-form__button" value="Sign-Up" />
            </div>
            <div class="my-form__actions">
              <span>
                By registering you agree to our
                <a href="#" title="Reset Password">
                  Terms
                </a>
                and{" "}
                <a href="#" title="Reset Password">
                  Privacy
                </a>
              </span>
              <div class="my-form__signin">
                <a href="#" title="Sign In">
                  Sign-in
                </a>
              </div>
              <span className="close" onClick={toggleModal}>Закрыть</span>
            </div>
          </form>
        </span>
      </div>
    </div>
  );
}

export default Modal;
