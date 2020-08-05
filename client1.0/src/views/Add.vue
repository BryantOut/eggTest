<template>
  <div class="page">
    <van-uploader v-model="fileList" :max-count="1" :after-read="afterRead" />
    <van-cell-group>
      <van-field v-model="config.title" label="文章标题" placeholder="请输入文章标题" />
      <van-field v-model="config.summary" label="文章简介" placeholder="请输入文章简介" />
      <van-field
        v-model="config.content"
        label="文章内容"
        placeholder="请输入文章内容"
        type="textarea"
        autosize
      />
    </van-cell-group>
    <van-button type="primary" @click="submit" class="add-button">提交</van-button>
  </div>
</template>

<script>
import { Uploader, Field, CellGroup, Button } from "vant";
export default {
  data() {
    return {
      fileList: [],
      config: {
        title: "",
        summary: "",
        content: "",
        img: "",
      },
    };
  },
  components: {
    "van-uploader": Uploader,
    "van-cell-group": CellGroup,
    "van-field": Field,
    "van-button": Button,
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      this.config.img = file.content;
    },
    submit() {
      fetch('/article/create',{
        method: 'post',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(this.config)
      })
      .then(res=>res.json())
      .then(res=>{
        if(res.status == 200) {
          // Toast.success('文章发布成功')
          console.log('文章发布成功');
          this.$router.push('/');
        } else {
          // Toast.fail(res.errMsg)
          console.log(res.errMsg);
        }
      })
    },
  },
};
</script>

<style scoped>
.add-button {
    /* position: absolute; */
    /* left: 0; */
    /* bottom: 80px; */
    width: 100%;
}
</style>