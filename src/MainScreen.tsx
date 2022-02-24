import React from "react";
import { View, Colors, Text, Typography, Spacings } from 'react-native-ui-lib';

Colors.loadColors({
  error: '#ff2442',
  success: '#00CD8B',
  text: '#20303C'
});

Typography.loadTypographies({
  h1: { fontSize: 58, fontWeight: '300', lineHeight: 80 },
  h2: { fontSize: 46, fontWeight: '300', lineHeight: 64 },
});

Spacings.loadSpacings({
  page: 20
});

Colors.loadSchemes({
  light: {
    screenBG: 'transparent',
    textColor: Colors.grey10,
    moonOrSun: Colors.yellow30,
    mountainForeground: Colors.green30,
    mountainBackground: Colors.green50
  },
  dark: {
    screenBG: Colors.grey10,
    textColor: Colors.white,
    moonOrSun: Colors.grey80,
    mountainForeground: Colors.violet10,
    mountainBackground: Colors.violet20
  }
});

const MainScreen = () => {
  return (
    <View flex padding-page bg-screenBG>
      <Text h1 textColor>
        Dark Mode
      </Text>
    </View>
  )
};

export default MainScreen;