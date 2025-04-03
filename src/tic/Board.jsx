import {useState} from "react";
import Square from "./Square";

const Board =()=>{
  
    const [state,setState]=useState(Array(9).fill(null))
    const[IsXTurn ,setIsXTurn]=useState(true);
    const checkwinner=()=>{
        const winnerlogic=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];
        for (let logic of winnerlogic){
            const [a,b,c]=logic;
            if( state[a]!==null && state[a]===state[b]&& state[a]===state[c]){
            return state[a];
        }
    }
        return false;
    }
    const isWinner=checkwinner();
    const handleclick=(index)=>{
        if(state[index]!==null){
            return;
        }
        const copyState={...state};
        copyState[index]=IsXTurn?'X':'O';
        setState(copyState)
        setIsXTurn(!IsXTurn);
    };
    const handleReset=()=>{
        setState(Array(9).fill(null))
    }
    return(
        <>
      
     <h4>Player {IsXTurn?"X":"O"} Please Move</h4>
        <div className='board-container'>
            {isWinner ?(
                <>{isWinner} won the game <button onClick={handleReset}>Play Again </button></>
            ):(
                <>
            <div className="board-row">
            <Square  onClick={()=>{handleclick(0)}} value={state[0]}></Square>
            <Square onClick={()=>{handleclick(1)}} value={state[1]}></Square>
            <Square  onClick={()=>{handleclick(2)}} value={state[2]}></Square>
          
            </div>
            <div className="board-row">
            <Square  onClick={()=>{handleclick(3)}} value={state[3]}></Square>
            <Square  onClick={()=>{handleclick(4)}} value={state[4]}></Square>
            <Square  onClick={()=>{handleclick(5)}} value={state[5]}></Square>
            
            </div>
            <div className="board-row">
            <Square onClick={()=>{handleclick(6)}}  value={state[6]}></Square>
            <Square onClick={()=>{handleclick(7)}} value={state[7]}></Square>
            <Square onClick={()=>{handleclick(8)}} value={state[8]}></Square>
            </div>
           </>
           )}
        
        </div>
        </>
    );
};
export default Board;