<template>
    <HeaderComponent />
    <BlogBannerComponent />
    <LatestPostComponent />
    <BlogArticlesComponent />
    <Footer />
</template>
<script>
    import HeaderComponent from '../components/HeaderComponent.vue';
    import FooterComponent from '../components/FooterComponent.vue';
    import BlogBannerComponent from '../components/BlogBannerComponent.vue';
import LatestPostComponent from '@/components/LatestPostComponent.vue';
import BlogArticlesComponent from '@/components/BlogArticlesComponent.vue';

export default {
    name: 'Blog',
    components: {
    HeaderComponent,
    FooterComponent,
    BlogBannerComponent,
    LatestPostComponent,
    BlogArticlesComponent
}
    
}
</script>
<style lang="scss">
    
</style>