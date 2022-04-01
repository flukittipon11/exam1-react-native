import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Iconmenu from "../image/menu.png";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.box_header}>
        <View style={styles.base_textheader}>
          <Text style={styles.header}>All my accounts</Text>
          <Text style={styles.title}>June 10, 2018</Text>
        </View>
        <TouchableOpacity>
          <Image source={Iconmenu} style={styles.Icon_menu} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,

  },
  box_header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom:5,
    color: '#22577E'
  },
  title: {
    fontSize: 14,
    color: 'gray'
  },
  Icon_menu: {
    tintColor:'#22577E',
    width: 30,
    height: 20,
  },
});
