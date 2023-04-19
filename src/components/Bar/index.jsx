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
        <div className="logo">Vanessa's</div>
        <div className="menu">
          <ul>
            <li className="item">
              <a href="#home">Home</a>
            </li>
            <li className="item">
              <a href="#portfolio">Portfolio</a>
            </li>
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