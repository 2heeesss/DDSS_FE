import styles from 'components/Form/Form.module.scss';

import React, { useEffect, useState } from 'react';

import Button from 'components/Button';
import useUser from 'store/modules/user/useUser';

export default function Form({ isSignIn }: { isSignIn: boolean }) {
  const [disabled, setDisabled] = useState(true);
  const [isOpen, setisOpen] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const { login } = useUser();

  const signupSubmit = () => {
    fetch('http://localhost:1337/api/auth/local/register', {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        password: password,
        email: userEmail,
        username: username,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem('token', res.jwt);
        login(res.user);
      })
      .finally(() => setisOpen(!isOpen));
  };
  const signinSubmit = () => {
    fetch('http://localhost:1337/api/auth/local', {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        password: password,
        identifier: userEmail, //user || email,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem('token', res.jwt);
        login(res.user);
      })
      .finally(() => {
        setisOpen(!isOpen);
      });
  };

  useEffect(() => {
    setEmailError(userEmail.length < 6 ? '6글자 이상 입력해주세요' : '');
    setNameError(username.length < 3 ? '3글자 이상 입력해주세요' : '');
    setPasswordError(password.length < 6 ? '6글자 이상 입력해주세요' : '');

    const submitValidation = isSignIn
      ? userEmail.length < 6 || password.length < 6
      : userEmail.length < 6 || username.length < 2 || password.length < 6;

    setDisabled(submitValidation);
  }, [userEmail, password, username, isSignIn]);

  const handleOnChage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { id } = target;
    if (id === 'email') {
      setUserEmail(target.value);
    } else if (id === 'password') {
      setPassword(target.value);
    } else {
      setUsername(target.value);
    }
  };

  const handleClose = () => {
    setisOpen(false);
  };

  const handleOpen = () => {
    setisOpen(true);
  };

  return (
    <>
      {isSignIn ? (
        <Button eventHandler={handleOpen}>로그인</Button>
      ) : (
        <Button eventHandler={handleOpen}>회원가입</Button>
      )}

      {isOpen && (
        <div className={styles.bl_signup_container}>
          <div className={styles.bl_signup}>
            <h1 className={styles.bl_signup_heading}>
              {isSignIn ? 'SignIn' : 'SignUp'}
            </h1>
            <form className={styles.bl_signup_form}>
              <div className={styles.bl_signup_input_container}>
                <input type={'email'} id="email" onChange={handleOnChage} />
                <label htmlFor="email">Email Address</label>
                <span className={styles.bar}></span>
                <div className={styles.error}>{emailError}</div>
              </div>

              <div className={styles.bl_signup_input_container}>
                {!isSignIn && (
                  <>
                    <input
                      type={'text'}
                      id="username"
                      onChange={handleOnChage}
                    />
                    <label htmlFor="username">Username</label>
                    <span className={styles.bar}></span>
                    <div className={styles.error}>{nameError}</div>
                  </>
                )}
              </div>

              <div className={styles.bl_signup_input_container}>
                <input
                  id="password"
                  type={'password'}
                  onChange={handleOnChage}
                />
                <label htmlFor="password">Password</label>
                <span className={styles.bar}></span>
                <div className={styles.error}>{passwordError}</div>
              </div>
            </form>
            <div
              className={styles.bl_signup_button_container}
              onClick={handleClose}
            >
              <button className={styles.el_cancel_Btn} onClick={handleClose}>
                Cancle
              </button>
              <button
                className={styles.el_submit_Btn}
                disabled={disabled}
                onClick={isSignIn ? signinSubmit : signupSubmit}
              >
                {disabled ? <>Enter a valid value</> : <>Submit</>}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
