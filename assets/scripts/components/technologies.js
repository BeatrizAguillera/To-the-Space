app.component('technologies', {
    template:
        /*html*/
        `<section class="u_mainContainer">
        <h1 class="u_introduction"><span class="u_numberPage">03</span></h1>

        <article class="u_contentContainer">
          <div><img :src="technologyImage" alt=""></div>
    
          <div class="u_mainInfo">
            <nav id="destinationsNavBar">
              <ul>
                <li class="u_navItens destinationItens" @mouseover="updateDestination(0)">Moon</li>
                <li class="u_navItens destinationItens" @mouseover="updateDestination(1)">Mars</li>
                <li class="u_navItens destinationItens" @mouseover="updateDestination(2)">Europa</li>
                <li class="u_navItens destinationItens" @mouseover="updateDestination(3)">Titan</li>
              </ul>
            </nav>
            <div class="destinationTexts">
              <h2 id="destinationTitle" class="u_titles">{{ destinationName }}</h2>
              <p class="u_description">{{ destinationDescription }}</p>
            </div>
              <hr>
              <div id="destinationInfos">
                <ul>
                  <li><h3>Avg. distance</h3><p>{{ destinationDistance }}</p></li>
                  <li><h3>Est. travel time</h3><p>{{ destinationTravelTime }}</p></li>
                </ul>
              </div>
          </div>
        </article>
    </section>`,
    })