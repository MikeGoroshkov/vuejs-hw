<template>
    <HomeBannerComponent />
    <HomeProjectComponent />
    <HomeCounterComponent />
    <HomeBlogComponent />
    <FooterComponent />
</template>


<script>
    import HeaderComponent from '../components/HeaderComponent.vue';
    import FooterComponent from '../components/FooterComponent.vue';
    import HomeBannerComponent from '@/components/HomeBannerComponent.vue';
    import HomeProjectComponent from '@/components/HomeProjectComponent.vue';
    import HomeCounterComponent from '@/components/HomeCounterComponent.vue';
    import HomeBlogComponent from '@/components/HomeBlogComponent.vue';
    
    export default {
        name: 'Home',
        components: {
    HeaderComponent,
    FooterComponent,
    HomeBannerComponent,
    HomeProjectComponent,
    HomeCounterComponent,
    HomeBlogComponent    
}
    }
</script>


<style scoped lang="scss">
</style>