<template>
    <el-container class="home-container">
    <el-header>
    <div>
    <span>欢迎登录双碳管理系统</span>
    <span style="color:#ccc;font-size:16px;"></span>
    </div>
    <div>
    <div>
    <!-- <el-avatar src="avatar01.png"
    :size="35"
    style="margin-right:10px;">
    </el-avatar> -->
    </div>
    <div class="user">管理员：{{ this.admin.adminName }}</div>
    <el-button type="info" @click="logout">退出</el-button>
    </div>
    </el-header>
    <el-container>
    <el-aside :width="isCollapse ? '64px' : '200px'">
    <div class="toggle-button" @click="toggleCollapse">|||</div>
    <!-- 侧边栏菜单区域 -->
    <el-menu background-color="#545c64" text-color="#ffffff"
    active-text-color="#ffd04b" defaultactive="energywarningsmanage" :router="true" :collapse="isCollapse"
    :collapse-transition="false">
    <el-submenu index="1">
    <template slot="title"><i class="el-icon-s-tools"></i><span>制造双
    碳</span></template>
    <el-menu-item index="energywarningsmanage">能效预警</el-menu-item>
    </el-submenu>
    <el-submenu index="2">
    <template slot="title"><i class="el-icon-s-tools"></i><span>制造执
    行MES</span></template>
    <el-menu-item index="bookadminmanage">项目维护</el-menu-item>
    <el-menu-item index="1-2">工厂建模</el-menu-item>
    <el-menu-item index="1-2">工艺建模</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
    <template slot="title"><i class="el-icon-s-tools"></i><span>采购管
    理系统</span></template>
    <el-menu-item index="bookadminmanage">平台动态</el-menu-item>
    <el-menu-item index="1-2">信息公告</el-menu-item>
    </el-submenu>
    <el-submenu index="4">
    <template slot="title"><i class="el-icon-setting"></i><span>数据可
    视化</span></template>
    <el-menu-item index="bookadminmanage">数据可视化</el-menu-item>
    </el-submenu>
    </el-menu>
    </el-aside>
    <el-main>
    <!-- 路由占位符 -->
    <router-view></router-view>
    </el-main>
    </el-container>
    </el-container>
    </template>
    <script>
    export default {
    data(){
    return{ admin: {
    adminName: "",
    adminId:Number,
    },
    isCollapse: false,
    //被激活的链接地址
    activePath: "",
    }
    },
    async created(){
    const stringId = window.sessionStorage.getItem("adminId");
    const id = parseInt(stringId);
    this.admin.adminId = id;
    const { data: res } = await this.$http.post("admin/getData",
    this.admin);
    this.admin = res.data;
    },
    methods:{
    logout(){
    window.sessionStorage.clear
    this.$router.push('/login')
    },
    toggleCollapse() {
    this.isCollapse = !this.isCollapse;
    },
    //保存链接的激活状态
    saveNavState(activePath) {
    // console.log("first")
    window.sessionStorage.setItem("activePath", activePath);
    this.activePath = activePath;
    // console.log(this.activePath);
    },
    }
    }
    </script>
    <style>
    /* .footer {
    position: absolute;
    bottom: 0px;
    left: 50%;
    color:#ccc;
    } */
    /* .footer a{
    color:#ccc;
    } */
    .home-container {
    height: 100%;
    }
    .el-header {
    background-color: rgb(34, 34, 34);
    display: flex;
    justify-content: space-between;
    padding-left: 0px;
    align-items: center;
    color: #fff;
    font-size: 20px;
    border-radius: 10px;
    }
    .el-header>div{
    display: flex;
    align-items: center;
    }
    .el-header>div span{
    margin-left: 15px;
    }
    .el-aside {
    background-color: #fff;
    }
    .el-aside .el-menu{
    border-right: none;
    }
    .el-main {
    background-color: #eaedf1;
    padding: 20px;

    }
    .iconfont {
    margin-right: 10px;
    }
    .toggle-button {
    background-color: #4a5064;
    font-size: 10px;
    line-height: 24px;
    color: #fff;
    text-align: center;
    letter-spacing: 0.2em;
    cursor: pointer;
    }
    .user {
    margin-right: 15px;
    color: #ccc;
    font-size: 16px;
    }
    .el-menu-item:hover {
    background-color: rgb(51, 122, 183) !important;
    }
    /* .el-menu-item{
    color:rgb(135, 206, 235) !important;
    } */
    </style>