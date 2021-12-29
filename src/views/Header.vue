<template>
  <div class="header" style="display: flex">
    <div id="navId" class="nav">
      <nav>
        <ul class="category-list">
          <li class="single-category" v-for="(item, index) in categories" @mouseenter="showCard(index)"
              @mouseleave="hideCard('li', index)" :key="index">
            <a :href="item.category_link" @click="goToCategory(item)">{{ item.category_name }}</a>
            <div>
              <span class="arrow-up" :style="{display: valids[index]}"/>
            </div>
          </li>
        </ul>
      </nav>
    </div>
    <div id="card" :style="{left: length}" v-show="visible" @mouseenter="showCard(-1)"
         @mouseleave="hideCard('card',-1)">
      <div class="inner-card">
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
                  <a :href="item.sub_category_blog_link">
                  <img v-lazy="item.sub_category_img_link">
                    </a>
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

export default {
  name: 'Header',
  components: {
    VueSimpleSpinner
  },
  data () {
    return {
      length: 0,
      visible: false,
      categories: [
        {
          category_name: '首页',
          category_link: '/blogs'
        }, {
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
          category_name: '留言',
          category_link: ''
        }
      ],
      sub_categories: [
        {
          sub_category_name: '英语语法',
          sub_category_link: '/',
          sub_category_img_link: 'https://pbs.twimg.com/media/FHpCzObXIAYrjvU?format=jpg&name=small',
          sub_category_blog_name: 'Big Quit sends world’s back office back offshore',
          sub_category_blog_link: '/'
        }, {
          sub_category_name: '英语语法',
          sub_category_link: '/',
          sub_category_img_link: 'https://pbs.twimg.com/media/FHpCzObXIAYrjvU?format=jpg&name=small',
          sub_category_blog_name: 'Big Quit sends world’s back office back offshore',
          sub_category_blog_link: '/'
        }, {
          sub_category_name: '英语语法',
          sub_category_link: '/',
          sub_category_img_link: 'https://pbs.twimg.com/media/FHpCzObXIAYrjvU?format=jpg&name=small',
          sub_category_blog_name: 'Big Quit sends world’s back office back offshore',
          sub_category_blog_link: '/'
        }, {
          sub_category_name: '英语语法',
          sub_category_link: '/',
          sub_category_img_link: 'https://pbs.twimg.com/media/FHpCzObXIAYrjvU?format=jpg&name=small',
          sub_category_blog_name: 'Big Quit sends world’s back office back offshore',
          sub_category_blog_link: '/'
        }, {
          sub_category_name: '英语语法',
          sub_category_link: '/',
          sub_category_img_link: 'https://pbs.twimg.com/media/FHpCzObXIAYrjvU?format=jpg&name=small',
          sub_category_blog_name: 'Big Quit sends world’s back office back offshore',
          sub_category_blog_link: '/'
        }, {
          sub_category_name: '英语语法',
          sub_category_link: '/',
          sub_category_img_link: 'https://pbs.twimg.com/media/FHpCzObXIAYrjvU?format=jpg&name=small',
          sub_category_blog_name: 'Big Quit sends world’s back office back offshore',
          sub_category_blog_link: '/'
        }
      ],
      loadFinished: false,
      default_pic_url: '@/assets/image/default-pic.png',
      valids: ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      hoverIndex: undefined
    }
  },
  methods: {
    goToCategory (item) {
      this.$router.push(item.category_link)
    },
    showCard (index) {
      if (index === 0) {
        return
      }
      if (index === -1) {
        this.visible = true
        this.valids[this.hoverIndex] = 'block'
      } else {
        this.valids[index] = 'block'
        this.hoverIndex = index
        this.loadFinished = false
        const categoryCnt = this.categories.length
        const middle = categoryCnt / 2
        if (index < middle) {
          this.length = window.innerWidth / 2 - 377 - 50 * (middle - index) + 'px'
        } else {
          this.length = window.innerWidth / 2 - 377 + 50 * (index - middle) + 'px'
        }
        if (this.length < '0px') {
          this.length = 0 + 'px'
        }
        setTimeout(() => {
          this.loadFinished = true
        }, 500)
        this.visible = true
      }
    },
    hideCard (type, index) {
      if (index === -1) {
        this.valids[this.hoverIndex] = 'none'
        this.hoverIndex = undefined
      } else {
        this.valids[index] = 'none'
        // this.hoverIndex = undefined
      }
      this.visible = false
    }
  },
  created () {
  }
}
</script>

<style scoped>
.arrow-up {
  width: 0;
  height: 0;
  border-right: 15px solid transparent;
  border-left: 15px solid transparent;
  border-bottom: 25px solid #404040;
  margin: 0 auto;
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
  /*margin-bottom: 15px;*/
  background: #fff;
  padding: 0 8px;
  border-radius: 0 0 16px 16px;
  box-shadow: 0 0 16px rgb(50 50 93 / 25%), 0 0 5px rgb(77 77 77 / 10%);
}

#card {
  z-index: 999;
  top: 65px;
  position: absolute;
  /*left: 400px;*/
  /*display: none;*/
}

/*.single-category:hover .arrow-up {*/
/*  display: block;*/
/*}*/

.inner-card {
  display: flex;
  border-radius: 0 0 16px 16px;
  box-shadow: 0 0 16px rgb(50 50 93 / 25%), 0 0 5px rgb(77 77 77 / 10%);
}

.category-link {
  padding: 5px;
  padding: 5px 10px;
}

@media screen and (max-width: 600px) {
  .inner-card {
    display: contents;
    border-radius: 0 0 16px 16px;
    box-shadow: 0 0 16px rgb(50 50 93 / 25%), 0 0 5px rgb(77 77 77 / 10%);
  }

  .arrow-up {
    display: none !important;
  }

  #card {
    left: calc(0vw) !important;
    min-width: 300px;
  }

  .category-link {
    display: inline-block;
  }

  .right-col .right-col-content {
    grid-template-columns: 300px !important;
    grid-template-rows: 100px 100px 100px 100px 100px 100px !important;
  }
}

.left-col ul {
  list-style: none;
  font-size: 15px;
  font-weight: bold;
  padding: 10px 20px;
}

.category-list {
  font-size: 15px;
  font-weight: bold;
  display: flex;
  /*justify-content: center;*/
}

.single-category {
  /*position: relative;*/
  /*display: inline-block;*/
  /*vertical-align: top;*/
  padding: 30px 10px;
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

.title a:hover {
  color: #ff8766;
}
</style>
