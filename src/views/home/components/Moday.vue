<template>
  <div class="Moday-main">
    <swiper class="swiper-banner" :options="bannerswiperOption" ref="mySwipers" @someSwiperEvent="callback">
      <swiper-slide v-for="m in imgs" :key="m.id">
        <router-link :to="{name:'main'}">
          <img :src="m.url" alt>
        </router-link>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";
import MiXin from "./data.js";
export default {
  name: "Moday",
  mixins: [MiXin],
  data() {
    return {
      bannerswiperOption: {
        slidesPerView: 4,
        slidesPerColumn: 2
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  },

  methods: {
    callback() {}
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/style/common.scss";
.Moday-main {
  .swiper-banner {
    margin-top: 9px;
    padding: 0 $BasePadding;
  }
}
</style>
