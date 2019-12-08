import React, { useState, useEffect } from "react";
import Mesa from '../../componentes/Mesa';
import { StyleSheet, Text, SafeAreaView, Image, View, ScrollView } from 'react-native';
import styled from "styled-components/native";
import api from '../../actions'
import socketio from 'socket.io-client'
import { vw } from "react-native-expo-viewport-units";

function HomePage(props) {
  const [timer, setTimer] = useState({ timer1: 0, timer2: 0, timer3: 0, timer4: 0 })
  const [players1, setPlayers1] = useState([])
  const [players2, setPlayers2] = useState([])
  const [players3, setPlayers3] = useState([])
  const [players4, setPlayers4] = useState([])


  useEffect(() => {
    const socket = socketio('http://192.168.29.6:3333')
    socket.on('updatedPlayersList', data=>{
      setTimer(data.timer)
      if (data.tableNumber == "1") {
        setPlayers1(data.players)
      } else if (data.tableNumber == "2") {
        setPlayers2(data.players)
      } else if (data.tableNumber == "3") {
        setPlayers3(data.players)
      } else if (data.tableNumber == "4") {
        setPlayers4(data.players)
      }
    })
    getTimers()
    getPlayers(1)
    getPlayers(2)
    getPlayers(3)
    getPlayers(4)
  }, [])

  async function getPlayers(table_id) {
    const response = await api.get(`/table/${table_id}`)
    const table = "mesa" + table_id
    if (table === "mesa1") {
      setPlayers1(response.data)
    } else if (table === "mesa2") {
      setPlayers2(response.data)
    } else if (table === "mesa3") {
      setPlayers3(response.data)
    } else if (table === "mesa4") {
      setPlayers4(response.data)
    }
  }
  async function getTimers() {
    const response = await api.get(`/timer`)

    if (response.status === 200) {
      setTimer(response.data)
    }
  }
  return (
    <AppContainer>
      <HeaderDiv>
        <HeaderLogo source={{ url: 'http://clubecomercialvr.com.br/Home/images/logo.png' }} />
        <Title>Atletas</Title>
        <View></View>
      </HeaderDiv>
      <MesasContainer>
        <ScrollView>
          <View style={{ marginVertical: 30 }}>
            <Text style={{ fontSize: 20, marginBottom: 8 }}>mesa 1 - {timer.timer1} min</Text>
            <Mesa tableNumber="1" players={players1} />
          </View>
          <View style={{ marginVertical: 30 }}>
            <Text style={{ fontSize: 20, marginBottom: 8 }}>mesa 2 - {timer.timer2} min</Text>
            <Mesa tableNumber="2" players={players2} />
          </View>
          <View style={{ marginVertical: 30 }}>
            <Text style={{ fontSize: 20, marginBottom: 8 }}>mesa 3 - {timer.timer3} min</Text>
            <Mesa tableNumber="3" players={players3} />
          </View>
          <View style={{ marginVertical: 30 }}>
            <Text style={{ fontSize: 20, marginBottom: 8 }}>mesa 4 - {timer.timer4} min</Text>
            <Mesa tableNumber="4" players={players4} />
          </View>
        </ScrollView>
      </MesasContainer>
    </AppContainer>
  )

}

export const AppContainer = styled.SafeAreaView`
  display: flex;
  flex-direction: column;
  align-items: center;
  background:lightslategray;
`


export const HeaderDiv = styled.View`
  display: flex;
  flex-direction: row;
  width:100%;
  background: #d11b1c;
  height:60px;
  align-items:center;
  justify-content:space-around;
`

export const Title = styled.Text`
  margin:0;
  color:white;
  font-size:22px;
  font-weight:bold;
`

export const HeaderLogo = styled.Image`
  height:50px;
  width:50px;
`

export const MesasContainer = styled.View`
  display: flex;
  flex-direction:column;
  align-items: center;
  width:100%;
  justify-content:space-evenly;
  margin-bottom:10%;
`

export default HomePage