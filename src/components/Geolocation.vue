<template>
  <div class="geolocation">
    <section class="section hero is-light">
      <div class="container">
        <h1 class="title">Geolocation</h1>
        <h2 class="subtitle">
          A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
        </h2>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h1 class="title">Web Browser Support</h1>
        <h2 class="subtitle">
          A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
        </h2>
        <a class="button is-success is-outlined">
            <span class="icon">
                <i class="fa fa-bar-chart"></i>
            </span>
            <span>Support</span>
        </a>
      </div>
    </section>
    <section>
        <div class="container bottom-container">
            <div class="columns is-desktop">
                <div class="column">
                    <div class="box">                        
                        <div class="media-content">
                            <div class="content">
                            <span class="icon"><i class="fa fa-edge"></i></span><span> Edge</span>
                            </div>
                            <progress class="progress is-success" value="90" max="100">90%</progress>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="box">
                        <div class="media-content">
                            <div class="content">
                                <span class="icon"><i class="fa fa-firefox"></i></span><span> Firefox</span>
                            </div>
                            <progress class="progress is-success" value="90" max="100">90%</progress>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="box">
                        <div class="media-content">
                            <div class="content">
                                <span class="icon"><i class="fa fa-chrome"></i></span><span> Chrome</span>
                            </div>
                            <progress class="progress is-success" value="90" max="100">90%</progress>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="box">
                        <div class="media-content">
                            <div class="content">
                                <span class="icon"><i class="fa fa-safari"></i></span><span> Safari</span>
                            </div>
                            <progress class="progress is-success" value="90" max="100">90%</progress>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section">
      <div class="container">
        <h1 class="title">Mobile Browser Support</h1>
        <h2 class="subtitle">
          A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
        </h2>
        <a class="button is-success is-outlined">
            <span class="icon">
                <i class="fa fa-bar-chart"></i>
            </span>
            <span>Support</span>
        </a>
      </div>
    </section>
    <section>
      <div class="container bottom-container">
            <div class="columns is-desktop">
                <div class="column">
                    <div class="box">
                        <div class="media-content">
                            <div class="content">
                              <span class="icon"><i class="fa fa-apple"></i></span><span> IOS Safari + Chrome</span>
                            </div>
                            <progress class="progress is-success" value="90" max="100">90%</progress>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="box">
                        <div class="media-content">
                            <div class="content">
                              <span class="icon"><i class="fa fa-android"></i></span><span> Android Chrome</span>
                            </div>
                            <progress class="progress is-success" value="90" max="100">90%</progress>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section">
      <div class="container">
        <h1 class="title">Demo</h1>
        <h2 class="subtitle">
          A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
        </h2>
        <a class="button is-success is-outlined">
            <span class="icon">
                <i class="fa fa-code"></i>
            </span>
            <span>Code</span>
        </a>
      </div>
    </section>
    <section>
      <div class="container bottom-container">
            <div class="columns is-desktop">
                <div class="column">
                    <div class="box">
                        <div class="media-content">
                            <div class="content">DEMO</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'geolocation',
    data () {
      return {
        msg: 'Hello my Location Page!'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
