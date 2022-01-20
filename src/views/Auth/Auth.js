import LoginForm from '../../components/LoginForm/LoginForm';
import { useState } from 'react';
import { signInUser, signUpUser } from '../../services/users';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function Auth({ setCurrentUser }) {
  const [type, setType] = useState('signin');
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp =
        type === 'signin' ? await signInUser(email, password) : await signUpUser(email, password);
      history.push('/profile');
      setCurrentUser(resp);
    } catch {
      setErrorMessage('error. invalid login.');
    }
  };
  return (
    <div>
      <div className="tabs flex justify-center">
        <h1
          onClick={() => {
            setType('signin');
          }}
          className={classNames({ active: type === 'signin' })}
        >
          Sign In
        </h1>
        <h1
          onClick={() => {
            setType('signup');
          }}
          className={classNames({ active: type === 'signup' })}
        >
          Sign Up
        </h1>
      </div>

      <h1>Type: {type}</h1>
      <p>{errorMessage}</p>
      <LoginForm
        errorMessage={errorMessage}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
