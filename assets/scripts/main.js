const app = Vue.createApp({
    data() {
        return {
            message: 'Hello, World!',
            tabs: [
                destinationsBoolean = false,
                exploreBoolean = false,
            ]
        }
    },
    methods: {
        removeAll() {
        },
        showDestinations() {
            return this.tabs.destinationsBoolean = true
        },
    }
})

