const App = {
  data() {
    return {
      activeIndex: 0, // то, что позволяет определить текущий активный шаг
      steps: [
        {status: 'active', title: 'Основы', text: 'В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберем вся базу фреймворка.'},
        {status: '', title: 'Компоненты', text: 'Один из самых важных блоков в курсе, где вы узнаете все о компонентах. В блоке мы напишем 2 разных приложения и создадим более 5 различных UI компонентов как в реальной разработке. Блок расскажет про абсолютно все составляющие, которые есть в компонентах: взаимодействие, slots, асинхронные и динамические компоненты и тонна примеров.'},
        {status: '', title: 'Роутер', text: 'В данном блоке вы узнаете все о том, как работает мультиязычность во Vue. Мы создадим миниклон Gmail в данном блоке, где вы на практике увидите как работать с динамическим роутером.'},
        {status: '', title: 'Vuex', text: 'В блоке вы узнаете абсолютно все про Vuex. Вы узнаете как работать с данными, какие есть лучшие практики по их программированию и структурированию. Все на практике.'},
        {status: '', title: 'Composition', text: 'Одним из наиболее важных обновлений в Vue 3 является появление альтернативного синтаксиса Composition API. В этом блоке вы узнаете все, чтобы полностью пользоваться данными синтаксисом на практических примерах. Помимо этого вы узнаете как работать совместно с Vue Router и Vuex.'},
      ],
      finished: false
    }
  },
  methods: {
    prev() {
      this.setActive(--this.activeIndex)
      this.steps[this.activeIndex + 1].status = ''
    },
    reset() {
      this.steps.map((item, index) => index === 0 ? item.status = 'active' : item.status = '')
      this.activeIndex = 0
      this.finished = false
    },
    nextOfFinish() {
      if(this.activeIndex + 1 === this.steps.length) {
        this.steps[this.activeIndex].status = 'done'
        this.finished = true
      } else {this.setActive(++this.activeIndex)}
    },
    setActive(index) {
      this.activeIndex = index
      this.steps.map((item, idx) => {
        if(idx < index) {
          item.status = 'done'
        }
        else if (idx === index) {
          item.status === 'active' ? item.status = '' : item.status = 'active'
        }
        else if (idx > index) {
          item.status = ''
        }
      })
    }
  },
  computed: {
    prevButtonBlocker() {
      return this.activeIndex <= 0
    },

    nextButtonFinishCheck() {
      return this.activeIndex === this.steps.length - 1
    },

  }
}

Vue.createApp(App).mount('#app')