import {StyleSheet} from 'react-native';

const CardStyles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    borderRadius: 6,
    borderColor: 'black',
    borderWidth: 1,
    width: '90%',
    height: 140,
    backgroundColor: 'white',
    marginBottom: 20,
  },
  img: {
    flex: 1,
  },
  rowMargin: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
  },
  songInfo: {
    flex: 1,
    marginLeft: 10,
    flexDirection: 'column',
  },
  textTitle: {
    fontSize: 19,
    color: 'black',
    fontWeight: '500',
  },
  textIcon: {
    marginRight: 15,
    fontSize: 16,
  },
  textBold: {
    color: 'black',
    fontWeight: 'bold',
  },


  buttonContainer: {
    flex: 0,
    alignSelf: 'flex-end',

  },
});

export default CardStyles;
