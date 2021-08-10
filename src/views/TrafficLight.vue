<template lang="">
  <div class="lighter">
    <Tube class="tube" color="red" :curCol="curCol" :remain="counter"></Tube>
    <Tube class="tube" color="yellow" :curCol="curCol" :remain="counter"></Tube>
    <Tube class="tube" color="green" :curCol="curCol" :remain="counter"></Tube>
  </div>
</template>

<script>
import Tube from '../components/Tube.vue';

export default {
  components: {
    Tube,
  },
  name: 'home',
  props: ['curCol', 'time'],
  
  data() {
    return {
      counter: null,
      interval: null,
    };
  },
  computed: {
    getNextColor() {
      this.$store.commit('NextColor', this.curCol);
      return this.$store.state.nextColor;
    },
  },
  watch: {
    $route(to, from) {
      this.Timer();
    },
  },
  mounted() {
    this.Timer();
  },
  methods: {

    Timer() {

      setTimeout(() => { this.$router.push(this.getNextColor); }, this.time);

      this.counter = this.time / 1000;

      if (this.interval) {
          clearInterval(this.interval);
      }

      this.interval = setInterval(() => {
        this.counter -= 1;
      }, 1000);

    }
  }
};
</script>

<style scoped>
  .lighter {
    border: 1px solid black;
    border-radius: 1em;
    width: 12em;
    margin: 5em auto;
    padding: 1em;
    background-color: black;
  }
  .tube {
    width: 10em;
    height: 10em;
    margin: 1.5em auto;
    border-radius: 50%;
    display: flex;
    justify-content: center;
  }
</style>
