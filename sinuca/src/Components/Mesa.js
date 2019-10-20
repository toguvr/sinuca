import React from 'react';
import styled from 'styled-components'
import {Timer} from './Timer'

const MesaContainer = styled.div`
    background: #58433a;
    color:white;
    height:345px;
    width:210px;
    display:flex;
    justify-content:center;
    align-items:center;
    position: relative;
    border-radius:10px;
    box-shadow: 0px 10px 20px black;
`

const MesaInterna = styled.div`
    background: #009484;
    color:white;
    height:310px;
    width:170px;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    overflow-y:scroll;

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
const Nomes = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`

const Cacapa1 = styled.div`
    background:black;
    border-radius:50%;
    width:20px;
    height:20px;
    position: absolute;
    top:0;
    left:0;
`
const Cacapa2 = styled.div`
    background:black;
    border-radius:50%;
    width:20px;
    height:20px;
    position: absolute;
    top:0;
    right:0;
`
const Cacapa3 = styled.div`
    background:black;
    border-radius:50%;
    width:20px;
    height:20px;
    position: absolute;
    top:50%;
    right:0;
`
const Cacapa4 = styled.div`
    background:black;
    border-radius:50%;
    width:20px;
    height:20px;
    position: absolute;
    top:50%;
    left:0;
`
const Cacapa5 = styled.div`
    background:black;
    border-radius:50%;
    width:20px;
    height:20px;
    position: absolute;
    bottom:0;
    right:0;
`
const Cacapa6 = styled.div`
    background:black;
    border-radius:50%;
    width:20px;
    height:20px;
    position: absolute;
    bottom:0;
    left:0;
`

const Sair = styled.img`
    width:30px;
`


const Jogador = styled.h4`
    margin:10px;
`

export class Mesa extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showTime:false,
            atualTime:0
        }
    }

    transferProps=(item)=>{
        this.setState(item)
        this.props.SaveToState(item)
    }

    exitHall=(index)=>{
        this.closeAccount()
        const newPlayersList = [...this.props.PlayersOnTable]
        let selectPlayer = newPlayersList[index]
        newPlayersList.splice(index, 1)
        this.props.SaveToState({
            currentPayment: selectPlayer,
            [this.props.TableNumber]: newPlayersList})
    }

    closeAccount = () =>{
        for(let pessoa of this.props.PlayersOnTable){
            pessoa.finishTime = this.state.atualTime
            pessoa.PriceToPay =  (((pessoa.finishTime - pessoa.startedTime)*(4/60)/pessoa.peopleOnTable)+ pessoa.PriceToPay )
            pessoa.timePlaying = pessoa.finishTime - pessoa.startedTime + pessoa.timePlaying
            pessoa.startedTime=this.state.atualTime
            pessoa.peopleOnTable=this.props.PlayersOnTable.length
          }
    }

    componentDidUpdate(prevProps){
        if(this.props.PlayersOnTable.length===1){
            this.props.PlayersOnTable[0].peopleOnTable=2
        }
        if(prevProps.PlayersOnTable !== this.props.PlayersOnTable && this.props.PlayersOnTable.length>0){
            const last = this.props.PlayersOnTable.length -1
            for(let pessoa of prevProps.PlayersOnTable){
                if(pessoa.id === this.props.PlayersOnTable[last].id){
                    console.log('ja existia')
                }else{
                    this.props.PlayersOnTable[last].startedTime=this.state.atualTime
                }
            }
            
        }
        if(prevProps.PlayersOnTable!==this.props.PlayersOnTable){
            this.closeAccount()
          }
          
        if(prevProps.PlayersOnTable !== this.props.PlayersOnTable){
            this.props.PlayersOnTable.length>1? this.setState({showTime:true}):this.setState({showTime:false})
        }
    }

    render() {
        let showTimeStarted 
        if(this.state.showTime){
            showTimeStarted = <Timer TransferProps={this.transferProps} />
        }
        const playersPlaying = this.props.PlayersOnTable.map((player,index)=>{
            return <Nomes key={index}>
            <Jogador>{player.name}</Jogador>
            <Sair onClick={()=>this.exitHall(index)} src="https://image.flaticon.com/icons/svg/2122/2122095.svg" />
        </Nomes>
        })
        return (
            <MesaContainer>
                <MesaInterna>
                {showTimeStarted}
                {playersPlaying}
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
}