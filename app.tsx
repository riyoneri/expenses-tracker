import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {
  StackScreenProps,
  createStackNavigator,
} from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";

import IconButton from "./components/ui/icon-button";
import { GlobalStyles } from "./constants/styles";
import AllExpensesScreen from "./screens/all-expenses.screen";
import ManageExpense from "./screens/manage-expense";
import RecentExpensesScreen from "./screens/recent-expenses.screen";
import store from "./store/store";

export type StackParameterList = {
  ExpensesOverview: undefined;
  ManageExpense?: {
    expenseId: string;
  };
};

export type TabParameterList = {
  RecentExpenses: undefined;
  AllExpenses: undefined;
};

const Tab = createBottomTabNavigator<TabParameterList>();
const Stack = createStackNavigator<StackParameterList>();

function ExpensesOverview({
  navigation,
}: StackScreenProps<StackParameterList>) {
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
        headerRight: () => (
          <IconButton
            color="white"
            name="add"
            onPress={() => navigation.push("ManageExpense")}
          />
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
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="ExpensesOverview"
            component={ExpensesOverview}
          />
          <Stack.Screen
            name="ManageExpense"
            component={ManageExpense}
            options={{
              presentation: "modal",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
