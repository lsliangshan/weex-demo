<template>
  <div class="hot-subject-container">
    <div class="hot-subject-header">
      <div class="dividing"></div>
      <text class="title">{{ dataTitle ||'热门学科' }}</text>
    </div>
    <div class="item-subject-container">
      <div class="item-subject-row" v-for="(subjects, index) in formatHotSubject" :key="subjects">
        <div class="item-subject" v-for="(subject, idx) in subjects" :key="subject">
          <div class="item-subject-image-container">
            <image :src="subject.image" resize="cover" class="item-subject-image"></image>
          </div>
          <text class="item-subject-title">{{subject.title}}</text>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .hot-subject-container {
    margin-top: 30px;
    width: 750px;
    min-height: 100px;
    background-color: #ffffff;
    padding: 0;
  }
  .hot-subject-header {
    width: 500px;
    height: 64px;
    margin-left: 125px;
    margin-top: 30px;
    text-align: center;
    /*position: relative;*/
    background-color: transparent;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .dividing {
    position: absolute;
    width: 500px;
    height: 6px;
    background-color: #888;
    top: 30px;
  }
  .title {
    color: #333;
    font-size: 32px;
    line-height: 64px;
    padding-left: 30px;
    padding-right: 30px;
    background-color: #fff;
  }
  .item-subject-container {
    margin-top: 30px;
    width: 690px;
    margin-left: 30px;
    min-height: 100px;
    overflow: hidden;
  }
  .item-subject-row {
    flex-direction: row;
    margin-bottom: 30px;
  }
  .item-subject {
    width: 172px;
    height: 240px;
  }
  .item-subject:active {
    background-color: #e5e5e5;
  }
  .item-subject-image-container {
    width: 172px;
    height: 172px;
    align-items: center;
    justify-content: center;
  }
  .item-subject-image {
    width: 88px;
    height: 88px;
  }
  .item-subject-title {
    color: #333;
    font-size: 28px;
    line-height: 32px;
    padding-left: 30px;
    padding-right: 30px;
    text-align: center;
  }
</style>

<script>
  var modal = weex.requireModule('modal')
  export default {
    props: ['dataTitle'],
    data () {
      return {
        hotSubject: [
          {
            image: 'http://static.dei2.com/imgs/icon-engineering.png',
            title: '工学',
            href: ''
          },
          {
            image: 'http://static.dei2.com/imgs/icon-science.png',
            title: '理学',
            href: ''
          },
          {
            image: 'http://static.dei2.com/imgs/icon-economics.png',
            title: '经济学',
            href: ''
          },
          {
            image: 'http://static.dei2.com/imgs/icon-agronomy.png',
            title: '农学',
            href: ''
          },
          {
            image: 'http://static.dei2.com/imgs/icon-management.png',
            title: '管理学',
            href: ''
          },
          {
            image: 'http://static.dei2.com/imgs/icon-medical.png',
            title: '医学',
            href: ''
          },
          {
            image: 'http://static.dei2.com/imgs/icon-literature.png',
            title: '文学',
            href: ''
          },
          {
            image: 'http://static.dei2.com/imgs/icon-subjects.png',
            title: '其他',
            href: ''
          }
        ]
      }
    },
    computed: {
      formatHotSubject () {
        let num = 4
        let _hotSubject = this.hotSubject
        let out = []
        let i = 0
        let tempSubject
        let tempSubjectArr = []
        for (i; i < _hotSubject.length; i++) {
          tempSubject = _hotSubject[i]

          if (tempSubjectArr.length + 1 < num) {
            tempSubjectArr.push(tempSubject)
          } else if (tempSubjectArr.length + 1 === num) {
            tempSubjectArr.push(tempSubject)
            out.push(tempSubjectArr)
            tempSubjectArr = []
          } else {}
        }
        if (tempSubjectArr.length > 0) {
          out.push(tempSubjectArr)
          tempSubjectArr = []
        }
        return out
      }
    },
    methods: {
      showAlert (text) {
        modal.alert({
          message: text,
          duration: 0.3
        }, function (value) {
          console.log('alert callback', value)
        })
      }
    }
  }
</script>
