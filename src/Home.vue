<template>
  <div class="home">
    <scroller class="home-scroller" offset-accuracy="10" @scroll="mainScroll">
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
      <div class="main-search" :class="['main-search-fixed-' + fixSearch]" ref="mainSearch">
        <div class="main-search-inner">
          <div class="search-icon-container">
            <image class="search-icon" src="../assets/images/icon-search.png"></image>
          </div>
          <input type="text" class="search" placeholder="搜索你感兴趣的职位" return-key-type="search"/>
        </div>
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

      <!-- 热门学科 -->
      <transition name="hot-subject-transition" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <hot-subject v-if="state.hotSubject.shown" :data-title="'热门学科'"></hot-subject>
      </transition>
      <!-- 热门学科 -->

      <!-- 学长对你说（留言区）-->
      <transition name="feedback-transition" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <feedback v-if="state.feedback.shown" :data-title="'学长对你说'"></feedback>
      </transition>
      <!-- 学长对你说（留言区）-->
    </scroller>
  </div>
</template>

<style scoped>
  .home-scroller {
    /*background-color: cyan;*/
  }
  .main-search {
    width: 750px;
    height: 100px;
    background-color: transparent;
    margin-top: -48px;
  }
  .main-search-fixed-true {
    position: sticky;
    top: 0;
    left: 0;
  }
  .main-search-inner {
    width: 600px;
    height: 100px;
    background-color: #ffffff;
    /*position: absolute;*/
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
  import HotSubject from './components/HotSubject.vue'
  import Feedback from './components/Feedback.vue'

  const animation = weex.requireModule('animation')
  const dom = weex.requireModule('dom')
  var modal = weex.requireModule('modal')
  var navigator = weex.requireModule('navigator')
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
        },
        fixSearch: false,
        mainSearchStyle: {
          width: 0,
          height: 0,
          left: 0,
          top: 0,
          bottom: 0,
          right: 0
        }
      }
    },
    computed: {
      state () {
        return this.$store.state
      }
    },
    mounted () {
      dom.getComponentRect(this.$refs.mainSearch, option => {
        this.mainSearchStyle = option.size
      })
    },
    methods: {
      mainScroll (evt) {
        if (evt.contentOffset.y < -this.mainSearchStyle.top) {
          this.fixSearch = true
          animation.transition(this.$refs.mainSearch, {
            styles: {
              backgroundColor: '#ffffff'
            },
            duration: 800, //ms
            timingFunction: 'ease',
            delay: 0 //ms
          }, function () {
          })
        } else {
          this.fixSearch = false
        }
      },
      showAlert (text) {
        modal.alert({
          message: text,
          duration: 0.3
        }, function (value) {
          console.log('alert callback', value)
        })
      },
      redirectTo (url) {
//        this.$router.push(url)
        navigator.push({
          url: '/#/profile',
          animated: "true"
        }, event => {
        })
      }
    },
    components: {
      Banner,
      TopMenu,
      HotRecruitment,
      HotIndustry,
      HotSubject,
      Feedback
    }
  }
</script>
