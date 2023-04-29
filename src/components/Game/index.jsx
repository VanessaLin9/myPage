const Game = (()=>{
  return(
    <div className="game-inner">

      <div className="title">
        <p>-單人小型side project</p>
        <h1>Game</h1>
      </div>

      
      <div className="wrap">

        <div className="game-box">
          <div className="pic">
            <img src="https://picsum.photos/200/300?random=10" alt="" />
          </div>
          <div className="txt">
            <h2>今天你的千機閣可以500抽了嗎?</h2>
            <p>手遊抽獎計算機</p>
            <div className="btn-group">
              <a href="https://vanessalin9.github.io/lottery-P02/" className="btn" target="_blank">web</a>
              <a href="https://github.com/VanessaLin9/lottery-P02" className="btn" target="_blank">repo</a>
            </div>
            
          </div>
        </div>

      </div>  
      
    </div>
  )
})

export default Game;