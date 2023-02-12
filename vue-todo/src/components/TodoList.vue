<template>
  <div>
    <transition-group name="list" tag="ul">
      <li class="shadow" v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item">
        <span class="checkBtn" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete(todoItem, index)">
          <i class="fa-solid fa-check"></i>
        </span>
        <span v-bind:class="{textCompleted: todoItem.completed}">
        {{ todoItem.item }}
        </span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fa-solid fa-xmark"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: ['propsdata'],
  methods: {
    removeTodo: function(todoItem, index) {
      this.$emit('removeItem', todoItem, index)
    },
    toggleComplete: function(todoItem, index) {
      this.$emit('toggleItem', todoItem, index)
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

  /* 리스트 아이템 트랜지션 효과 */
  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
</style>