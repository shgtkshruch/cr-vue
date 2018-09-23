new Vue({
  el: '#app',
  data: {
    budget: 300,
    limit: 2,
    showAll: false,
    fruits: [
      { id: 1, name: 'りんご', price: 100 },
      { id: 2, name: 'ばなな', price: 200 },
      { id: 3, name: 'いちご', price: 400 },
      { id: 4, name: 'おれんじ', price: 300 },
      { id: 5, name: 'めろん', price: 500 }
    ]
  },
  computed: {
    matched() {
      return this.fruits.filter(el => {
        return el.price <= this.budget;
      }, this);
    },
    limited() {
      if (this.showAll) {
        this.budget = '';
        return this.fruits;
      } else {
        return this.matched.slice(0, this.limit);
      }
    }
  }
});
