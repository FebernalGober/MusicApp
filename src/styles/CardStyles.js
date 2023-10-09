import { StyleSheet } from "react-native";

const CardStyles = StyleSheet.create({
  container: {
    alignSelf: "center",
    width: "100%",
    height: 100,
  },

  topTitle: {
    flexDirection: "row",
    paddingTop: 40,
    paddingBottom: 40,
    paddingRight: 35,
  },
  titulo: {
    fontSize: 18,
    color: "white",
    flex: 1,
    textAlign: "center",
  },

  icono: {
    marginLeft: 15,
    alignSelf: "flex-start",
  },

  img: {
    width: 100,
    height: "100%",
  },
  rowMargin: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
  },
  point: {
    alignSelf: "center",
    marginLeft: 10,
  },
  songInfo: {
    flex: 2,
    marginLeft: 0,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  textTitle: {
    fontSize: 19,
    color: "white",
    fontWeight: "300",
  },
  textAuthor: {
    color: "gray",
    fontSize: 15,
  },
  textIcon: {
    marginRight: 15,
    fontSize: 16,
  },
  textBold: {
    color: "black",
    fontWeight: "bold",
  },

  buttonContainer: {
    flex: 0,
    alignSelf: "flex-end",
  },

  info: {
    flexDirection: "row",
  },
  date: {
    fontSize: 15,
    color: "grey",
  },
  tags: {
    fontSize: 15,
    color: "grey",
    marginLeft: 10,
  },
  dots: {
    position: "absolute",
    top: -4,
    right: 0,
  },
  fixedModal: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default CardStyles;

