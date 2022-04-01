import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SliderBase,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import IconVisa from "../image/iconVISA.png";
import IconDollar from "../image/dollar.png";
import Credit_card from "../image/credit-card.png";
import more from "../image/more.png";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/AntDesign";

export default function Cards() {
  return (
    <View>
      <TouchableOpacity style={styles.btn_card}>
        <LinearGradient
          colors={["#052135", "transparent"]}
          start={{ x: 1, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={styles.container_card}
        >
          <View style={styles.positionVisa}>
            <Image source={IconVisa} style={styles.image_visa} />
          </View>
          <View style={styles.position}>
            <View style={styles.container_money}>
              <Image source={Credit_card} style={styles.image_code} />
              <View style={styles.content_money}>
                <Text style={styles.text_balance}>Avalible Balance</Text>
                <View style={styles.box_money}>
                  <Image source={IconDollar} style={styles.image_money} />
                  <Text style={styles.text_money}>7,392.00</Text>
                </View>
              </View>
            </View>
            <View style={styles.box_NOcard}>
              <Text style={styles.text_NOcard}>42012</Text>
              <Text style={styles.text_NOcard}>3049</Text>
              <Text style={styles.text_NOcard}>2800</Text>
              <Text style={styles.text_NOcard}>9815</Text>
            </View>
            <View style={styles.container_footer}>
              <View style={styles.box_footer}>
                <Text style={styles.text_footer}>EXPIRE</Text>
                <Icon
                  name="caretright"
                  color="#fff"
                  size={7}
                  style={{ marginRight: 5 }}
                />
                <Text style={styles.text_Datafooter}>02/22</Text>
              </View>
              <View style={styles.box_footer}>
                <Text style={styles.text_footer}>CVC CODE</Text>
                <Icon
                  name="caretright"
                  color="#fff"
                  size={7}
                  style={{ marginRight: 5 }}
                />
                <Text style={styles.text_Datafooter}>230</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </TouchableOpacity>
      <View style={{alignItems:'center'}}>
        <Image source={more} style={styles.iconmore} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  positionVisa: {
    bottom: 5,
  },
  btn_card: {
    alignItems: "center",
    marginBottom:5,
  },
  container_card: {
    width: 330,
    padding: 10,
    paddingLeft: 25,
    paddingRight: 20,
    backgroundColor: "#22577E",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: 5,
  },
  iconmore: {
    width: 35,
    height: 35,
    tintColor:'#A1C9E4'
  },
  container_money: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  content_money: {
    alignItems: "center",
    bottom: 15,
  },
  box_money: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  box_NOcard: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    // paddingLeft: 5,
  },
  container_footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  box_footer: {
    alignItems: "center",
    flexDirection: "row",
  },
  position: {
    bottom: 10,
  },
  //   image
  image_visa: {
    width: 55,
    height: 55,
    tintColor: "#fff",
  },
  image_code: {
    width: 40,
    height: 40,
  },
  image_money: {
    width: 20,
    height: 20,
    marginRight: 5,
  },

  //   text
  text_balance: {
    marginBottom: 5,
    color: "#80ED99",
  },
  text_money: {
    fontSize: 26,
    color: "#fff",
  },
  text_NOcard: {
    fontSize: 22,
    color: "#CCDAE4",
  },
  text_footer: {
    fontWeight: "500",
    fontSize: 10,
    color: "#fff",
    marginRight: 5,
  },
  text_Datafooter: {
    fontWeight: "600",
    fontSize: 13,
    color: "#fff",
  },
});
