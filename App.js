import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { StatusBar } from "expo-status-bar";

import { GlobalStyles } from "./constants/styles";
import { AllExpenses, RecentExpenses } from "./screens";
import { Ionicons } from "@expo/vector-icons";
import { IconButton } from "./components";
import { ExpensesContext, ExpensesProvider } from "./store/expenses-context";
import { useContext } from "react";
import AppContent from "./components/AppContent";
import {showAlert } from "./aappUtiles";

const BottomTabs = createBottomTabNavigator();

export function ExpenseOverview() {
  const { setIsAuth, setToken } = useContext(ExpensesContext);



  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerTitleAlign: "center",
        headerLeft: ({ tintColor }) => (
          <IconButton
            icon="add"
            size={24}
            color={tintColor}
            onPress={() =>
              navigation.navigate("ManageExpense", {
                type: "add",
              })
            }
          />
        ),

        headerRight: ({ tintColor }) => (
          <IconButton
            icon="ios-exit-outline"
            size={24}
            color={tintColor}
            onPress={() => showAlert(setToken, setIsAuth)}
          />
        ),
      })}
    >

      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />

      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <ExpensesProvider>
      <StatusBar style="auto" />
      <AppContent />
    </ExpensesProvider>
  );
}
