import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { GlobalStyles } from "./constants/styles";
import AllExpensesScreen from "./screens/all-expenses.screen";
import ManageExpense from "./screens/manage-expense";
import RecentExpensesScreen from "./screens/recent-expenses.screen";

export type StackParameterList = {
  ExpensesOverview: undefined;
  ManageExpense: undefined;
};

export type TabParameterList = {
  RecentExpenses: undefined;
  AllExpenses: undefined;
};

const Tab = createBottomTabNavigator<TabParameterList>();
const Stack = createStackNavigator<StackParameterList>();

function ExpensesOverview() {
  return (
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
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="ExpensesOverview"
          component={ExpensesOverview}
        />
        <Stack.Screen name="ManageExpense" component={ManageExpense} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
