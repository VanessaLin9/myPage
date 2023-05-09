import React from 'react';

const GameBox = ((props) => {
  const {id, pic, title, description, website, repo} = props
  return (
        <div className="game-box">
          <div className="pic">
            <img src={pic} alt="" />
          </div>
          <div className="txt">
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="btn-group">
              <a href={website} className="btn" target="_blank">web</a>
              <a href={repo} className="btn" target="_blank">repo</a>
            </div>
          </div>
        </div>
  )
})

export default GameBox;