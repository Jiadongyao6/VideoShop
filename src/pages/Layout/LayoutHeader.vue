<template>
  <div class="header">
    <!-- 导航部分 -->
  <div class="nav">
        <el-menu
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="0"><a href="">这是一个logo图片</a></el-menu-item>
  <el-submenu index="1">
    <template slot="title">软件入门</template>
    <el-menu-item index="1-1">选项1</el-menu-item>
    <el-menu-item index="1-2">选项2</el-menu-item>
    <el-menu-item index="1-3">选项3</el-menu-item>
  </el-submenu>
  <el-submenu index="2">
    <template slot="title">设计教程</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
  </el-submenu>
  <el-submenu index="3">
    <template slot="title">大数据课程</template>
    <el-menu-item index="3-1">选项1</el-menu-item>
    <el-menu-item index="3-2">选项2</el-menu-item>
    <el-menu-item index="3-3">选项3</el-menu-item>
  </el-submenu>
  <el-submenu index="4">
    <template slot="title">分类VIP</template>
    <el-menu-item index="4-1">选项1</el-menu-item>
    <el-menu-item index="4-2">选项2</el-menu-item>
    <el-menu-item index="4-3">选项3</el-menu-item>
  </el-submenu>
  <el-submenu index="5">
    <template slot="title">全部VIP</template>
    <el-menu-item index="5-1">选项1</el-menu-item>
    <el-menu-item index="5-2">选项2</el-menu-item>
    <el-menu-item index="5-3">选项3</el-menu-item>
  </el-submenu>
    <el-menu-item index="6" class="register"><a href="">免费注册</a></el-menu-item>
    <el-menu-item index="7" class="login"><a href="">登录</a></el-menu-item>
  

  </el-menu>
</div>
</div>
</template>

<script>
import { mapState,mapActions } from "vuex";
export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style lang="css" scoped>
.login,.register{
  float: right;
}
.login a{
  color:#FFD500;
  font-weight: bold;
}
.login a:hover{
  color:#FFD500;
  font-weight: bold;
}
</style>
