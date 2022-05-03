import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useAuth } from '../../contexts/AuthContext';
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  GridItem,
  Grid,
} from '@chakra-ui/react';

import { fetchRecipe } from '../../store/singleRecipe';

export function SingleRecipe(props) {
  const { getToken } = useAuth();
  const [loading, setLoading] = useState(false);
  const { id, imageUrl, name, servingSize, ingredients } = props.recipe;
  const instructions =
    props.recipe.instructions !== undefined
      ? props.recipe.instructions.split('\n')
      : [];

  useEffect(() => {
    console.log(instructions);
    if (loading) return;
    getToken().then((token) => {
      props.fetchRecipe(token, props.match.params.id);
      setLoading(true);
    });
  });
  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={'md'}
            alt={'recipe image'}
            src={imageUrl}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
            >
              {name}
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}
            >
              Serving Size: {servingSize}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }
          >
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}
              >
                Ingredients
              </Text>
              <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                {ingredients !== undefined &&
                  ingredients.map((ingredient) => {
                    return (
                      <GridItem>
                        <Text as={'span'} fontWeight={'bold'}>
                          {ingredient.item}:
                        </Text>{' '}
                        {ingredient['recipe-ingredient'].quantity}{' '}
                        {ingredient['recipe-ingredient'].unit}
                      </GridItem>
                    );
                  })}
              </Grid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}
              >
                Instrucions
              </Text>

              <VStack spacing={{ base: 4, sm: 6 }}>
                {instructions.map((instruction, index) => {
                  return (
                    <Text key={index} fontSize={'lg'}>
                      {instruction}
                    </Text>
                  );
                })}
              </VStack>
            </Box>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}

const mapStateToProps = (state) => ({ recipe: state.singleRecipe });

const mapDispatchToProps = (dispatch) => ({
  fetchRecipe: (token, id) => dispatch(fetchRecipe(token, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleRecipe);
