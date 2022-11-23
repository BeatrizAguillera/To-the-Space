app.component('technologies', {
    template:
        /*html*/
        `<section id="technologyTab" class="u_mainContainer">
        <h1 class="u_introduction"><span class="u_numberPage">03</span>Space Launch 101</h1>

        <article id="technologyContainer" class="u_contentContainer">
            <nav id="technologiesNavBar">
              <ul>
                <li class="u_navItens technologyItens" @click="updateTechnology(0)">1</li>
                <li class="u_navItens technologyItens" @click="updateTechnology(1)">2</li>
                <li class="u_navItens technologyItens" @click="updateTechnology(2)">3</li>
              </ul>
            </nav>
          <div class="u_mainInfo">
            <div class="technologiesTexts">
              <h3 id="technologiesSubtitle">The terminology...</h3>
              <h2 id="technologiesTitle" class="u_titles">{{ technologyName }}</h2>
              <p class="u_description">{{ technologyDescription }}</p>
            </div>
          </div>

          <img class="u_images" :src="technologyImage" alt="">
        </article>
    </section>`,

    data() {
      return {
        selectedTechnology: 0,
        technologies: [
      {
        name: 'Launch vehicle',
        images: {
          portrait: './assets/technology/image-launch-vehicle-portrait.jpg',
          landscape: './assets/technology/image-launch-vehicle-landscape.jpg'
        },
        description: 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth\'s surface to space, usually to Earth orbit or beyond.Our WEB- X carrier rocket is the most powerful in operation.Standing 150 metres tall, it\'s quite an awe-inspiring sight on the launch pad!'
    },
  {
    name: 'Spaceport',
    images: {
      portrait: './assets/technology/image-spaceport-portrait.jpg',
      landscape: './assets/technology/image-spaceport-landscape.jpg'
    },
    description: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth\'s rotation for launch.'
    },
  {
    name: 'Space capsule',
    images: {
      portrait: './assets/technology/image-space-capsule-portrait.jpg',
      landscape: './assets/technology/image-space-capsule-landscape.jpg'
    },
    description: 'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth\'s atmosphere without wings.Our capsule is where you\'ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.'
    }
  ],
      }
  },
  methods: {
    updateTechnology(index) {
      this.selectedTechnology = index
    },
  },
  computed: {
    technologyImage() {
      return this.technologies[this.selectedTechnology].images.portrait
    },
    technologyName() {
      return this.technologies[this.selectedTechnology].name
    },
    technologyDescription() {
      return this.technologies[this.selectedTechnology].description
    },
  },
})