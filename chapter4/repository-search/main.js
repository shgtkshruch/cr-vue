new Vue({
  el: '#app',
  data: {
    current: '',
    repositories: [],
    topics: [
      { value: 'vue', name: 'Vue.js' },
      { value: 'jQuery', name: 'jQuery' }
    ]
  },
  watch: {
    current(val) {
      axios.get('https://api.github.com/search/repositories', {
        params: {
          q: `topic:${val}`
        }
      }).then(response => {
        this.repositories = response.data.items
      });
    }
  }
});
