<template>
  <nav
    class="d-flex justify-content-center my-4"
    aria-label="Page navigation example"
  >
    <ul class="pagination justify-content-end">
      <li class="page-item">
        <router-link
          :to="'/' + type + '/1'"
          :class="{ disabled: page == 1 }"
          class="page-link"
          >Primeira</router-link
        >
      </li>
      <li
        v-for="(item, index) in pagePagination"
        :key="index"
        :class="{ active: item == page }"
        class="page-item"
      >
        <router-link :to="'/' + type + '/' + item" class="page-link">{{
          item
        }}</router-link>
      </li>
      <li class="page-item">
        <router-link
          :to="'/' + type + '/' + maxPages"
          :class="{ disabled: page == maxPages }"
          class="page-link"
          >Última</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    type: String,
    maxPages: Number,
    page: Number,
  },
  data() {
    return {
      pagePagination: [],
    };
  },
  methods: {
    setPagination() {
      let pages = [];
      pages.push(parseInt(this.page));
      if (this.page == 1) {
        pages.push(2);
        pages.push(3);
      } else if (parseInt(this.page) == parseInt(this.maxPages)) {
        pages.push(parseInt(this.page) - 1);
        pages.push(parseInt(this.page) - 2);
      } else {
        pages.push(parseInt(this.page) - 1);
        pages.push(parseInt(this.page) + 1);
      }
      pages.sort(function (a, b) {
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      });
      console.log(pages);
      this.pagePagination = pages;
    },
  },
  created() {
    this.setPagination();
  },
  updated() {
    console.log(this.pagePagination);
    this.setPagination();
  },
};
</script>