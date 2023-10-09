import { StyleSheet } from "react-native";

const SongCardStyles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
  },

  titulo: {
    fontSize: 18,
    color: "white",
    flex: 1,
    textAlign: "center",
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
    flex: 1,
    marginLeft: 0,
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
  authSong: {},
});

export default SongCardStyles;
