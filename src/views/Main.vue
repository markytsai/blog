<template>
  <div :class="[containerClass]">
    <div class="left-side">
      <router-view :imageSize=imageSize />
    </div>
    <div class="right-side">
      <Search/>
      <Tag/>
      <NewPost/>
      <RecommendSite/>
      <Wechat/>
    </div>
  </div>
</template>

<script>
import Tag from './Tag'
import NewPost from './NewPost.vue'
import RecommendSite from './RecommendSite'
import Wechat from '@/views/Wechat'
import Search from '@/views/Search'

export default {
  name: 'Main',
  components: {
    Search,
    Wechat,
    Tag,
    NewPost,
    RecommendSite
  },
  data () {
    return {
      containerClass: 'container',
      windowWidth: document.body.clientWidth,
      imageSize: 194
    }
  },
  mounted () {
    const that = this
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        that.windowWidth = window.screenWidth
      })()
    }
  },
  created () {
    this.$router.push('/main/blogs')
  },
  watch: {
    windowWidth (newVal) {
      this.windowWidth = newVal
      if (newVal >= 1200) {
        this.containerClass = 'container'
      } else {
        this.containerClass = 'container-mobile'
      }
      if (newVal < 700) {
        this.imageSize = 0
      }
    }
  }
}
</script>

<style scoped>
.container {
  width: 1200px;
  display: flex;
  margin: 20px auto;
}

.container .left-side {
  width: 70%;
  padding: 10px 10px;
  border-radius: 16px;
  box-shadow: 0 1px 16px 10px rgb(64 64 64 / 8%);
  margin-right: 5px;
}

.container .right-side {
  width: 30%;
  padding: 10px 10px;
  border-radius: 16px;
  box-shadow: 0 1px 16px 10px rgb(64 64 64 / 8%);
  margin-left: 5px;
}

.container-mobile .left-side {
  padding: 10px 10px;
  border-radius: 16px;
  box-shadow: 0 1px 16px 10px rgb(64 64 64 / 8%);
  margin-right: 5px;
}

.container-mobile .right-side {
  padding: 10px 10px;
  border-radius: 16px;
  box-shadow: 0 1px 16px 10px rgb(64 64 64 / 8%);
  margin-left: 5px;
}

a:hover {
  color: #ff8665;
  text-decoration: none;
}

</style>
