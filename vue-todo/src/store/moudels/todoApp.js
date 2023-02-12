const storage = {
  fetch() {
    const arr = [];
    if(localStorage.length > 0) {
      for(let i = 0 ; localStorage.length > i ; i++) {
        if(localStorage.key(i) !== "loglevel:webpack-dev-server" && localStorage.key(i) !== "") {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  }
}

const state = {
  todoItems: storage.fetch()
}

const getters = {
  storedTodoItems(state) {
    return state.todoItems;
  }
}

const mutations = {
  addOneItem(state, todoItem) {
    const obj = {completed: false, item: todoItem}
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
    console.log("왜 안돼");
  },
  removeOneItem(state, payload) {
    localStorage.removeItem(payload.todoItem.item);
      state.todoItems.splice(payload.todoItem.index, 1);
  },
  toggleOneItem(state, payload) {
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
  
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
  },
  clearAllItems(state) {
    localStorage.clear();
    state.todoItems = [];
  }
}

export default {
  state,
  getters,
  mutations
}