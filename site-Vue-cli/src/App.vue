<template>

  <Home />

  <!-- <Blog /> -->

  <!-- <BlogDetails /> -->

  <!-- <Project /> -->

  <!-- <ProjectDetails /> -->
  
</template>

<script>
import Home from './pages/Home.vue';
import BlogDetails from './pages/BlogDetails.vue';
import Blog from './pages/Blog.vue';
import Project from './pages/Project.vue';
import ProjectDetails from './pages/ProjectDetails.vue';

export default {
  name: 'App',
  components: {

    Home,
    BlogDetails,
    Blog,
    Project,
    ProjectDetails,

  }
}
</script>

<style lang="scss">

</style>
