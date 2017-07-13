<template>
  <div class="banner-container">
    <slider class="slider">
      <div class="frame" v-for="(img, index) in dataImages" :key="img">
        <image :src="img.src" class="image-item" :style="sliderStyle" resize="cover"></image>
      </div>
      <indicator class="indicator" :style="indicatorStyle"></indicator>
    </slider>
  </div>
</template>

<style scoped>
  .slider {
    position: relative;
  }
  .frame {
  }
  .image-item {
    width: 750px;
    height: 400px;
    flex: 2;
  }
  .indicator {
    width: 750px;
    height: 80px;
    item-color: green;
    item-selected-color: red;
    item-size: 20px;
    position: absolute;
    bottom: 0;
  }
</style>

<script>
  export default {
    props: ['dataImages', 'indicatorStyle', 'sliderStyle'],
    data () {
      return {

      }
    },
    methods: {
      getDefaultImage (width, height, text, color, bgColor) {
        return 'http://iph.href.lu/' + width + '*' + height + (!!text ? 'text=' + text : '') + (!!color ? 'fg=' + (color.substring(1)) : '') + (!!bgColor ? 'bg=' + (bgColor.substring(1)) : '')
      }
    }
  }
</script>
