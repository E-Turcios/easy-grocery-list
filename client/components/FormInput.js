import React from 'react';
import {
  FormControl,
  InputGroup,
  InputLeftElement,
  Input,
} from '@chakra-ui/react';

export default React.forwardRef((props, ref) => {
  const { icon, type, text } = props;
  return (
    <FormControl isRequired>
      <InputGroup>
        <InputLeftElement children={icon} />
        <Input type={type} placeholder={text} aria-label={text} ref={ref} />
      </InputGroup>
    </FormControl>
  );
});
