<template>
  <el-container style="height: 100%;">
    <el-aside width="200px" style="background-color: #49586e;min-height: 300px">
      <div style="padding-top: 20px;height: 200px;text-align: center;color: #eee">
        <div>
          <el-avatar :size="80" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
        </div>
        <el-dropdown style="margin-top: 20px;" trigger="click" @command="handleUserCommand">
          <span class="el-dropdown-link">
            {{currentUser.username}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

      </div>
      <div style="margin-top: 20px;">
        <div class="menuItem" v-for="item in manageMenus" :key="item.name" @click="redirectMenu(item)"
             :class=" item.path=== key ? 'menuActive':''">{{item.meta.title}}</div>
      </div>
    </el-aside>
    <el-main>
      <router-view :key="key" />
    </el-main>
  </el-container>
</template>

<script>
import { manageMenus } from '@/router'
import {removeToken} from "@/utils/auth";
export default {
  name: "Layout",
  computed: {
    key() {
      return this.$route.path
    },
    manageMenus() {
      return manageMenus
    },
    currentUser(){
      return JSON.parse(localStorage.getItem("userinfo"))
    }
  },
  methods:{
    redirectMenu(item){
      this.$router.push(item.path)
    },
    handleUserCommand(command){
      if (command === 'logout'){
        removeToken();
        this.$router.push('/login');
      }
    }
  }
}
</script>

<style scoped>
.menuItem{line-height: 45px;padding-left: 40px;cursor: pointer;color: #eee;font-size: 14px;}
.menuItem:hover{background-color: #3F4B5F}
.menuActive{color: #409eff;background-color: #3F4B5F}
.el-dropdown-link {cursor: pointer; color: #eee;}
</style>
