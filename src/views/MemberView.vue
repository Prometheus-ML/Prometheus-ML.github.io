<template>
  <NavBar></NavBar>
  <div class="container mx-auto pt-48">
    <div>
      <p class="font-bold text-7xl mb-9">Member</p>
      <p class="text-end">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br> Donec congue tincidunt massa, vel consequat ipsum pharetra nec. <br> Etiam vel congue urna, ut cursus nisi.</p>
    </div>
  </div>
  <div class="container mx-auto py-24">
    <ul class="">
      <li v-for="gen in genList">
        <div class="flex justify-between p-6 text-3xl">
          <p>{{gen}}기</p>
          <font-awesome-icon icon="fa-solid fa-angle-down" />
        </div>
        <hr>
        <div >
          <div class="p-16">
            <ul class="flex flex-wrap justify-center gap-9">
              <li v-for="member in filterMemberByGen(gen)" class="w-64 text-center">
                <div class="w-full pb-[120%] bg-gray-300 mb-5 rounded-md"></div>
                <p class="text-sm mb-2">{{member.tech}}</p>
                <p class="text-xl mb-2">{{member.name}} <span v-if="member.position != '' && member.position != 'normal'">/ {{ member.position }}</span></p>
                <div class="mt-3">
                  <a v-if="member.homepage" class="mx-2 text-xl" href="#"><font-awesome-icon icon="fa-solid fa-globe" /></a>
                  <a v-if="member.github" class="mx-2 text-xl" href="#"><font-awesome-icon icon="fa-brands fa-github" /></a>
                  <a v-if="member.fackbook" class="mx-2 text-xl" href="#"><font-awesome-icon icon="fa-brands fa-facebook" /></a>
                  <a v-if="member.instagram" class="mx-2 text-xl" href="#"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
                  <a v-if="member.twitter" class="mx-2 text-xl" href="#"><font-awesome-icon icon="fa-brands fa-twitter" /></a>
                </div>
              </li>
            </ul>
          </div>
          <hr>
        </div>
      </li>
    </ul>
  </div>
  <Footer></Footer>
</template>
<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'MemberView',
  components: {
    NavBar,
    Footer
  },
  data: () => ({
    member: [
      {
        name: "홍길동",
        gen: "2",
        position: "normal",
        tech: "Backend",
        homepage: "#",
        github: "#",
        fackbook: "#",
        instagram: "#",
        twitter: "#"
      },
      {
        name: "홍길동",
        gen: "1",
        position: "회장",
        tech: "Backend",
        homepage: "#",
        github: "#",
        fackbook: "#",
        instagram: "#",
        twitter: "#"
      },
      {
        name: "홍길동",
        gen: "1",
        position: "normal",
        tech: "Backend",
        homepage: "#",
        github: "#",
        fackbook: "#",
        instagram: "#",
        twitter: "#"
      },
      {
        name: "홍길동",
        gen: "1",
        position: "회장",
        tech: "Backend",
        homepage: "#",
        github: "#",
        fackbook: "#",
        instagram: "#",
        twitter: "#"
      },
      {
        name: "홍길동",
        gen: "1",
        position: "normal",
        tech: "Backend",
        homepage: "#",
        github: "#",
        fackbook: "#",
        instagram: "#",
        twitter: "#"
      },
      {
        name: "홍길동",
        gen: "1",
        position: "회장",
        tech: "Backend",
        homepage: "#",
        github: "#",
        fackbook: "#",
        instagram: "#",
        twitter: "#"
      },
      {
        name: "홍길동",
        gen: "1",
        position: "normal",
        tech: "Backend",
        homepage: "#",
        github: "#",
        fackbook: "#",
        instagram: "#",
        twitter: "#"
      }
    ]
  }),
  methods: {
    compare( a, b ) {
      if ( a.name < b.name ){
        return -1;
      }
      if ( a.name > b.name ){
        return 1;
      }
      return 0;
    },
    filterMemberByGen(gen) {
      let member = this.member.filter(a => a.gen == gen)
      member.sort(this.compare)

      return member
    },
  },
  computed: {
    genList () {
      const gen = this.member.map(a => a.gen)
      const set = new Set(gen)
      let uniqueGen = [...set]
      uniqueGen.sort()
      return uniqueGen
    }
  }
}
</script>
