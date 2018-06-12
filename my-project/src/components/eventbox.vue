<template>
    <div class="eventbox">
          <div class="infobox">
            <div class="type">党建服务</div>
            <div class="info">
              <div class="name"><p>取消报名</p></div>
              <div class="detail">
                <span class="time">18/06/11 16:00</span><span class="reward"><i> </i>10</span><span class="community">鸿山社区</span>
              </div>
            </div>
          </div>
          <ul class="progressbar"> 
            <li v-for="item in progress" :key="item.index" v-bind:class="{choose:index==status}">{{item.name}}</li>
          </ul>
        </div>
</template>

<script>
    export default {
      porps: [],
      data () {
        return {
          status: 0,
          progress: [
            {name: '待报名'},
            {name: '报名中'},
            {name: '进行中'},
            {name: '结果'}
          ]
        }
      }
    }
</script>

<style scoped>
.eventbox{
  background: #fff;
  color: #333;
  font-size: 30rpx;
  box-shadow: 0rpx 0rpx 5rpx 5rpx #666;
}
.community{
 margin-right: 10rpx;
}
.name{
  padding: 20rpx 0 20rpx 0;
  border-bottom: 1rpx solid rgb(235, 235, 236);
}
.name>p{
  margin-left: 20rpx;
}
.detail{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1rpx solid rgb(235, 235, 236);
}
.time{
  width: 250rpx;
  margin-left: 20rpx;
}
.reward{
  padding:0 50rpx 0 50rpx;
}
.info{
  flex: 1;
}
.infobox{
  display: flex;
  flex-direction: row;
}
.type{
  width: 100rpx;
  box-sizing: border-box;
  padding: 20rpx;
  text-align: center;
  color: #fff;
  background:#00AC81
}
.progressbar{
  display: flex;
  flex-direction: row;
}
.progressbar>li{
  width: 25%;
  text-align: center;
  padding: 10rpx 0 10rpx 0;
  color:rgb(235, 235, 236);
}
.progressbar>.choose{
  color: #fff;
  background: #FC5439;
}
</style>