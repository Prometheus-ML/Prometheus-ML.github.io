<template>
  <NavBar></NavBar>
  <MainBanner></MainBanner>
  <div class="container mx-auto py-24">
      <div class="mb-20">
        <p class="font-bold text-4xl md:text-6xl mb-9">Prometheus</p>
        <p class="text-end">프로메테우스는 인공지능으로 가치있는 무언가를 만들고자 합니다.<br>프로메테우스는 대학생 인공지능 커뮤니티를 지향합니다.<br>프로메테우는 대학 사회에 도움이 되고자 합니다.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-9 lg:gap-12">
        <div class="w-full">
          <div class="rounded-md w-full bg-home-first-block bg-center bg-cover pb-[55%] mb-9"></div>
          <div class="text-left">
            <p class="font-medium text-2xl mb-3">고등학교 코딩 교육</p>
            <p>프로그래밍은 상상하는 바를 가장 빠르게 구현할 수 있는 도구 중 하나입니다. <br>프로메테우스는 10대들에게 도움이 되고자 고등학생들에게 프로그래밍을 가르칩니다.<br>2022년 7월, 양재고등학교 학생들에게 인공지능을 가르쳤습니다.</p>
          </div>
        </div>
        <div class="w-full">
          <div class="rounded-md w-full bg-home-second-block bg-center bg-cover pb-[55%] mb-9"></div>
          <div class="text-left">
            <p class="font-medium text-2xl mb-3">스터디&프로젝트</p>
            <p>인공지능은 다양한 분야에서 쓰입니다.<br>각 분야별로 팀을 꾸려 문제를 정의하고 인공지능으로 해결합니다.<br>인공지능을 어떻게 활용할지 끊임없이 고민합니다.</p>
          </div>
        </div>
        <div class="md:col-span-2 w-full">
          <div class="relative rounded-md w-full bg-gray-100 bg-center bg-cover pb-[55%] md:pb-[27%] mb-9">
            <p class="text-xl font-bold text-gray-500 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">Comming Soon</p>
          </div>
          <div class="md:mx-auto w-full md:w-max">
            <p class="font-medium text-2xl mb-3 ">인공지능 해커톤 개최</p>
            <p>Comming Soon </p>
          </div>
        </div>
      </div>
  </div>

  <div class="bg-slate-100 relative overflow-hidden">
    <img class="block absolute w-full min-w-[2000px] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]" :src="require('@/assets/images/activity_back.svg')"/>
    <!-- <img class="block absolute w-1/2 translate-x-[-50%] top-1/2 left-1/2" :src="require('@/assets/images/project_back.svg')"/> -->
    <!-- <img class="block absolute w-full translate-y-[-50%] top-1/2 " :src="require('@/assets/images/project_back_pattern.svg')"/> -->
    <div class="container py-24 mx-auto relative z-10 " >
      <div class="text-center mb-20">
        <p class="font-bold text-4xl md:text-6xl mb-5">ACTIVITIES</p>
        <p class="mb-5">정기모임/세미나/프로젝트/친목활동/MT</p>
        <router-link to="/recruit" class="font-medium text-red-700">더 알아보기 <font-awesome-icon icon="fa-solid fa-angle-right" /> </router-link>
      </div>

      <div class="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-9 relative z-10">
        <div v-for="index in 8" class="rounded-md inline-block w-full mb-8 bg-center bg-cover" :style="{height: getRandom(), backgroundImage: get_gallary(shuffle_gallary[index])} "></div>
      </div>
    </div>
  </div>

  <div class="container mx-auto py-24">
      <div class="text-center mb-20">
        <p class="font-bold text-4xl md:text-6xl mb-5">Blog</p>
        <p class="mb-5">프로메테우스 기술 블로그</p>
        <router-link to="/#" class="font-medium text-red-700">더 알아보기 <font-awesome-icon icon="fa-solid fa-angle-right" /> </router-link>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 ">
        <div class="w-full">
          <div class="w-full bg-gray-100 pb-[55%] mb-5 rounded-md relative">
            <p class="text-xl font-bold text-gray-500 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">Comming Soon</p>
          </div>
          <div class="text-left">
            <p class="font-medium text-2xl mb-3">Coming Soon</p>
            <p>Coming Soon</p>
          </div>
        </div>
        <div class="w-full">
          <div class="w-full bg-gray-100 pb-[55%] mb-5 rounded-md relative">
            <p class="text-xl font-bold text-gray-500 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">Comming Soon</p>
          </div>
          <div class="text-left">
            <p class="font-medium text-2xl mb-3">Coming Soon</p>
            <p>Coming Soon </p>
          </div>
        </div>
        <div class="w-full">
          <div class="w-full bg-gray-100 pb-[55%] mb-5 rounded-md relative">
            <p class="text-xl font-bold text-gray-500 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">Comming Soon</p>
          </div>
          
          <div class="text-left">
            <p class="font-medium text-2xl mb-3">Coming Soon</p>
            <p>Coming Soon </p>
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
  data: () => ({
    gallary_list: ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "8.jpeg", "9.jpeg"],
    shuffle_value : Math.random() - 0.5
  }),
  methods: { 
    getRandom(){
      return Math.floor(Math.random() * 300)+300+'px';
    },
    get_gallary(name){
      console.log(name)
      return "url('"+ require(`@/assets/images/gallary/${name}`) +"')"
    }
  },

  computed : {
    shuffle_gallary() {
      this.gallary_list.sort(() => this.shuffle_value);
      return this.gallary_list
    }
  }
}
</script>
