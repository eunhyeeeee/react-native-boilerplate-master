import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {
  Text, View, Image, StyleSheet, TouchableOpacity, Alert, StatusBar,
} from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'
import { BarCodeScanner } from 'expo-barcode-scanner';
import {Axios} from 'axios';
import 'url-search-params-polyfill';








function QRcode(){

const [hasPermission, setHasPermission] = useState(null);
const [scanned, setScanned] = useState(false);

useEffect(() => {
  (async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  })();
}, []);




  // state = {
  //   type: {type},
  //   data: {data},
  // };
  // updateState = () => {
  //   this.setState({
  //     type: this.state,
  //     data: this.state,
  //   }); 
  // }
      



const handleBarCodeScanned = ({ type, data }) => {

// async function QRcode(){


//   var params = new URLSearchParams();
//   await params.append('data',JSON.stringify(data));

//   await Axios({
//     method: "POST",
//     url: "http://192.168.0.49:3001/api/schema",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     params
//   }).then(req => {
//     console.log(req.body.data);
//   })
// }

async function QRcode_1(){

      alert('data:    '+JSON.stringify({data})+ 'has been scanned!')

}


  setScanned(true);
      // alert('Bar code with type'+JSON.stringify({type})+ 'and data'+JSON.stringify({data})+ 'has been scanned!')
    Alert.alert(
      type,
      data,
      [
        {Text: 'OK!!!!!!!!!!', onPress: () => QRcode_1()},
      ]
    )
};






if (hasPermission === null) {
  return <Text>Requesting for camera permission</Text>;
}
if (hasPermission === false) {
  return <Text>No access to camera</Text>;
}



return (
// <View style={{backgroundColor: 'white', flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <View
    style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-end',
    }}>
    <BarCodeScanner
      onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      style={StyleSheet.absoluteFillObject}
    />
    {scanned && <Button title={'Tap to Scan'} onPress={() => setScanned(false)} />}

  </View>

// </View>
);
}






// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: colors.lightGrayPurple,
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
// })




// const QRcode = ({ navigation }) => (
  // <View style={styles.root}>
    // <StatusBar barStyle="light-content" />
    {/* <Text style={styles.title}>QRcode</Text>
    <Button
      title="Go to Details"
      color="white"
      backgroundColor={colors.lightPurple}
      onPress={() => {
        navigation.navigate('Details', { from: 'QRcode' })
      }}
    /> */}
  // </View>
// )






// QRcode.propTypes = {
//   navigation: PropTypes.shape({ navigate: PropTypes.func }),
// }

// QRcode.defaultProps = {
//   navigation: { navigate: () => null },
// }


export default QRcode
