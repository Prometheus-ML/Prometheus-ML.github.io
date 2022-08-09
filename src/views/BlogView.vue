<template>
  <NavBar></NavBar>
  <div class="container mx-auto pt-48">
      <div>
        <p class="font-bold text-7xl mb-9">Blog</p>
        <p class="text-end">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br> Donec congue tincidunt massa, vel consequat ipsum pharetra nec. <br> Etiam vel congue urna, ut cursus nisi.</p>
      </div>
  </div>
  <div class="container mx-auto py-24">
    <div>
      <div v-for="article in articleList">
        <div class="flex gap-9 flex-wrap">
          <div>
            <div class="rounded-md w-96 bg-gray-300 pb-[55%]"></div>
          </div>
          <div class="flex-1 flex flex-col justify-between py-3">
            <router-link :to="'/blog/view/'+article.id">
              <div class="text-left">
                <p class="max-h-16 text-ellipsis overflow-hidden font-medium text-2xl mb-2">{{ article.name }}</p>
                <p class="font-light text-sm mb-5">{{ article.writer }} | {{ article.date }}</p>
                <p class="max-h-12 text-ellipsis overflow-hidden">{{ article.description }} </p>
              </div>
            </router-link>
            <ul class="flex mt-5">
              <li v-for="tag in article.tag" class="rounded-md bg-red-100 text-red-900 text-sm px-3 py-1  mr-2">{{ tag }}</li>
            </ul>
          </div>
        </div>
        <hr class="my-5">
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>
<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'BlogView',
  components: {
    NavBar,
    Footer
  },
  data: () => ({
    articleList: [
      {
        id: "1",
        name: "프로젝트1",
        description: "안녕하세요, 카카오 공동체데이터실 rowan(김용완)입니다.저는 학계에서 블랙홀/초기우주 모델링을 통해 양자이론과 일반상대성이론을 결합하는 이론을 만드는 일을 했습니다. 조금 더 자세하게 설명드리면 블랙홀이나 초기 우주의 Lagrangian(라그랑지안)을 구성하여 Tensor 연산으로 variation(변분)해 보존량을 구하기도 하고,dsdadasdasdasdasdasd",
        tag: ["web", "android", "ios"],
        writer: "홍길동",
        date: "2020/01/01"
      },
      {
        id: "1",
        name: "프로젝트2",
        description: "Lorem ipsum dolor sit amet",
        tag: ["ios"],
        writer: "홍길동",
        date: "2020/01/01"
      },
      {
        id: "1",
        name: "프로젝트1",
        description: "Lorem ipsum dolor sit amet",
        tag: ["web", "ios"],
        writer: "홍길동",
        date: "2020/01/01"
      },
      {
        id: "1",
        name: "프로젝트2",
        description: "Lorem ipsum dolor sit amet",
        tag: ["android", "ios"],
        writer: "홍길동",
        date: "2020/01/01"
      }
    ]
  }),
  methods: {

  },
  computed: {

  }
}
</script>
