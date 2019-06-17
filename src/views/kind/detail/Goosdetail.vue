<template>
  <div class="Goosdetail-main">
    <div class="headr-bar">
      <p @click="back" class="btn">&lt;</p>
      <p class="title">内衣</p>
      <div>
        <img src="@/assets/imgs/icons/chat.png" alt class="icon icon-chat">
        <img src="@/assets/imgs/icons/cart.png" alt class="icon icon-cart">
      </div>
    </div>
    <div class="option">
      <p>新品</p>
      <p class="sales">
        销量
        <img class="btn-up" src="@/assets/imgs/icons/filter-arr.png" alt>
      </p>
      <p class="sales">
        价格
        <img
          @click="ranking"
          class="btn-up"
          :class="{'active':count%2==0,'actives':count%2!=0}"
          src="@/assets/imgs/icons/filter-arr.png"
          alt
        >
      </p>
      <p>筛选</p>
    </div>
    <div class="btn-choice">
      <p>无痕</p>
      <p>美背</p>
      <p>运动</p>
      <p>性感</p>
    </div>
    <div class="contnier">
      <ul class="contnier-c">
        <router-link
          tag="li"
          :to="{name:'commodity',query:{id:m.id,cname:m.cname,ename:m.ename,money:m.money,img:m.img}}"
          class="contnier-m"
          v-for="m in array"
          :key="m.id"
        >
          <img :src="m.img" alt>
          <p>{{m.cname}}</p>
          <p>{{m.ename}}</p>
          <p>¥{{m.money}}</p>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import DetailImgapi from "@/assets/api/detail";
export default {
  name: "Goosdetail",

  data() {
    return {
      count: 0,
      detail: [],
      flag: "defualt"
    };
  },
  computed: {
    // soreStudents() {
    //   if (this.flag == "defualt") {
    //     return this.detail;
    //   }
    //   if (this.flag == "moneyadd") {
    //     this.detail.sort((a, b) => {
    //       return a.money - b.money;
    //     });
    //     return this.detail;
    //   }
    //   if (this.flag == "moneyreduce") {
    //     this.detail.sort((a, b) => {
    //       return b.money - a.money;
    //     });
    //     return this.detail;
    //   }
    // },
     array(){
       return this.$store.state.detil.array;
    }
  },
  created() {
    this.test();
  },
  methods: {
    test() {
      DetailImgapi.getDetailimgs().then(res => {
        this.detail = res;
      });
    },
    back() {
      this.$router.go(-1);
    },
    ranking() {
      this.count++;
      if (this.count % 2 == 0) {
        console.log(123)
        this.array.sort((a, b) =>  a.money - b.money);
      } else {
       this.array.sort((a, b) =>  b.money - a.money);
      }
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/style/common.scss";
.Goosdetail-main {
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
  .option {
    padding: 0 $BasePadding;
    display: flex;
    justify-content: space-between;
    line-height: 44px;
    font-size: 14px;
    font-weight: bolder;
    background-color: #f9f9f9;
    p {
      line-height: 20px;
      .btn-up {
        width: 12px;
        height: 10px;
        margin-left: 5px;
      }
      .active {
        width: 14px;
        height: 10px;
        margin-left: 5px;
        background-size: 100% 100%;
        background-color: white;
        background-image: url(../../../assets/imgs/icons/filter-down.png);
      }
      .actives {
        width: 14px;
        height: 10px;
        margin-left: 5px;
        background-size: 100% 100%;
        background-color: white;
        background-image: url(../../../assets/imgs/icons/filter-up.png);
      }
    }
  }
  .btn-choice {
    margin-top: 11.5px;
    display: flex;
    padding: 0 $BasePadding;
    justify-content: space-between;
    p {
      width: 51px;
      height: 23px;
      line-height: 23px;
      font-size: 12px;
      background-color: #f9f9f9;
    }
  }
  .contnier {
    margin-top: 11.5px;
    .contnier-c {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      .contnier-m {
        line-height: 20px;
      }
    }
  }
}
</style>
