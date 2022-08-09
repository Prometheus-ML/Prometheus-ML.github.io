<template>
  <NavBar></NavBar>
  <div class="container mx-auto pt-48">
      <div>
        <p class="font-bold text-7xl mb-9">Recruit</p>
        <p class="text-end">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br> Donec congue tincidunt massa, vel consequat ipsum pharetra nec. <br> Etiam vel congue urna, ut cursus nisi.</p>
      </div>
  </div>
  <div class="container mx-auto py-24">
      <div class="rounded-md bg-slate-100 py-[10%]">
        <div class="text-center">
          <p class="font-bold text-2xl mb-5">프로메테우스 가입 신청</p>
          <p class="mb-8">두번쨰 타이틀의 부제목</p>
          <a href="#" class="rounded-md px-5 py-2 text-lg text-medium bg-red-100 text-red-900">신청페이지</a>
        </div>
      </div>
  </div>
  <div class="container mx-auto py-24">
      <div class="text-center mb-20">
        <p class="font-bold text-6xl mb-5">모집 개요</p>
        <p class="mb-5">두번쨰 타이틀의 부제목</p>
      </div>
      <div class="grid grid-cols-3 gap-9 ">
        <div class="w-full bg-slate-100 rounded-md p-10">
          <div>
            <p class="font-bold text-2xl mb-9">지원 자격</p>
            <ul class="ml-5 list-disc list-outside">
              <li>학생 / 직장인 소속에 상관없이, <br>개발자 / 디자이너로 팀 프로젝트 수행이 가능한 분</li>
              <li>실무에 가까운 협업과 창작하는 즐거움을 경험하고 싶으신 분</li>
            </ul>
          </div>
        </div>
        <div class="w-full bg-slate-100 rounded-md p-10">
          <div>
            <p class="font-bold text-2xl mb-9">활동 내용</p>
            <ul class="ml-5 list-disc list-outside">
              <li>학생 / 직장인 소속에 상관없이, <br>개발자 / 디자이너로 팀 프로젝트 수행이 가능한 분</li>
              <li>실무에 가까운 협업과 창작하는 즐거움을 경험하고 싶으신 분</li>
            </ul>
          </div>
        </div>
        <div class="w-full bg-slate-100 rounded-md p-10">
          <div>
            <p class="font-bold text-2xl mb-9">모집 인원</p>
            <p class="mb-3">XX명 모집 예정</p>
          </div>
        </div>
      </div>
  </div>
  <div class="container mx-auto py-24">
      <div class="text-center mb-20">
        <p class="font-bold text-6xl mb-5">모집 일정</p>
        <p class="mb-5">두번쨰 타이틀의 부제목</p>
      </div>
      <div class="grid grid-cols-4 gap-9 ">
        <div class="w-full bg-slate-100 rounded-md p-10">
          <div>
            <p class="font-bold text-2xl mb-5">서류 접수</p>
            <p class="mb-2">서류 면접 설명</p>
            <p class="font-medium">2022.08.10 ~ 2022.08.19</p>
          </div>
        </div>
        <div class="w-full bg-slate-100 rounded-md p-10">
          <div>
            <p class="font-bold text-2xl mb-5">서류 결과 통보</p>
            <p class="mb-2">개별 면접 일정 조정 설명</p>
            <p class="font-medium">2022. 08. 20 ~ 2022. 08. 23</p>
          </div>
        </div>
        <div class="w-full bg-slate-100 rounded-md p-10">
          <div>
            <p class="font-bold text-2xl mb-5">개별 면접</p>
            <p class="mb-2">개별 면접 설명</p>
            <p class="font-medium">2022. 08. 24 ~ 2022. 08. 25</p>
          </div>
        </div>
        <div class="w-full bg-slate-100 rounded-md p-10">
          <div>
            <p class="font-bold text-2xl mb-5">최종 합격자 발표</p>
            <p class="mb-2">최종 합격자 발표 설명</p>
            <p class="font-medium">2022. 08. 28</p>
          </div>
        </div>
      </div>
  </div>
  <div class="container mx-auto py-24">
      <div class="text-center mb-20">
        <p class="font-bold text-6xl mb-5">FAQ</p>
        <p class="mb-5">두번쨰 타이틀의 부제목</p>
      </div>
      <div class="grid grid-cols-1 gap-5">
        <div v-for="(item, index) in faq" class="w-full bg-slate-100 rounded-md p-10">
          <div>
            <div class="flex justify-between font-bold text-2xl">
              <p>{{item.title}}</p>
              <font-awesome-icon v-if="!item.on" @click="openFaq(index, true)" icon="fa-solid fa-angle-down" />
              <font-awesome-icon v-if="item.on" @click="openFaq(index, false)" icon="fa-solid fa-angle-up" />
            </div>
            <p v-if="item.on" class="mt-5">{{item.value}}</p>
          </div>
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
  name: 'RecruitView',
  components: {
    NavBar,
    Footer
  },
  data: () => ({
    faq: [
      {
        "title" : "title",
        "value" : "value"
      },
      {
        "title" : "title",
        "value" : "value"
      },
      {
        "title" : "title",
        "value" : "value"
      }
    ]
  }),
  methods: {
    openFaq(index, value){
      this.faq[index].on = value
    }
  },
  computed: {

  }
}
</script>
