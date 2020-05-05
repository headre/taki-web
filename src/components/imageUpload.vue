<template>
  <div class="power">
    <ul class="clearfix">
      <!--according to v-if="imgs.length>=1 ? false : true" decide how many pictures to upload-->
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
        //Determine the type of image
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
        let type = img1.type; //Type of file, determine if it is a picture
        let size = img1.size; //The size of the file determines the size of the image
        if (this.imgData.accept.indexOf(type) == -1) {
          alert('Please select the image format we support！');
          return false;
        }
        //Size of picture
        if (size > 3145728) {
          alert('Please select the picture within 3M！');
          return false;
        }
        var uri = ''
        let form = new FormData();
        form.append('file', img1, img1.name);
        //Interface section
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
