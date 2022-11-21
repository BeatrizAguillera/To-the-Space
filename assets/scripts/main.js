const app = Vue.createApp({
    data() {
        return {
            // tabs: [
            //     { homeTab: true },
            //     { destinationsTab: false },
            //     { crewTab: false },
            //     { technologyTab: false },
            // ]
            homeTab: true,
            destinationsTab: false,
            crewTab: false,
            technologyTab: false,
        }
    },
    methods: {
        hideTabs() {
            this.homeTab = false,
            this.destinationsTab = false,
            this.crewTab = false,
            this.technologyTab = false
        },
        showHome() {
            return this.homeTab = true
        },
        showDestinations() {
            return this.destinationsTab = true
        },
        showCrew() {
            return this.crewTab = true
        },
        showTechnology() {
            return this.technologyTab = true
        },
    },
    computed: {
        classBackgroundsObject() { 
        return {
            homeBackground: this.homeTab,
            destinationBackground: this.destinationsTab,
            crewBackground: this.crewTab,
            technologyBackground: this.technologyTab }
        }
    }
})

