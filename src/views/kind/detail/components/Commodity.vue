<template>
  <div class="commodity-main">
    <div class="headr-bar">
      <p @click="back" class="btn">&lt;</p>
      <p class="title">商品详情</p>
      <div>
        <img src="@/assets/imgs/icons/chat.png" alt class="icon icon-chat">
       <router-link tag="img" :to="{name:'Cart',params:{}}" :src="require('@/assets/imgs/icons/cart.png')" alt class="icon icon-cart"></router-link>
      </div>
    </div>
    <swiper class="banner-img" :options="swiperOptions" ref="mySwiper" @someSwiperEvent="callback">
      <!-- slides -->
      <swiper-slide>
        <img :src="$route.query.img" alt>
      </swiper-slide>
    </swiper>
    <div class="contriner">
      <p>{{$route.query.cname}}</p>
      <p @click="insCount">{{$route.query.ename}}</p>
      <p>¥{{$route.query.money}}</p>
    </div>
    <div class="footer">
      <div>
        <img :src="require('@/assets/imgs/icons/like3.png')" alt class="icon icon-chats">
        <img :src="require('@/assets/imgs/icons/like2.png')" alt class="icon icon-carts">
      </div>
      <p @click="join(0)" class="btn">加入购物车</p>
      <p @click="join(1)" class="btn2">立即购买</p>
    </div>
    <div v-show="flag" class="showing">
      <div class="showing-c">
        <div class="shopdetil">
          <img class="showing-img" :src="$route.query.img" alt>
          <div class="shopdetil-title">
            <p>{{$route.query.cname}}</p>
            <p>{{$route.query.ename}}</p>
            <p class="money">¥{{$route.query.money}}</p>
            <p>仅剩{{number}}件</p>
          </div>
          <img @click="close" class="closes" src="@/assets/imgs/icons/closes.png" alt>
        </div>
        <div class="option">
          <div class="option-a">
            <p>颜色</p>
            <img class="down" src="@/assets/imgs/icons/down.png" alt>
          </div>
          <span class="wirte"></span>
          <span class="black"></span>
        </div>
        <div class="option option-2">
          <div class="option-a option-b">
            <p>规格</p>
            <img class="down" src="@/assets/imgs/icons/down.png" alt>
          </div>
          <div class="size-2">
            <span class="Size">S</span>
            <span class="Size">M</span>
            <span class="Size">L</span>
          </div>
        </div>
        <div class="option option-3">
          <div class="option-a">
            <p>数量</p>
            <img class="down" src="@/assets/imgs/icons/down.png" alt>
          </div>
          <div class="numbers">
            <span @click="reduce" class="btn">-</span>
            <span class="btn">{{numbers}}</span>
            <span @click="add" class="btn">+</span>
          </div>
        </div>
        <div class="Choice">
          <div @click="addTobuy($route.query.id)" class="btn-true cart">确定</div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";
import Commapi from "@assets/api/evaluate";
export default {
  name: "commodity",

  data() {
    return {
      type:0,
      number: 10,
      numbers: 1,
      flag: false,
      swiperOptions: {
        slidesPerView: 1.2,

        centeredSlides: true
      },
      bannerImgs: []
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    money() {
      return this.$store.getters.mulcount;
    },
    array(){
       return this.$store.state.detil.array;
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    callback() {},
    join(type) {
      this.type=type
      this.flag = true;
    },
    close() {
      this.flag = false;
    },
    insCount() {
      this.$store.commit("inCount");
    },
    reduce() {
      if (this.numbers > 1) {
        this.numbers--;
        this.number++;
      }
    },
    add() {
      if (this.number > 1) {
        this.numbers++;
        this.number--;
      }
    },
    addTobuy(id){
      console.log(123)
      if(this.type==0){
        this.$store.commit('cart/insBuy',id)
      }else if(this.type==1){
        this.$router.push({
          name:'Shopping'
        })
      }
      this.flag = false;
    }
  },
  created() {
    Commapi.getEvaluateImgs().then(res => {
      this.bannerImgs = res;
      console.log(res);
    });
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/style/common.scss";
.commodity-main {
  .headr-bar {
    width: 100%;
    height: 51px;
    display: flex;
    padding: 0 $BasePadding;
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;
    background-color: #f9f9f9;
    .btn {
      font-size: 30px;
    }
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
  .banner-img {
    margin-top: 18.5px;
    z-index: 999999;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .contriner {
    margin-top: 40px;
    font-size: 20px;
    line-height: 35px;
  }
  .footer {
    width: 100%;
    height: 80px;
    display: flex;
    padding: 0 $BasePadding;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    .icon-carts {
      margin-left: 20px;
    }
    .btn {
      width: 113px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      border: 1px solid #1c4b47;
    }
    .btn2 {
      width: 113px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      color: #ffffff;
      background-color: #1c4b47;
      border: 1px solid #1c4b47;
    }
  }
  .showing {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999999;
    background: rgba(0, 0, 0, 0.2);
    .showing-c {
      position: relative;
      position: absolute;
      left: 6%;
      bottom: 0;
      width: 333px;
      height: 491px;
      margin: 0 auto;
      background-color: white;
      border-radius: 10px;
      .shopdetil {
        margin-top: 14px;
        width: 100%;
        padding: 0 $BasePadding;
        overflow: hidden;
        .showing-img {
          float: left;
          width: 114px;
          height: 114px;
        }
        .shopdetil-title {
          width: 150px;
          float: left;
          text-align: left;
          display: block;
          margin-left: 34px;
          line-height: 30px;
          .money {
            font-size: 16px;
            color: #010e0d;
          }
        }
        .closes {
          display: block;
          width: 17px;
          height: 17px;
        }
      }
      .option {
        text-align: left;
        width: 100%;
        padding: 0 $BasePadding;
        margin-top: 26.5px;
        overflow: hidden;
        .option-a {
          position: relative;
          font-size: 14px;
          color: #000000;
          .down {
            position: absolute;
            left: 28px;
            top: -10px;
          }
        }
        .wirte {
          float: left;
          display: block;
          width: 35px;
          height: 35px;
          background-color: #ebe7dc;
          border-radius: 100%;
          margin-top: 20px;
          box-shadow: 1px 1px 5px #888888;
          margin-left: 35px;
        }
        .black {
          float: left;
          display: block;
          width: 35px;
          height: 35px;
          background-color: #101010;
          border-radius: 100%;
          margin-top: 20px;
          box-shadow: 1px 1px 5px #888888;
          margin-left: 35px;
        }
      }
      .option-2 {
        .size-2 {
          overflow: hidden;
          margin-top: 20px;
          .Size {
            display: block;
            width: 44px;
            height: 39px;
            text-align: center;
            line-height: 39px;
            font-size: 16px;
            box-shadow: 1px 1px 5px #e9e9e9;
            float: left;
            margin-left: 30px;
          }
        }
      }
      .option-3 {
        .numbers {
          margin-top: 16.5px;
          .btn {
            display: block;
            float: left;
            width: 24px;
            height: 24px;
            text-align: center;
            line-height: 24px;
            font-size: 14px;
            box-shadow: 1px 1px 5px #e9e9e9;
          }
        }
      }
      .Choice {
        display: flex;
        width: 100%;
        padding: 0 $BasePadding;
        box-sizing: border-box;
        justify-content: space-between;
        .btn-true{
          width: 80px;
          height: 40px;
          background-color: #1c4b47;
          text-align: center;
          line-height: 40px;
          font-size: 15px;
          border-radius: 4px;
          color: white;
          margin-top:20px;
        }
      }
    }
  }
}
</style>
