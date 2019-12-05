import styled from 'styled-components'

export const MesaContainer = styled.div`
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

export const MesaInterna = styled.div`
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

export const Nomes = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`

export const Cacapa1 = styled.div`
    background:black;
    border-radius:50%;
    width:20px;
    height:20px;
    position: absolute;
    top:0;
    left:0;
`

export const Cacapa2 = styled.div`
    background:black;
    border-radius:50%;
    width:20px;
    height:20px;
    position: absolute;
    top:0;
    right:0;
`

export const Cacapa3 = styled.div`
    background:black;
    border-radius:50%;
    width:20px;
    height:20px;
    position: absolute;
    top:50%;
    right:0;
`

export const Cacapa4 = styled.div`
    background:black;
    border-radius:50%;
    width:20px;
    height:20px;
    position: absolute;
    top:50%;
    left:0;
`

export const Cacapa5 = styled.div`
    background:black;
    border-radius:50%;
    width:20px;
    height:20px;
    position: absolute;
    bottom:0;
    right:0;
`

export const Cacapa6 = styled.div`
    background:black;
    border-radius:50%;
    width:20px;
    height:20px;
    position: absolute;
    bottom:0;
    left:0;
`

export const Sair = styled.img`
    width:30px;
`

export const Jogador = styled.h4`
    margin:10px;
`
