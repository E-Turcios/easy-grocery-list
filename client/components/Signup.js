import React, { Fragment, useState, useRef } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  Stack,
  Button,
  Flex,
} from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import { useAuth } from './contexts/AuthContext';
import FormInput from './FormInput';

function AuthForm({ displayName, children, handleSubmit, isLoading }) {
  return (
    <Flex alignItems="center" justifyContent="center" h="80vh">
      <Stack spacing="24px">
        <form onSubmit={handleSubmit}>{children}</form>
        <Button type="submit" w="100%" isLoading={isLoading}>
          {displayName}
        </Button>
      </Stack>
    </Flex>
  );
}
export function Signup() {
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signUp } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value)
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
    <AuthForm
      displayName="Sign up!"
      handleSubmit={handleSubmit}
      isLoading={isLoading}
    >
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
