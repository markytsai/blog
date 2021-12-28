<template>
  <div class="container">
    <div class="left-side">
      <router-view/>
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
      imageSize: 194,
      prevScrollPos: window.pageYOffset
    }
  },
  mounted () {
    console.log(this.prevScrollPos)
    // window.onscroll = function () {
    //   const currentScrollPos = window.pageYOffset
    //   if (this.prevScrollPos > currentScrollPos) {
    //     document.getElementById('navId').style.display = 'block'
    //   } else {
    //     document.getElementById('navId').style.display = 'none'
    //   }
    //   this.prevScrollPos = currentScrollPos
    // }
  }
}
</script>

<style scoped>

@media screen and (min-width: 1200px) {
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
    min-width: 30%;
    padding: 10px 10px;
    border-radius: 16px;
    box-shadow: 0 1px 16px 10px rgb(64 64 64 / 8%);
    margin-left: 5px;
  }
}

@media screen and (max-width: 1200px) {
  .container {
    margin: 20px auto;
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
}

a:hover {
  color: #ff8665;
  text-decoration: none;
}

</style>
