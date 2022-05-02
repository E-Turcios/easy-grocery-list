import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchAllRecipe } from '../../store/allRecipe';
import { useAuth } from '../../contexts/AuthContext';
import RecipeCard from './RecipeCard';
import {
  Center,
  Stack,
  Flex,
  Wrap,
  WrapItem,
  Grid,
  GridItem,
} from '@chakra-ui/react';
export const AllRecipes = ({ recipes, fetchAllRecipe }) => {
  const { getToken } = useAuth();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (loading) return;
    getToken().then((token) => {
      fetchAllRecipe(token);
      setLoading(true);
    });
  });
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      {recipes.map((recipe) => {
        return (
          <GridItem>
            <RecipeCard key={recipe.id} {...recipe} />
          </GridItem>
        );
      })}
    </Grid>
  );
};

const mapStateToProps = (state) => ({ recipes: state.allRecipe });

const mapDispatchToProps = (dispatch) => ({
  fetchAllRecipe: (token) => dispatch(fetchAllRecipe(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllRecipes);
