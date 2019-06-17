<template>
  <div class="shopping-main">
    <div class="headr-bar">
      <p @click="back" class="btn">&lt;</p>
      <p class="title">确认订单</p>
    </div>
    <div class="continer-bar">
      <div class="address">
        <p>添加地址</p>
        <img src="@/assets/imgs/icons/return.png" alt>
      </div>
      <div class="shop-detil" v-for="m in list" :key="m.id">
        <img class="showing-img" :src="m.img" alt>
        <div class="shop-title">
          <p>{{m.ename}}</p>
          <p>{{m.cname}}</p>
          <p class="shop-money">¥{{m.money}}</p>
        </div>
        <p class="shop-number">x{{m.count}}</p>
      </div>
      <div class="address address-2">
        <p>优惠券</p>
        <img src="@/assets/imgs/icons/return.png" alt>
      </div>
      <div class="address address-3">
        <p>备注</p>
        <p class="xuanze">选填</p>
      </div>
      <div class="address address-4">
        <p>商品总额</p>
        <p>¥{{todal}}</p>
      </div>
      <div class="address address-5">
        <p>运费</p>
        <p>¥{{list[0].Postage}}</p>
      </div>
      <div class="address-6">
        <div class="address-6-title">
          <p>实付金额</p>
          <p class="address-6-title-money">¥{{plus}}</p>
        </div>
      </div>
      <div class="payment">
        <div class="payment-a">
          <img src="@/assets/imgs/icons/wexin.png" alt>
          <div>
            <p class="weixin">微信支付</p>
            <p>微信安全支付</p>
          </div>
          <span></span>
        </div>
        <div class="payment-a">
          <img src="@/assets/imgs/icons/zhifu.png" alt>
          <div>
            <p class="weixin">支付宝支付</p>
            <p>支付宝安全支付</p>
          </div>
          <span></span>
        </div>
      </div>
      <div class="btn-true">
        <p>立即支付¥{{plus}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "shopping.vue",

  data() {
    return {
    };
  },

  methods: {
    back() {
      this.$router.go(-1);
    },
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    money() {
      return this.$store.getters.mulcount;
    },
     list() {
      return this.$store.getters["cart/buyList"];
    },
    todal(){
      return this.$store.getters["cart/addbuy"];
    },
    plus(){
      return this.$store.getters["cart/plusbuy"];
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/style/common.scss";
.shopping-main {
  .headr-bar {
    position: relative;
    width: 100%;
    height: 51px;
    padding: 0 $BasePadding;
    box-sizing: border-box;
    line-height: 51px;
    background-color: #f9f9f9;
    .btn {
      font-size: 30px;
      position: absolute;
      top: 0;
      left: 20px;
    }
    .title {
      font-size: 20px;
    }
  }
  .continer-bar {
    width: 100%;
    padding: 0 $BasePadding;
    box-sizing: border-box;
    overflow: hidden;
    .address {
      width: 100%;
      display: flex;
      font-size: 16px;
      justify-content: space-between;
      align-items: center;
      color: #494949;
      margin-top: 6px;
    }
    .shop-detil {
      position: relative;
      width: 100%;
      height: 114px;
      background-color: #f9f9f9;
      border-radius: 4px;
      margin-top: 25px;
      font-size: 14px;
      text-align: left;
      overflow: hidden;
      .showing-img {
        float: left;
        margin-top: 19px;
        margin-left: 24.5px;
        width:78px;
        height: 76px;
      }
      .shop-title {
        margin-top: 20px;
        line-height: 25px;
        margin-left: 120px;
        color: #494949;
        .shop-money {
          font-weight: bold;
        }
      }
      .shop-number {
        position: absolute;
        right: 10px;
        bottom: 10px;
        display: block;
      }
    }
    .address-2 {
      margin-top: 20px;
      font-size: 16px;
    }
    .address-3 {
      margin-top: 30px;
      font-size: 16px;
      border-bottom: 4px solid #f9f9f9;
      .xuanze {
        margin-right: 150px;
        font-size: 14px;
        color: #494949;
      }
    }
    .address-4 {
      margin-top: 35px;
      color: #494949;
    }
    .address-5 {
      margin-top: 10px;
      color: #494949;
      border-bottom: 2px solid #f9f9f9;
    }
    .address-6 {
      margin-top: 20px;
      .address-6-title {
        margin-left: 200px;
        font-size: 16px;
        .address-6-title-money {
          margin-left: 20px;
          font-weight: bold;
        }
        p {
          float: left;
        }
      }
    }
    .payment {
      width: 100%;
      height: 124px;
      border: 1px solid #e5e5e5;
      border-radius: 4px;
      margin-top: 70px;
      .payment-a {
        position: relative;
        width: 100%;
        height: 62px;
        border-bottom: 1px solid #e5e5e5;
        overflow: hidden;
        img {
          float: left;
          margin-top: 20px;
          margin-left: 5px;
        }
        div {
          text-align: left;
          margin-left: 50px;
          margin-top: 15px;
          line-height: 20px;
          color: #999999;
          .weixin {
            font-size: 14px;
            color: #010e0d;
          }
        }
        span {
          position: absolute;
          top: 25px;
          right: 20px;
          display: block;
          float: right;
          width: 18px;
          height: 18px;
          border: 1px solid #999999;
          border-radius: 100%;
        }
      }
    }
    .btn-true {
      position:fixed;
      bottom: 0;
      left: 100px;
      width: 185px;
      height: 44px;
      background-color: #1c4b47;
      color: #FFFFFF;
      font-size:14px;
      line-height:44px;
    }
  }
}
</style>
