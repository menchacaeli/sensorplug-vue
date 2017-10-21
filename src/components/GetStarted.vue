<template>
  <div class="getStarted">
    <section class="section hero is-light">
      <div class="container">
        <h1 class="title">{{subHeader.dl}}</h1>
        <h2 class="subtitle">
          There are several ways to get started with <strong>sensorplug</strong>.
        </h2>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h1 class="title">{{npm.title}}</h1>
        <h2 class="subtitle">Use <strong>npm</strong> to install the <strong>sensorplug</strong> package</h2>
        <pre>
          <code class="language-markup">
            {{npm.bash}}
          </code>
        </pre>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h1 class="title">{{cdn.title}}</h1>
        <h2 class="subtitle">Use the cdnjs <strong>CDN</strong> to link to the <strong>sensorplug.js</strong> file</h2>
        <pre>
          <code class="language-markup">
            {{cdn.code.lineOne}}
            {{cdn.code.lineTwo}}

            {{cdn.code.lineThree}}
            {{cdn.code.lineFour}}
          </code>
        </pre>
      </div>
    </section>

    <section class="section hero is-light">
      <div class="container">
        <h1 class="title">{{subHeader.su}}</h1>
        <h2 class="subtitle">
          A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
        </h2>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h1 class="title">{{setup.title}}</h1>
        <h2 class="subtitle">
          A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
        </h2>
        <pre><code class="language-markup directory-markup">
          Root/
          |--js/
          |  |--sensorplug.js
          |
          |--index.html
          </code></pre>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h1 class="title">{{htmlSu.title}}</h1>
        <h2 class="subtitle">
          A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
        </h2>
        <pre><code class="language-markup">
          &lt;!DOCTYPE html>
          &lt;html>
            &lt;head>
              &lt;!-- Let browser know website is optimized for mobile -->
              &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"/>

              &lt;!-- Import sensorplug.js here -->
              &lt;script type="text/javascript" src="js/sensorplug.min.js">&lt;/script>
            &lt;/head>
            &lt;body>
              &lt;!-- App content here -->
            &lt;/body>
          &lt;/html>
        </code></pre>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'getStarted',
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
          title: 'NPM (recommended)',
          bash: 'npm install codeplug'
        },
        setup: {
          title: 'STRUCTURE',
          description: {
            pOne: 'After downloading, extract the files into the directory where your website is located. Your directory will look something like this.'
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
