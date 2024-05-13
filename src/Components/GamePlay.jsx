import styled from "styled-components"
import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"
import RoleDice from "./RoleDice"
import { useState } from "react"
import { Button } from "../Styied/Button";
import Rules from "./Rules"


const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState (1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);


  const generateRandomNumber = (min, max) => {
    // console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
    
     return;
    }
    setError("");
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);



    if (selectedNumber == randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }


    setSelectedNumber (undefined);



  };
  

  const resetScore = () => {
    setScore (0);
  };



  return (
    <MainContainer>
      <div className="Top_Section">
      <TotalScore score={score} />

        <NumberSelector 
        error={error}
        setError={setError}
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}/>

      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <Button className="bb" onClick={resetScore}>Reset Score</Button>
        <Button onClick={() => setShowRules ((prev) => !prev)}> {showRules ? "Hide" : "Show"} Rules</Button>
      </div>

      { showRules && <Rules />}
    </MainContainer>
    
  )
}

export default GamePlay

const MainContainer = styled.main`

.Top_Section{
  padding-top: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;

}
.btns{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    gap: 10px;
    margin-top: 20px;

}
.bb{
  background-color: white;
    color: black;
    border: 2px solid #000000;
  &:hover{
    background-color: black;
    color: white;
    border: 2px solid #000000;
    transition: 0.10s background ease-in;
  }

}

`;