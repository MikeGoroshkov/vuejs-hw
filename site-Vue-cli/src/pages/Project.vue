<template>    
    <HeaderComponent />

    <ProjectBannerComponent heading='Our Project' pageName='Project' :class="'project-banner-bgImg'" :isBreadCrumbs='true'/>

    <ProjectCardListComponent />

    <FooterComponent />


</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import ProjectBannerComponent from '@/components/ProjectBannerComponent.vue';
import ProjectCardListComponent from '@/components/ProjectCardListComponent.vue';

    export default {
        components: {
            HeaderComponent,
            FooterComponent,
            ProjectBannerComponent,
            ProjectCardListComponent,
        }
    }
</script>

<style scoped>
.project-banner-bgImg {
  background-image: url('@/assets/ProjectImg/projectBanner.png');
}

</style>