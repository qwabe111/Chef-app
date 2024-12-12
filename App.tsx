import React, { createContext, useState, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ManageMenuScreen from './ManageMenuScreen';
import FilterMenu from './FilterMenu';
import HomeScreen from './HomeScreen';

export const CategoriesContext = createContext<{
  categories: string[];
  addCategory: (category: string) => void;
  menuItems: MenuItem[];
  addMenuItem: (item: MenuItem) => void;
  filter: string;
  setFilter: (category: string) => void;
}>({
  categories: [],
  addCategory: () => {},
  menuItems: [],
  addMenuItem: () => {},
  filter: '',
  setFilter: () => {},
});

export const useCategories = () => useContext(CategoriesContext);

export interface MenuItem {
  name: string;
  description: string;
  price: number;
  category: string;
}

const App = () => {
  const [categories, setCategories] = useState<string[]>(['Main', 'Starter', 'Dessert']);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [filter, setFilter] = useState<string>('');

  const addCategory = (category: string) => {
    if (!categories.includes(category)) {
      setCategories((prev) => [...prev, category]);
    }
  };

  const addMenuItem = (item: MenuItem) => {
    setMenuItems((prev) => [...prev, item]);
  };

  return (
    <CategoriesContext.Provider
      value={{
        categories,
        addCategory,
        menuItems,
        addMenuItem,
        filter,
        setFilter,
      }}
    >
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ManageMenu" component={ManageMenuScreen} />
          <Stack.Screen name="FilterMenu" component={FilterMenu} />
        </Stack.Navigator>
      </NavigationContainer>
    </CategoriesContext.Provider>
  );
};

const Stack = createStackNavigator();

export default App;
