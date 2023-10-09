import { StyleSheet } from "react-native";

const BasicButtonStyles = StyleSheet.create({
  button: {
    borderWidth: 1,
    backgroundColor: "White",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 12,
    marginVertical: 1,
    marginHorizontal: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    letterSpacing: 0.25,
  },
  shadow: {
    alignSelf: "center",
    marginLeft: 4,
    borderRadius: 10,
    opacity: 0.35,
    zIndex: -1,
  },
});

export default BasicButtonStyles;
