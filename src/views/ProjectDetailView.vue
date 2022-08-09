<template>
  <NavBar></NavBar>
  <div class="container mx-auto pt-48">
    <div>
      <p class="font-bold text-5xl mb-9">{{project.name}}</p>
      <p class="text-end">{{project.description}}</p>
    </div>
  </div>
  <div class="container mx-auto py-24">
    <div id="controls-carousel" class="relative mb-9" data-carousel="static">
      <!-- Carousel wrapper -->
      <div class="relative h-56 overflow-hidden rounded-md md:h-96">
          <!-- Item 1 -->
          <div class="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10" data-carousel-item="">
            <img :src="project.img_slide[0]" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
          </div>
          <!-- Item 2 -->
          <div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item="active">
            <img :src="project.img_slide[0]" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
          </div>
          <!-- Item 3 -->
          <div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item="">
            <img :src="project.img_slide[0]" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
          </div>
          <!-- Item 4 -->
          <div class="hidden duration-700 ease-in-out absolute inset-0 transition-all transform" data-carousel-item="">
            <img :src="project.img_slide[0]" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
          </div>
          <!-- Item 5 -->
          <div class="hidden duration-700 ease-in-out absolute inset-0 transition-all transform" data-carousel-item="">
            <img :src="project.img_slide[0]" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
          </div>
      </div>
      <!-- Slider controls -->
      <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev="">
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="sr-only">Previous</span>
        </span>
      </button>
      <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next="">
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="sr-only">Next</span>
        </span>
      </button>
    </div>

    <div class="mb-9">
      <p class="font-medium text-2xl mb-3">프로젝트 소개</p>
      <p> {{ project.detail }}</p>
    </div>
    <div class="mb-9">
      <p class="font-medium text-2xl mb-3">참여 멤버</p>
      <p> {{ project.member }}</p>
    </div>
    <div class="mb-9">
      <p class="font-medium text-2xl mb-3">외부 링크</p>
      <div class="mt-3">
        <a v-if="project.homepage" class="mr-4 text-2xl" href="#"><font-awesome-icon icon="fa-solid fa-globe" /></a>
        <a v-if="project.github" class="mr-4 text-2xl" href="#"><font-awesome-icon icon="fa-brands fa-github" /></a>
        <a v-if="project.playstore" class="mr-4 text-2xl" href="#"><font-awesome-icon icon="fa-brands fa-google-play" /></a>
        <a v-if="project.appstore" class="mr-4 text-2xl" href="#"><font-awesome-icon icon="fa-brands fa-app-store" /></a>
      </div>
    </div>
    <ul class="flex mt-5">
      <li v-for="tag in project.tag" class="bg-red-100 text-red-900 text-sm px-3 py-1  mr-2">{{ tag }}</li>
    </ul>
  </div>
  <Footer></Footer>
</template>
<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'ProjectView',
  components: {
    NavBar,
    Footer
  },
  props : {
    id : String
  }, 
  data: () => ({
    project: {
      id: "1",
      name: "프로젝트1",
      description: "Lorem ipsum dolor sit amet",
      tag: ["web", "android", "ios"],
      img_slide: ["https://i.picsum.photos/id/247/1920/1080.jpg?hmac=qmkRTJcFMFG8hb5mtaHfs-Jc8b3C3sIbraihhUsi6UU"],
      detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      member: "홍길동",
      homepage: "#",
      github: "#",
      playstore: "#",
      appstore: "#"
    }
  }),
  methods: {

  },
  computed: {
  }
}
</script>
