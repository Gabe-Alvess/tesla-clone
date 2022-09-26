import { Image, View } from "react-native";
import styles from './styles'
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/images/logo.png")} />
      <Image style={styles.menu} source={require("../../assets/images/menu.png")} />
    </View>
  );
};

export default Header;
