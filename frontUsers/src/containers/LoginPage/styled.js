import styled from "styled-components";

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background:lightslategray;
`


export const HeaderDiv = styled.div`
  display: flex;
  width:100%;
  background: #d11b1c;
  height:60px;
  align-items:center;
  justify-content:space-around;

  @media(max-width:600px){
    flex-wrap:wrap;
  }

`

export const Title = styled.h1`
  margin:0;
  color:white;
`

export const HeaderLogo = styled.img`
  height:90%;
`

export const MesasContainer = styled.div`
  display: flex;
  align-items: center;
  width:90%;
  flex-grow:1;
  justify-content:space-evenly;
  flex-wrap:wrap;
  padding-bottom:60px;
`

export const SelectForm = styled.select`
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

export const InputtForm = styled.input`
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

export const ButtonForm = styled.button`
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

export const HeaderForm = styled.div`
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
