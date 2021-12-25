<template>
  <div class="container">
    <div class="left-side">
      <router-view/>
    </div>
    <div class="right-side">
      <Tag/>
      <NewPost/>
      <RecommendSite/>
    </div>
  </div>
</template>

<script>
import BlogItemList from './BlogItemList'
import Tag from './Tag'
import NewPost from './NewPost.vue'
import RecommendSite from './RecommendSite'
import BlogDetail from './BlogDetail'

export default {
  name: 'Main',
  components: {
    BlogItemList,
    Tag,
    NewPost,
    RecommendSite,
    BlogDetail
  },
  data () {
    return {
      isListPage: false
    }
  },
  created () {
    this.$router.push('/main/blogs')
  }
}
</script>

<style scoped>
.container {
  width: 1100px;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
  padding-left: 15px;
  padding-right: 15px;
}

.container .left-side {
  width: 70%
}

.container .right-side {
  width: 30%;
}

a:hover {
  color: #ff8665;
  text-decoration: none;
}

</style>
