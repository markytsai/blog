<template>
  <div class="new-post panel">
    <div class="panel-heading">
      <h3 class="panel-title">标签</h3>
    </div>
    <div class="panel-body">
      <a class="tag-li" href="/blog/tag/11" title="金融">金融</a>
      <a class="tag-li" href="/blog/tag/12" title="文化">文化</a><a
      class="tag-li" href="/blog/tag/13" title="外刊精选">外刊精选</a>
      <a class="tag-li" href="/blog/tag/14" title="语法">语法</a><a
      class="tag-li" href="/blog/tag/15" title="翻译">翻译</a>
      <a class="tag-li" href="/blog/tag/16" title="笔译">笔译</a><a
      class="tag-li" href="/blog/tag/17" title="口译">口译</a>
      <a class="tag-li" href="/blog/tag/18" title="书籍推荐">书籍推荐</a><a
      class="tag-li" href="/blog/tag/19" title="抒情诗歌">抒情诗歌</a>
      <a class="tag-li" href="/blog/tag/20" title="经典话剧">经典话剧</a>
      <a class="tag-li" href="/blog/tag/21" title="听力">听力</a>
      <a class="tag-li" href="/blog/tag/22" title="畅销小说">畅销小说</a>
      <a class="tag-li" href="/blog/tag/23" title="通俗读物">通俗读物</a>
      <a class="tag-li" href="/blog/tag/24" title="考研">考研</a>
      <a class="tag-li" href="/blog/tag/25" title="杂谈杂想">杂谈杂想</a>
      <a class="tag-li" href="/blog/tag/26" title="学习资源">学习资源</a>
      <a class="tag-li" href="/blog/tag/27" title="口语">口语</a>
      <a class="tag-li" href="/blog/tag/28" title="阅读">阅读</a>
      <a class="tag-li" href="/blog/tag/29" title="生活">生活</a>
      <a class="tag-li" href="/blog/tag/30" title="货币">货币</a>
      <a class="tag-li" href="/blog/tag/31" title="美联储">美联储</a><a
      class="tag-li" href="/blog/tag/32" title="华尔街">华尔街</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tag'
}
</script>

<style scoped>
.panel-heading {
  padding: 10px 15px;
  border-bottom: 1px solid #8080802b;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.tag-li {
  color: #6ebbac;
  padding: 10px 5px;
  display: inline-block;
  text-transform: uppercase;
}

.tag-li:hover {
  background-color: #ff8665;
  color: #fff;
  border-color: #ff8665;
}

.panel {
  border: 1px solid #f5f5f5;
}
.panel-body {
  padding: 10px;
}

.panel-body .tag-li a:hover {
  color: #ff8766;
  list-style: none;
}

</style>
