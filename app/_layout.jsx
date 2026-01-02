import { Stack } from "expo-router";
import {calColors} from '../src/colors/colors.jsx'

export default function RootLayout() {
  return <Stack screenOptions={
        {headerTitleAlign: 'center',
        headerStyle: {backgroundColor: calColors.light},
        headerTitleStyle: {color: calColors.dark},
        title: 'Calculator'}} />;
}
