export default userMixin = {
  methods:{
    getArticles({}) {
      return new Promise((resolve, reject) => {
        this.$axios
          .get('article')
          .then(response => {
            resolve(response.data)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getArticle(id) {
      return new Promise((resolve, reject) => {
        this.$axios
          .get(`article/${id}`)
          .then(response => {
            resolve(response.data)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    createArticle({name, article, tags}) {
      return new Promise((resolve, reject) => {
        this.$axios
          .post('article/new', {
            'name' : name,
            'article' : article,
            'tags': tags
          })
          .then(response => {
            resolve(response.data)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    updateArticle({id, name, article, tags}) {
      return new Promise((resolve, reject) => {
        this.$axios
          .put('article/update', {
            'id' : id,
            'name' : name,
            'article' : article,
            'tags': tags
          })
          .then(response => {
            resolve(response.data)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    deleteArticle(id) {
      return new Promise((resolve, reject) => {
        this.$axios
          .delete(`article/delete/${id}`)
          .then(response => {
            resolve(response.data)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
  }
};