<template>
  <div id="app">
    <!-- Hero header: will stick at the top -->
    <div class="hero-head">
      <header class="nav">
        <div class="container">
          <div class="nav-left">
            <a class="nav-item">
              <img src="./assets/logo-color.png" alt="Logo">
            </a>
          </div>
          <span class="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div class="nav-right nav-menu">
            <a class="nav-item is-active">
              <router-link to="/">Home</router-link>
            </a>
            <a class="nav-item">
              <router-link to="/Examples/Accelerometer">Examples</router-link>
            </a>
            <a class="nav-item">
              <router-link to="/Documentation/GetStarted">Documentation</router-link>
            </a>
            <span class="nav-item">
              <a class="button is-success is-inverted">
                <span class="icon">
                  <i class="fa fa-github"></i>
                </span>
                <span>Download</span>
              </a>
            </span>
          </div>
        </div>
      </header>
    </div>
    <router-view></router-view>
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>sensorplug.</strong> by <a href="http://www.menchacaeli.com">Eli Menchaca</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
          </p>
          <p>
            <a class="icon" href="https://github.com/jgthms/bulma">
              <i class="fa fa-github"></i>
            </a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {

    }
  },
  // methods: {
  //   openNav: function (event) {
  //     document.getElementById("mySidenav").style.width = "250px";
  //     document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  //   },
  //   closeNav: function (event) {
  //     document.getElementById("mySidenav").style.width = "0";
  //     document.body.style.backgroundColor = "white";
  //   }
  // }
}
</script>

<!-- Global Style for App -->
<style>
.nav {
  box-shadow: 0 5px 10px -7px #9e9e9e;
}

.title {
  color: #4e4e4e;
}

.hero.is-light .title {
    color: #17b83d;
}

.footer {
  box-shadow: 0 5px 10px -7px #9e9e9e inset;
}
</style>
