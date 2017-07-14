<template>
  <div class="top-menu-container">
    <div class="top">
      <scroller class="top-scroller" scroll-direction="horizontal">
        <div class="item-menu" v-for="(menu, index) in topMenus" :key="menu" @click="redirectTo('profile')">
          <div class="menu-image-container">
            <image class="menu-image" resize="cover" :src="menu.image"></image>
          </div>
          <text class="menu-title" lines="1">{{menu.title}}</text>
        </div>
      </scroller>
    </div>
    <div class="bottom">
      <div v-for="(item, index) in news" :key="item" class="item-news">
        <div class="item-news-inner">
          <div class="news-image-container">
            <image :src="item.image" resize="cover" class="news-image"></image>
          </div>
          <text class="news-title">{{item.title}}</text>
          <div class="news-detail-icon">
            <image src="../assets/images/icon-more.png" class="news-detail"></image>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .top-menu-container {
    margin-top: 30px;
    width: 750px;
    min-height: 100px;
    background-color: #ffffff;
    align-items: center;
    padding: 0;
  }
  .top {
    width: 690px;
    /*height: 300px;*/
    flex-direction: row;
    overflow: hidden;
    /*justify-content: space-around;*/
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #ccc;
  }
  .top-scroller {
    width: 690px;
    height: 236px;
  }
  .item-menu {
    width: 172px;
    /*height: 300px;*/
    /*background-color: cyan;*/
  }
  .item-menu:active {
    background-color: #e5e5e5;
  }
  .menu-image-container {
    width: 172px;
    height: 172px;
    align-items: center;
    justify-content: center;
  }
  .menu-image {
    width: 128px;
    height: 128px;
    border-radius: 64px;
  }
  .menu-title {
    width: 172px;
    height: 64px;
    /*line-height: 64px;*/
    font-size: 28px;
    color: #888;
    text-align: center;
  }
  .bottom {
    width: 750px;
    /*height: 200px;*/
  }
  .item-news {
    width: 750px;
    height: 200px;
    padding-left: 30px;
  }
  .item-news:active {
    background-color: #e5e5e5;
  }
  .item-news-inner {
    width: 690px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #f5f5f5;
  }
  .news-image-container {
    width: 128px;
    height: 200px;
    align-items: center;
    justify-content: center;
  }
  .news-image {
    width: 128px;
    height: 128px;
  }
  .news-title {
    width: 476px;
    color: #999;
    font-size: 28px;
    text-overflow: ellipsis;
    word-wrap: break-word;
    lines: 1;
  }
  .news-detail-icon {
    width: 64px;
    height: 200px;
    align-items: center;
    justify-content: center;
  }
  .news-detail {
    width: 64px;
    height: 64px;
  }
</style>

<script>
  export default {
    data () {
      return {
        topMenus: [
          {
            image: 'http://static.dei2.com/imgs/128*128.png',
            title: '实习招聘',
            href: ''
          },
          {
            image: 'http://static.dei2.com/imgs/128*128.png',
            title: '求职干货',
            href: ''
          },
          {
            image: 'http://static.dei2.com/imgs/128*128.png',
            title: '宣讲会',
            href: ''
          },
          {
            image: 'http://static.dei2.com/imgs/128*128.png',
            title: '个人中心',
            href: ''
          },
          {
            image: 'http://static.dei2.com/imgs/128*128.png',
            title: '实习招聘2',
            href: ''
          },
          {
            image: 'http://static.dei2.com/imgs/128*128.png',
            title: '求职干货2',
            href: ''
          }
        ],
        news: [
          {
            image: 'http://static.dei2.com/imgs/128*128.png',
            title: '来智联找工作，实现人生巅峰妥妥哒~',
            href: ''
          }
        ]
      }
    },
    methods: {
      getDefaultImage (width, height, text, color, bgColor) {
        return 'http://iph.href.lu/' + width + '*' + height + (!!text ? 'text=' + text : '') + (!!color ? 'fg=' + (color.substring(1)) : '') + (!!bgColor ? 'bg=' + (bgColor.substring(1)) : '')
      },
      redirectTo (url) {
        this.$parent.redirectTo(url)
      }
    }
  }
</script>
