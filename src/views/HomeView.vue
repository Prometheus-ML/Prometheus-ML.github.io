<template>
  <NavBar></NavBar>
  <MainBanner></MainBanner>
  <div class="container mx-auto py-52">
      <div class="mb-24">
        <p class="font-bold text-7xl mb-9">Prometheus</p>
        <p class="text-end">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br> Donec congue tincidunt massa, vel consequat ipsum pharetra nec. <br> Etiam vel congue urna, ut cursus nisi.</p>
      </div>
      <div class="grid grid-cols-2 gap-16 place-items-center ">
        <div class="w-full">
          <div class="rounded-md w-full bg-gray-300 h-[25rem] mb-5"></div>
          <div class="text-left">
            <p class="font-medium text-2xl mb-3">첫번째 타이틀</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br> Donec congue tincidunt massa, vel consequat ipsum pharetra nec. <br> Etiam vel congue urna, ut cursus nisi. </p>
          </div>
        </div>
        <div class="w-full">
          <div class="rounded-md w-full bg-gray-300 h-[25rem] mb-5"></div>
          <div class="text-left">
            <p class="font-medium text-2xl mb-3">첫번째 타이틀</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br> Donec congue tincidunt massa, vel consequat ipsum pharetra nec. <br> Etiam vel congue urna, ut cursus nisi. </p>
          </div>
        </div>
        <div class="col-span-2 w-full">
          <div class="rounded-md w-full bg-gray-300 h-[30rem] mb-5"></div>
          <div class="mx-auto w-max">
            <p class="font-medium text-2xl mb-3 ">첫번째 타이틀</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br> Donec congue tincidunt massa, vel consequat ipsum pharetra nec. <br> Etiam vel congue urna, ut cursus nisi. </p>
          </div>
        </div>
      </div>
  </div>

  <div class="bg-slate-100 relative overflow-hidden">
    <img class="block absolute w-full min-w-[2000px] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]" :src="require('@/assets/images/Group15.svg')"/>
    <!-- <img class="block absolute w-1/2 translate-x-[-50%] top-1/2 left-1/2" :src="require('@/assets/images/project_back.svg')"/> -->
    <!-- <img class="block absolute w-full translate-y-[-50%] top-1/2 " :src="require('@/assets/images/project_back_pattern.svg')"/> -->
    <div class="container py-52 mx-auto relative z-10 " >
      <div class="text-center mb-32">
        <p class="font-bold text-6xl mb-9">두번째 타이틀</p>
        <p class="mb-12">두번쨰 타이틀의 부제목</p>
        <router-link to="/project" class="font-medium text-red-700">더 알아보기 <font-awesome-icon icon="fa-solid fa-angle-right" /> </router-link>
      </div>

      <div class="columns-4 gap-9 relative z-10">
        <div v-for="index in 8" class="rounded-md inline-block w-full bg-gray-300 mb-8" :style="{height: getRandom()} "></div>
      </div>
    </div>
  </div>

  <div class="container mx-auto py-52">
      <div class="text-center mb-32">
        <p class="font-bold text-6xl mb-9">두번째 타이틀</p>
        <p class="mb-12">두번쨰 타이틀의 부제목</p>
        <router-link to="/blog" class="font-medium text-red-700">더 알아보기 <font-awesome-icon icon="fa-solid fa-angle-right" /> </router-link>
      </div>
      <div class="grid grid-cols-3 gap-9 ">
        <div class="w-full">
          <div class="w-full bg-gray-300 h-72 mb-5 rounded-md"></div>
          <div class="text-left">
            <p class="font-medium text-2xl mb-3">첫번째 타이틀</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br> Donec congue tincidunt massa, vel consequat ipsum pharetra nec. <br> Etiam vel congue urna, ut cursus nisi. </p>
          </div>
        </div>
        <div class="w-full">
          <div class="w-full bg-gray-300 h-72 mb-5 rounded-md"></div>
          <div class="text-left">
            <p class="font-medium text-2xl mb-3">첫번째 타이틀</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br> Donec congue tincidunt massa, vel consequat ipsum pharetra nec. <br> Etiam vel congue urna, ut cursus nisi. </p>
          </div>
        </div>
        <div class="w-full">
          <div class="w-full bg-gray-300 h-72 mb-5 rounded-md"></div>
          <div class="text-left">
            <p class="font-medium text-2xl mb-3">첫번째 타이틀</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br> Donec congue tincidunt massa, vel consequat ipsum pharetra nec. <br> Etiam vel congue urna, ut cursus nisi. </p>
          </div>
        </div>
      </div>
  </div>

  <Footer></Footer>
</template>
<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import MainBanner from '@/components/MainBanner.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    MainBanner,
    Footer
  },
  methods: {
    getRandom(){
      return Math.floor(Math.random() * 300)+300+'px';
    },
  }
}
</script>
