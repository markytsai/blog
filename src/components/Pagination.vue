<template>
  <div class="page-nav">
    <div>
      <button :class="preDisable" @click="previous">&#60;</button>
      <ul>
        <li v-for="index in pages" :key="index">
          <button @click="toPage(index)" v-if="showBtn(index)" :class="current===index?'active':''">{{ index }}</button>
          <div v-else-if="showEllipsis (index)" class="ellipsis">&#8230;</div>
        </li>
      </ul>
      <button :class="nextDisable" @click="next">&#62;</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    total: {
      type: Number,
      default: 100
    }
  },
  watch: {
    total (newVal) {
      this.initPages()
    },
    current (newVal) {
      this.$emit('changeCurrent', newVal)
    }
  },
  computed: {
    preDisable () {
      return this.current === 1 ? 'disabled' : ''
    },
    nextDisable () {
      return this.current === this.pageLength ? 'disabled' : ''
    }
  },
  created () {
    this.initPages()
  },
  methods: {
    initPages () {
      if (this.total < this.pageSize) {
        this.pageLength = 1
      } else {
        this.pageLength = Math.floor(this.total / this.pageSize) + (this.total % this.pageSize ? 1 : 0)
      }
      this.pages = new Array(this.pageLength)
      for (let i = 0; i < this.pageLength; i++) {
        this.pages[i] = i + 1
      }
    },
    previous () {
      this.current -= this.current === 1 ? 0 : 1
    },
    next () {
      this.current += this.current === this.pageLength ? 0 : 1
    },
    toPage (index) {
      this.current = index
    },
    showBtn (index) {
      if (this.pageLength <= 6 || index === 1 || index === this.pageLength) {
        return true
      } else {
        if (this.current < 4 && index < 6) {
          return true
        } else if (this.current > this.pageLength - 4 && index > this.pageLength - 6) {
          return true
        } else if (index < this.current + 3 && index > this.current - 3) {
          return true
        } else {
          return false
        }
      }
    },
    showEllipsis (index) {
      return index === 2 || index === this.pageLength - 1
    }
  },
  data () {
    return {
      pages: [],
      pageLength: 0,
      current: 1,
      pageSize: 3
    }
  }
}
</script>

<style scoped>

.disabled {
  border: solid 1px #ccc;
  color: #ccc;
  cursor: not-allowed !important;
}

button {
  height: 30px;
  width: 30px;
  margin: 0 5px;
  border-radius: 3px;
  border: solid 1px #ccc;
  color: #777;
  font-weight: bold;
  background: #fff;
  overflow: hidden;
}

.active {
  border: solid 1px #1296db !important;
  background-color: #8080806e;
}

.page-nav button:hover {
  border: solid 1px #1296db;
  cursor: pointer;
}

.page-nav button + .disabled {
  border: solid 1px #ccc;
  color: #ccc;
  cursor: not-allowed;
}
.page-nav {
  margin: 10px;
}

@media screen and (max-width: 1200px) {
  .page-nav {
    padding: 0 0 10px 0;
    margin: 10px;
  }
}

.page-nav div:first-child {
  display: flex;
  margin: 5px 0;
}

.page-nav ul {
  display: flex;
}

.page-nav ul li {
}

</style>
