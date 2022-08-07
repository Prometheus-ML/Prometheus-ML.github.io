<template>
  <NavBar></NavBar>
  <div class="container mx-auto py-52">
      <div class="mb-24">
        <p class="font-bold text-5xl mb-9">{{article.name}}</p>
        <p class="text-end">{{ article.writer}} | {{ article.date}}</p>
      </div>

      <div>
        <div class="mb-9">
          <div id="editor"></div>
        </div>
        <ul class="flex mt-5">
          <li v-for="tag in article.tag" class="bg-red-100 text-red-900 text-sm px-3 py-1  mr-2">{{ tag }}</li>
        </ul>
      </div>
  </div>
  <Footer></Footer>
</template>
<script>
// @ is an alias to /src
import Editor from '@toast-ui/editor'
import '@toast-ui/editor/dist/toastui-editor.css'

import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'ArticleEdit',
  components: {
    NavBar,
    Footer
  },
  props : {
    id : String
  }, 
  data: () => ({
    article: {
      id: "1",
      name: "[번역] React에 SOLID 원칙 적용하기",
      article: "안녕하세요, 카카오 공동체데이터실 rowan(김용완)입니다.저는 학계에서 블랙홀/초기우주 모델링을 통해 양자이론과 일반상대성이론을 결합하는 이론을 만드는 일을 했습니다. 조금 더 자세하게 설명드리면 블랙홀이나 초기 우주의 Lagrangian(라그랑지안)을 구성하여 Tensor 연산으로 variation(변분)해 보존량을 구하기도 하고,dsdadasdasdasdasdasd",
      tag: ["web", "android", "ios"],
      writer: "홍길동",
      date: "2020/01/01"
    },
  }),
  methods: {

  },
  computed: {
  },
  mounted(){
    const editor = new Editor({
      el: document.querySelector('#editor'),
      height: '500px',
      initialEditType: 'markdown',
      previewStyle: 'vertical'
    });

    editor.getMarkdown();
  }
}
</script>
