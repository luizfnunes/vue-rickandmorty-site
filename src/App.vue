<template>
  <Navbar />
  <Header />
  <router-view :key="$route.fullPath" />
  <Footer />
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Header,
    Footer
  }
}
</script>
<style>

</style>
