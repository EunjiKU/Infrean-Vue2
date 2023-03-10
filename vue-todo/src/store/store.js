import Vue from 'vue'
import Vuex from 'vuex'
import todoApp from './moudels/todoApp'

Vue.use(Vuex);


// const storage = {
//   fetch() {
//     const arr = [];
//     if(localStorage.length > 0) {
//       for(let i = 0 ; localStorage.length > i ; i++) {
//         if(localStorage.key(i) !== "loglevel:webpack-dev-server" && localStorage.key(i) !== "") {
//           arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
//         }
//       }
//     }
//     return arr;
//   }
// }


export const store = new Vuex.Store({
  modules: {
    todoApp
  }
  // state: {
  //   todoItems: storage.fetch()
  // },
  // getters,
  // mutations
});