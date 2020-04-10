<template>
  <div id="testu" class="clearfix">
    <h5>add poster</h5>
    <input
      id="input"
      type="file"
      accept="image/*"
      @change="changeImage($event)"
      ref="avatarInput"
      style="display: none"
    >
    <div class="pic_list_box">
      <div class="pic_list" v-show="imgDatas.length">
        <div v-for="(src,index) in imgDatas" :key="index">
          <img :src="src" width="80" height="80" alt srcset @click="remove">
        </div>
      </div>
      <div class="form-horizontal">
        <img class="upload_btn" v-show="imgDatas.length!=1" @click="dialog_show" src="../images/upload.jpeg" alt>
        <div v-if="imgName!=''">{{imgName}}</div>
        <!--<input @click="upload" type="submit" value="submit">-->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'testImgU',
    data () {
      return {
        imgUL:[],
        imgDatas: [],
        imgName: 'img',
        responseName:'response'
      }
    },
    methods: {
      upload () {
        if (this.imgDatas.length != 0) {
          let form = new FormData()
          form.append('file', this.imgUL[0])
          this.$axios.post('/api/upload', form, {
            headers: {'Content-Type': 'multipart/form-data'}
          }).then((response) => {
            console.log(response.data.fileName)
            this.responseName = response.data.fileName
          }).catch((error) => {
            console.log(error)
          })
        }
      }
      ,
      dialog_show (event) {
        $('#input').click()
      },
      changeImage (event) {
        // 上传图片事件
        var files = this.$refs.avatarInput.files
        var that = this
        let img1 = event.target.files[0]
        function readAndPreview (file) {
          //Make sure `file.name` matches our extensions criteria
          if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
            var reader = new FileReader()
            reader.onload = function (e) {
              if (that.imgDatas.indexOf(this.result) === -1) {
                that.imgUL.push(img1)
                that.imgDatas.push(this.result)
              }
            }
            reader.readAsDataURL(file)
            that.imgName = file.name
          }
        }

        if (files) {
          [].forEach.call(files, readAndPreview)

        }
        if (files.length === 0) {
          return
        }
      },
      remove (e) {
        this.imgDatas = []
        this.imgName = ''
      }
    },
    watch:{
      responseName(newValue,oldValue){
        console.log('in testu  new Value ',newValue,' old value ',oldValue)
        this.$emit('getName',this.responseName)
      }
    }
  }
</script>

<style scoped>
  .pic_list_box {
    display: flex;
  }

  .pic_list_box .upload_btn {
    width: 80px;
    height: 80px;
    padding-left: 15px;
  }

  .pic_list_box .pic_list {
    display: flex;
  }

  .pic_list_box .pic_list img {
    width: 80px;
    height: 80px;
    padding-left: 15px;
    padding-bottom: 10px;
  }
</style>
