app.component('home', {
    template:
    /*html*/
    `<section id="homeTab" class="u_mainContainer u_contentContainer">
        <div class="u_mainInfo">
            <h2 id="homeIntroduction" class="u_introduction">So, you want to travel to</h2>
            <h1 id="homeTitle" class="u_titles">Space</h1>
            <p class="u_description">Let’s face it; if you want to go to space, you might as well genuinely go to
                outer space and not hover kind of on the edge of it. Well sit back, and relax
                because we’ll give you a truly out of this world experience!</p>
        </div>
        <div id="exploreButton" @click="callingHideTabs(), callingShowDestinations()">Explore</div>
    </section>`,

    data() {
        return {
        }
    },
    methods: {
        callingHideTabs() {
            this.$emit('hide-tabs')
        },
        callingShowDestinations() {
            this.$emit('show-destinations')
        }
    }
})