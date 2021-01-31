import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'

// import { StyleSheet, View, StatusBar, YellowBox } from 'react-native';

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
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
// import Tabs  from './tabs';

/* 
const Stack = createStackNavigator();

function MainNavigator() {
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
    </NavigationContainer>
  )
}
 */

 const MainNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Categories: CategoriesScreen,
    Recipe: RecipeScreen,
    RecipesList: RecipesListScreen,
    Ingredient: IngredientScreen,
    Search: SearchScreen,
    IngredientsDetails: IngredientsDetailsScreen,
    Favorites: FavoritesScreen
  },
  {
    initialRouteName: 'Home',
    // headerMode: 'float',
    defaulfNavigationOptions: ({ navigation }) => ({
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        flex: 1,
      }
    })
  }
);

/* 
const Drawer = createDrawerNavigator();

function DrawerStack() {
  return(
    <Drawer.Navigator
      drawerPosition='left'
      initialRouteName='Main'
      drawerStyle={{
        width: 250
      }}
      drawerContent={props=> DrawerContainer}
    >
      <Drawer.Screen name='Main' component={MainNavigator} />
    </Drawer.Navigator>
  )
} 
*/

const DrawerStack = createDrawerNavigator(
  {
    Main: MainNavigator
  },
  {
    drawerPosition: 'left',
    initialRouteName: 'Main',
    drawerWidth: 250,
    contentComponent: DrawerContainer
  }
);

/* 
export default function AppContainer() {
  return(
    <NavigationContainer>
      <DrawerStack/>
    </NavigationContainer>
  )
}
*/

export default AppContainer = createAppContainer(DrawerStack);

// console.disableYellowBox = true;