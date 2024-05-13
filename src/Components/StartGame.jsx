import styled from "styled-components"
import { Button } from "../Styied/Button";
function StartGame({ toggle }) {
  return (
    <Container>
        <div>
        <img src="/images/dices.png" alt="" />
        </div>

        <div className="contact">
            <h1>DICE GAME</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame


const Container = styled.div`
max-width: 1180px;
display: flex;
margin: 0 auto;
height: 100vh;
align-items: center;
background-color: white;
.contact{
    h1{
        font-size: 80px;
    }
}

`;

