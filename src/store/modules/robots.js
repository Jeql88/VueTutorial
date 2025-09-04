import axios from "axios";

export default {
  namespaced: true,
  state: {
    cart: [],
    parts: null,
    foo: "robots-foo",
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },
    updateParts(state, parts) {
      state.parts = parts;
    },
  },
  actions: {
    getParts({ commit }) {
      //fetch parts from an API and commit mutations to update the state
      axios
        .get("/api/parts")
        .then((response) => {
          commit("updateParts", response.data);
        })
        .catch(console.error);
    },
    addRobotToCart({ commit, state }, robot) {
      const cart = [...state.cart, robot];
      axios
        .post("/api/cart", { cart })
        .then(() => {
          commit("addRobotToCart", robot);
        })
        .catch(console.error);
    },
  },
  getters: {
    cartSaleItems(state) {
      return state.cart.filter(
        (item) =>
          item.head.onSale ||
          item.leftArm.onSale ||
          item.rightArm.onSale ||
          item.torso.onSale ||
          item.base.onSale
      );
    },
  },
};
