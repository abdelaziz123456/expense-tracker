
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ExpensesContext } from "../store/expenses-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, ManageExpense, SignUp } from "../screens";
import { ExpenseOverview } from "../App";
import { GlobalStyles } from "../constants/styles";
const sharedOptions = {
  headerStyle: {
    backgroundColor: GlobalStyles.colors.primary500,
  },
  headerTintColor: "white",
  presentation: "modal",
};
export default function AppContent() {
  const Stack = createNativeStackNavigator();
  const UnAuthStack = createNativeStackNavigator();
  const { isAuth } = useContext(ExpensesContext);
  return (
    <NavigationContainer>
      {!isAuth ? (
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
  );
}
