import React, { Fragment, useState, useRef, Suspense } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Stack,
  Button,
  Flex,
} from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import { useAuth } from '../contexts/AuthContext';
import FormInput from './FormInput';

function AuthForm({ displayName, children, handleSubmit }) {
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);
  return (
    <Flex alignItems="center" justifyContent="center" h="80vh">
      {error}

      <Stack spacing="24px">
        <form onSubmit={(e) => handleSubmit(e, setLoading, setError)}>
          {children}

          <Button type="submit" w="100%" isLoading={isLoading}>
            {displayName}
          </Button>
        </form>
      </Stack>
    </Flex>
  );
}
export function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signUp } = useAuth();

  function CheckPasswordMatch(passwordRef, passwordConfirmRef) {
    return passwordRef.current.value !== passwordConfirmRef.current.value;
  }

  async function handleSubmit(e, setLoading, setError) {
    e.preventDefault();
    setError('');
    if (CheckPasswordMatch(passwordRef, passwordConfirmRef))
      return setError('passwords do not match');
    setLoading(true);
    try {
      await signUp(emailRef.current.value, passwordConfirmRef.current.value);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }
  return (
    <AuthForm displayName="Sign up!" handleSubmit={handleSubmit}>
      <FormInput
        icon={<EmailIcon />}
        text="user@email.com"
        type="email"
        ref={emailRef}
      />
      <FormInput
        icon={<LockIcon />}
        text="Password"
        type="password"
        ref={passwordRef}
      />

      <FormInput
        icon={<LockIcon />}
        text="Confirm password"
        type="password"
        ref={passwordConfirmRef}
      />
    </AuthForm>
  );
}

export function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();

  async function handleSubmit(e, setLoading, setError) {
    e.preventDefault();
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }
  return (
    <AuthForm displayName="Log in" handleSubmit={handleSubmit}>
      <FormInput
        icon={<EmailIcon />}
        text="user@email.com"
        type="email"
        ref={emailRef}
      />
      <FormInput
        icon={<LockIcon />}
        text="Password"
        type="password"
        ref={passwordRef}
      />
    </AuthForm>
  );
}
