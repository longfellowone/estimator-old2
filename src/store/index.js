import { createStore } from "vuex";
import actions from "./actions";
import mutations from "./mutations";

const state = { count: 1 };

export default createStore({
  state,
  actions,
  mutations,
});
