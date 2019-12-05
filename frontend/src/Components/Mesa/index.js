import React from "react";
import { connect } from "react-redux";
import { MesaContainer, MesaInterna, Nomes, Cacapa1, Cacapa2, Cacapa3, Cacapa4, Cacapa5, Cacapa6, Sair, Jogador } from './styled'
import Timer from '../Timer'
import { updatePlayers, currentPayment, setCurrentTime, changePlayer, getPlayers, leaveTable, updateAllPlayersPayment, timeZeroed } from '../../actions'

export class Mesa extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        
    }

    componentDidMount() {
        this.props.getPlayers(this.props.tableNumber)
    }


    exitHall = (player) => {
        const { allGames, allTimers, tableNumber, updatePlayers, currentPayment, leaveTable, updateAllPlayersPayment } = this.props
        //fecha a conta de todos os jogadores
        this.closeAccount()
        //salvar na api o pagamento final
        leaveTable(player, tableNumber)
    }

    closeAccount = () => {

        const { allGames, allTimers, tableNumber, updatePlayers, updateAllPlayersPayment,getPlayers } = this.props

        const locale = "mesa" + tableNumber
        const localeTimer = "timer" + tableNumber
        const playersPlaying = allGames[locale]
        const currentTime = allTimers[localeTimer]
        const newPlayersList = [...playersPlaying]
        const timePrice = 4
        
        for (let pessoa of newPlayersList) {

            //tempo de fim igual ao tempo atual
            pessoa.finishTime = currentTime
            //preço a se pagar é o tempo final - o inicial * o preço da hora / 60 para ficar em minutos e isto tudo dividido pela quantidade de pessoas jogando mais o preço que ja devia
            pessoa.PriceToPay = Number(((pessoa.finishTime - pessoa.startedTime) * (timePrice / 60) / pessoa.peopleOnTable) + pessoa.PriceToPay)
            //tempo jogando e o tempo que parou o que começou mais o tempo que ja estava na mesa anteas de fechar a conta
            pessoa.timePlaying = pessoa.finishTime - pessoa.startedTime + pessoa.timePlaying
            //tempo inicial igual ao tempo atual
            pessoa.startedTime = currentTime
            //numero de pessoas na mesa vira o numero atual de pessoas
            pessoa.peopleOnTable = playersPlaying.length
        }
        
        updateAllPlayersPayment(newPlayersList, tableNumber)
    }

    componentDidUpdate(prevProps) {
        const { allGames, allTimers, tableNumber, updatePlayers, setCurrentTime, timeZeroed } = this.props

        const locale = "mesa" + tableNumber
        const localeTimer = "timer" + tableNumber
        const playersPlaying = allGames[locale]

        if(playersPlaying.length===1 && allTimers[localeTimer]!==0){
            //se tiver somente um jogador na mesa e o tempo for diferente de 0 ele ira zera o contador
            setCurrentTime({tablePlaying: tableNumber, time: 0})
            // changePlayer(0,locale)
        }

        if(prevProps.allTimers[localeTimer] > allTimers[localeTimer]){
            timeZeroed(locale, tableNumber)
        }

        if(prevProps.allGames[locale].length !== playersPlaying.length && playersPlaying.length>1){
            //se alterar o quantidade de jogadores na mesa, atualiza a conta de todos
            this.closeAccount()
        }
    }

    render() {

        const showTimeStarted = <Timer tablePlaying={this.props.tableNumber} saveTime={this.saveTime}/>

        const locale = "mesa" + this.props.tableNumber

        const playersPlaying = this.props.allGames[locale].map((player, index) => {
            return <Nomes key={index}>
                <Jogador>{player.playerName}</Jogador>
                <Sair onClick={() => this.exitHall(player)} src="https://image.flaticon.com/icons/svg/2122/2122095.svg" />
            </Nomes>
        })
        return (
            <MesaContainer>
                <MesaInterna>
                    {this.props.allGames[locale].length > 1 ? showTimeStarted : null}
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
    leaveTable: (player_id, table_id) => dispatch(leaveTable(player_id, table_id)),
    updateAllPlayersPayment: (playersArray, table_id) => dispatch(updateAllPlayersPayment(playersArray, table_id)),
    timeZeroed: (table, tableNumber) => dispatch(timeZeroed(table, tableNumber)),

})

export default connect(mapStateToProps, mapDispatchToProps)(Mesa)

