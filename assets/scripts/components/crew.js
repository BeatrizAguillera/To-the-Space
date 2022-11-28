app.component('crew', {
    template:
        /*html*/
        `<section id="crewTab" class="u_mainContainer">
        <article class="u_contentContainer">
        
          <div class="u_mainInfo">
                    <h1 id="crewIntroduction" class="u_introduction"><span class="u_numberPage">02</span>Meet your crew</h1>

            <div class="crewTexts">
            <h3 id="crewMemberRole" class="u_titles">{{ crewMemberRole }}</h3>
              <h2 class="u_titles" id="crewMemberName">{{ crewMemberName }}</h2>
              <p class="u_description" id="crewDescription">{{ crewMemberDescription }}</p>
            </div>
              <hr>
            <nav class="u_navBar" id="crewNavBar">
              <ul>
                <li class="u_navItens crewItens" :class="{ activeCrew: cm0Active }" @click="updateCrewMember(0), activeCrewMember()"></li>
                <li class="u_navItens crewItens" :class="{ activeCrew: cm1Active }" @click="updateCrewMember(1), activeCrewMember()"></li>
                <li class="u_navItens crewItens" :class="{ activeCrew: cm2Active }" @click="updateCrewMember(2), activeCrewMember()"></li>
                <li class="u_navItens crewItens" :class="{ activeCrew: cm3Active }" @click="updateCrewMember(3), activeCrewMember()"></li>
              </ul>
            </nav>
          </div>

            <img class="u_images" :src="crewMemberImage" alt="crew members image">
        </article>
    </section>`,

    data() {
        return {
            cm0Active: true,
            cm1Active: false,
            cm2Active: false,
            cm3Active: false,
            selectedCrewMember: 0,
            crewMembers: [
            {
            name: 'Douglas Hurley',
            image: './assets/crew/image-douglas-hurley.png',
            role: 'Commander',
            description: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
        },
        {
            name: 'Mark Shuttleworth',
            image: './assets/crew/image-mark-shuttleworth.png',
            role: 'Mission Specialist',
                description: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'
        },
        {
            name: 'Victor Glover',
            image: './assets/crew/image-victor-glover.png',
            role: 'Pilot',
                description: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.'
        },
        {
            name: 'Anousheh Ansari',
            image: './assets/crew/image-anousheh-ansari.png',
            role: 'Flight Engineer',
                description: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.'
        }
    ],
            }
    },
    methods: {
        updateCrewMember(index) {
            this.selectedCrewMember = index
        },
        activeCrewMember() {
            this.cm0Active = false;
            this.cm1Active = false;
            this.cm2Active = false;
            this.cm3Active = false;
            if (this.selectedCrewMember == 0) {
                return this.cm0Active = true
            } else if (this.selectedCrewMember == 1) {
                return this.cm1Active = true
            } else if (this.selectedCrewMember == 2) {
                return this.cm2Active = true
            } else if (this.selectedCrewMember == 3) {
                return this.cm3Active = true
            }
        },
    },
    computed: {
        crewMemberName() {
            return this.crewMembers[this.selectedCrewMember].name
        },
        crewMemberImage() {
            return this.crewMembers[this.selectedCrewMember].image
        },
        crewMemberRole() {
            return this.crewMembers[this.selectedCrewMember].role
        },
        crewMemberDescription() {
            return this.crewMembers[this.selectedCrewMember].description
        },
    },
})