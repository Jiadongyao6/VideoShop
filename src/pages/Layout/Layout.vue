<template>
  <div class="layout">
    <el-container>
      <el-container>
        <el-header>
          <layout-header></layout-header>
        </el-header>
        <div class="main">
          <el-main>
            <router-view />
          </el-main>
        </div>
        <layout-footer></layout-footer>
      </el-container>
    </el-container>
    
  </div>
</template>
<script>
import LayoutHeader from "./LayoutHeader";
import LayoutFooter from "./LayoutFooter";
export default {
  name: "Layout",
  components: { LayoutHeader, LayoutFooter },
  data() {
    return {};
  },
  mounted() {
    
  }
};
</script>
<style lang="less" scoped>
// .layout {
//   .main {
//     min-height: calc(100vh - 120px);
//     background-color: #e9eef3;
//   }
// }
</style>
<style lang="css" scoped>
.el-header,.el-main{
  padding:0;
}
/* .el-header,
.el-footer {
  background-color: #b3c0d1;
}
.el-footer{
  line-height: 64px;
  text-align: center;
}
.el-menu {
  background-color: #d3dce6;
  border: none;
} */
</style>