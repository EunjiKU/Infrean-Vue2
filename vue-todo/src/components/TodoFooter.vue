<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearTodo">Clear All</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo: function() {
      this.$emit('clearAll')
    }
  }
}
</script>

<style scoped>
  .clearAllContainer {
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: #fff;
    border-radius: 5px;
    margin: 0 auto;
  }
  .clearAllBtn {
    display: block;
    color: #e20303;
    cursor: pointer;
    transition: all .3s;
  }
  .clearAllBtn:hover {
    background-color: #721212;
    color: white;
  }
</style>