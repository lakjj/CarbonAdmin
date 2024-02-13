<template>
    <div class="Logincontainer">
      <div class="loginHeader"></div>
      <div class="content">
          <div class="login-container">
            <!-- <div class="title">登录</div> -->
            <div class="login-box">
                <div class="title-container">
                    <h3 class="title">双碳管理平台登录</h3>
                </div>
                
              <el-form ref="loginRef" :model="login" :rules="loginRules" label-width="0px" class="login_form">
                <el-form-item prop="username"  style="margin-top: 20px">
                  <el-input v-model.trim="login.username" prefix-icon="el-icon-user" placeholder="用户名"></el-input>
                </el-form-item>
                <el-form-item prop="password" style="margin-top: 28px; ">
                  <el-input v-model.trim="login.password" prefix-icon="el-icon-lock" type="password"
                            @keyup.enter.native="login" :show-password="true" placeholder="密码"></el-input>
                    <router-link to="/" style="float: right; color: #bbbbbb;margin-top: -8px; margin-bottom: -8px;">忘记密码？</router-link>
                </el-form-item>
          
           
                <!-- <el-form-item class="btns">
                  <el-button type="primary" @click="loginok">登录</el-button>
                  <el-button type="info" @click="resetLogin">重置</el-button>
                </el-form-item> -->
                <el-form-item style="width:100%;">
                    <el-button type="primary" style="width:100%;" class="custom-button" @click="loginok" >
    登录
  </el-button>
</el-form-item>
        <el-form-item style="width:100%;">
          <el-button type="primary" style="width:100%; margin-top: 8px; color:black;background-color: white; " @click="resetLogin">
            注册
          </el-button>
        </el-form-item>
              </el-form>
            </div>
          </div>
       
      </div>
      <div class="footer">
       
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios"
  export default {
    data() {
      return {
        login: {
          username: "root",
          password: "123456"
        },
        loginRules: {
          username: [{ required: true, message: "用户名不能为空", trigger: "blur" }]
        }
      };
    },
    // created:function(){
    //   // console.log("login组件被创建了");
    //   axios.get("/user").then(function(response){
    //     console.log(response)
    //   })
    // },
    methods: {
      resetLogin() {
        this.$refs.loginRef.resetFields();
      },
      loginok() {
        this.$refs.loginRef.validate(async (valid) => {
          if (!valid) {
            return;
          }
          const { data: res } = await this.$http.post("admin/login", this.login);
          if (res.status != 200) {
            return this.$message.error(res.msg);
          }
          this.$message.success("登录成功!");
          window.sessionStorage.setItem("token", res.map.token);
          window.sessionStorage.setItem("adminId", res.map.id);
          this.$router.push("/home");
        });
      }
    }
  };
  </script>
  
  <style>
  .Logincontainer {
    background-position: center;
  background-size: cover;
  position: relative;
  width: 100%;
  height: 100%;
    
  }
  .loginHeader {
    min-height: 0px;
    background-color: rgb(236, 240, 236);
    color: white; /* 设置文本颜色为绿色 */
    display: flex;
    justify-content: center; /* 垂直居中 */
    align-items: center; /* 水平居中 */
  }
  
  .content {
    flex: 1;
    margin-top: 142px;
    align-items: center;
    justify-content: center;
  }
  
  .login-container {
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .login-box {
    display: flex;
    height: 420px;
  flex-direction: column;
  align-items: center;
  background-color: #FFF;
  margin: 0;
  padding: 2.25em;
  box-sizing: border-box;
  border: solid 1px #DDD;
  border-radius: .5em;
  font-family: 'Source Sans Pro', sans-serif;
  }
  
  .btns {
    display: flex;
    justify-content: flex-end;
  }
  
  .title-container {
    margin-bottom: 15px;
    margin-right: -10px;
    letter-spacing: 1.2px; /* 设置字间距为2像素，根据需求调整 */
    font-size: 18px; /* 设置字体大小为24像素，根据需求调整 */
  }
  .custom-button {
  background-color: green;
  transition: background-color 0.3s; /* 设置颜色变化的过渡效果 */
}

/* .custom-button:hover {
  background-color: green; 
} */
  .footer {
  height: 20px;
    text-align: center;
  }
  </style>