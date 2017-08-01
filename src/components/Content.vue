<template>
  <div class="content" :class="{'sidebarChanged': ifChangeMsg}">
  	<router-view></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      ifChangeMsg: false
    }
  },
  props: ['ifChangeMsg']
}
</script>
<style lang="less">
@import url("../less/main.less");
//content基础样式
.content{
	transition: all .5s ease;
  height: 1500px;
  margin-left: @sidebar-width;
}
//content变宽动画样式
.sidebarChanged{
  margin-left: 60px;
}
</style>