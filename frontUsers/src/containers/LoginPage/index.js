import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import Mesa from '../../Components/Mesa';
import { setPlayer, addPlayer } from '../../actions';
import { AppContainer, PriceToPay, HeaderDiv, MesasContainer, SelectForm, InputtForm, ButtonForm, HeaderForm, HeaderLogo, Title } from './styled'
import socketio from 'socket.io-client'

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    const socket = socketio('http://localhost:3333')
    socket.emit('omni', 'Msg do Front')
    socket.on('hello', data=>{
      console.log(data)
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
            <h2>mesa 1</h2>
            <Mesa tableNumber="1" />
          </div>
          <div>
            <h2>mesa 2</h2>
            <Mesa tableNumber="2" />
          </div>
          <div>
            <h2>mesa 3</h2>
            <Mesa tableNumber="3" />
          </div>
          <div>
            <h2>mesa 4</h2>
            <Mesa tableNumber="4" />
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
  addPlayer: (playerData) => dispatch(addPlayer(playerData))

})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)

