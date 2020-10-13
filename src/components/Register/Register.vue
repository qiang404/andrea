<template>
  <div id="register">
    <Header>
      <i slot="left" class="iconfont icon-zuojiantou" @click="back"></i>
      <p slot="middle" class="title">注册</p>
      <span slot="right"></span>
    </Header>
    <div class="body">
      <div class="upLoad">
        <label for="">上传头像</label>
        <div>
          <p v-if="!hasUpload">选择图片</p>
          <img v-else id="upFile">
          <input type="file" @change="getImg">
        </div>
      </div>
      <div>
        <label for="unmae">用户名</label>
        <input id="unmae" type="text" v-model="uname" placeholder="请输入用户名">
      </div>
      <div class="gender">
        <label>性别</label>
        <input type="radio" v-model="gender" value="0">男
        <input type="radio" v-model="gender" value="1">女
      </div>
      <div>
        <label for="phone">手机号</label>
        <input id="phone" type="text" v-model="phone" maxlength="11" placeholder="请输入手机号" @input="regPhone">
        <span v-if="phoneFlag">手机号有误</span>
      </div>
      <div>
        <label for="upd">密码</label>
        <input id="upd" type="password" v-model="password" maxlength="16" placeholder="请输入密码" @input="regPwd">
        <span v-if="pwdFlag">密码过于简单</span>
      </div>
      <div class="rbtn" @click="register">注册</div>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/common/Header'
  import {
    debounce
  } from '@/assets/js/Ulits'
  export default {
    name: 'Register',
    components: {
      Header
    },
    data() {
      return {
        uname: '',
        phone: '',
        gender: 0,
        password: '',
        phoneFlag: false,
        pwdFlag: false,
        imgurl: '',
        userimg: '',
        hasUpload: false
      }
    },
    methods: {
      back() {
        this.$router.back()
      },
      regPhone() {
        let reg = /^1[3456789]\d{9}$/
        if (this.phone && !reg.test(this.phone)) {
          this.phoneFlag = true
        } else {
          this.phoneFlag = false
        }
      },
      regPwd() {
        let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/
        if (this.password && !reg.test(this.password)) {
          this.pwdFlag = true
        } else {
          this.pwdFlag = false
        }
      },
      register() {
        if (this.uname && this.phone && this.password && this.hasUpload && !this.phoneFlag && !this.pwdFlag) {
          this.upLoadImg().then(res => {
            if (!res.status) {
              this.$toast('注册失败', 'center', 1000)
              return
            }
            this.userimg = res.url
            let data =
              `{username:'${this.uname}',gendar:${this.gender},phone:'${this.phone}',pwd:'${this.password}',imgurl:'${this.userimg}'}`
            let config = {
              url: '/users/register',
              data: {
                data: data
              }
            }
            this.$request(config).then(res => {
              if (res.message === 'success' && res.status === 0) {
                this.$toast('注册成功','center',1000,() => this.$router.push('/mine/login')
                )
              } else if (res.message === '账号已存在' && res.status === 0) {
                this.$toast('账号已存在','center',1000)
              } else {
                this.$toast('注册失败','center',1000)
              }
            })
          })
        } else {
          this.$toast('信息不能为空','center',1000)
        }
      },
      getImg(e) {
        let fileReader = new FileReader()
        this.userimg = e.target.files
        this.hasUpload = true
        fileReader.readAsDataURL(this.userimg[0])
        fileReader.onloadend = function (oFRevent) {
          this.imgurl = oFRevent.target.result;
          let userimg = document.getElementById("upFile")
          userimg.setAttribute("src", this.imgurl)
        }
      },
      upLoadImg() {
        let formData = new FormData();
        formData.append("action", "upresumefile"); //调用它的append()方法来添加字段
        for (let i = 0; i < this.userimg.length; i++) {
          formData.append("file[]", this.userimg[i]);
        }
        return new Promise(resolve => {
          this.$axios.post('http://101.200.88.248:8044//users/imgupload', formData).then(res => resolve(res.data))
        })
      }
    },
  }
</script>
<style lang="less" scoped>
  #register {
    background-color: #f6f6f6;
    height: 1180px;

    .iconfont {
      font-size: 36px;
    }

    .title {
      font-size: 40px;
      margin-left: -10px;
    }

    .body {
      background-color: #fff;
      margin-top: 40px;
      height: 100%;
      display: flex;
      flex-direction: column;

      .upLoad {
        position: relative;

        &>div {
          margin-left: -30px;

        }

        p {
          position: absolute;
          width: 140px;
          height: 140px;
          border-radius: 50%;
          border: 1px solid #c2bfbf;
          text-align: center;
          display: flex;
          align-items: center;
          padding-left: 8px;
          cursor: pointer;
          background-color: aqua;
          box-sizing: border-box;
        }

        input {
          opacity: 0;
          height: 100%;
          width: 140px;
          height: 140px;
          border-radius: 50%;
        }

        img {
          position: absolute;
          width: 140px;
          height: 140px;
          border-radius: 50%;
          border: 1px solid #c2bfbf;
        }
      }

      .gender {
        height: 140px;
        display: flex;
        align-items: center;

        input {
          margin-left: 30px;
        }
      }

      &>div {
        height: 140px;
        display: flex;

        label {
          display: flex;
          align-items: center;
          margin: 0 80px 0 40px;
        }

        input {
          border: none;
          outline: none;

          &+span {
            color: red;
            display: flex;
            align-items: center;
          }
        }

        #upd {
          margin-left: 32px;
        }
      }

      .rbtn {
        width: 600px;
        margin: 290px auto 100px;
        display: block;
        background-color: #f18d94;
        color: white;
        height: 90px;
        text-align: center;
        line-height: 100px;
        border-radius: 50px;
      }
    }

  }
</style>