app.component('destinations', {
    template:
    /*html*/
    `<section class="u_mainContainer">
        <h1 class="u_introduction"><span class="u_numberPage">01</span>Pick your destination</h1>

        <article class="u_contentContainer">
          <div><img src="./assets/destination/image-moon.png" alt="moon image"></div>
    
          <div class="u_mainInfo">
            <nav id="destinationsNavBar">
              <ul>
                <li class="u_navItens destinationItens">Moon</li>
                <li class="u_navItens destinationItens">Mars</li>
                <li class="u_navItens destinationItens">Europa</li>
                <li class="u_navItens destinationItens">Titan</li>
              </ul>
            </nav>
            <div class="destinationTexts">
              <h2 id="destinationTitle" class="u_titles">{{ test }}</h2>
              <p class="u_description">See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
  regain perspective and come back refreshed. While you’re there, take in some history 
  by visiting the Luna 2 and Apollo 11 landing sites.</p>
            </div>
              <hr>
              <div id="destinationInfos">
                <ul>
                  <li><h3>Avg. distance</h3><p>384,400 km</p></li>
                  <li><h3>Est. travel time</h3><p>3 days</p></li>
                </ul>
              </div>
          </div>
        </article>
    </section>`,

    data() {
        return { test: 'its working!',

        }
    },
    methods: {

    },
    computed: {
        working() {
            return 'this' + this.test
        },

    },
})