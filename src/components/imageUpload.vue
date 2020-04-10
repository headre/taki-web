<template>
  <div class="power">
    <ul class="clearfix">
      <!--根据 v-if="imgs.length>=1 ? false : true" 判断上传几张图片-->
      <li style="position:relative">
        <img src="../images/close.png"><input  @change='add_img($event)' type="file">
        <img :src="img" alt="" width="220px" height="220px">
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:"imageUpload",
    data() {
      return {
        img: "",
        //判断图片的类型
        imgData: {
          accept: 'image/gif, image/jpeg, image/png, image/jpg',
        }
      }
    },
    methods: {
      add_img(event) {
        console.log("it runs")
        let reader = new FileReader();
        let img1 = event.target.files[0];
        let type = img1.type; //文件的类型，判断是否是图片
        let size = img1.size; //文件的大小，判断图片的大小
        if (this.imgData.accept.indexOf(type) == -1) {
          alert('请选择我们支持的图片格式！');
          return false;
        }
        //图片的大小
        if (size > 3145728) {
          alert('请选择3M以内的图片！');
          return false;
        }
        var uri = ''
        let form = new FormData();
        form.append('file', img1, img1.name);
        //接口部分
        /*this.$axios.post("/uploads/transfer", form, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(response => {
          console.log(response.data)
          uri = "http://www.t1.qidianjinfu.com"+ response.data.result*/
          reader.readAsDataURL(img1);
          console.log(img1)
          var that = this;
          reader.onloadend = value=>{
            that.img=value.target.result;
          }
        /*}).catch(function(err) {
          console.log(err);
        });*/
      }

    }
  }
</script>

<style scoped>
</style>
