import { StyleSheet } from "react-native";

const UtilsStyle = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  rowCentered: {
    flexDirection: "row",
    justifyContent: "center",
  },
  rowCenteredVertical: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowCenteredXY: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  rowSpaceAround: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  rowSpaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  loadingContainer: {
    backgroundColor: "#ffffff",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  aligSelfEnd: {
    alignSelf: "flex-end",
  },
});

export default UtilsStyle;
