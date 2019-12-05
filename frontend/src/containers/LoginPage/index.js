import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import Mesa from '../../Components/Mesa';
import { setPlayer, addPlayer } from '../../actions';
import { AppContainer, PriceToPay, HeaderDiv, MesasContainer, SelectForm, InputtForm, ButtonForm, HeaderForm } from './styled'


class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputPlayer: "",
      selectTable: "1",
      currentPayment: "",
    }
  }

  ChangeValue = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  putOnTable = () => {
    const { inputPlayer, selectTable } = this.state
    const { addPlayer, allGames, allTimers } = this.props
    //cria variavel referente a mesa que sera inserido
    const locale = "mesa" + selectTable
    //cria variavel referente ao tempo da mesa que sera inserido
    const localeTimer = "timer" + selectTable

    const playerData = {
      playerName: inputPlayer,
      tablePlaying: selectTable,
      playing: true,
      peopleOnTable: allGames[locale].length===1 ? 2 : allGames[locale].length + 1 ,
      startedTime: allTimers[localeTimer],
      finishTime: 0,
      timePlaying: 0,
      PriceToPay: 0,
    }
    addPlayer(playerData)
    this.setState({inputPlayer:""})
  }

  render() {

    const { currentPayment } = this.props

    return (
      <AppContainer>
        <HeaderDiv>
          <PriceToPay>
            <p>{currentPayment.playerName} Tempo: {currentPayment.timePlaying} min R$: {currentPayment.PriceToPay.toFixed(2)}</p>
          </PriceToPay>
          <HeaderForm>
            <InputtForm
              name="inputPlayer"
              value={this.state.inputPlayer}
              placeholder="Nome..."
              type="text"
              onChange={this.ChangeValue}
            />

            <SelectForm
              name="selectTable"
              value={this.state.selectTable}
              onChange={this.ChangeValue}
            >
              <option value="1">Mesa 1</option>
              <option value="2">Mesa 2</option>
              <option value="3">Mesa 3</option>
              <option value="4">Mesa 4</option>
            </SelectForm>
            <ButtonForm onClick={this.putOnTable} >Incluir</ButtonForm>
          </HeaderForm>
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

