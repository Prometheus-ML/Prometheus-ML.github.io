import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MemberView from '../views/MemberView.vue'
import ProjectView from '../views/ProjectView.vue'
import BlogView from '../views/BlogView.vue'
import RecruitView from '../views/RecruitView.vue'

import ProjectDetailView from '../views/ProjectDetailView.vue'
import ArticleView from '../views/ArticleView.vue'
import LoginView from '../views/LoginView.vue'
import ArticleEditView from '../views/ArticleEditView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/member',
    name: 'member',
    component: MemberView
  },
  {
    path: '/project',
    name: 'project',
    component: ProjectView
  },
  {
    path: '/project/view/:id',
    name: 'project_view',
    component: ProjectDetailView,
    props: true
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  },
  {
    path: '/blog/view/:id',
    name: 'article_view',
    component: ArticleView,
    props: true
  },
  {
    path: '/blog/edit/:id',
    name: 'article_edit_view',
    component: ArticleEditView,
    props: true
  },
  {
    path: '/recruit',
    name: 'recruit',
    component: RecruitView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
