<template>
  <header>
    <nav>
      <ul>
        <li class="nav-item">
          <!-- can also use active-class -->
          <router-link class="nav-link" :to="{ name: 'Home' }" exact>
            <img class="logo" src="@/assets/build-a-bot-logo.png" /> Build-a-bot
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Build' }" exact>
            Build
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'BrowseParts' }" exact>
            Browse Parts
          </router-link>
        </li>
        <li class="nav-item cart">
          <router-link class="nav-link" :to="{ name: 'Cart' }"
            >Cart</router-link
          >
          <div class="cart-items">{{ this.cartItemCount }}</div>
        </li>
      </ul>
    </nav>
  </header>

  <div class="container">
    <aside class="aside">
      <router-view name="sidebar"></router-view>
    </aside>

    <main>
      <router-view />
      <!-- <Search/> -->
    </main>
  </div>
</template>

<script>
//import HomePage from "./home/HomePage.vue";

export default {
  name: "App",
  computed: {
    cartItemCount() {
      return this.$store.state.robots.cart.length;
    },
  },
  data() {
    return {
      //currentView: "HomePage",
      userName: "Jim",
    };
  },
  provide: {
    userName: "Jim",
  },
};
</script>

<style>
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<style scoped>
.cart-items {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: red;
  color: white;
  font-size: 14px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  text-align: center;
  line-height: 20px;
}
/* deep selector, will style all of its children also though */
/* .content >>> .robot-name{
  color:red;
} */
.aside {
  padding: 30px;
  background-color: #aaa;
  width: 100px;
  min-height: 300px;
}
.container {
  display: flex;
  margin: 10px auto 0 auto;
  justify-content: center;
}
.nav-link {
  text-decoration: none;
  color: inherit;
}
main {
  padding: 30px;
  background-color: white;
  width: 964px;
  min-height: 300px;
}
header {
  background-color: #999;
  width: 1184px;
  margin: 0 auto;
}
.nav-link.cart {
  position: relative;
  margin-left: auto;
  border-right: none;
}
.router-link-active {
  font-weight: bold;
  color: white;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item.cart {
  position: relative;
  margin-left: auto;
  border-right: none;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}

.logo {
  vertical-align: middle;
  height: 30px;
}
</style>
