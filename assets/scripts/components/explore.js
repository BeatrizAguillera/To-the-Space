app.component('explore', {
    template:
    /*html*/
    `<main>
    <section class="u_mainContainer u_contentContainer">
        <div class="u_mainInfo">
            <h2 id="mainIntroduction" class="u_introduction">So, you want to travel to</h2>
            <h1 id="mainTitle" class="u_titles">Space</h1>
            <p class="u_description">Let’s face it; if you want to go to space, you might as well genuinely go to
                outer space and not hover kind of on the edge of it. Well sit back, and relax
                because we’ll give you a truly out of this world experience!</p>
        </div>
        <div id="exploreButton"><a href="#">Explore</a></div>
    </section>
</main>`,

    data() {
        return {
            anything: 0,
        }
    },
    methods: {

    },
    computed: {
    },
})