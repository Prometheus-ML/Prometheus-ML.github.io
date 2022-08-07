export default userMixin = {
  methods:{
    getMyInfo() {
      return new Promise((resolve, reject) => {
        this.$axios
          .get('user/my')
          .then(response => {
            resolve(response.data)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    register_user({username, password, name, email, position, is_active}) {
      return new Promise((resolve, reject) => {
        this.$axios
          .post('user/register', {
            'username' : username,
            'password' : password,
            'name' : name,
            'email' : email,
            'position' : position,
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
  }
};