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
                <li class="u_navItens destinationItens" :class="{ active: moonActive }" 
                @click="updateDestination(0), activeDestination()">Moon</li>
                <li class="u_navItens destinationItens" :class="{ active: marsActive }"
                @click="updateDestination(1), activeDestination()">Mars</li>
                <li class="u_navItens destinationItens" :class="{ active: europaActive }"
                @click="updateDestination(2), activeDestination()">Europa</li>
                <li class="u_navItens destinationItens" :class="{ active: titanActive }"
                @click="updateDestination(3), activeDestination()">Titan</li>
              </ul>
            </nav>
            <div class="destinationTexts">
              <h2 id="destinationTitle" class="u_titles">{{ destinationName }}</h2>
              <p class="u_description">{{ destinationDescription }}</p>
            </div>
              <hr>
              <div id="destinationInfos" class="grid-section numbers" data-anime="scroll">
                <ul class="numbers-grid">
                  <li class="numbers-skill"><h3 @click="numbersAnimation('distanceNumber')">Avg. distance</h3><p id="distanceNumber">{{ destinationDistance }}</p><p>{{ destinationDistanceComplement }}</p></li>
                  <li class="numbers-skill"><h3>Est. travel time</h3><p id=travelTimeNumber>{{ destinationTravelTime }}</p><p>{{ destinationTravelComplement }}</p></li>
                </ul>
              </div>
          </div>
        </article>
    </section>`,

  data() {
    return {
      moonActive: true,
      marsActive: false,
      europaActive: false,
      titanActive: false,
      selectedDestination: 0,
      destinations: [
        {
          name: 'Moon',
          image: './assets/destination/image-moon.png',
          description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
          distance: 384,
          distanceComplement: '.400 km',
          travelTime: '3',
          travelComplement: ' days',
        },
        {
          name: 'Mars',
          image: './assets/destination/image-mars.png',
          description: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
          distance: 225,
          distanceComplement: ' mil. km',
          travelTime: '9',
          travelComplement: ' months',
        },
        {
          name: 'Europa',
          image: './assets/destination/image-europa.png',
          description: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
          distance: 628,
          distanceComplement: ' mil. km',
          travelTime: '3',
          travelComplement: ' years',
        },
        {
          name: 'Titan',
          image: './assets/destination/image-titan.png',
          description: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
          distance: 1.6,
          distanceComplement: ' bil. km',
          travelTime: '7',
          travelComplement: ' years',
        }
      ],

    }
  },
  methods: {
    updateDestination(index) {
      this.selectedDestination = index
    },
    activeDestination() {
      this.moonActive = false;
      this.marsActive = false;
      this.europaActive = false;
      this.titanActive = false;
      if (this.selectedDestination == 0) {
        return this.moonActive = true
      } else if (this.selectedDestination == 1) {
        return this.marsActive = true
      } else if (this.selectedDestination == 2) {
        return this.europaActive = true
      } else if (this.selectedDestination == 3) {
        return this.titanActive = true
      }
    },
    numbersAnimation(id) {
      let element = document.getElementById(id);
      let total = parseFloat(element.innerText);
      // let increment = Math.floor(total / 25);
      let start = 0;
      let counter = setInterval(() => {
        start = start + 1;
        element.innerText = start;
        if (start > total) {
          element.innerText = total;
          clearInterval(counter);
        }
      }, 5)
    },
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
    destinationDistanceComplement() {
      return this.destinations[this.selectedDestination].distanceComplement
    },
    destinationTravelTime() {
      return this.destinations[this.selectedDestination].travelTime
    },
    destinationTravelComplement() {
      return this.destinations[this.selectedDestination].travelComplement
    },
  },
})