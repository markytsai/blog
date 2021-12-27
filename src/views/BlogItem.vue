<template>
  <div class="blog">
    <span class="blog-pic" :class="[blogPicWidth]"><a><img :src="blog.blog_pic"></a></span>
    <h2 class="blog-title"><a href="javascript:void(0);" @click="goBlogDetail">{{blog.blog_title}}</a></h2>
    <p class="blog-summary">{{blog.blog_summary}}</p>
    <div class="blog-extra">
      <ul>
        <li><span class="fa fa-clock-o"></span><span>{{blog.blog_extra.blog_time}}</span></li>
        <li><span class="fa fa-eye"></span><span>{{ blog.blog_extra.blog_view_cnt }}</span></li>
        <li><a class="comment-link-a" href="/blog/blog/23#comment"><span
          class="fa fa-comments-o"></span><span>{{blog.blog_extra.blog_comment_cnt}}</span></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogItem',
  props: [
    'blog'
  ],
  data () {
    return {
      blogPicWidth: 'display'
    }
  },
  methods: {
    goBlogDetail () {
      this.$router.push({
        path: `/main/blogDetail/${this.blog.blog_id}`
      })
    }
  },
  created () {
  }
}
</script>

<style scoped>

.blog {
  margin: 10px 0;
  padding: 10px;
  overflow: hidden;
}

.blog-pic {
  position: relative;
  float: left;
  height: 120px;
  margin-right: 20px;
  overflow: hidden;
}

.display {
  width: 194px;
}
.hide {
  width: 0;
}

.blog-pic img {
  width: 100%;
  height: auto;
}

.blog-title {
  font-size: 20px;
  overflow: hidden;
  padding: 0 0 10px 0;
}

.blog-summary {
  height: 57px;
  font-size: 14px;
  color: #566573;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.blog-extra {
  overflow: hidden;
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
