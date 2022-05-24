<template>
  <div className="container-fluid text-center h-100 p-0 wrapper">
    <router-view/>
  </div>
</template>

<style lang="scss">
body{
  
  background: url("./assets/spacewallpaper.jpg") no-repeat center;
  background-size: cover;
}

.centerContainer, .resumeGame{
    max-width: 30rem;
    margin: 0 auto;
}
.wrapper {
  overflow-y: scroll;
}
.header {
  max-height: 4rem;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
