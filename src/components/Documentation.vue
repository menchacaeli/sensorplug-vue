<template>
    <div class="Documentation">
       <section class="hero is-medium is-success is-bold">
            <!-- Hero content: will be in the middle -->
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title">
                        documentation.
                    </h1>
                </div>
            </div>
            <!-- Hero footer: will stick at the bottom -->
            <div class="hero-foot">
                <nav class="tabs is-boxed is-fullwidth">
                    <div class="container">
                        <ul>
                            <li>
                                <router-link to="/Documentation/GetStarted">Get Started</router-link>
                            </li>    
                            
                            <li>
                                <router-link to="/Documentation/About">About</router-link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </section>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
   name: 'Documentation',
    data () {
      return {
        header: 'Get Started',
        subHeader: {
          dl: 'Download',
          su: 'Setup'
        },
        cdn: {
          title: 'CDN',
          code: {
            lineOne: '<!-- Compiled and minified CSS -->',
            lineTwo: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.1/css/materialize.min.css">',
            lineThree: '<!-- Compiled and minified JavaScript -->',
            lineFour: '<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.1/js/materialize.min.js">&lt;/script>'
          }
        },
        npm: {
          title: 'NPM',
          bash: 'npm install codeplug'
        },
        setup: {
          title: 'STRUCTURE',
          description: {
            pOne: 'After downloading, extract the files into the directory where your website is located. Your directory will look something like this. You\'ll notice that there are two sets of the files. The min means that the file is "compressed" to reduce load times. These minified files are usually used in production while it is better to use the unminified files during development.'
          }
        },
        htmlSu: {
          title: 'HTML Setup',
          description: {
            pOne: '',
            pTwo: ''
          }
        }
      }
    } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>