<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Main from '@/views/Main'

export default {
  components: {
    Header,
    Footer,
    Main
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
