import React from "react";
import { connect } from "react-redux";
import { MesaContainer, MesaInterna, Nomes, Cacapa1, Cacapa2, Cacapa3, Cacapa4, Cacapa5, Cacapa6, Sair, Jogador } from './styled'
import Timer from '../Timer'
import { updatePlayers, currentPayment, setCurrentTime, changePlayer, getPlayers, leaveTable, updateAllPlayersPayment, timeZeroed, getTimers } from '../../actions'

export class Mesa extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        
    }

    render() {

        const playersPlaying = this.props.players.map((player, index) => {
            return <Nomes key={index}>
                <Jogador>{player.playerName}</Jogador>
            </Nomes>
        })
        return (
            <MesaContainer>
                <MesaInterna>
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


const mapStateToProps = state => ({
    allGames: state.snooker,
    allTimers: state.timer
})

const mapDispatchToProps = dispatch => ({
    updatePlayers: (playerData, locale) => dispatch(updatePlayers(playerData, locale)),
    currentPayment: (currentPlayer) => dispatch(currentPayment(currentPlayer)),
    setCurrentTime: (currentTime) => dispatch(setCurrentTime(currentTime)),
    changePlayer: (id, locale) => dispatch(changePlayer(id, locale)),
    getPlayers: (table_id) => dispatch(getPlayers(table_id)),
    getTimers: () => dispatch(getTimers()),
    leaveTable: (player_id, table_id) => dispatch(leaveTable(player_id, table_id)),
    updateAllPlayersPayment: (playersArray, table_id) => dispatch(updateAllPlayersPayment(playersArray, table_id)),
    timeZeroed: (table, tableNumber) => dispatch(timeZeroed(table, tableNumber)),

})

export default connect(mapStateToProps, mapDispatchToProps)(Mesa)

