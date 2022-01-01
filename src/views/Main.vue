<template>
  <div class="container">
    <div class="left-side">
      <router-view/>
    </div>
    <div class="right-side" style="height: 100%">
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
      imageSize: 194,
      prevScrollPos: window.pageYOffset
    }
  },
  mounted () {
    const body = document.body
    const scrollUp = 'scroll-up'
    const scrollDown = 'scroll-down'
    let lastScroll = 0

    console.log(this.prevScrollPos)
    window.onscroll = () => {
      const currentScroll = window.pageYOffset
      if (currentScroll <= 0) {
        body.classList.remove(scrollUp)
        return
      }

      if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
        // down
        body.classList.remove(scrollUp)
        body.classList.add(scrollDown)
      } else if (
        currentScroll < lastScroll &&
        body.classList.contains(scrollDown)
      ) {
        // up
        body.classList.remove(scrollDown)
        body.classList.add(scrollUp)
      }
      lastScroll = currentScroll
    }
  }
}
</script>

<style scoped>

@media screen and (min-width: 1200px) {
  .container {
    width: 1200px;
    display: flex;
    margin: 100px auto;
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
    min-width: 30%;
    padding: 10px 10px;
    border-radius: 16px;
    box-shadow: 0 1px 16px 10px rgb(64 64 64 / 8%);
    margin-left: 5px;
  }
}

@media screen and (max-width: 1200px) {
  .container {
    margin: 100px auto;
  }

  .container .left-side {
    /*padding: 10px 10px;*/
    border-radius: 16px;
    box-shadow: 0 1px 16px 10px rgb(64 64 64 / 8%);
  }

  .container .right-side {
    /*padding: 10px 10px;*/
    border-radius: 16px;
    box-shadow: 0 1px 16px 10px rgb(64 64 64 / 8%);
  }

  .blog-pic {
    width: 0;
  }

  .blog-body {
    padding: 10px;
  }
}

a:hover {
  color: #ff8665;
  text-decoration: none;
}

</style>
