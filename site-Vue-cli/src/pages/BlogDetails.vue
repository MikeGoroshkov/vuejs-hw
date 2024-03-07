<template>

    <HeaderComponent />
    <BlogDetailsBannerComponent />
    <BlogDetailsArticleComponent />
    <FooterComponent />
  </template>
  
  <script>
  import HeaderComponent from '../components/HeaderComponent.vue';
  import FooterComponent from '../components/FooterComponent.vue';
  import BlogDetailsBannerComponent from '../components/BlogDetailsBannerComponent.vue';
  import BlogDetailsArticleComponent from '../components/BlogDetailsArticleComponent.vue';
  
  export default {
    name: 'BlogDetails',
    components: {
      HeaderComponent, 
      FooterComponent, 
      BlogDetailsBannerComponent,
      BlogDetailsArticleComponent,
    }
  }
  </script>
  
  <style lang="scss">
  
  </style>