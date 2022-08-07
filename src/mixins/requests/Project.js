export default userMixin = {
  methods:{
    getProjects({}) {
      return new Promise((resolve, reject) => {
        this.$axios
          .get('project')
          .then(response => {
            resolve(response.data)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getProject(id) {
      return new Promise((resolve, reject) => {
        this.$axios
          .get(`project/${id}`)
          .then(response => {
            resolve(response.data)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    createProject({name, description, thumb, tags, img_slide, detail, member, homepage, github, playstore, appastore}) {
      return new Promise((resolve, reject) => {
        this.$axios
          .post('project/new', {
            'name' : name,
            'description' : description,
            'thumb': thumb,
            'tags': tags,
            'img_slide': img_slide, 
            'detail': detail,
            'member': member, 
            'homepage': homepage,
            'github': github,
            'playstore' : playstore,
            'appastore' : appastore
          })
          .then(response => {
            resolve(response.data)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    updateProject({id, name, description, thumb, tags, img_slide, detail, member, homepage, github, playstore, appastore}) {
      return new Promise((resolve, reject) => {
        this.$axios
          .put('article/update', {
            'id' : id,
            'name' : name,
            'description' : description,
            'thumb': thumb,
            'tags': tags,
            'img_slide': img_slide, 
            'detail': detail,
            'member': member, 
            'homepage': homepage,
            'github': github,
            'playstore' : playstore,
            'appastore' : appastore
          })
          .then(response => {
            resolve(response.data)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    deleteProject(id) {
      return new Promise((resolve, reject) => {
        this.$axios
          .delete(`project/delete/${id}`)
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