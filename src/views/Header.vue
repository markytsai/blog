<template>
  <div class="header" style="display: flex">
    <div class="nav">
      <nav>
        <ul class="category-list">
          <li class="single-category" v-for="(item, index) in categories" @mouseover="showCard(index)"
              @mouseleave="hideCard" :key="index">
            <a :href="item.category_link">{{ item.category_name }}</a>
          </li>
        </ul>
      </nav>
    </div>
    <div id="card" :style="{left: length}" v-show="visible" @mouseover="showCard(-1)"
         @mouseleave="hideCard">
      <div class="inner-card" style="display: flex;">
        <div class="left-col" style="background-color: white">
          <ul>
            <li class="category-link"><a href="/">Africa</a></li>
            <li class="category-link"><a href="/">Asia</a></li>
            <li class="category-link"><a href="/">Computer</a></li>
            <li class="category-link"><a href="/">Fiction</a></li>
            <li class="category-link"><a href="/">story</a></li>
            <li class="category-link"><a href="/">History</a></li>
            <li class="category-link"><a href="/">Human</a></li>
          </ul>
        </div>
        <div class="right-col" style="background-color: #404040;">
          <div v-if="!loadFinished" class="right-col-content-loading" style="height: 300px; width: 600px">
            <vue-simple-spinner size="medium"/>
          </div>
          <div v-else class="right-col-content" style="display: grid">
            <div style="display: flex" v-for="(item, index) in sub_categories" :key="index">
              <div class="image">
                <span>
<!--                  <v-lazy-image :src="item.sub_category_img_link" src-placeholder="@/assets/image/default-pic.png"/>-->
                  <img v-lazy="item.sub_category_img_link">
                </span>
              </div>
              <div class="title">
                <a :href="item.sub_category_blog_link">{{ item.sub_category_blog_name }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSimpleSpinner from 'vue-simple-spinner'
import VLazyImage from 'v-lazy-image'
export default {
  name: 'Header',
  components: {
    VueSimpleSpinner,
    VLazyImage
  },
  data () {
    return {
      length: 0,
      visible: false,
      categories: [
        {
          category_name: '金融',
          category_link: ''
        }, {
          category_name: '文化',
          category_link: ''
        }, {
          category_name: '外刊精选',
          category_link: ''
        }, {
          category_name: '语法',
          category_link: ''
        }, {
          category_name: '翻译',
          category_link: ''
        }, {
          category_name: '文学作品',
          category_link: ''
        }, {
          category_name: '资源分享',
          category_link: ''
        }, {
          category_name: '留言板',
          category_link: ''
        }
      ],
      sub_categories: [
        {
          sub_category_name: '英语语法',
          sub_category_link: '/',
          sub_category_img_link: 'http://image.mochoong.top/ce137bf7a7ee4433875082b08421b564.png',
          sub_category_blog_name: 'Big Quit sends world’s back office back offshore',
          sub_category_blog_link: '/'
        }, {
          sub_category_name: '英语语法',
          sub_category_link: '/',
          sub_category_img_link: 'http://image.mochoong.top/ce137bf7a7ee4433875082b08421b564.png',
          sub_category_blog_name: 'Big Quit sends world’s back office back offshore',
          sub_category_blog_link: '/'
        }, {
          sub_category_name: '英语语法',
          sub_category_link: '/',
          sub_category_img_link: 'http://image.mochoong.top/ce137bf7a7ee4433875082b08421b564.png',
          sub_category_blog_name: 'Big Quit sends world’s back office back offshore',
          sub_category_blog_link: '/'
        }, {
          sub_category_name: '英语语法',
          sub_category_link: '/',
          sub_category_img_link: 'http://image.mochoong.top/ce137bf7a7ee4433875082b08421b564.png',
          sub_category_blog_name: 'Big Quit sends world’s back office back offshore',
          sub_category_blog_link: '/'
        }, {
          sub_category_name: '英语语法',
          sub_category_link: '/',
          sub_category_img_link: 'http://image.mochoong.top/ce137bf7a7ee4433875082b08421b564.png',
          sub_category_blog_name: 'Big Quit sends world’s back office back offshore',
          sub_category_blog_link: '/'
        }, {
          sub_category_name: '英语语法',
          sub_category_link: '/',
          sub_category_img_link: 'http://image.mochoong.top/ce137bf7a7ee4433875082b08421b564.png',
          sub_category_blog_name: 'Big Quit sends world’s back office back offshore',
          sub_category_blog_link: '/'
        }
      ],
      loadFinished: undefined,
      default_pic_url: '@/assets/image/default-pic.png'
    }
  },
  methods: {
    showCard (index) {
      if (index === -1) {
        this.visible = true
        console.log('inner')
      } else {
        console.log('this')
        this.loadFinished = false
        const categoryCnt = this.categories.length
        const middle = categoryCnt / 2
        if (index < middle) {
          this.length = window.innerWidth / 2 - 377 - 50 * (middle - index) + 'px'
        } else {
          this.length = window.innerWidth / 2 - 377 + 50 * (index - middle) + 'px'
        }
        setTimeout(() => {
          this.loadFinished = true
        }, 1000)
        this.visible = true
      }
    },
    hideCard () {
      this.loadFinished = undefined
      this.visible = false
    }
  },
  created () {
  }
}
</script>

<style scoped>
.v-lazy-image {
  filter: blur(10px);
  transition: filter 0.7s;
}

.v-lazy-image-loaded {
  filter: blur(0);
}
.header {
  height: 80px;
}

.nav {
  /*pointer-events: none;*/
  display: flex;
  justify-content: center;
  margin: 0 auto;
}

nav {
  margin-bottom: 15px;
  background: #fff;
  padding: 0 8px;
  border-radius: 0 0 16px 16px;
  box-shadow: 0 0 16px rgb(50 50 93 / 25%), 0 0 5px rgb(77 77 77 / 10%);
}

#card {
  z-index: 999;
  top: 60px;
  position: absolute;
  /*left: 400px;*/
  /*display: none;*/
}

.single-category:hover ~ #card {
  display: none;
}

.inner-card {
  border-radius: 0 0 16px 16px;
  box-shadow: 0 0 16px rgb(50 50 93 / 25%), 0 0 5px rgb(77 77 77 / 10%);
}

.category-link {
  padding: 5px;
  padding: 5px 10px;
}

.left-col ul {
  list-style: none;
  font-size: 15px;
  font-weight: bold;
  padding: 10px 20px;
}

.category-list {
  list-style: none;
  margin: 0;
  padding: 0;
  white-space: nowrap;
  position: relative;
  font-size: 15px;
  font-weight: bold;
}

.single-category {
  position: relative;
  display: inline-block;
  vertical-align: top;
  padding: 22px 10px;
}

.right-col .right-col-content {
  grid-template-columns: 300px 300px;
  grid-template-rows: 100px 100px 100px;
}

.right-col-content-loading {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image {
  padding: 15px;
  width: 33.3%;
}

.image span {
  height: 100px;
  width: 100px;
}

.image span img {
  width: 100%;
  height: 100%;
}

.title {
  padding: 15px 5px;
}

.title a {
  color: white;
}
</style>
