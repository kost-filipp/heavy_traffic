<template lang="">
  <div :class="[`tube_${this.color}`, `${this.tubeIsOn ? 'tube_on' : ''}`, `${this.tubeIsOn && this.remain <= 3 ? 'tube_blink' : ''}`]">
    <div class="tube__counter" v-if="tubeIsOn">
      {{remain}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tube',
  props: ['color', 'curCol', 'remain'],
  computed: {
    tubeIsOn: function () {
      return this.color === this.curCol;
    }
  },
};
</script>

<style scoped>
@keyframes blink-animation {
  to {
    opacity: 0.25;
  }
}
  .tube_red {
    background-color: red;
    color: black;
    opacity: 0.25;
  }
  .tube_green {
    background-color: green;
    color: black;
    opacity: 0.25;
  }
  .tube_yellow {
    background-color: yellow;
    color: black;
    opacity: 0.25;
  }
  .tube_on {
    opacity: 1;
  }
  .tube__counter {
    width: 3em;
    height: 1.5em;
    font-size: 3em;
    text-align: center;
    align-self: center;
    font-family: Arial, Helvetica, sans-serif;
  }
  .tube_blink {
    animation: blink-animation 0.6s steps(10, start) infinite;
  }
</style>
