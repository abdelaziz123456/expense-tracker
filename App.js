import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { GlobalStyles } from "./constants/styles";
import {
  AllExpenses,
  Login,
  ManageExpense,
  RecentExpenses,
  SignUp,
} from "./screens";
import { Ionicons } from "@expo/vector-icons";
import { IconButton } from "./components";
import { ExpensesProvider } from "./store/expenses-context";
import { useState } from "react";
const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();
const UnAuthStack = createNativeStackNavigator();

function ExpenseOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
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

const sharedOptions = {
  headerStyle: {
    backgroundColor: GlobalStyles.colors.primary500,
  },
  headerTintColor: "white",
  presentation: "modal",
};
export default function App() {
  const [auth, setAuth] = useState(false);
  return (
    <ExpensesProvider>
      <StatusBar style="auto" />
      <NavigationContainer>
        {!auth ? (
          <UnAuthStack.Navigator>
            <UnAuthStack.Screen
              name="Login"
              component={Login}
              options={{ ...sharedOptions, title: "Login" }}
            />
            <UnAuthStack.Screen
              name="SignUp"
              component={SignUp}
              options={{ ...sharedOptions, title: "Sign Up" }}
            />
          </UnAuthStack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              name="ExpensesOverview"
              component={ExpenseOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ManageExpense"
              component={ManageExpense}
              options={(navigationData) => {
                let type = navigationData.route.params.type;
                return {
                  title: type == "add" ? "Add Expense" : "Edit Expense",
                  headerStyle: {
                    backgroundColor: GlobalStyles.colors.primary500,
                  },
                  headerTintColor: "white",
                  presentation: "modal",
                };
              }}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </ExpensesProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
