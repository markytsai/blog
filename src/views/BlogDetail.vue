<template>
  <div class="blog-detail" ref="blogDetailRef">
    <div class="blog-title">
      <h1>比尔盖茨的2015年书单: 你应该多读书</h1>
    </div>
    <div class="blog-meta">
      <span>Mar. 25, 2020</span> &nbsp;|&nbsp; <span>外刊</span> &nbsp;|&nbsp; Views(<span>20</span>)&nbsp; |&nbsp;
      Comments(<span>0</span>)
      <a class="blog-tag" href="/blog/tag/11" title="金融">金融</a>
    </div>
    <div class="blog-before">
      <span style="color:hsl(0,75%,60%);">微信可以选择关注“十六毛虫”哦</span>
    </div>
    <div class="blog-body" v-html="this.blogContent">
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogDetail',
  props: [
    'blogContent'
  ],
  created () {
    this.blogContent =
      '<p>这篇是分享一些英语学习资料和资源，会持续更新</p>\n' +
      '      <p><a href="https://www.bilibili.com/video/av3410427">https://www.bilibili.com/video/av3410427</a>\n' +
      '        B站BBC标准英音教学，想学英式英语的伙伴的必修课</p>\n' +
      '      <p><a href="https://www.youtube.com/channel/UCz4tgANd4yy8Oe0iXCdSWfA">https://www.youtube.com/channel/UCz4tgANd4yy8Oe0iXCdSWfA</a>\n' +
      '        油管上的Lucy博主，我个人十分喜欢的一个博主，说得好人也漂亮</p>\n' +
      '      <p><a href="https://www.51voa.com">https://www.51voa.com</a> 慢速VOA</p>\n' +
      '      <p>我经常访问的网站</p>\n' +
      '      <p>阅读类</p>\n' +
      '      <p><a href="https://www.quora.com/">https://www.quora.com/</a> Quora国外知名问答网站 ,除了英语还有其他语言版本，可以按需选择。<br><a\n' +
      '        href="https://medium.com">https://medium.com</a>, 我看可以看看它的介绍：Welcome to Medium, where words matter.<br><a\n' +
      '        href="https://www.gatesnotes.com">https://www.gatesnotes.com</a> 比尔盖茨的网站，受益匪浅，干货多多<br><a\n' +
      '        href="https://www.brainyquote.com">https://www.brainyquote.com</a> 名言警句网站，聪明的脑袋都在这里<br><a\n' +
      '        href="https://www.englishclass101.com/">https://www.englishclass101.com/</a> 以最快，最简单，最有趣的方式学习英语</p>\n' +
      '      <p><a href="https://magazinelib.com/">https://magazinelib.com/</a>一个包含所有外刊的强大网站</p>\n' +
      '      <p>杂志</p>\n' +
      '      <p><a href="https://www.economist.com/">https://www.economist.com/</a> 经济学人的官方网站，可以免费查看文章</p>\n' +
      '      <p>视频听力类</p>\n' +
      '      <p><a href="https://www.ted.com/">https://www.ted.com/</a> TED绝对是练习听力的好去处，TED的演讲人不仅发音清楚而且语速适中，极其适合练习听力<br><a\n' +
      '        href="http://www.elllo.org/">http://www.elllo.org/</a> 听力练习库</p>\n' +
      '      <p>软件类</p>\n' +
      '      <p><strong>每日英语听力</strong> 欧陆软件旗下，强力推荐<br><strong>UK Radios</strong> 如果是苹果系统，可以下载这个软件，提供了英国本土大部分的大电台</p>\n' +
      '      <p>法语<br><a href="https://www.francemediasmonde.com/">https://www.francemediasmonde.com/</a> watch and listen to\n' +
      '        the world</p></div>'
  }
}
</script>

<style scoped>
.blog-title {
  text-align: left;
}

.blog-tag {
  float: right;
  margin-right: 10px;
  color: #6ebbab;
}

.blog-tag:hover {
  background-color: #eb6969;
  color: white;
}

.blog-before {
  text-align: center;
}

.blog-meta {
  font-size: 13px;
  color: #888;
  /* display: inline-block; */
  margin-bottom: 15px;
}

.blog-body {
  border-top: 1px #eee solid;
  padding-top: 10px;
  /* font-family: "PingFang SC", "Microsoft Yahei", "Helvetica Neue", Helvetica, STHeiTi, sans-serif; */
  font-family: 'Tahoma', sans-serif;
  color: rgb(26, 26, 26);
  line-height: 1.6;
  font-size: 15px;
}

/deep/ .blog-body a {
  color: black;
  border-bottom: 1px solid #ff8665;
}

/deep/ .blog-body a:hover {
  color: #ff8665;
  border-bottom: 1px solid transparent;
}

.blog-title h1 {
  margin: 0 0 10px 0;
  font-size: 32px;
  font-weight: bold;
}

.blog-extra ul {
  text-align: right;
}

.blog-extra ul li {
  display: inline-block;
  padding: 5px 10px 0 0;
}
</style>
