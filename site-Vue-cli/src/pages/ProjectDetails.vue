<template>
    <HeaderComponent />
    <ProjectBannerComponent :isBreadCrumbs="false" :class="'projectDeteils-banner-bgImg'"/>
    <ProjectDetailsItem />
    <FooterComponent />
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import ProjectBannerComponent from '@/components/ProjectBannerComponent.vue';
import ProjectDetailsItem from '@/components/ProjectDetailsItem.vue';

    export default {
        components: {
            HeaderComponent,
            FooterComponent,
            ProjectBannerComponent,
            ProjectDetailsItem,
        }
    }
</script>

<style scoped lang="scss">
.projectDeteils-banner-bgImg {
    background-image: url('@/assets/ProjectDetailsImg/projectDetails-banner.jpg');
}

</style>