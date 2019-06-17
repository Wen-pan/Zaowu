<template>
  <div class="home-main">
    <div class="headr-bar">
      <img src="@/assets/imgs/icons/search.png" alt class="icon icon-search">
      <p class="title">ZAOWU造物</p>
      <div>
        <img src="@/assets/imgs/icons/chat.png" alt class="icon icon-chat">
        <img src="@/assets/imgs/icons/cart.png" alt class="icon icon-cart">
      </div>
    </div>
    <div class="seciton section-banner">
      <div class="tabs-bar">
        <span class="btn-tab active">推荐</span>
        <span class="btn-tab">品牌</span>
        <span class="btn-tab">活动</span>
        <span class="btn-tab">定制</span>
      </div>
    </div>
    <swiper class="banner-img" :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
      <!-- slides -->
      <swiper-slide v-for="m in bannerImgs" :key="m.id">
        <img :src="m.img" alt>
      </swiper-slide>
    </swiper>
    <div class="theme">
      <p class="theme-time">-TUE 9.18-</p>
      <p>周二品质生活专题</p>
      <img class="theme-img" src="@/assets/imgs/kind/bg1.png" alt>
    </div>
    <div class="introduce">
      <div>
        <img src="@/assets/imgs/home/p12.png" alt>
        <p>精油香氛</p>
        <p>¥344</p>
      </div>
      <div>
        <img src="@/assets/imgs/home/p11.png" alt>
        <p>山居猎奇</p>
        <p>¥344</p>
      </div>
      <div>
        <img src="@/assets/imgs/home/p9.png" alt>
        <p>北欧国度</p>
        <p>¥372</p>
      </div>
      <div>
        <img src="@/assets/imgs/home/p10.png" alt>
        <p>卡洛卡陶瓷碗盘</p>
        <p>¥388</p>
      </div>
    </div>
    <div>
      <div class="theme theme-2">
        <p class="theme-time">-MON 9.17-</p>
        <p>周一新品抢鲜放送</p>
      </div>
    </div>
    <div class="seciton section-moday">
        <Moday></Moday>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";
import homeImg from "@assets/api/home";
import Moday from './components/Moday.vue'
export default {
  name: "Home",

  data() {
    return {
      swiperOption: {
        slidesPerView: 1.2,
        
        centeredSlides: true
      },
      bannerImgs: []
    };
  },
  components: {
    swiper,
    swiperSlide,
    Moday
  },
  created() {
    homeImg.getBannerImgs().then(res => {
      this.bannerImgs = res;
      console.log(res);
    });
  },
  methods: {
    callback() {}
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/style/common.scss";
.home-main {
  .headr-bar {
    width: 100%;
    height: 28px;
    display: flex;
    padding: 0 $BasePadding;
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;
    .title {
      font-size: 20px;
    }
    .icon {
      width: 20px;
      height: 20px;
      &.icon-chat {
        margin-right: 20px;
      }
    }
  }
  .section-banner {
    .tabs-bar {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 13.5px;
      .btn-tab {
        padding: 0 15px;
        box-sizing: border-box;
        font-size: 15px;
        border-right: 1px solid #e5e5e5;
        &:last-child {
          border-right: none;
        }
      }
    }
  }
  .banner-img {
    margin-top: 20px;
  }
  .theme {
    margin-top: 20px;
    overflow: hidden;
    color: #494949;
    .theme-time {
      font-size: 20px;
      color: #010e0d;
      letter-spacing: 0.06px;
      line-height: 28px;
    }
    .theme-img {
      margin-top: 9px;
    }
  }
  .theme-2{
      margin-top: 30px;
  }
  .introduce {
    display: flex;
    justify-content: center;
    font-size: 10px;
    color: #494949;
  }
  .section-moday{
    width: 100%;
  }
}
</style>
