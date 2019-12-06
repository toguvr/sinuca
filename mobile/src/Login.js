import React from "react";
// import { connect } from "react-redux";
// import Mesa from '../../Components/Mesa';
import { StyleSheet, Text, SafeAreaView, Image, View } from 'react-native';

function HomePage(props) {



    return (
      <SafeAreaView>
        <View style={styles.headerDiv}>
          <Image source={{url: 'http://clubecomercialvr.com.br/Home/images/logo.png'}} style={styles.headerLogo}  />
          <Text style={styles.title}>Atletas</Text>
          <View></View>
        </View>
        <View style={styles.tableContainer}>
        <View>
            <Text>mesa 1</Text>
            {/* <Mesa tableNumber="1" /> */}
          </View>
          <View>
            <Text>mesa 2</Text>
            {/* <Mesa tableNumber="2" /> */}
          </View>
          <View>
            <Text>mesa 3</Text>
            {/* <Mesa tableNumber="3" /> */}
          </View>
          <View>
            <Text>mesa 4</Text>
            {/* <Mesa tableNumber="4" /> */}
          </View>
        </View>
      </SafeAreaView>
    )
 
}

const styles = StyleSheet.create({
    headerLogo: {
        height:"90%",
    },
    headerDiv: {
        width:"100%",
        flexDirection: "row",
        backgroundColor: "#d11b1c",
        height: 60,
        alignItems:"center",
        justifyContent: "space-around",
    },
    tableContainer: {
        alignItems: "center",
        width:"90%",
        flex:1,
        justifyContent: "space-evenly",
        flexWrap:"wrap",
    },
    title: {
        margin:0,
        color:"white",
    },

  });

// const mapStateToProps = state => ({
//   allGames: state.snooker,
//   allTimers: state.timer,
//   currentPayment: state.snooker.currentPayment,
// })

// const mapDispatchToProps = dispatch => ({
//   addPlayer: (playerData) => dispatch(addPlayer(playerData))

// })
// connect(mapStateToProps, mapDispatchToProps)
export default HomePage