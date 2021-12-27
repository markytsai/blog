<template>
  <div class="panel search">
    <div class="panel-body">
      <div class="search-input">
        <input placeholder="search..."/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style scoped>
.search-input {
  padding: 10px 10px;
  background-color: #80808021;
}

.search-input input {
  width: 96%;
  height: 20px;
  padding: 0 4px 0;
  border-radius: 5px;
}
</style>
