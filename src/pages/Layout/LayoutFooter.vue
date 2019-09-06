<template>
  <div class="layout-footer">
    <div class="page-footer">
      <div class="container-footer">
        <!-- 左侧列表 -->
        <div class="list-lf">
          <ul class="links">
            <li><a href="">关于我们</a></li>
            <li>|</li>
            <li><a href="">招聘信息</a></li>
            <li>|</li>
            <li><a href="">联系我们</a></li>
            <li>|</li>
            <li><a href="">商务合作</a></li>
            <li>|</li>
            <li><a href="">VIP服务</a></li>
            <li>|</li>
            <li><a href="">APP</a></li>
          </ul>

          <div class="copyright">
            Copyright © 北京达内金桥科技有限公司版权所有 京ICP备12003709号-3
            <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802029572" target="_blank" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;color:#666;">
              <img src="http://cdn.tmooc.cn/tmooc-web/css/img/beianh2019082901.png" alt="">
              <span>京公网安备 11010802029572号</span>
            </a>
          </div>
        </div>
        <!-- 右侧二维码 -->
        <div class="ewm-ri">
            <div class="text-right">
              <p>达内精品在线WWW.TMOOC.CN 专注于IT职业技能培训 </p>
              <p>涵盖20余门课程体系，致力于打造权威的IT职业教育学习平台</p>
            </div>
            <div class="ewm">
              <img src="http://cdn.tmooc.cn/tmooc-web/css/img/erweima.jpg" width="75px" alt="">
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "LayoutFooter",
  computed: {
    ...mapState("Layout", ["isCollapse"])
  },
  data() {
    return {};
  },
  mounted() {}
};
</script>
<style lang="css" scoped>
.page-footer{
  background:#282c30;
  margin-top:50px;
}
.container-footer{
  width:80%;
  margin:0 auto;
  display:flex;
  justify-content:space-between;
}
.list-lf{
  padding-top:66px;
  padding-bottom:66px;
}
.copyright{
  color:#999;
  margin-top:30px;
  margin-left:20px;
}
.links li{
  float:left;
  color:#999;
  font-size:14px;
  margin:0 14px;
}
.links li a{
  color:#999;
  text-decoration:none;
}
.links li a:hover{
  color:#fff;
  text-decoration:none;
}
.text-right p{
  color:#999;
  padding-bottom:10px;
}
.ewm-ri{
  padding-top:66px;
}
.text-right{
  padding-right:30px;
}
.ewm-ri div{
  float:left;
}
</style>