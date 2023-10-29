import { Image, Modal, Text, View } from "react-native";
import ModalStyles from "../styles/ModalStyles";

// Componente "PlayingModal" que muestra detalles de una canción en un modal
const PlayingModal = ({ visible, onRequestClose, detailedTrackInfo }) => {
  console.log(detailedTrackInfo);
  return (

    // Componente "Modal" para mostrar un contenido en forma de modal
    <Modal
      animationType="slide" // Tipo de animación de apertura del modal
      transparent // Hace que el modal sea transparente
      visible={visible} // Indica si el modal debe mostrarse o no
      onRequestClose={onRequestClose} // Función a llamar al cerrar el modal
    >
      <View style={[ModalStyles.modalContent, ModalStyles.modalContainer]}>
            {/* Comprobar si existe información detallada de la canción */}
        {detailedTrackInfo && (
          <View style={ModalStyles.modal}>
            {/* Mostrar una imagen de la carátula de la canción */}
            <Image
              source={{
                uri: detailedTrackInfo.album.image.find(
                  (image) => image.size === "extralarge"
                )["#text"],
              }}
              style={ModalStyles.modalImage}
            />
            {/* Mostrar el título de la canción */}
            <Text style={ModalStyles.title}>{detailedTrackInfo.name}</Text>
            {/* Mostrar el nombre del artista de la canción */}

            <Text style={ModalStyles.artistName}>
              {detailedTrackInfo.artist.name}
            </Text>

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
            ></View>
            <View>
              {/* Mostrar un resumen de la canción o información adicional */}
              <Text style={ModalStyles.Summary}>
                {detailedTrackInfo.wiki.summary}
              </Text>
            </View>
          </View>
        )}
      </View>
    </Modal>
  );
};

export default PlayingModal;
