export default userMixin = {
  methods:{
    getMembers() {
      return new Promise((resolve, reject) => {
        this.$axios
          .get('member')
          .then(response => {
            resolve(response.data)
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    getMembersIncludeInactive() {
      return new Promise((resolve, reject) => {
        this.$axios
          .get('member/full')
          .then(response => {
            resolve(response.data)
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    createMember({name, gen, position, tech, homepage, github, facebook, instagram, twitter, is_active}) {
      return new Promise((resolve, reject) => {
        this.$axios
          .post('member/new', {
            'name' : name,
            'gen' : gen,
            'position': position,
            'tech': tech,
            'homepage': homepage, 
            'github': github,
            'facebook': facebook, 
            'instagram': instagram,
            'twitter': twitter,
            'playstore' : playstore,
            'is_active' : is_active
          })
          .then(response => {
            resolve(response.data)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    updateProject({id, name, gen, position, tech, homepage, github, facebook, instagram, twitter, is_active}) {
      return new Promise((resolve, reject) => {
        this.$axios
          .put('member/update', {
            'id' : id,
            'name' : name,
            'gen' : gen,
            'position': position,
            'tech': tech,
            'homepage': homepage, 
            'github': github,
            'facebook': facebook, 
            'instagram': instagram,
            'twitter': twitter,
            'playstore' : playstore,
            'is_active' : is_active
          })
          .then(response => {
            resolve(response.data)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    deleteMember(id) {
      return new Promise((resolve, reject) => {
        this.$axios
          .delete(`member/delete/${id}`)
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