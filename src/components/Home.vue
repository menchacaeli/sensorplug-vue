<template>
    <div class="Home">
        <section class="hero is-success is-large top-section is-bold">
            <!-- Hero content: will be in the middle -->
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title">
                        sensorplug.
                    </h1>
                    <h2 class="subtitle">
                        A place to access mobile device
                        <b>sensors</b> with JavaScript.
                    </h2>
                    <pre class="my-pre">
                            <code>npm install sensorplug</code>
                        </pre>
                </div>
            </div>
        </section>
        <div class="container bottom-container">
            <div class="columns is-desktop">
                <div class="column">
                    <div class="box">
                        <div class="media-content">
                            <div class="content">
                              <span class="icon"><i class="fa fa-flash"></i></span><span class="title"> Speeds Up Development</span>
                            </div>
                            <div class="content">{{intro.messageOne}}</div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="box">
                        <div class="media-content">
                            <div class="content">
                              <span class="icon"><i class="fa fa-users"></i></span><span class="title"> User Experience Focused</span>
                            </div>
                            <div class="content">{{intro.messageTwo}}</div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="box">
                        <div class="media-content">
                            <div class="content">
                              <span class="icon"><i class="fa fa-gear"></i></span><span class="title"> Easy to work with</span>
                            </div>
                            <div class="content">{{intro.messageThree}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            intro: {
                messageOne: "Sensorplug takes away the heavy lifting by providing JavaScript modules that access sensor data using the standard W3C API.",
                messageTwo: "By refining the code implementing OOP methodologies, sensorplug allows for a smooth experience for developers.",
                messageThree: "Sensorplug provides detailed documentation as well as specific code examples to help new users get started."
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my-pre {
    align-items: center;
    -webkit-animation: fadeIn 500ms both;
    animation: fadeIn 500ms both;
    -webkit-animation-delay: 0.4s;
    animation-delay: 0.4s;
    background: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin: -10px 0 20px;
}

code {
    background: whitesmoke;
    border-radius: 3px;
    color: #23d160;
    display: inline-block;
    padding: 10px 20px;
}

.top-section {
    margin-bottom: 5px;
}

.bottom-container {
    margin-top: 50px;
    margin-bottom: 50px;
}

a {
    color: #23d160;
}
</style>