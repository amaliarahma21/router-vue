<template>
    <br>
    <br>
  <center>
  <div v-if="detail  == undefined">ID YANG ANDA CARI TIDAK ADA</div>
  <div v-else>
    <img :src="getImgSrc(detail.img)" alt="Category Image" style="width: 300px; height: 300px;"/>
    <h1>Detail {{ detail.nama }}</h1>
    <h3><b>Deskripsi : </b></h3>
    <p>{{ detail.des }}</p>
    <h4>Harga : {{ detail.harga }}</h4>
  </div>
  </center>
  </template>
  
  <script>
  import { produk } from '../assets/Produk';
  
  export default {
    props: ['id_produk'],
    setup(props) {
      const getImgSrc = (imgFileName) => {
          return "../src/assets/img/" + imgFileName + '';
        };
      const detail = produk['produk'].find(function (item) {
        return item.id == props.id_produk;
      });
      return {
        detail,
        getImgSrc
      };
    },
  };
  </script>