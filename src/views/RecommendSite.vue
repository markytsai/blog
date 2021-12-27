<template>
  <div class="recommend-site panel">
    <div class="panel-heading">
      <h3 class="panel-title">推荐网站</h3>
    </div>
    <div class="panel-body">
      <ul>
        <li class="site"><a href="https://www.voanews.com/" target="_blank" title="https://www.voanews.com/">美国之音新闻网站</a></li>
        <li class="site"><a href="https://bbc.com/" target="_blank">BBC新闻网站</a></li>
        <li class="site"><a href="https://www.bbc.co.uk/learningenglish" target="_blank">BBC学习网站</a></li>
        <li class="site"><a href="https://www.politico.eu/" target="_blank">美国政治新闻网</a></li>
        <li class="site"><a href="https://www.theguardian.com/uk" target="_blank">卫报</a></li>
        <li class="site"><a href="https://www.economist.com/" target="_blank">经济学人</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendSite'
}
</script>

<style scoped>
.panel-heading {
  padding: 10px 15px;
  border-bottom: 1px solid #8080802b;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.panel-body {
  padding: 10px;
}

.site {
  display: inline-block;
  padding: 0 5px 0 0;
}

.panel-body ul {
  line-height: 20px;
}

a:hover {
  color: #ff8665;
  text-decoration: none;
}
</style>
