<template>
  <div class="hot-recruitment-container">
    <text class="title">{{ dataTitle ||'名企热招' }}</text>
    <div class="hot-recruitment-items">
      <div v-for="(items, index) in formatRecruitment" :key="items" class="item-hot-recruitment-row">
        <div v-for="(item, idx) in items" :key="items" class="item-hot-recruitment" :class="['item-hot-recruitment-' + idx]">
          <div class="image-container">
            <image :src="item.image" resize="cover" :style="{'height': item.height+'px', 'width': getWidth(item.col)+'px'}"></image>
          </div>
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
  .item-hot-recruitment-row {
    margin-top: 15px;
    flex-direction: row;
  }
  .item-hot-recruitment {
    margin-left: 15px;
  }
  .item-hot-recruitment-0 {
    margin-left: 0;
  }
</style>

<script>
  export default {
    props: ['dataTitle'],
    data () {
      return {
        hotRecruitment: [
          {
            image: 'http://static.dei2.com/imgs/500*250.png',
            col: 2,
            height: 250,
            href: ''
          },
          {
            image: 'http://static.dei2.com/imgs/250*250.png',
            col: 1,
            height: 250,
            href: ''
          },
          {
            image: 'http://static.dei2.com/imgs/250*200.png',
            col: 1,
            height: 200,
            href: ''
          },
          {
            image: 'http://static.dei2.com/imgs/250*200.png',
            col: 1,
            height: 200,
            href: ''
          },
          {
            image: 'http://static.dei2.com/imgs/250*200.png',
            col: 1,
            height: 200,
            href: ''
          }
        ]
      }
    },
    computed: {
      formatRecruitment () {
        let out = []
        let _hotRecruitment = this.hotRecruitment
        let i = 0
        let tempCol = 0
        let tempRecruitment
        let tempArr = []
        for (i; i < _hotRecruitment.length; i++) {
          tempRecruitment = _hotRecruitment[i]
          if (tempCol + Number(tempRecruitment.col) < 3) {
            tempCol += Number(tempRecruitment.col)
            tempArr.push(tempRecruitment)
          } else if (tempCol + Number(tempRecruitment.col) === 3) {
            tempArr.push(tempRecruitment)
            out.push(JSON.parse(JSON.stringify(tempArr)))
            tempArr = []
            tempCol = 0
          } else {
            out.push(JSON.parse(JSON.stringify(tempArr)))
            tempArr = [tempRecruitment]
            tempCol = Number(tempRecruitment.col)
          }
        }
        if (tempCol !== 0 || tempArr.length !== 0) {
          out.push(JSON.parse(JSON.stringify(tempArr)))
          tempArr = []
          tempCol = 0
        }
        return out
      }
    },
    methods: {
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
      }
    }
  }
</script>
