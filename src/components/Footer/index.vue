<template>
  <div class="footer">
    <div class="back-to-top" style="right: 50px; position: absolute; display: block;">
      <a href="#" style="top: 0px;">↑回顶部</a>
    </div>
    <div class="container" style="display: flex">
      <span>
        Copyright © 2019-2020 Mochoong. All Rights Reserved
        <a href="http://beian.miit.gov.cn/">浙 ICP 备 19045184 号</a>
      </span>
      <span class="links">
        <a href="#">关于我</a>
        <a href="#">知乎</a>
        <a href="#">微博</a>
        <a href="#">联系我</a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      windowsHeight: window.innerHeight
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="less">

.footer {
  color: #999;
  margin-top: 50px;
}

.container {
  padding: 12px 0;
  justify-content: center;
  width: 1100px;
  border-top: 1px dashed #ddd;
  margin: auto;
  justify-content: space-between;
}

.container span:first-child {
  padding-left: 0;
}

.container span:nth-child(2) {
  padding-right: 0;
}

.links a {
  padding: 0 3px;
}
</style>
