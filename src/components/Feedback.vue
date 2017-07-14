<template>
  <div class="feedback-container">
    <div class="feedback-header">
      <div class="dividing"></div>
      <text class="title">{{ dataTitle ||'学长对你说' }}</text>
    </div>
    <div class="feedback-users-container">
      <scroller class="feedback-users-scroller" scroll-direction="horizontal">
        <div class="item-feedback-users" v-for="(user, index) in feedback.users" :key="user">
          <div class="user-image-container">
            <image :src="user.image" resize="cover" class="user-image"></image>
          </div>
          <text class="user-name">{{user.name}}</text>
        </div>
      </scroller>
    </div>
    <div class="feedback-message-container">
      <div v-for="(item, index) in feedback.messages" :key="item" class="item-message">
        <div class="item-message-inner">
          <div class="message-image-container">
            <image :src="item.image" resize="cover" class="message-image"></image>
          </div>
          <div class="message-container">
            <text class="message-title">{{item.title}}</text>
            <text class="message-content">{{item.name}}：{{item.message}}</text>
          </div>
          <div class="message-detail-icon">
            <image src="../assets/images/icon-more.png" class="message-detail"></image>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .feedback-container {
    margin-top: 30px;
    width: 750px;
    min-height: 100px;
    background-color: #ffffff;
    padding: 0;
  }
  .feedback-header {
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
  .feedback-users-container {
    width: 690px;
    margin-left: 30px;
    margin-top: 30px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #ccc;
  }
  .feedback-users-scroller {
    width: 690px;
    height: 240px;
  }
  .item-feedback-users {
    width: 138px;
    height: 240px;
  }
  .user-image-container {
    width: 138px;
    height: 138px;
    align-items: center;
    justify-content: center;
  }
  .user-image {
    width: 108px;
    height: 108px;
    border-radius: 54px;
  }
  .user-name {
    width: 138px;
    height: 64px;
    line-height: 48px;
    font-size: 28px;
    color: #888;
    text-align: center;
  }
  .feedback-message-container {
    width: 750px;
    /*height: 200px;*/
  }
  .item-message {
    width: 750px;
    /*min-height: 200px;*/
    /*padding-left: 30px;*/
  }
  .item-message:active {
    background-color: #e5e5e5;
  }
  .item-message-inner {
    width: 690px;
    padding-top: 30px;
    padding-bottom: 30px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #f5f5f5;
  }
  .message-image-container {
    width: 128px;
    /*height: 200px;*/
    align-items: center;
    justify-content: center;
  }
  .message-image {
    width: 96px;
    height: 96px;
    border-radius: 50%;
  }
  .message-container {
    width: 476px;
  }
  .message-title {
    width: 476px;
    color: #666;
    font-size: 28px;
    line-height: 48px;
    text-overflow: ellipsis;
    word-wrap: break-word;
    lines: 1;
  }
  .message-content {
    width: 476px;
    color: #ccc;
    font-size: 24px;
    line-height: 32px;
    text-overflow: ellipsis;
    word-wrap: break-word;
    lines: 4;
  }
  .message-detail-icon {
    width: 64px;
    /*height: 200px;*/
    align-items: center;
    justify-content: center;
  }
  .message-detail {
    width: 64px;
    height: 64px;
  }
</style>

<script>
  var modal = weex.requireModule('modal')
  export default {
    props: ['dataTitle'],
    data () {
      return {
        feedback: {
          users: [
            {
              image: 'http://static.dei2.com/imgs/default_female.png',
              name: '吴凡',
              href: ''
            },
            {
              image: 'http://static.dei2.com/imgs/default_male.png',
              name: '张三',
              href: ''
            },
            {
              image: 'http://static.dei2.com/imgs/default_female.png',
              name: '李四',
              href: ''
            },
            {
              image: 'http://static.dei2.com/imgs/default_male.png',
              name: '王五',
              href: ''
            },
            {
              image: 'http://static.dei2.com/imgs/default_male.png',
              name: '赵六',
              href: ''
            },
            {
              image: 'http://static.dei2.com/imgs/default_female.png',
              name: '李四',
              href: ''
            },
            {
              image: 'http://static.dei2.com/imgs/default_male.png',
              name: '王五',
              href: ''
            },
            {
              image: 'http://static.dei2.com/imgs/default_male.png',
              name: '赵六',
              href: ''
            }
          ],
          messages: [
            {
              image: 'http://static.dei2.com/imgs/default_female.png',
              name: '张三',
              title: '职场新人',
              message: '到底应该做喜欢的工作，还是擅长的工作'
            },
            {
              image: 'http://static.dei2.com/imgs/default_male.png',
              name: '李四',
              title: '企业对你的期望',
              message: '我希望年轻的你，可以都会我很多东西'
            },
            {
              image: 'http://static.dei2.com/imgs/default_female.png',
              name: '王大锤',
              title: '高薪没有你想象的那么难',
              message: '我很努力，所以毕业就拿30万年薪所以毕业就拿30万年薪所以毕业就拿30万年薪所以毕业就拿30万年薪所以毕业就拿30万年薪所以毕业就拿30万年薪所以毕业就拿30万年薪所以毕业就拿30万年薪所以毕业就拿30万年薪所以毕业就拿30万年薪所以毕业就拿30万年薪所以毕业就拿30万年薪所以毕业就拿30万年薪所以毕业就拿30万年薪'
            }
          ]
        }
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
