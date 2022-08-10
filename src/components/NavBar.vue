<template>
  <nav class="border-gray-200 px-2 sm:px-4 py-2.5 bg-transparent w-full fixed z-50 ease-out transition-all drop-shadow-sm" :class="{'bg-white' : background || !fold} " >
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <a href="" class="flex items-center">
          <img :src="require('@/assets/logo.png')" class="mr-3 h-6 sm:h-9" alt="Prometheus Logo" />
      </a>
      <button @click="fold = !fold" type="button" class="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden" :class="{'text-white' : !background && is_home  && fold}">
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
      <div class="w-full md:block md:w-auto" :class="{hidden: fold}">
        <ul class="flex flex-col md:p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm font-medium md:border-0">
          <li v-for="nav in navList" :class="{'md:text-white' : !background && is_home}">
            <router-link :to="nav.path" class="block py-2 pr-4 pl-3 md:p-0">{{ nav.name }}</router-link>
          </li>
<!--           
          <li>
            <router-link to="/" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</router-link>
          </li>
          <li>
            <router-link to="/member" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">MEMBER</router-link>
          </li>
          <li>
            <router-link to="/project" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">PROJECT</router-link>
          </li>
          <li>
            <router-link to="/blog" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">BLOG</router-link>
          </li>
          <li>
            <router-link to="/contact" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">CONTACT</router-link>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { faL } from '@fortawesome/free-solid-svg-icons';
export default {
  name: 'NavBar',
  components: {},
  data: () => ({
    background: false, 
    fold: true,
    navList: [
      {
        path: '/',
        name: 'HOME',
      },
      // {
      //   path: '/member',
      //   name: 'MEMBER',
      // },
      // {
      //   path: '/project',
      //   name: 'PROJECT',
      // },
      // {
      //   path: '/blog',
      //   name: 'BLOG',
      // },
      {
        path: '/recruit',
        name: 'RECRUIT',
      }
    ],
  }),
  mounted () {
      let parent = this
      document.addEventListener("scroll", (e) => {
        let scrolled = document.scrollingElement.scrollTop;
        if(scrolled > 5 ){
          parent.background = true
        }
        else {
          parent.background = false
        }
      });

      window.addEventListener("resize", (e) => {
        this.fold = true
      });
  },
  computed: {
    is_home() {
      if (this.$route.name == 'home') {
        return true
      }
      else {
        return false 
      }
    }
  }
}
</script>

<style>
.router-link-active{
  color: #b91c1c
}
</style>
