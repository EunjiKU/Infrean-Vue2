<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <i class="fa-solid fa-plus addBtn"></i>
    </span>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      newTodoItem: "",
    }
  },
  methods: {
    addTodo: function() {
      var obj = {completed: false, item: this.newTodoItem}
      localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
      this.clearInput();
    },
    clearInput: function() {
      this.newTodoItem = "";
    }
  }
}
</script>

<style scoped>
  input:focus {
    outline: none;
  }
  .inputBox {
    display: flex;
    height: 50px;
    padding-left: 20px;
    line-height: 50px;
    border-radius: 5px;
    background: white;
  }
  .inputBox input {
    width: 100%;
    font-size: 0.9rem;
    border-style: none;
  }
  .addContainer {
    flex: 0 0 auto;
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
    background: linear-gradient(to right,#6478FB, #8763FB);
    cursor: pointer;
  }
  .addBtn {
    color: white;
    vertical-align: middle;
  }
  .closeModalBtn {
    width: 20px;
    height: 20px;
    color: #42b983;
    line-height: 20px;
    cursor: pointer;
  }
</style>