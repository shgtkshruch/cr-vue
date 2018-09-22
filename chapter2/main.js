new Vue({
  el: '#app',
  data: {
    name: '',
    monsters: [
      { id: 1, name: 'スライム', hp: 100 },
      { id: 2, name: 'ゴブリン', hp: 200 },
      { id: 3, name: 'ドラゴン', hp: 500 }
    ]
  },
  methods: {
    addMonster() {
      if (!this.name) return;

      const max = this.monsters.reduce((a, b) => {
        return a > b.id ? a : b.id;
      }, 0);

      this.monsters.push({
        id: max + 1,
        name: this.name,
        hp: 500
      });

      this.name = '';
    },
    removeMonster(index) {
      this.monsters.splice(index, 1);
    }
  }
});
