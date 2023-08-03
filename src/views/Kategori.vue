<template>
  <br>
  <center><h1>Kategori</h1></center>
  <br>
  <div class="flex-container">
      <div v-for="Kategori in data" :key="Kategori.id" class="card">
        <img :src="getImgSrc(Kategori.img)" alt="Category Image" style="width: 300px; height: 300px;"/>
          <router-link class="container" :to="{ name: 'KategoriProduk', params: { id_kategori: Kategori.id }}">
              <center><h4>{{ Kategori.nama }}</h4></center>
          </router-link>
      </div>
  </div>
</template>

<script>
  import { onMounted, reactive } from 'vue'
  import { kategori } from '../assets/Kategori'
import { produk } from '../assets/Produk';

  export default {
      setup(props, context){
          const data = reactive(kategori["kategori"])

          onMounted(() => {
              context.emit("id-menu", 5);
          });
          const getImgSrc = (imgFileName) => {
            return "../src/assets/img/" + imgFileName + '';
          };

          return {
              data,
              getImgSrc
          }
      }
  }
</script>

<style scoped>
.flex-container {
  display: flex;
}
.card {
  /* add shadow to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgb(0,0,0,0.2);
  transition: 0.3s;
  margin: 10px;
  min-width: 200px;
  cursor: pointer;
}
  
/* on mouse-over, add a depper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* add some padding inside the card container */
.container {
  padding: 2px 16px;
}

.img {
  width: 200px;
  margin: 10px;
}
</style>