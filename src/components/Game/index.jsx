import React from 'react';
import GameBoxData from '../../data/game-box.json';
import GameBox from './gameBox';

const Game = (()=>{
  return(
    <div className="game-inner">

      <div className="title">
        <p>-單人小型side project</p>
        <h1>Game</h1>
      </div>

      
      <div className="wrap">
        {GameBoxData.map((item) => {
          return (
            <GameBox 
              key={item.id} 
              pic={item.pic}
              title={item.title}
              description={item.description}
              website={item.website}
              repo={item.repo}>
            </GameBox>
          )
        })}
      </div>  
      
    </div>
  )
})

export default Game;