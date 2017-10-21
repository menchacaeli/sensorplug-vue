<template>
    <div class="Examples">
        <section class="hero is-medium is-success is-bold">
            <!-- Hero content: will be in the middle -->
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title">
                        examples.
                    </h1>
                </div>
            </div>
            <!-- Hero footer: will stick at the bottom -->
            <div class="hero-foot">
                <nav class="tabs is-boxed is-fullwidth">
                    <div class="container">
                        <ul>
                            <li>
                                <router-link to="/Examples/Accelerometer">Accelerometer</router-link>
                            </li>    
                            
                            <li>
                                <router-link to="/Examples/Gyroscope">Gyroscope</router-link>
                            </li>
                            <li>
                                <router-link to="/Examples/Geolocation">Geolocation</router-link>
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
   name: 'Examples',
    data() {
        return {

        }
    }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>