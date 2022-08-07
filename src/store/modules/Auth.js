import jwt from "@/common/jwt"

export const auth = {
  namespaced: true,
  state: {
    accessToken: jwt.getToken(),
  },
  getters: {
    getAccessToken(state) {
      return state.token.accessToken
    },
  },
  getters: {},
  mutations: {
    setToken(state, accessToken) {
      state.accessToken = accessToken
      jwt.saveToken(accessToken)
    },
    destroyToken(state) {
      state.accessToken = null
      jwt.destroyToken()
    },
  },
  actions: {
    login({ commit }, { username, password }) {
      return new Promise((resolve, reject) => {
        this.axios
          .post('auth/login', { username, password })
          .then(response => {
            commit("setToken", response.data.token)

            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    info({ commit }) {
      return new Promise((resolve, reject) => {
        this.axios
          .post('auth/login', { username, password })
          .then(response => {
            commit("setToken", response.data.token)

            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    logout({ commit }) {
      commit("destroyToken")
    },
  },
}