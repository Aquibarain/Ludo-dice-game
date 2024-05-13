
import styled from "styled-components"

const RoaiDice = ({roleDice, currentDice}) => {
  
  


  return (
    <DiceContainer>
      <div className="dice"onClick={roleDice}>
        <img src={`/images/dice_${currentDice}.png`} alt="dice_1" />
        <p>Click on Dice to roll</p>
      </div>
    </DiceContainer>
  )
}

export default RoaiDice

const DiceContainer = styled.div`
margin-top: 48px;
display: flex;
justify-content: center;
align-items: center;

.dice{
  cursor: pointer;
}
p{
  font-size: 24px;
  text-align: center;
  font-weight: 500;
}
`;