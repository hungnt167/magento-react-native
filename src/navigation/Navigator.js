import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import ProductList from '../components/catalog/ProductList';
import CategoryTree from '../components/CategoryTree';
import Product from '../components/catalog/Product';
import Cart from '../components/cart/Cart';
import Checkout from '../components/checkout/Checkout';

import {
  NAVIGATION_CATEGORY_TREE_DRAWER,
  NAVIGATION_CATEGORY_TREE_PATH,
  NAVIGATION_CATEGORY_PATH,
  NAVIGATION_CHECKOUT_PATH,
  NAVIGATION_PRODUCT_PATH,
  NAVIGATION_CART_PATH,
  NAVIGATION_DRAWER
} from './routes';

export const AppStack = createStackNavigator(
  {
    [NAVIGATION_CATEGORY_TREE_PATH]: CategoryTree,
    [NAVIGATION_CATEGORY_PATH]: ProductList,
    [NAVIGATION_PRODUCT_PATH]: Product,
    [NAVIGATION_CART_PATH]: Cart,
    [NAVIGATION_CHECKOUT_PATH]: Checkout
  },
  {
    initialRouteName: NAVIGATION_CATEGORY_TREE_PATH,
    navigationOptions: {
      headerStyle: {
        // backgroundColor: '#f4511e',
      },
      // headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: '500',
        fontSize: 18,
        alignSelf: 'center'
      }
    }
  }
);

export const Navigator = createDrawerNavigator({
  [NAVIGATION_CATEGORY_TREE_DRAWER]: AppStack,
  [NAVIGATION_DRAWER]: CategoryTree
});
