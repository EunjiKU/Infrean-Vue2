<template>
  <div>
    <ul>
      <li class="shadow" v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item">
        <span class="checkBtn" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete(todoItem)">
          <i class="fa-solid fa-check"></i>
        </span>
        <span v-bind:class="{textCompleted: todoItem.completed}">
        {{ todoItem.item }}
        </span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fa-solid fa-xmark"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      todoItems: []
    }
  },
  created: function() {
    for(var i = 0 ; localStorage.length > i ; i++) {
      if(localStorage.key(i) !== "loglevel:webpack-dev-server" && localStorage.key(i) !== "") {
        this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }
    }
  },
  methods: {
    removeTodo: function(todoItem, index) {
        localStorage.removeItem(todoItem.item);
        this.todoItem.splice(index, 1);
    },
    toggleComplete: function(todoItem) {
      todoItem.completed = !todoItem.completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    }
  }
}
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding-left: 0;
    margin-top: 0;
    text-align: left;
  }
  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    margin-top: 10px;
    padding: 0 0.9rem;
    line-height: 50px;
    border-radius: 5px;
    background: white;
  }
  .removeBtn {
    width: 30px;
    margin-left: auto;
    text-align: center;
    color: #de4343;
    cursor: pointer;
    transition: transform .3s;
  }
  .removeBtn:hover {
    transform: rotate(90deg);
  }
  .checkBtn {
    width: 30px;
    margin-right: 5px;
    line-height: 45px;
    text-align: center;
    color: #62acde;
    cursor: pointer;
  }
  .checkBtnCompleted {
    color: #b3adad;
  }
  .textCompleted {
    text-decoration: line-through;
    color: #b3adad;
  }
</style>