<template>
  <header>
    <nav>
      <ul>
        <li class="nav-item">
          <!-- can also use active-class -->
          <router-link class="nav-link" :to="{ name: 'Home' }" exact>
            <img class="logo" src="@/assets/build-a-bot-logo.png" /> Build-a-bot
          </router-link>
          <router-link class="nav-link" :to="{ name: 'Build' }" exact>
            Build
          </router-link>
          <router-link class="nav-link" :to="{ name: 'BrowseParts' }" exact>
            Browse Parts
          </router-link>
          <router-link class="nav-link" :to="{ name: 'Cart' }"
            >Cart</router-link
          >
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
.router-link-active {
  font-weight: bold;
  color: white;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.nav-item.cart {
  position: inherit;
  margin-left: auto;
  border-right: none;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
</style>
