<template>
    <div class="video-container" style="">
        <div class="video-content">
            <h1 class="title-h">PS软件介绍及安装</h1>
            <div class="container">
                <video id="video1" @click="suspend"
                class="video-js vjs-default-skin vjs-big-play-centered" controls preload="auto" poster="../../../static/img/index/psgo.jpg" >
                <source src="../../../static/video/birds.mp4" style="height:500px;"></source>
                </video>
                
                <div class="resource">
                    <div class="right-top">
                        <div class="head-img"><img src="../../../static/img/video/head.jpg" alt=""></div>
                        <div>
                            <p class="num">观看次数: <span>1000</span>次</p>
                            <p class="share"><a href=""><i class="el-icon-share"></i>&nbsp;分享</a></p>
                        </div>
                        
                    </div>
                    <div class="tabs"> 
                        <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane  label="相关视频" name="first">
                                <span class="line"></span>
                                <ul class="resource-list">
                                    <li><a class="route_video_class" href=""><p class="active over-hidden-class"> 第1课 软件入门介绍 </p></a></li>
                                    <li><a class="route_video_class" href=""><p class="over-hidden-class"> 第1课 软件入门介绍 </p></a></li>
                                    <li><a class="route_video_class" href=""><p class="over-hidden-class"> 第1课 软件入门介绍 </p></a></li>
                                    <li><a class="route_video_class" href=""><p class="over-hidden-class"> 第1课 软件入门介绍 </p></a></li>
                                    <li><a class="route_video_class" href=""><p class="over-hidden-class"> 第1课 软件入门介绍 </p></a></li>
                                    <li><a class="route_video_class" href=""><p class="over-hidden-class"> 第1课 软件入门介绍 </p></a></li>
                                    <li><a class="route_video_class" href=""><p class="over-hidden-class"> 第1课 软件入门介绍 </p></a></li>
                                    <li><a class="route_video_class" href=""><p class="over-hidden-class"> 第1课 软件入门介绍 </p></a></li>
                                    <li><a class="route_video_class" href=""><p class="over-hidden-class"> 第1课 软件入门介绍 </p></a></li>
                                    <li><a class="route_video_class" href=""><p class="over-hidden-class"> 第1课 软件入门介绍 </p></a></li>
                                    <li><a class="route_video_class" href=""><p class="over-hidden-class"> 第1课 软件入门介绍 </p></a></li>
                                    <li><a class="route_video_class" href=""><p class="over-hidden-class"> 第1课 软件入门介绍 </p></a></li>
                                </ul>
                            </el-tab-pane>
                            <el-tab-pane  label="相关笔记" name="second">
                                <span class="line"></span>
                                <ul class="resource-list">
                                    <li><a class="route_video_class" href=""><p class="active over-hidden-class"> 第1课 软件入门介绍 </p></a></li>
                                    <li><a class="route_video_class" href=""><p class="over-hidden-class"> 第1课 软件入门介绍 </p></a></li>
                                    <li><a class="route_video_class" href=""><p class="over-hidden-class"> 第1课 软件入门介绍 </p></a></li>
                                    <li><a class="route_video_class" href=""><p class="over-hidden-class"> 第1课 软件入门介绍 </p></a></li>
                                    <li><a class="route_video_class" href=""><p class="over-hidden-class"> 第1课 软件入门介绍 </p></a></li>
                                    <li><a class="route_video_class" href=""><p class="over-hidden-class"> 第1课 软件入门介绍 </p></a></li>
                                    <li><a class="route_video_class" href=""><p class="over-hidden-class"> 第1课 软件入门介绍 </p></a></li>
                                    <li><a class="route_video_class" href=""><p class="over-hidden-class"> 第1课 软件入门介绍 </p></a></li>
                                    <li><a class="route_video_class" href=""><p class="over-hidden-class"> 第1课 软件入门介绍 </p></a></li>
                                    <li><a class="route_video_class" href=""><p class="over-hidden-class"> 第1课 软件入门介绍 </p></a></li>
                                    <li><a class="route_video_class" href=""><p class="over-hidden-class"> 第1课 软件入门介绍 </p></a></li>
                                    <li><a class="route_video_class" href=""><p class="over-hidden-class"> 第1课 软件入门介绍 </p></a></li>
                                </ul>
                            </el-tab-pane>
                        </el-tabs>
                    
                    </div>
                    
                </div>
            </div>
            <div class="ad" id="advert" v-show="show">
                <a href="">
                    <img src="../../../static/img/index/psgo.jpg" alt=""> 
                </a>
                <p class="close" @click="isShow">X</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
    name: "Video",
    computed: {

    },
    data() {
        return {
            activeName: 'first',
            show:false,
            timer:null
        };
    },
    methods:{
        handleClick(tab, event) {
            console.log(tab, event);
        },
        suspend(){
            var vide=document.getElementById("video1");
            //var advert = document.getElementById("advert");
            //console.log(vide.paused);
            //console.log(vide.currentTime);
            if(vide.paused==false){
                this.show=true
            }else{
                this.show=false
            }

        },
        isShow(){
            this.show = false;
        }
        // setTimer:function(){
        //     this.timer = setInterval(()=>{
        //         this.show=true
        //         //console.log(1)
        //     },10000)
        // }
    },
    mounted() {
        //this.setTimer();
        //clearInterval(this.timer)
    },
    distroyed(){
        //this.setTimer();
        //clearInterval(this.timer)
    }
};
</script>
<style lang="css" scoped>
.video-content{
    width:80%;
    margin:0 auto;
    position:relative;
}
.title-h{
    font-size:24px;
    font-weight:400;
    margin:15px 0;
}
.video-js{
    width:70%;
    height:430px;
    background:#fff;
    /* margin:0 auto; */
} 
.resource{
    width:30%;
    margin-top:1px;
    height:430px;
    background:#2d2d2d;
    position:relative;
    overflow-y:scroll
}
.resource-list a{
    color:#fff;
}
.resource-list a p{
    height:40px;
    line-height:40px;
    font-size:16px;
    position:relative;
    padding:0 19px 0 50px;
    cursor:pointer;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
} 
.resource-list a p:before{
    width:9px;
    height: 9px;
    content:"";
    border-radius:56px;
    border:1px #999 solid;
    position:absolute;
    left:20px;
    top:14px;z-index:3;
    background:#2d2d2d
}
.resource-list a p.active:before{
    border:1px solid #fff;
}
.line{
    position:absolute;
    width:1px;
    height:100%;
    left:25px;
    z-index:2;
    top:20px;
    padding-bottom:36px;
    box-sizing:border-box;
}
.line:before{
    height:100%;
    content:"";
    background-color:#999;
    width:1px;
    display:block;
}
.tabs el-tab-pane{
    margin:0 50px;
    color:#fff;
}
.container{
    display:flex;
    justify-content: space-between;
    flex-wrap:wrap;
}
.num{
    font-size:14px;
    color:#999;
    padding:15px 50px;
}
.share{
    text-align:center;
    color:#999;
    font-size:16px;
}
.share a{
    color:#999;
    line-height:30px;
}
.right-top{
    padding:10px 20px;
    display:flex;
    justify-content: space-between;
    flex-wrap:wrap;
}
.head-img img{
    width:56px;
    height:56px;
    border-radius:50%;

}
.ad{
    position:absolute;
    top:100px;
    left:120px;
    z-index:10;
}
</style>
<style lang="css">
.el-tabs__item{
    color:#999;
}
.el-tabs__item.is-active {
    color: #fff;
}
.el-tabs__header{
    padding:0 30px;
}
.close{
    position:absolute;
    top:10px;
    right:10px;
    cursor:pointer;
    width:16px;
    height:16px;
    background:rgba(0,0,0,0.25);
    color:#fff;
    text-align:center;
    border-radius:50%;
}
</style>
