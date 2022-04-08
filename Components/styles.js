import { Platform, StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: 'red',
      ...Platform.select({
            ios: {paddingTop: 20},
            android: {paddingTop: StatusBar.currentHeight}
      })
    },

    box: {
        width: 300,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderwidth: 1,
        backgroundColor: 'lightgray',
    },

    boxText: {
        color: 'darkslategray',
        fontWeight: 'bold',
    }

  });
  