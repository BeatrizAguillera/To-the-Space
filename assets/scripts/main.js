const app = Vue.createApp({
    data() {
        return {
            message: 'Hello, World!',

        }
    },
    methods: {
    }
})

// const app = Vue.createApp({
//     data() {
//         return {
//             message: 'Hello, World!',
//             tabs: [
//                 showingExplore = false,
//                 showingDestinations = false,
//                 showingCrew = false,
//                 showingT = false,
//             ],
//         }
//     },
//     methods: {
//         showD() {
//             return this.tabs.showingT = true
//         },
//         showDestinations() {
//             return this.tabs.showingDestinations = true
//         },
//         removeAll() {
//             return this.tabs.showingDestinations = false
//         },
//     }
// })