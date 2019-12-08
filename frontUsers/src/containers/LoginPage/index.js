import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import Mesa from '../../Components/Mesa';
import { setPlayer, addPlayer, getPlayers, getTimers, setPlayersOnTable, setCurrentTime } from '../../actions';
import { AppContainer, PriceToPay, HeaderDiv, MesasContainer, SelectForm, InputtForm, ButtonForm, HeaderForm, HeaderLogo, Title } from './styled'
import socketio from 'socket.io-client'

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    this.props.getTimers()
    this.props.getPlayers(1)
    this.props.getPlayers(2)
    this.props.getPlayers(3)
    this.props.getPlayers(4)
    const socket = socketio('http://localhost:3333')
    socket.on('updatedPlayersList', data=>{
      console.log(data)
      this.props.setPlayersOnTable(data.players, data.tableNumber)
      this.props.setCurrentTime(data.timer)
    })
  }

  render() {

    const { currentPayment } = this.props

    return (
      <AppContainer>
        <HeaderDiv>
          <HeaderLogo src="http://clubecomercialvr.com.br/Home/images/logo.png" alt="logo comercial" />
          <Title>Atletas</Title>
          <div></div>
        </HeaderDiv>
        <MesasContainer>
          <div>
            <h2>mesa 1 - {this.props.allGames.mesa1.length > 1 ? this.props.allTimers.timer1 : "0"} min</h2>
            <Mesa tableNumber="1" players={this.props.allGames.mesa1}/>
          </div>
          <div>
            <h2>mesa 2 - {this.props.allGames.mesa2.length > 1 ? this.props.allTimers.timer2 : "0"} min</h2>
            <Mesa tableNumber="2" players={this.props.allGames.mesa2}/>
          </div>
          <div>
            <h2>mesa 3 - {this.props.allGames.mesa3.length > 1 ? this.props.allTimers.timer3 : "0"} min</h2>
            <Mesa tableNumber="3" players={this.props.allGames.mesa3}/>
          </div>
          <div>
            <h2>mesa 4 - {this.props.allGames.mesa4.length > 1 ? this.props.allTimers.timer4 : "0"} min</h2>
            <Mesa tableNumber="4" players={this.props.allGames.mesa4}/>
          </div>
        </MesasContainer>
      </AppContainer>
    )
  }
}

const mapStateToProps = state => ({
  allGames: state.snooker,
  allTimers: state.timer,
  currentPayment: state.snooker.currentPayment,
})

const mapDispatchToProps = dispatch => ({
  addPlayer: (playerData) => dispatch(addPlayer(playerData)),
  setCurrentTime: (time) => dispatch(setCurrentTime(time)),
  getTimers: () => dispatch(getTimers()),
  getPlayers: (number) => dispatch(getPlayers(number)),
  setPlayersOnTable: (players, tableNumber) => dispatch(setPlayersOnTable(players, tableNumber)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)

