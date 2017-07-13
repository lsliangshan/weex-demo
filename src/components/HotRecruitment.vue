<template>
  <div class="hot-recruitment-container">
    <text class="title">名企热招</text>
    <div class="hot-recruitment-items">
      <div v-for="(item, index) in hotRecruitment" :key="item" class="item-hot-recruitment">
        <!--<div class="image-container" :style="{'height': item.style.height+'px', 'width': item.style.width+'px'}" :ref="'hotRecruitmentImageContainer' + index">-->
          <!--<image :src="item.image" resize="cover" :style="{'height': item.style.height+'px', 'width': item.style.width+'px'}" :ref="'hotRecruitmentImage' + index" @load="imageLoaded($event, index)"></image>-->
        <!--</div>-->

        <div class="image-container">
          <image :src="item.image" resize="cover" :style="{'height': item.style.height+'px', 'width': getWidth(item.col)+'px'}"></image>
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
    flex-direction: row;
    justify-content: space-between;
  }
  .item-hot-recruitment {
    /*flex:1;*/
    /*display: inline-flex;*/
  }
  .image-container {
    /*float: left;*/
    /*flex: 1;*/
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
  const dom = weex.requireModule('dom')
  export default {
    data () {
      return {
        hotRecruitment: [
//          {
//            image: 'http://static.dei2.com/imgs/500*250.png',
//            title: '',
//            col: 2,
//            style: {
//              height: 250
//            }
//          },
//          {
//            image: 'http://static.dei2.com/imgs/250*250.png',
//            title: '高薪厚职',
//            col: 1,
//            style: {
//              height: 250
//            }
//          }
//          ,
          {
            image: 'http://static.dei2.com/imgs/250*200.png',
            title: '',
            col: 1,
            style: {
              height: 200
            }
          },
          {
            image: 'http://static.dei2.com/imgs/250*200.png',
            title: '',
            col: 1,
            style: {
              height: 200
            }
          },
          {
            image: 'http://static.dei2.com/imgs/250*200.png',
            title: '',
            col: 1,
            style: {
              height: 200
            }
          }
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
      getWidth (type) {
        let _width = 0
        switch (Number(type)) {
          case 1:
            _width = 240
            break
          case 2:
            _width = 495
            break
          case 3:
            _width = 750
            break
          default:
            break
        }
        return _width
      },
      imageLoaded (e, idx) {
        let _parent = this.$refs['hotRecruitmentImageContainer' + idx]
//        dom.getComponentRect(_parent, option => {
//          this.showAlert(JSON.stringify(option))
//        })
        _parent.style.height = e.size.naturalHeight + 'px'
        _parent.style.width = e.size.naturalWidth + 'px'
        let _self = this.$refs['hotRecruitmentImage' + idx][0]
        _self.style.height = e.size.naturalHeight + 'px'
        _self.style.width = e.size.naturalWidth + 'px'
//        this.showAlert(JSON.stringify(this.$refs['hotRecruitmentImage' + idx]))
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
