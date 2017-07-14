<template>
  <div class="home">
    <scroller class="home-scroller">
      <!-- 顶部Banner -->
      <transition name="banner-transition"
                  enter-active-class="animated fadeIn"
                  leave-active-class="animated fadeOut">
        <banner v-if="state.banner.shown"
                :data-images="banner.images"
                :indicator-style="banner.indicatorStyle"
                :slider-style="banner.sliderStyle"
        ></banner>
      </transition>
      <!-- 顶部Banner -->

      <!-- 顶部搜索框 -->
      <div class="main-search">
        <div class="search-icon-container">
          <image class="search-icon" src="../assets/images/icon-search.png"></image>
        </div>
        <input type="text" class="search" placeholder="搜索你感兴趣的职位" return-key-type="search"/>
      </div>
      <!-- 顶部搜索框 -->

      <!-- 顶部分类菜单 -->
      <transition name="top-menu-transition"
                  enter-active-class="animated fadeIn"
                  leave-active-class="animated fadeOut">
        <top-menu v-if="state.topMenu.shown"></top-menu>
      </transition>
      <!-- 顶部分类菜单 -->

      <!-- 名企热招 -->
      <transition name="hot-recruitment-transition" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <hot-recruitment v-if="state.hotRecruitment.shown" :data-title="'名企热招'"></hot-recruitment>
      </transition>
      <!-- 名企热招 -->

      <!-- 热门行业 -->
      <transition name="hot-industry-transition" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <hot-industry v-if="state.hotIndustry.shown" :data-title="'热门行业'"></hot-industry>
      </transition>
      <!-- 热门行业 -->
    </scroller>
  </div>
</template>

<style scoped>
  .home-scroller {
    /*background-color: cyan;*/
  }
  .main-search {
    width: 600px;
    height: 100px;
    background-color: #ffffff;
    /*position: absolute;*/
    margin-top: -48px;
    margin-left: 75px;
    border: 1px solid #ccc;
    box-shadow: 0 0 10px 5px #ccc;
    border-radius: 3px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .search-icon-container {
    width: 100px;
    height: 100px;
    align-items: center;
    justify-content: center;
  }
  .search-icon {
    width: 48px;
    height: 48px;
  }
  .search {
    /*background-color: cyan;*/
    placeholder-color: #ccc;
    color: #999;
    width: 500px;
    height: 96px;
    float: right;
    right: 0;
    font-size: 28px;
    line-height: 96px;
  }
</style>

<script>
  import Banner from './components/Banner.vue'
  import TopMenu from './components/TopMenu.vue'
  import HotRecruitment from './components/HotRecruitment.vue'
  import HotIndustry from './components/HotIndustry.vue'
  export default {
    data () {
      return {
        logoUrl: 'https://alibaba.github.io/weex/img/weex_logo_blue@3x.png',
        target: 'World',
        banner: {
          images: [
            { src: 'http://static.dei2.com/imgs/750*400.png'},
            { src: 'http://static.dei2.com/imgs/750*400.png'},
            { src: 'http://static.dei2.com/imgs/750*400.png'},
            { src: 'http://static.dei2.com/imgs/750*400.png'}
          ],
          sliderStyle: {
            width: '750px',
            height: '400px',
            left: '25px'
          },
          indicatorStyle: {
            itemColor: '#ffffff',
            itemSelectedColor: 'cyan',
            itemSize: '20px',
            bottom: '50px',
            width: '750px'
          }
        }
      }
    },
    computed: {
      state () {
        return this.$store.state
      }
    },
    mounted () {
    },
    methods: {
    },
    components: {
      Banner,
      TopMenu,
      HotRecruitment,
      HotIndustry
    }
  }
</script>
