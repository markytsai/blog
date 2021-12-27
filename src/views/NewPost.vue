<template>
  <div class="new-post panel">
    <ul id="myTab" class="nav nav-tabs">
      <li :class="['tab', tabActiveMap.latest]" @click="choose('latest')">最新发表</li>
      <li :class="['tab', tabActiveMap.recommend]" @click="choose('recommend')">推荐阅读</li>
      <li :class="['tab', tabActiveMap.hot]" @click="choose('hot')">最近流行</li>
    </ul>
    <div class="tab-content">
      <div :class="activeMap.latest" id="latest">
        <ol class="blog-list">
          <li class="slide" v-for="(item, index) in newly_posted_blogs" :key="index">
            <span class="li-icon li-icon-1">{{ index + 1 }}</span>
            <a href="/blog/blog/41" :title="item.blog_title">{{ item.blog_title }}</a>
          </li>
        </ol>
      </div>
      <div :class="activeMap.recommend" id="recommend">
        <ol class="blog-list">
          <li class="slide" v-for="(item, index) in recommended_blogs" :key="index">
            <span class="li-icon li-icon-1">{{ index + 1 }}</span>
            <a href="/blog/blog/41" :title="item.blog_title">{{ item.blog_title }}</a>
          </li>
        </ol>
      </div>
      <div :class="activeMap.hot" id="hot">
        <ol class="blog-list">
          <li class="slide" v-for="(item, index) in popular_blogs" :key="index">
            <span class="li-icon li-icon-1">{{ index + 1 }}</span>
            <a href="/blog/blog/41" :title="item.blog_title">{{ item.blog_title }}</a>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewPost',
  data () {
    return {
      activeMap: {
        latest: 'active',
        recommend: 'inactive',
        hot: 'inactive'
      },
      tabActiveMap: {
        latest: 'tab-active',
        recommend: 'tab-inactive',
        hot: 'tab-inactive'
      },
      newly_posted_blogs: [
        {
          blog_title: 'newly_posted_blogs比尔盖茨的2015年书单: 你应该多读书！'
        }, {
          blog_title: 'newly_posted_blogs比尔盖茨的2015年书单: 你应该多读书！'
        }, {
          blog_title: 'newly_posted_blogs比尔盖茨的2015年书单: 你应该多读书！'
        }, {
          blog_title: 'newly_posted_blogs比尔盖茨的2015年书单: 你应该多读书！'
        }
      ],
      recommended_blogs: [
        {
          blog_title: 'recommended_blogs比尔盖茨的2015年书单: 你应该多读书！'
        }, {
          blog_title: 'recommended_blogs比尔盖茨的2015年书单: 你应该多读书！'
        }, {
          blog_title: 'recommended_blogs比尔盖茨的2015年书单: 你应该多读书！'
        }
      ],
      popular_blogs: [
        {
          blog_title: '比尔盖茨的2015年书单: 你应该多读书！'
        }, {
          blog_title: '比尔盖茨的2015年书单: 你应该多读书！'
        }, {
          blog_title: '比尔盖茨的2015年书单: 你应该多读书！'
        }, {
          blog_title: '比尔盖茨的2015年书单: 你应该多读书！'
        }, {
          blog_title: '比尔盖茨的2015年书单: 你应该多读书！'
        }, {
          blog_title: '比尔盖茨的2015年书单: 你应该多读书！'
        }, {
          blog_title: '比尔盖茨的2015年书单: 你应该多读书！'
        }, {
          blog_title: '比尔盖茨的2015年书单: 你应该多读书！'
        }
      ]
    }
  },
  methods: {
    choose (tab) {
      for (const index in this.activeMap) {
        if (index === tab) {
          this.activeMap[index] = 'active'
          this.tabActiveMap[index] = 'tab-active'
        } else {
          this.activeMap[index] = 'inactive'
          this.tabActiveMap[index] = 'tab-inactive'
        }
      }
    }
  }
}
</script>

<style scoped>
.nav-tabs {
  display: flex;
  font-size: 14px;
}

.nav-tabs .tab {
  cursor: pointer;
  width: 33.33%;
  text-align: center;
}

.tab-active {
  color: #ff8665;
  border-top: 2px solid #ff8665;
  padding: 8px 5px;
}

.tab-inactive {
  border-top: 2px solid transparent;
  padding: 8px 5px;
}

.nav-tabs .tab:hover {
  color: #ff8766;
}

.tab-content .inactive {
  display: none;
}

.tab-content {
  padding: 5px 15px;
}

.tab-content .active {
  display: block;
}

.nav li {
  display: inline;
}

.blog-list li {
  white-space: nowrap;
  word-wrap: normal;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 2;
  text-align: left;
}

.blog-list li a {
  /*color: #1a1a1a;*/
  padding-left: 10px;
  font-size: 14px;
}

.li-icon {
  background: #6ebbac;
  font-size: 13px;
  display: inline-block;
  width: 17px;
  height: 17px;
  border-radius: 4px;
  color: #fff;
  text-align: center;
  font-style: normal;
  line-height: 17px;
}

a:hover {
  color: #ff8665;
  text-decoration: none;
}
</style>
