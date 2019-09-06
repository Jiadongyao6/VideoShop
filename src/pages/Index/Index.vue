<template>
<div class="homePage">
  <!-- 轮播图 -->
  <div class="banner">
     <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide><a href=""><img src="../../assets/img/banner/banner1.jpg" alt=""></a></swiper-slide>
    <swiper-slide><a href=""><img src="../../assets/img/banner/banner2.jpg" alt=""></a></swiper-slide>
    <swiper-slide><a href=""><img src="../../assets/img/banner/banner3.jpg" alt=""></a></swiper-slide>
    <swiper-slide><a href=""><img src="../../assets/img/banner/banner4.jpg" alt=""></a></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
  <!-- 页面主体部分 -->
  <div class="section">
    <div class="separator">
      <div class="lt recommend">
        <i class="el-icon-goods" style="margin-left: 20px;margin-right: 5px"></i>推荐视频
      </div>
      <div class="more">
        查看更多视频 >>
      </div>
    </div>
    <div class="containerList">
      <div class="contentList"  v-for="(value,index) in recommendData" :key=index>
        <!-- 其中一个div -->
        
          <div class="list" @mouseenter="onMouseOver(index)" @mouseleave="onMouseOut(index)">
          <div class="list-img">
              <a href=""><img :src="value.showImg" style="width:243px;height:147px;" alt=""></a>
              <transition name="fade">
                <span class="play-cover" v-show="value.seen">
                </span>
              </transition>
            <span class="time-length">{{value.timeLength}}</span>
              
          </div>
      
          <div class="img-name">{{value.imgName}}</div>
          <div class="img-data"></div>
        </div>
        
        
   
      </div>
    </div>
    <div class="more-btn">
      <div class="refresh-btn"  @mouseenter="mouseover(1)" @mouseleave="mouseout(1)" :style="active1">
        <transition><i :style="{transform:'rotate('+n1+'deg)'}"></i></transition>
          换一批教程
        </div>
    </div>
  </div>

  <!-- 最新视频 -->
  <div class="section">
    <div class="separator">
      <div class="lt recommend">
        <i class="el-icon-goods" style="margin-left: 20px;margin-right: 5px"></i>最新视频
      </div>
      <div class="more">
        查看更多视频 >>
      </div>
    </div>
    <div class="containerList">
      <div class="contentList"  v-for="(value,index) in recommendData" :key=index>
      <!-- {{value}} -->
        <!-- 其中一个div -->
        
          <div class="list" @mouseenter="onMouseOver(index)" @mouseleave="onMouseOut(index)">
          <div class="list-img">
              <a href=""><img :src="value.showImg" style="width:243px;height:147px;" alt=""></a>
              <transition name="fade">
                <span class="play-cover" v-show="value.seen">
                </span>
              </transition>
            <span class="time-length">{{value.timeLength}}</span>
              
          </div>
      
          <div class="img-name">{{value.imgName}}</div>
          <div class="img-data"></div>
        </div>
    </div>
    </div>
    <div class="more-btn">
      <div class="refresh-btn"  @mouseenter="mouseover(2)" @mouseleave="mouseout(2)" :style="active2">
        <transition><i :style="{transform:'rotate('+n2+'deg)'}"></i></transition>  
        换一批教程</div>
    </div>
  </div>
</div>

  
</template>

<script>
import  {swiper,swiperSlide} from 'vue-awesome-swiper'
export default {
  name: "Index",
  data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination1',
          slidesPerView: 1,
          spaceBetween: 30,
          centeredSlides: false,
          spaceBetween: 0,
          onSlideChangeEnd: swiper => {
            //这个位置放swiper的回调方法
            this.page = swiper.realIndex+1;
            this.index = swiper.realIndex;
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          //自动播放
          autoplay:{
            delay:2000,
            disableOnInteraction:false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          //循环
          loop:true
        },

        //推荐视频数据
        recommendData:[
          {
            "showImg":"../../../static/img/index/psgo.jpg",
            "timeLength":"4分14秒",
            "imgName":"PS软件介绍及安装",
            "seen":false
          },
          {
            "showImg":"../../../static/img/index/excel.jpg",
            "timeLength":"4分14秒",
            "imgName":"PS软件介绍及安装",
            "seen":false
          },
          {
            "showImg":"../../../static/img/index/power.jpg",
            "timeLength":"4分14秒",
            "imgName":"PS软件介绍及安装",
            "seen":false
          },
          {
            "showImg":"../../../static/img/index/ling.jpg",
            "timeLength":"4分14秒",
            "imgName":"PS软件介绍及安装",
            "seen":false
          },
          {
            "showImg":"../../../static/img/index/kk.jpg",
            "timeLength":"4分14秒",
            "imgName":"PS软件介绍及安装",
            "seen":false
          },
          {
            "showImg":"../../../static/img/index/hyo.jpg",
            "timeLength":"4分14秒",
            "imgName":"PS软件介绍及安装",
            "seen":false
          },
          {
            "showImg":"../../../static/img/index/c4d.jpg",
            "timeLength":"4分14秒",
            "imgName":"PS软件介绍及安装",
            "seen":false
          },
          {
            "showImg":"../../../static/img/index/format.gif",
            "timeLength":"4分14秒",
            "imgName":"PS软件介绍及安装",
            "seen":false
          }

        ],
        active1:'',
        active2:'',
        n1:0,
        n2:0
      }
    },
    methods:{
      onMouseOver:function(index){
        this.recommendData[index].seen=true;//鼠标移入显示内容
        
      },
      onMouseOut:function(index){
        this.recommendData[index].seen=false; //鼠标移出隐藏内容
        
      },
      mouseover:function(i){
        if(i==1){
          this.active1="background-color:#FFD500";
           this.n1=60;
        }else if(i==2){
          this.active2="background-color:#FFD500";
          this.n2=60
        }
      },
      mouseout:function(i){
       if(i==1){
          this.active1="";
           this.n1=0;
        }else if(i==2){
          this.active2="";
          this.n2=0
        }
      }
    },
    

    //定义swiper对象
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    },
    mounted () {
      this.swiper.slideTo(0, 0, false);
    }
}

</script>
<style lang="css" scoped>

.containerList{
  display:flex;
  justify-content: space-between;
  flex-wrap:wrap;
  margin-top:30px;
}
.contentList{
  position:relative;
  margin-bottom:30px;
}
.list-img img{
  border-radius:6px;
}
.contentList .time-length{
  display:block;
  padding:0 6px;
  height:15px;
  line-height:15px;
  background:rgba(0,0,0,0.25);
  font-size:12px;
  color:#fff;
  border-radius:4px;
  position:absolute;
  right:10px;
  bottom:30px;
  transition:all 0.25s ease-in;
}
.img-name{
  display:block;
  overflow:hidden;
  white-space: nowrap;
  text-overflow:ellipsis;
  width:100%;
  font-size:16px;
  color:#333;
}
.banner img{
  width:100%;
  height:330px;
}
.section{
  width:80%;
  margin:0 auto;
  margin-top:30px;
}
.separator{
  display:flex;
  justify-content: space-between;
}
.recommend{
  font-size:22px;
  color:#333;
  font-weight:400;
  letter-spacing: 2px;
}
.more {
    cursor: pointer;
    font-size:14px;
    color:#333;
  }
  .more:hover{
    cursor: pointer;
    font-size:14px;
    color:red;
  }
  .play-cover{
    position:absolute;
    left:0;
    top:0;
    width:100%;
    height:86%;
    border-radius:6px;
    background:rgba(0,0,0,0.35);
    /* opacity:1; */
  }
  .play-cover:before{
    content:"";
    left:50%;
    top:50%;
    margin:-30px 0 0 -30px;
    width:60px;
    height:60px;
    transition:all .25s;
    background:url("../../../static/img/icons3.png") 0 -115px;
    position:absolute;
    /* transform:scale(1.5); */
  }
  .fade-enter-active{
    transition:opacity 0.5s;
  }
  .fade-enter{
    opacity:0;
  }
  .fade-enter-to{
    opacity:1;
  }
  .fade-leave{
   opacity:1;
  }
  .fade-leave-to{
   opacity:0;
  }

.more-btn{
    margin-top:10px;
    text-align:center;
}
.more-btn i{
  display:inline-block;
  width:15px;
  height:17px;
  margin-right:10px;
  background:url("../../../static/img/icon.png") -162px -49px;
  vertical-align:-4px;
  transition: all 0.5s;
}
.refresh-btn{
  border-radius:5px;
  transition:all 0.2s;
  background:#fff;
  color:#666;
  text-align:center;
  cursor:pointer;
  display:inline-block;
  width:160px;
  height:40px;
  border:1px solid #ddd;
  line-height:38px;
}

</style>