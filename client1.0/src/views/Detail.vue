<template>
  <div class="detail">
    <div class="title">{{detail.title}}</div>
    <img :src="detail.img" alt class="pic" />
    <div class="summary">{{detail.summary}}</div>
    <div class="content">{{detail.content}}</div>
    <div class="createTime">{{detail.createTime}}</div>
  </div>
</template>

<script>
// import moment from 'moment';
export default {
  data() {
    return {
      detail: {
        title: "",
        img: "",
        content:
          "",
        summary: "",
        createTime: "",
      },
    };
  },
  components: {},
  created() {
    fetch(`/article/detail?id=${this.$route.query.id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          this.detail = res.data;
        } else {
          // Toast.fail(res.errMsg)
          console.log(res.errMsg);
        }
      });
  },
};
</script>

<style scoped>
.detail {
  padding: 20px;
  text-align: left;
}

.detail .title {
  font-size: 25px;
  margin-bottom: 20px;
}

.detail .pic {
  width: 100%;
  margin-bottom: 20px;
}

.detail .summary {
  padding: 20px;
  background: #dcdcdc;
  margin-bottom: 20px;
}

.detail .content {
  padding: 20px;
  text-align: 2em;
  line-height: 200%;
}

.detail .createTime {
  color: #9c9c9c;
  text-align: right;
}
</style>