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

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const paswordConfirmRef = useRef();
  const { signup } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    signup(emailRef.current.value, passwordRef.current.value);
  }
  return (
    <Flex alignItems="center" justifyContent="center" h="80vh">
      <Stack spacing={3}>
        <FormControl isRequired onSubmit={handleSubmit}>
          <InputGroup>
            <InputLeftElement children={<EmailIcon />} />
            <Input
              type="email"
              placeholder="user@email.com"
              aria-label="johndoe@email.com"
              ref={emailRef}
            />
          </InputGroup>
        </FormControl>

        <FormControl isRequired>
          <InputGroup>
            <InputLeftElement children={<LockIcon />} />
            <Input
              type="password"
              placeholder="Password"
              aria-label="Password"
              ref={passwordRef}
            />
          </InputGroup>
        </FormControl>

        <FormControl isRequired>
          <InputGroup size="md">
            <InputLeftElement children={<LockIcon />} />
            <Input
              type={'password'}
              placeholder="Confirm password"
              aria-label="Confirm Password"
              ref={paswordConfirmRef}
            />
          </InputGroup>
        </FormControl>

        <Button type="submit">Sign Up!</Button>
      </Stack>
    </Flex>
  );
}
