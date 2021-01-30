import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'

import {
    HomeScreen,
    CategoriesScreen,
    RecipeScreen,
    RecipesListScreen,
    IngredientScreen,
    SearchScreen,
    IngredientsDetailsScreen,
    FavoritesScreen
} from '../screens'
// import Tabs from '../navigations/tabs'

const Stack = createStackNavigator();

function NativeIndex() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        textAlign: 'center',
                        alignSelf: 'center',
                        flex: 1,
                    }
                }}
            >
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='Categories' component={CategoriesScreen} />
                <Stack.Screen name='Recipe' component={RecipeScreen} />
                <Stack.Screen name='RecipesList' component={RecipesListScreen} />
                <Stack.Screen name='Ingredient' component={IngredientScreen} />
                <Stack.Screen name='Search' component={SearchScreen} />
                <Stack.Screen name='IngredientsDetails' component={IngredientsDetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer >
    )
}

export default AppContainer = createAppContainer(NativeIndex);
