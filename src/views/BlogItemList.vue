<template>
  <div class="main">
    <BlogItem v-for="(item, index) in blogs" :key="index"
              :blog=item
    />
  </div>
</template>

<script>
import BlogItem from './BlogItem'

export default {
  name: 'BlogItemList',
  components: {
    BlogItem
  },
  data () {
    return {
      total: 5,
      blogs: [
        {
          blog_id: 1,
          blog_pic: 'http://image.mochoong.top/ce137bf7a7ee4433875082b08421b564.png',
          blog_title: '英语资源分享-持续更新',
          blog_summary: '这篇是分享一些英语学习资料和资源，会持续更新会持续更新 经济学人：https://www.economist.',
          blog_extra: {
            blog_time: '2021-12-25 16:22:34',
            blog_view_cnt: 10,
            blog_comment_cnt: 10
          }
        }, {
          blog_id: 2,
          blog_pic: 'http://image.mochoong.top/ce137bf7a7ee4433875082b08421b564.png',
          blog_title: '英语工具&网站推荐，不容错过！',
          blog_summary: '俗话说“工欲善其事，必先利其器”， 今天十六给大家推荐几款电脑上高效英语学习办公的小工具，这些十六一直在使用，效果不错，非常建议大家把这些工具用起来。',
          blog_extra: {
            blog_time: '2021-12-25 16:22:34',
            blog_view_cnt: 10,
            blog_comment_cnt: 10
          }
        }]
    }
  }
}
</script>

<style scoped>
.blog {
  margin: 10px;
  padding: 10px 0;
  box-shadow: 0 2px 5px 0 rgb(146 146 146 / 10%)
}

.blog-title {
  text-align: left;
}

.blog-summary {
  text-align: left;
  margin: 10px 0 10px 0;
}

.blog-extra ul {
  text-align: left;
}

.blog-extra ul li {
  display: inline-block;
  padding: 5px 10px 0 0;
}

a:hover {
  color: #ff8665;
  text-decoration: none;
}
</style>
