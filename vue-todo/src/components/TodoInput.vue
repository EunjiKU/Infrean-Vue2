<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <i class="fa-solid fa-plus addBtn"></i>
    </span>

    <AlertModal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        경고
        <i class="fa-solid fa-xmark" @click="showModal = false"></i>
      </h3>
      <div slot="body">
        아무 것도 입력하지 않았습니다.
      </div>
    </AlertModal>
  </div>
</template>

<script>
import AlertModal from './common/AlertModal.vue'

export default {
  data() {
    return {
      newTodoItem: "",
      showModal: false,
    }
  },
  components: {
    AlertModal,
  },
  methods: {
    addTodo() {
      if(this.newTodoItem !== '') {
        this.$emit('addTodoItem', this.newTodoItem);
        this.clearInput();
      }else {
        this.showModal = !this.showModal
      }
    },
    clearInput() {
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