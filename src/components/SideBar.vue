<template>
  <div class="sidebar" :class="{'sidebar-mini': sidebarShow}">
    <div class="toggle-btn">
      <Icon type="navicon" @click="toggleSidebar"></Icon>
    </div>
    <ul>
      <li v-link="{ path: '/user'}">
        <i class="ivu-icon ivu-icon-document-text"></i>
        <span>文章管理</span>
      </li>
      <li  v-link="{ path: '/home'}">
        <i class="ivu-icon ivu-icon-chatbubbles"></i>
        <span>评论管理</span>   
      </li>
      <li>
        <i class="ivu-icon ivu-icon-heart"></i>
        <span>用户留存</span>    
      </li>
      <li>
        <i class="ivu-icon ivu-icon-heart-broken"></i>
        <span>流失用户</span>   
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      sidebarShow: false
    }
  },
  methods: {
    toggleSidebar: function () {
      // 传递sidebar变化的消息给父组件，由父组件告诉content组件
      this.sidebarShow = !this.sidebarShow;
      this.$emit('sidebar-say', this.sidebarShow);
    }
  }
}
</script>
<style lang="less">

// 整体布局公用样式
@import url("../less/main.less");
// sidebar基础样式
.sidebar{
  transition: all .5s ease;
  position: fixed;
  top:@topmenu-marginbottom;
  left: 0;
  width: @sidebar-width;
  height: 1000px;
  background-color: #171D21;
  

  .toggle-btn{ 
    padding-left: 120px;
    margin-bottom: 10px;
    height:40px;
    font-size:34px;
    &:hover{
      color:#fff;
    }
  }
  ul{
    background-color: #171D21;  
    height: 1000px;
    li{
      color:#9ea7b4;
      height:50px;
      line-height: 50px;
      font-size: 16px;
      text-align: center;
      cursor: pointer;
      &.v-link-active{
        color: #39f;
        border-right: 2px solid #39f;
        background-color: #313540;
      }
      &:hover{
        color:#fff;
        background-color: #3c3d40;

      }
      i{
        font-size: 18px;
      }
      span{
        display: inline-block;
        margin-left: 8px;
      }
    }
  }
}
// 切换sidebar 动画
.sidebar-mini {
  width:60px;
  .toggle-btn{
    text-align: center;
    padding:0;
  }
  ul{
    li{
      i{        
        font-size: 26px;
      }
      span{
        display:none;
      }
    }
  }
}








//手机或平板适配
@media (max-width: 768px){
  .sidebar{
    width:@sidebar-phone-width !important;
    min-width:60px;
    .toggle-btn{
      
    }
    ul{
      li{
        i{
          
        }
        span{
          
        }
      }
    }
  }
}
</style>