import { StyleSheet } from "react-native";

const ProfileStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#162238",
  },

  contentContainer: {
    backgroundColor: "#162238",
  },
  rowMargin: {
    flexDirection: "row",
    margin: 10,
  },

  topTitle: {
    flexDirection: "column",
    paddingTop: 40,
    paddingBottom: 40,
    alignItems: "center",
    color: "white",
  },
  titulo: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    paddingTop: 10,
  },
  subTitulo: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    paddingTop: 30,
  },
});

export default ProfileStyles;
