app.component('destinations', {
    template:
    /*html*/
    `<section id="destinantionsTab" class="u_mainContainer">
        <h1 class="u_introduction" id="destinationsIntroduction"><span class="u_numberPage">01</span>Pick your destination</h1>

        <article class="u_contentContainer">
          <img class="u_images" :src="destinationImage" alt="destination image">
    
          <div id="mainInfoDestinations" class="u_mainInfo">
            <nav class="u_navBar" id="destinationsNavBar">
              <ul>
                <li class="u_navItens destinationItens"
                 @click="updateDestination(0)">Moon</li>
                <li class="u_navItens destinationItens" :class="[{ activeDest: moonA }, inactive]"  @click="updateDestination(1)">Mars</li>
                <li class="u_navItens destinationItens"   @click="updateDestination(2)">Europa</li>
                <li class="u_navItens destinationItens" :class="[{ titanA: activeD }, inactive]"  @click="updateDestination(3)">Titan</li>
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

    data() {
        return {
          moonA: false,
          activeD: 'activeDest',
          inactive: 'inactive',
          selectedDestination: 0,
          destinations: [
            {
              name: 'Moon',
              image: './assets/destination/image-moon.png',
              description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
              distance: '384,400 km',
              travel: '3 days'
            },
            {
              name: 'Mars',
              image: './assets/destination/image-mars.png',
              description: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
              distance: '225 mil. km',
              travel: '9 months'
            },
            {
              name: 'Europa',
              image: './assets/destination/image-europa.png',
              description: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
              distance: '628 mil. km',
              travel: '3 years'
            },
            {
              name: 'Titan',
              image: './assets/destination/image-titan.png',
              description: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
              distance: '1.6 bil. km',
              travel: '7 years'
            }
          ],

        }
    },
    methods: {
      updateDestination(index) {
        this.selectedDestination = index
      },
      activeThis() {
        this.moonA = true
      }
    },
    computed: {
      destinationImage() {
        return this.destinations[this.selectedDestination].image
      },
      destinationName() {
        return this.destinations[this.selectedDestination].name
      },
      destinationDescription() {
        return this.destinations[this.selectedDestination].description
      },
      destinationDistance() {
        return this.destinations[this.selectedDestination].distance
      },
      destinationTravelTime() {
        return this.destinations[this.selectedDestination].travel
      },
    },
})