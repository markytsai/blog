<template>
  <div id="app">
    <Head/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Head from '@/views/Header'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
    Footer,
    Head
  },
  created () {
    this.$router.push('/main')
  }
}
</script>

<style>
#app {

}

a:hover {
  color: #ff8665;
  text-decoration: none;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
