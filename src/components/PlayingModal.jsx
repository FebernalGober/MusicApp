import { Entypo } from "@expo/vector-icons";
import { Image, Modal, Text, View } from "react-native";
import ModalStyles from "../styles/ModalStyles";

const PlayingModal = ({ visible, onRequestClose, detailedTrackInfo }) => {
  console.log(detailedTrackInfo);
  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onRequestClose}
    >
      <View style={[ModalStyles.modalContent, ModalStyles.modalContainer]}>
        {detailedTrackInfo && (
          <View style={ModalStyles.modal}>
            <Image
              source={{
                uri: detailedTrackInfo.album.image.find(
                  (image) => image.size === "extralarge"
                )["#text"],
              }}
              style={ModalStyles.modalImage}
            />
            <Text style={ModalStyles.title}>{detailedTrackInfo.name}</Text>
            <Text style={ModalStyles.artistName}>
              {detailedTrackInfo.artist.name}
            </Text>
            <View
              style={{
                marginTop: 20,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingRight: 50,
                paddingLeft: 50,
              }}
            >
              <Text>3:20</Text>
              <View
                style={{
                  height: 1,
                  width: "100%",
                  backgroundColor: "#CED0CE",
                  marginRight: 10,
                  marginLeft: 10,
                  position: "relative",
                }}
              >
                <View
                  style={{ height: 1, width: "27%", backgroundColor: "black" }}
                />
                <View
                  style={{
                    height: 10,
                    width: 10,
                    borderRadius: 50,
                    top: -5,
                    position: "absolute",
                    left: "27%",
                    backgroundColor: "black",
                  }}
                />
              </View>
              <Text>4:03</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
                width: "100%",
                marginRight: -100,
                alignItems: "center",
              }}
            >
              <Entypo name="controller-fast-backward" size={50} color="black" />
              <View
                style={{
                  height: 70,
                  width: 70,
                  borderRadius: 50,
                  backgroundColor: "rgb(240,240,240)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Entypo name="controller-play" size={50} color="black" />
              </View>
              <Entypo name="controller-fast-forward" size={50} color="black" />
            </View>
          </View>
        )}
      </View>
    </Modal>
  );
};

export default PlayingModal;
