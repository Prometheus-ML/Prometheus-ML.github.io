<template>
  <NavBar></NavBar>
  <div class="container mx-auto pt-48">
    <div>
      <p class="font-bold text-7xl mb-9">Project</p>
      <p class="text-end">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br> Donec congue tincidunt massa, vel consequat ipsum pharetra nec. <br> Etiam vel congue urna, ut cursus nisi.</p>
    </div>
  </div>
  <div class="container mx-auto py-24">
    <div class="grid grid-cols-3 items-start gap-9">
      <div v-for="project in projectList" class="w-full">
        <router-link :to="'/project/view/'+project.id">
          <div class="rounded-md w-full bg-gray-300 pb-[55%] mb-5"></div>
          <div class="text-left">
            <p class="max-h-16 text-ellipsis overflow-hidden font-medium text-2xl mb-2">{{ project.name }}</p>
            <p class="max-h-12 text-ellipsis overflow-hidden">{{ project.description }} </p>
          </div>
        </router-link>
        <ul class="flex mt-5">
          <li v-for="tag in project.tag" class="rounded-md bg-red-100 text-red-900 text-sm px-3 py-1  mr-2">{{ tag }}</li>
        </ul>
      </div >
    </div>
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
  data: () => ({
    projectList: [
      {
        id: "1",
        name: "프로젝트1",
        description: "Lorem ipsum dolor sit amet",
        tag: ["web", "android", "ios"]
      },
      {
        id: "1",
        name: "프로젝트2",
        description: "Lorem ipsum dolor sit amet",
        tag: ["ios"]
      },
      {
        id: "1",
        name: "프로젝트1",
        description: "Lorem ipsum dolor sit amet",
        tag: ["web", "ios"]
      },
      {
        id: "1",
        name: "프로젝트2",
        description: "Lorem ipsum dolor sit amet",
        tag: ["android", "ios"]
      }
    ]
  }),
  methods: {

  },
  computed: {
    tagList() {
      let tags = []
      this.projectList.forEach((project)=> {
        tags.push(...project.tag)
      })

      const set = new Set(tags)
      let uniqueTag = [...set]
      uniqueTag.sort()
      return uniqueTag
    }

  }
}
</script>
