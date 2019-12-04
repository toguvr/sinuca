import React from 'react';
import styled from 'styled-components'
import { Mesa } from './Components/Mesa';
import axios from 'axios'

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background:lightslategray;
`

const PriceToPay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background:lightgreen;
  justify-content:space-evenly;
  width:40%;
  border-right:2px white solid;
  font-weight:bold;

  @media(max-width:600px){
    width:100%;
    border:none;
  }
`

const HeaderDiv = styled.div`
  display: flex;
  width:100%;

  @media(max-width:600px){
    flex-wrap:wrap;
  }

`

const MesasContainer = styled.div`
  display: flex;
  align-items: center;
  width:90%;
  flex-grow:1;
  justify-content:space-evenly;
  flex-wrap:wrap;
`

const SelectForm = styled.select`
  width:30%;
  height:30px;
  background:transparent;
  border:white 2px solid;
  color: black;
  padding:0;
  :focus{
    outline:none;
  }
`

const InputtForm = styled.input`
  width:30%;
  height:30px;
  padding:0;
  background:transparent;
  border:white 2px solid;
  color: black;
  :focus{
    outline:none;
  }
`

const ButtonForm = styled.button`
  height:30px;
  background:transparent;
  border:white 2px solid;
  color: black;
  box-shadow:0 2px 2px black;
  :focus{
    outline:none;
  }
  :active{
    background:#7ac0f8;
    position:relative;
    top:2px;
  }
`

const HeaderForm = styled.div`
  height:60px;
  width:60%;
  background:lightskyblue;
  display: flex;
  align-items: center;
  justify-content:space-evenly;

  @media(max-width:600px){
    width:100%;
  }
`

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputPlayer: "",
      selectTable: "1",
      currentPayment:"",
      mesa1: [],
      mesa2: [],
      mesa3: [],
      mesa4: [],
    }
  }

  ChangeValue = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  saveToState = (item) => {
    this.setState(item)
  }


  putOnTable =async  () => {
   try{ const data ={
      jogador: this.state.inputPlayer,
      dataCriacao:Number(new Date()),
      mesa: Number(this.state.selectTable)
    }
console.log(data.dataCriacao)
    const res =await axios.post(`http://sinuca.esy.es/putOnTable.php`,data)
    console.log(res)
  }catch (err){
    console.log(err)
  }
  //   if (this.state.inputPlayer !== "") {
  //     let local = 'mesa' + this.state.selectTable
  //     let tamanho = this.state[local].length
  //     let state = this.state[local]
      this.setState({
  //       [local]: [...state, { 
  //         id:Date.now(),
  //         name: this.state.inputPlayer, 
  //         startedTime: 0,
  //         timeStarted:0,
  //         finishTime:0,
  //         peopleOnTable: tamanho +1,
  //         PriceToPay:0,
  //         timePlaying:0
  //       }],
        inputPlayer: "",
      })
  //   }else{
  //     window.alert("Você não digitou o nome do jogador!")
  //   }
  }

  render() {
    return (
      <AppContainer>
        <HeaderDiv>
          <PriceToPay>
            <p>{this.state.currentPayment.name} Tempo: {this.state.currentPayment.timePlaying} min R$: {this.state.currentPayment.PriceToPay===undefined?0.00:this.state.currentPayment.PriceToPay.toFixed(2)}</p>
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
            <Mesa SaveToState={this.saveToState} TableNumber="1" PlayersOnTable={this.state.mesa1} />
          </div>
          <div>
            <h2>mesa 2</h2>
            <Mesa SaveToState={this.saveToState} TableNumber="2" PlayersOnTable={this.state.mesa2} />
          </div>
          <div>
            <h2>mesa 3</h2>
            <Mesa SaveToState={this.saveToState} TableNumber="3" PlayersOnTable={this.state.mesa3} />
          </div>
          <div>
            <h2>mesa 4</h2>
            <Mesa SaveToState={this.saveToState} TableNumber="4" PlayersOnTable={this.state.mesa4} />
          </div>
        </MesasContainer>
      </AppContainer>
    )
  }
}

export default App;
