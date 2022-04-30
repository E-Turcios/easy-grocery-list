import React, { Fragment, useState } from 'react';
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
export default function Login() {
  return (
    <Flex alignItems="center" justifyContent="center" h="80vh">
      <Stack spacing={3}>
        <FormControl isRequired>
          <InputGroup>
            <InputLeftElement children={<EmailIcon />} />
            <Input
              type="email"
              placeholder="user@email.com"
              aria-label="johndoe@email.com"
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
            />
          </InputGroup>
        </FormControl>

        <Button type="submit">Log In</Button>
      </Stack>
    </Flex>
  );
}
