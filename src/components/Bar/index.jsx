import {Link} from 'react-router-dom'
const Bar = (() => {
  return (
  <>
    <div className="topBar">
      <div className="topBar-inner">
        <h1 className="title">Vanessa's Web</h1>
        <div className="hamburger">
          <label htmlFor="topBar-trigger">
            <span className="trigger"></span>
          </label>
          <input type="checkbox" id="topBar-trigger"/>
        </div>
      </div>
    </div>
    <div className="sideBar">
      <div className="sideBar-inner">
        <div className="logo">
          <a href="https://vanessalin9.github.io/">Vanessa's</a>
          </div>
        <div className="menu">
          <ul>
            <li className="item">
              <Link replace to="/">Home</Link>
            </li>
            {/* <li className="item">
              <Link to="/">Portfolio</Link>
            </li> */}
            <li className="item">
              <Link to='/game'>Game</Link>
            </li>
            {/* <li className="item">
              <Link to='/snake'>Snake</Link>
            </li> */}
          </ul>
        </div>
        <div className="copyright">
          copyright &copy; 2023
          vanessa lin
        </div>
      </div>
    </div>
  </>
  )
})

export default Bar;