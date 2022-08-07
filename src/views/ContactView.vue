<template>
  <NavBar></NavBar>
  <div class="container mx-auto py-52">
      <div class="mb-24">
        <p class="font-bold text-7xl mb-9">Prometheus</p>
        <p class="text-end">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br> Donec congue tincidunt massa, vel consequat ipsum pharetra nec. <br> Etiam vel congue urna, ut cursus nisi.</p>
      </div>
  </div>
  <Footer></Footer>
</template>
<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'ContactView',
  components: {
    NavBar,
    Footer
  },
  data: () => ({
  }),
  methods: {

  },
  computed: {

  }
}
</script>
