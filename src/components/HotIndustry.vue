<template>
  <div class="hot-industry-container">
    <text class="title">{{ dataTitle ||'热门行业' }}</text>
    <scroller class="industry-scroller" scroll-direction="horizontal">
      <div class="item-industry-container" v-for="(item, index) in hotIndustry" :key="item">
        <div class="industry-image-container">
          <image class="industry-image" :src="item.image" resize="cover"></image>
        </div>
        <text class="industry-title">{{item.title}}</text>
        <text class="job-title" v-for="(job, idx) in item.jobs" :key="job"> {{job.name}}</text>
      </div>
    </scroller>
  </div>
</template>

<style scoped>
  .hot-industry-container {
    margin-top: 30px;
    width: 750px;
    min-height: 100px;
    background-color: transparent;
    padding: 0;
  }
  .title {
    color: #333;
    font-size: 32px;
    line-height: 64px;
    text-align: left;
    margin-left: 30px;
  }
  .industry-scroller {
    width: 690px;
    height: 300px;
    margin-top: 15px;
    margin-left: 30px;
    overflow: hidden;
    background-color: transparent;
  }
  .item-industry-container {
    width: 240px;
    height: 300px;
    margin-right: 30px;
    background-color: #fff;
  }
  .item-industry-container:active {
    background-color: #eee;
  }
  .industry-image-container {
    width: 240px;
    height: 180px;
    align-items: center;
    justify-content: center;
    /*background-color: red;*/
  }
  .industry-image {
    width: 200px;
    height: 150px;
    border-width: 1px;
    border-style: solid;
    border-color: #e5e5e5;
  }
  .industry-title {
    line-height: 48px;
    font-size: 28px;
    color: #666;
    height: 48px;
    margin-left: 20px;
    text-align: left;
    lines: 1;
    text-overflow: ellipsis;
    word-wrap: break-word;
  }
  .job-title {
    line-height: 32px;
    font-size: 24px;
    color: #ccc;
    margin-left: 15px;
    text-align: left;
    lines: 1;
    text-overflow: ellipsis;
    word-wrap: break-word;
  }
</style>

<script>
  export default {
    props: ['dataTitle'],
    data () {
      return {
        hotIndustry: [
          {
            image: 'http://static.dei2.com/imgs/200*140.png',
            title: '互联网',
            jobs: [
              {
                name: '产品经理'
              },
              {
                name: '视觉设计师'
              }
            ],
            href: ''
          },
          {
            image: 'http://static.dei2.com/imgs/200*140.png',
            title: '快销品',
            jobs: [
              {
                name: '市场部专员'
              },
              {
                name: '销售助理'
              }
            ],
            href: ''
          },
          {
            image: 'http://static.dei2.com/imgs/200*140.png',
            title: '金融',
            jobs: [
              {
                name: '银行柜员'
              },
              {
                name: '综合业务专员'
              }
            ],
            href: ''
          }
        ]
      }
    },
    methods: {
    }
  }
</script>
