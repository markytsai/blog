<template>
  <div class="statistics panel">
    <div class="panel-heading">
      <h3 class="panel-title">统计</h3>
    </div>
    <div class="panel-body">
      <ul class="statistic">
        <li class="layout_li"><a href="/" title="查看更多文章"><span>文章</span><b>25</b></a></li>
        <li class="layout_li"><a href="/" title="查看更多分类"><span>分类</span><b>22</b></a></li>
        <li class="layout_li"><a href="/" title="查看更多标签"><span>标签</span><b>15</b></a></li>
        <li class="layout_li"><a href="/" title="查看更多评论"><span>评论</span><b>2</b></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Statistics'
}
</script>

<style scoped>
.statistic {
  display: flex;
  /* border-top: 1px #f4f4f4 solid; */
  margin: -15px -10px -15px;
}

.statistic li {
  width: 33.33%;
  text-align: center;
  padding: 12px 0;
  position: relative;
}
</style>
