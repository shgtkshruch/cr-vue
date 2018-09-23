new Vue({
  el: '#app',
  data: {
    keyword: '',
    repositories: [],
    total_count: 0,
    limit: 30
  },
  methods: {
    search(event) {
      const val = event.target.value;
      axios.get('https://api.github.com/search/repositories', {
        params: {
          q: `topic:${val}`
        }
      }).then(response => {
        this.repositories = response.data.items
        this.total_count = response.data.total_count;
      });
    }
  }
});
