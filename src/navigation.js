import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ThemeProvider } from "styled-components";

import theme from "./components/utils/theme";
import { Left, More } from "./components/icons";

import SearchView from "./views/search";
import HistoryView from "./views/history";
import FavoriteView from "./views/favorite";
import DetailView from "./views/detail";
import TabBar from "./components/tab-bar";
import Button from "./components/button";


const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function SearchStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Search"
        component={SearchView}
        options={() => {
          return {
            headerShown: false,
          };
        }}
      />
      <HomeStack.Screen
        name="Detail"
        component={DetailView}
        options={({ route, navigation }) => {
          return {
            headerShown: true,
            title: route.params?.title,
            headerStyle: {
              backgroundColor: theme.colors.softGrey,
              shadowColor: "transparent",
            },
            headerLeft: () =>
              (<Button px={20} height="100%" onPress={() => {
                navigation.navigate("Search");
              }}>
                <Left color={theme.colors.textDark} />
              </Button>),
            headerRight: () =>
              (<Button px={20} height="100%" onPress={() => {
                navigation.navigate("Search");
              }}>
                <More color={theme.colors.textDark} />
              </Button>),
          };
        }}
      />
    </HomeStack.Navigator>
  );
}

function Navigation() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Search"
            tabBar={(props) => <TabBar {...props} />}>
            <Tab.Screen name="History" component={HistoryView} />
            <Tab.Screen name="Search" component={SearchStack} />
            <Tab.Screen name="Favorite" component={FavoriteView} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default Navigation;
