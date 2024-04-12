const App = {
  data() {
    return {
      title: "Hello 1T Sprint!",
      activeColor: "green",
      fontSize: 50,
      checkedName: [],
      selected: "",
    };
  },
};
Vue.createApp(App).mount("#app");
