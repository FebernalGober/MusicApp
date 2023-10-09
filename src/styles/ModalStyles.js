import { StyleSheet } from "react-native";

const ModalStyles = StyleSheet.create({
  modal: {
    flex: 0,
    alignItems: "center",
  },

  modalContent: {
    flex: 1,
    padding: 20,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: 100,
    marginTop: 70,
  },

  imageContainer: {
    borderRadius: 10,
  },
  modalImage: {
    width: 200,
    height: 200,
    borderRadius: 30,
    marginBottom: 50,
    borderWidth: 1,
    borderColor: "black",
  },
  modalContainer: {
    height: "10%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  artistName: {
    color: "gray",
  },
  modal: {
    alignItems: "center",
  },
});

export default ModalStyles;
