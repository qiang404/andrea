<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
  export default {
    name: 'App',
    beforeMount() {
      if (window.sessionStorage.getItem('user') != null) {
        let user = JSON.parse(window.sessionStorage.getItem('user'))
        this.$store.commit('saveUser', user)
        this.$request({
          method: 'post',
          url: '/shopcar/query',
          data: {
            uid: user.uid,
            token: user.token
          }
        }).then(res => {
          if (res.status === 0) {
            res.table.forEach(item => {
              item.select = false
            })
            this.$store.commit('initGoods', res.table)
          }
        })
        this.$request({
          method: 'post',
          url: '/address/querybyuser',
          data: {
            uid: user.uid,
            token: user.token
          }
        }).then(res => {
          this.$store.commit('clearAddress')
          this.$store.commit('saveAddress', res.table)
        })
      }
    },
  }
</script>
<style>
</style>