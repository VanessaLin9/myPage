const Portfolio = (()=> {

  return(
    <div className="section" id="portfolio">
      <div className="portfolio-title">
        <h1>Recent Projects</h1>
      </div>
      <div className="portfolio-inner">
        <div className="project-wrap">

          <div className="card">
            <a href="https://twitter-1.fly.dev/signin" target="_blank">
              <div className="card-img">
                <img src="https://media.discordapp.net/attachments/945077390839787570/1099642315309588520/MrPHPDev_The_scene_depicts_a_lush_forest_glade_filled_with_the__383c563d-75ef-46e0-812d-1871776b5287.png" alt="" />
              </div>
            </a>
            <div className="card-txt">
              <h2>simple twitter</h2>
              <h4>Node.js + Express + MySQL</h4>
              <p>test account: user1</p>
              <p>test password: 12345678</p>
            </div>
          </div>

          <div className="card">
            <a href="https://lychee-sundae-44700.herokuapp.com/signin" target="_blank">
              <div className="card-img">
                <img src="https://media.discordapp.net/attachments/945077390839787570/1099642432192249886/MatthiasDI83_The_scene_depicts_a_lush_forest_glade_filled_with__ae32fcde-2b04-4dea-af99-ae11c3a4117d.png" alt="" />
              </div>
            </a>
            <div className="card-txt">
              <h2>Gloomhaven record</h2>
              <h4>Node.js + Express + MySQL</h4>
              <p>test account: aaaaa</p>
              <p>test password: 123</p>
            </div>
          </div>

        </div>
      </div>
    </div> 
  )
})

export default Portfolio;