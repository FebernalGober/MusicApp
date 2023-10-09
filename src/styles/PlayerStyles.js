import { StyleSheet } from "react-native";

const PlayerStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "black",
    padding: 16,
  },
  albumCover: {
    width: 60,
    height: 60,
    borderRadius: 4,
  },
  trackInfo: {
    flex: 1,
    marginLeft: 16,
  },
  songTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  artistName: {
    color: "gray",
    fontSize: 14,
  },
  controls: {
    flexDirection: "row",
    alignItems: "center",
  },
  controlButton: {
    color: "white",
    fontSize: 24,
    marginHorizontal: 10,
  },
});
export default PlayerStyles;
