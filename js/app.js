const app = Vue.createApp({
  data() {
    return {
      destinations: [...],
      selectedRegion: 'All',
      searchQuery: ''
    }
  },
  computed: {
    filteredDestinations() {
      ...
    }
  }
})

app.mount('#app')
