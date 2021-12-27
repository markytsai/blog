<template>
  <div class="advertisement panel">
    <div class="panel-heading">
      <h3 class="panel-title">推荐关注</h3>
    </div>
    <div>
      <div class="panel-body">
        <div class="ads">
          <img src="@/assets/image/gongzhonghao.jpg" title="十六毛虫"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Wechat'
}
</script>

<style scoped>
.panel-heading {
  padding: 10px 15px;
  border-bottom: 1px solid #8080802b;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

.panel-body {
  padding: 10px;
}

.ads img {
  width: 100%;
}
</style>
