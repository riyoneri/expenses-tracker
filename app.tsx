import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import AddExpenseButton from "./components/add-expense-button";
import { GlobalStyles } from "./constants/styles";
import AllExpensesScreen from "./screens/all-expenses.screen";
import RecentExpensesScreen from "./screens/recent-expenses.screen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerRightContainerStyle: {
            paddingHorizontal: 10,
          },
          headerStyle: {
            backgroundColor: GlobalStyles.colors.primary500,
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "white",
          },
          tabBarActiveTintColor: GlobalStyles.colors.accent500,
          tabBarStyle: {
            backgroundColor: GlobalStyles.colors.primary500,
          },
          sceneStyle: {
            backgroundColor: GlobalStyles.colors.primary700,
          },
          headerRight: () => (
            <AddExpenseButton color="white" name="add" onPress={() => {}} />
          ),
        }}
      >
        <Tab.Screen
          name="RecentExpenses"
          options={{
            title: "Recent Expenses",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="hourglass" color={color} size={size} />
            ),
            tabBarLabel: "Recent",
          }}
          component={RecentExpensesScreen}
        />
        <Tab.Screen
          name="AllExpenses"
          options={{
            title: "All Expenses",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="calendar" color={color} size={size} />
            ),
          }}
          component={AllExpensesScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
