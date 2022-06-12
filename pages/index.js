import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {
  const [xTurn,setXTurn]= useState();
  
  const [boardData,setBoardData]= useState({
    0:"",
    1:"",
    2:"",
    3:"",
    4:"",
    5:"",
    6:"",
    7:"",
    8:"",
  });
  const [winner,setWinner]=useState("");

  const updateBoardData=((idx)=>{
    let value= xTurn===true?"X":"O";
    setBoardData({...boardData, [idx]:value});
    setXTurn(!xTurn);
  });
  useEffect(()=>{
    boardData[0]&&boardData[0] ===boardData[1] && boardData[1]===boardData[2]?setWinner(boardData[2]):null
    boardData[3]&&boardData[3] ===boardData[4] && boardData[4]===boardData[5]?setWinner(boardData[5]):null
    boardData[6]&& boardData[6] ===boardData[7] && boardData[7]===boardData[8]?setWinner(boardData[8]):null
    boardData[0]&&boardData[0] ===boardData[3] && boardData[3]===boardData[6]?setWinner(boardData[6]):null
    boardData[1]&&boardData[1] ===boardData[4] && boardData[4]===boardData[7]?setWinner(boardData[7]):null
    boardData[2]&& boardData[2] ===boardData[5] && boardData[5]===boardData[8]?setWinner(boardData[8]):null
    boardData[0]&&boardData[0] ===boardData[4] && boardData[4]===boardData[8]?setWinner(boardData[8]):null
    boardData[2]&&boardData[2] ===boardData[4] && boardData[4]===boardData[6]?setWinner(boardData[6]):null
  },[boardData]);
  
  
  return (
    <div >
    <h1 className='main'>Tic Tac Toe</h1>
    <h2 className='main'> Who wants to start the game?</h2>
    <div className='main'>
    <span> 
    <button onClick={()=>{setXTurn(true)}}> Player X </button>
    <button onClick={()=>{setXTurn(false)}}> Player O</button>
    </span>
    </div>
   
   <div className='game'>

   <div className='game-board'>
    <h2>{xTurn===true?"X turn":"O Turn"}</h2>
    <div>
    <div className='game-tile'>
     {[...Array(9)].map((v,idx)=>{
      return <div 
              onClick={()=>{
                !winner?updateBoardData(idx):null;
              }}
              key={idx} className='square'> {boardData[idx]}
              </div>
            })
     }
    </div>
    <div className='win'> Winner is {winner}</div>
    <button onClick={()=>{ 
      setXTurn(true);
      setBoardData({ 
      0:"",
      1:"",
      2:"",
      3:"",
      4:"",
      5:"",
      6:"",
      7:"",
      8:"",
    })
    setWinner("");

    }}> Reset</button>
    
    
    </div>
   </div>

   </div>
   </div>
  )
}
