<template>
    <div class="appcontainer servercontainer">
      <div class="head">
        <ul class="topnav">
          <li v-for="item in navlist" :key="item.index" @click="tabClick(index)" v-bind:class="{choose:index==clicknum}">{{item.name}}</li>
          <li class="tab"><i></i>筛选</li>
        </ul>
        <ul class="filter">
          <li @click="typeClick(type,'selecttype')">{{selecttype}}</li>
          <li>{{selectstreet}}</li>
          <li>{{selectcommunity}}</li>
        </ul>
      </div>
      <div class="filterbox"  v-if="filterboxshow">
        <ul>
          <li v-for="item in filtertype" :key="item.index" @click="filterClick(item.name,index)">{{item.name}}</li>
        </ul>
      </div>
      <div class="content">
        <eventbox></eventbox>
      </div>
    </div>
</template>


<script>
import eventbox from '@/components/eventbox.vue'
export default {
  name: 'server',
  components: {
    eventbox
  },
  data () {
    return {
      clicknum: 0,
      status: 0,
      filterboxshow: false,
      color: '#d81e06',
      selecttype: '所有类型',
      selectstreet: '所有街道',
      selectcommunity: '所有社区',
      filtername: '',
      filtertype: [],
      navlist: [
        {name: '全部', num: 0},
        {name: '待报名', num: 1},
        {name: '报名中', num: 2},
        {name: '进行中', num: 3}
      ],
      type: [
        {name: '所有类型', num: 0},
        {name: '党建服务', num: 1},
        {name: '爱心帮扶', num: 2},
        {name: '法律援助', num: 3},
        {name: '医疗服务', num: 4},
        {name: '社区建设', num: 5},
        {name: '生活服务', num: 6},
        {name: '文化活动', num: 7}
      ]

    }
  },
  methods: {
    tabClick (index) {
      this.clicknum = index
      this.status = index
    },
    typeClick (filterarr, filterstr) {
      this.filtertype = filterarr
      this.filterboxshow = !this.filterboxshow
    },
    filterClick (item, num) {
      console.log()
      switch (true) {
        case this.filtertype === this.type:
          this.selecttype = item
          break
        case this.filtertype === this.street:
          this.selectstreet = item
          break
        default:
          this.selectcommunity = item
          break
      }
      this.filterboxshow = !this.filterboxshow
    },
    reset () {
      this.filternum = -1
    }
  },
  watched () {

  }
}
</script>

<style scoped>
.topnav>li{
  width: 20%;
  text-align: center;
}
.choose{
  color:#d81e06;
}
.topnav{
  display: flex;
  flex-direction: row;
  justify-content: center;
  background:rgb(240,231,232);
  color:rgb(85,83,84);
  font-size: 32rpx;
  height: 80rpx;
  line-height: 80rpx;
}
.filter{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 32rpx;
  padding: 10rpx 0 10rpx 0;
}
.filter>li{
  width: 30%;
  text-align: center;
}
.servercontainer{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.servercontainer>.head{
  height: 140rpx;
}
.servercontainer>.content{
  flex: 1;
  overflow: auto;
}
.content{
  box-sizing: border-box;
  padding: 0 15rpx 0 15rpx;
}
.filterbox{
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.4)
}
.filterbox>ul{
  height: 500rpx;
}
</style>