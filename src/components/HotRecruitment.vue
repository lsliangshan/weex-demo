<template>
  <div class="hot-recruitment-container">
    <text class="title">名企热招</text>
    <div class="hot-recruitment-items">
      <div v-for="(item, index) in hotRecruitment" :key="item" :class="['item-hot-recruitment-' + item.col]" class="item-hot-recruitment">
        <div class="image-container" :style="item.style" :ref="'hotRecruitmentImageContainer' + index">
          <image :src="item.image" resize="cover" :style="item.style" :ref="'hotRecruitmentImage' + index" @load="imageLoaded($event, index)"></image>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .hot-recruitment-container {
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
  .hot-recruitment-items {
    width: 750px;
    min-height: 100px;
  }
  .item-hot-recruitment {
    flex-direction: row;
    float: left;
  }
  .image-container {
    float: left;
  }
  /*.item-hot-recruitment-1 {*/
    /*width: 250px;*/
    /*height: 250px;*/
  /*}*/
  /*.image-container-1 {*/
    /*width: 250px;*/
    /*height: 250px;*/
  /*}*/
  /*.image-1 {*/
    /*width: 250px;*/
    /*!*height: 250px;*!*/
  /*}*/
  /*.item-hot-recruitment-2 {*/
    /*width: 500px;*/
    /*background-color: red;*/
  /*}*/
  /*.image-container-2 {*/
    /*width: 500px;*/
  /*}*/
  /*.image-2 {*/
    /*width: 500px;*/
    /*min-height: 100px;*/
    /*!*height: 250px;*!*/
  /*}*/
  /*.item-hot-recruitment-3 {*/
    /*width: 750px;*/
  /*}*/
  /*.image-container-3 {*/
    /*width: 750px;*/
  /*}*/
  /*.image-3 {*/
    /*width: 750px;*/
  /*}*/
</style>

<script>
  var modal = weex.requireModule('modal')
  export default {
    data () {
      return {
        hotRecruitment: [
          {
            image: 'http://static.dei2.com/imgs/500*250.png',
            title: '',
            col: 2
//            ,
//            style: {
//              width: '500px',
//              height: '250px'
//            }
          },
          {
            image: 'http://static.dei2.com/imgs/250*250.png',
            title: '高薪厚职',
            col: 1
//            ,
//            style: {
//              width: '250px',
//              height: '250px'
//            }
          }
//          ,
//          {
//            image: 'http://static.dei2.com/imgs/250*200.png',
//            title: '',
//            col: 1,
//            style: {
//              width: '250px',
//              height: '200px'
//            }
//          },
//          {
//            image: 'http://static.dei2.com/imgs/250*200.png',
//            title: '',
//            col: 1,
//            style: {
//              width: '250px',
//              height: '200px'
//            }
//          },
//          {
//            image: 'http://static.dei2.com/imgs/250*200.png',
//            title: '',
//            col: 1,
//            style: {
//              width: '250px',
//              height: '200px'
//            }
//          }
        ]
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
      },
      imageLoaded (e, idx) {
//        let _parent = this.$refs['hotRecruitmentImageContainer' + idx]
//        _parent.style.height = e.size.naturalHeight + 'px'
//        _parent.style.width = e.size.naturalWidth + 'px'
//        let _self = this.$refs['hotRecruitmentImage' + idx]
//        _self.style.height = e.size.naturalHeight + 'px'
//        _self.style.width = e.size.naturalWidth + 'px'
        this.showAlert(JSON.stringify(this.$refs))
      }
    },
    directives: {
      'initSize': {
        inserted: function (el, binding, vnode) {
//          let img = new Image()
//          img.src = binding.value
//          img.onload = function () {
//            let _parent = el.parentNode
//            _parent.style.height = img.height + 'px'
//            el.style.height = img.height + 'px'
//          }
//          vnode.context.showAlert(binding.value)
        }
      }
    }
  }
</script>
