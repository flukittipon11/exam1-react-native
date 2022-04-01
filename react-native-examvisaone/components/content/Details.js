import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import line from "../image/line.png";
import calendar from "../image/calendar.png";
import central from "../image/market.png";
import dish from "../image/dish.png";
import hand from "../image/hand.png";
import money from "../image/money.png";

export default function Details() {
  const data = [
    {
      title: "Restaurant Manhattan",
      image: dish,
      income: 170,
      date: "June 10,2018",
      arrow: "arrowup",
    },
    {
      title: "Salary Deposit",
      image: hand,
      income: 1200,
      date: "June 10,2018",
      arrow: "arrowdown",
    },
    {
      title: "Restaurant Manhattan",
      image: central,
      income: 50,
      date: "June 10,2018",
      arrow: "arrowup",
    },
    {
      title: "Restaurant Manhattan",
      image: money,
      income: 1200,
      date: "June 10,2018",
      arrow: "arrowdown",
    },
  ];

  return (
    <>
      <View style={styles.container}>
        <View style={styles.container_income}>
          <View style={styles.box_income}>
            <View style={styles.header_income}>
              <Text style={styles.text_header}>Income</Text>
            </View>
            <View style={styles.content_income}>
              <Icon
                name="arrowdown"
                size={18}
                color="#28B463"
                style={{ marginRight: 5 }}
              />
              <Text style={styles.text_down}>$9,302.00</Text>
            </View>
          </View>
          <Image
            source={line}
            style={{
              width: 10,
              height: 25,
              tintColor: "#D0D3D4",
              justifyContent: "center",
            }}
          />
          <View style={styles.box_expense}>
            <View style={styles.header_income}>
              <Text style={styles.text_header}>Expense</Text>
            </View>
            <View style={styles.content_income}>
              <Icon
                name="arrowup"
                size={18}
                color="red"
                style={{ marginRight: 5 }}
              />
              <Text style={styles.text_up}>$2,790.00</Text>
            </View>
          </View>
        </View>
        <View></View>
      </View>
      <View style={styles.container_header}>
        <Text style={styles.text_headerDetail}>Detail of movements</Text>
        <TouchableOpacity>
          <Image
            source={calendar}
            style={{ width: 20, height: 20, tintColor: "#22577E" }}
          />
        </TouchableOpacity>
      </View>
      {data.map((doc, i) => {
        const income = doc.income
          .toFixed(0)
          .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        return (
          <View style={styles.container_movements}>
            <View style={styles.box_showdata}>
              <View style={styles.box_detaildata}>
                <Image
                  source={doc.image}
                  style={{
                    width: 35,
                    height: 35,
                    marginRight: 15,
                  }}
                />
                <View style={styles.base_text}>
                  <Text style={styles.text_title}>{doc.title}</Text>
                  <Text style={styles.date}>{doc.date}</Text>
                </View>
              </View>
              <View style={styles.box_incomedetail}>
                <Text
                  style={
                    doc.arrow == "arrowup"
                      ? styles.text_incomeup
                      : styles.text_incomedown
                  }
                >
                  ${income}
                </Text>
                <Icon
                  name={doc.arrow}
                  size={18}
                  style={
                    doc.arrow == "arrowup" ? styles.icon_up : styles.icon_down
                  }
                />
              </View>
            </View>
          </View>
        );
      })}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 5,
  },
  container_income: {
    width: 330,
    borderRadius: 5,
    height: 85,
    backgroundColor: "#fff",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  container_header: {
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  container_movements: {
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  box_showdata: {
    width: 330,
    borderRadius: 5,
    height: 65,
    backgroundColor: "#fff",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  box_incomedetail: {
    flexDirection: "row",
  },
  box_detaildata: {
    flexDirection: "row",
  },
  icon_up: {
    marginLeft: 5,
    color: "red",
  },
  icon_down: {
    marginLeft: 5,
    color: "#28B463",
  },
  text_headerDetail: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 5,
    color: "#22577E",
  },
  box_income: {
    borderRightColor: "#000",
    width: "45%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  box_expense: {
    width: "45%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  base_text: {
    justifyContent: "center",
  },
  header_income: {
    backgroundColor: "#fff",
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2,
    elevation: 4,
    borderRadius: 50,
    marginBottom: 10,
  },
  content_income: {
    flexDirection: "row",
    alignItems: "center",
  },
  text_down: {
    color: "#28B463",
    fontSize: 14,
    fontWeight: "500",
  },
  text_up: {
    color: "red",
    fontSize: 14,
    fontWeight: "500",
  },
  text_header: {
    fontSize: 13,
  },
  text_title: {
    fontSize: 14,
    fontWeight: "600",
  },
  date: {
    fontSize: 12,
    fontWeight: "500",
    color: "gray",
  },
  text_incomeup: {
    color: "red",
    fontSize: 16,
    fontWeight: "500",
  },
  text_incomedown: {
    color: "#28B463",
    fontSize: 16,
    fontWeight: "500",
  },
});
