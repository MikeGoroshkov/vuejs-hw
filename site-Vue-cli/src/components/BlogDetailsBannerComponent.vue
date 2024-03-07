<template>
  <section class="blog_details_banner">
    <div class="blog_details_banner__bg-image">
    <img src="@/assets/BlogDetailsArticleImg/blogDetailsBanner.jpg" alt="banner image">
</div>
  </section>
</template>

<script>
export default {
  name: 'BlogDetailsBannerComponent',
  
}
</script>

<style lang="scss">

.blog_details_banner {
    position: relative;
    height: 356px;
    margin-bottom: 200px;
    &__bg-image {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}

</style>