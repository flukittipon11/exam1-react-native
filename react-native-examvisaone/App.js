import { SafeAreaView, StyleSheet } from "react-native";
import Cards from "./components/content/Cards";
import Details from "./components/content/Details";
import Header from "./components/content/Header";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Cards />
      <Details />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box_header: {
    backgroundColor: "#052135",
  },
  container_card: {
    width: "100%",
    height: "45%",
    position: "absolute",
    backgroundColor: "#22577E",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
