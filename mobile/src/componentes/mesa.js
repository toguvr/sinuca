import React from "react";
import { connect } from "react-redux";
import { updatePlayers, currentPayment, setCurrentTime, changePlayer, getPlayers, leaveTable, updateAllPlayersPayment, timeZeroed, getTimers } from '../actions'
import { StyleSheet, Text, SafeAreaView, Image, View, ScrollView } from 'react-native';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import styled from 'styled-components/native'

const Mesa = (props) => {

    const playersPlaying = props.players.map((player, index) => {
        return <Nomes key={index}>
            <Jogador>{player.playerName}</Jogador>
        </Nomes>
    })

    return (
        <MesaContainer>
            <MesaInterna>
                <ScrollView>
                    {playersPlaying}
                </ScrollView>
            </MesaInterna>
            <Cacapa1 />
            <Cacapa2 />
            <Cacapa3 />
            <Cacapa4 />
            <Cacapa5 />
            <Cacapa6 />
        </MesaContainer>
    )

}

const MesaContainer = styled.View`
    background-color: #58433a;
    color:white;
    height:345px;
    width:210px;
    display:flex;
    justify-content:center;
    align-items:center;
    position: relative;
    border-radius:10px;
    box-shadow: 0 10px 10px rgba(0,0,0,0.1);
`

export const MesaInterna = styled.View`
    background: #009484;
    color:white;
    height:310px;
    width:170px;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    overflow:scroll;

    ::-webkit-scrollbar-track {
    background-color: transparent;
    }

    ::-webkit-scrollbar {
        width: 6px;
    }

    ::-webkit-scrollbar-thumb {
        background: #c8a574;
    }
`

export const Nomes = styled.View`
    display:flex;
    justify-content:center;
    align-items:center;
`

export const Cacapa1 = styled.View`
    background:black;
    border-radius:50px;
    width:20px;
    height:20px;
    position: absolute;
    top:0;
    left:0;
`

export const Cacapa2 = styled.View`
    background:black;
    border-radius:50px;
    width:20px;
    height:20px;
    position: absolute;
    top:0;
    right:0;
`

export const Cacapa3 = styled.View`
    background:black;
    border-radius:50px;
    width:20px;
    height:20px;
    position: absolute;
    top:50%;
    right:0;
`

export const Cacapa4 = styled.View`
    background:black;
    border-radius:50px;
    width:20px;
    height:20px;
    position: absolute;
    top:50%;
    left:0;
`

export const Cacapa5 = styled.View`
    background:black;
    border-radius:50px;
    width:20px;
    height:20px;
    position: absolute;
    bottom:0;
    right:0;
`

export const Cacapa6 = styled.View`
    background:black;
    border-radius:50px;
    width:20px;
    height:20px;
    position: absolute;
    bottom:0;
    left:0;
`

export const Jogador = styled.Text`
    margin:10px;
    color: white;
    font-size:20px;
    text-align:center;
`

export default Mesa

