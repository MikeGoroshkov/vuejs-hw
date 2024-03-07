<template>
    <header class="header">
      <div class="header__row container">
        <div class="header__logo">
          <a href="index.html">
            <img class="logo-img" src="@/assets/Logo (1).png" alt="logo" />
          </a>
        </div>
        <nav class="header__nav">
          <a href="#">Home</a>
          <a href="#">Project</a>
          <a href="#">Blog</a>
        </nav>
      </div>
    </header>
</template>

<script>
    export default {
        name: 'HeaderComponent',
    }
</script>

<style lang="scss">
@import "@/assets/variables.scss";
.header {
    padding: 45px 0;

    &__row {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__nav {
        display: flex;
        gap: 40px;
    }
    &__nav a{
        font-size: 20px;
        color: $darkText;
        transition: all 0.2s ease;
        &:hover {
            transform: scale(1.2);
        }
    }
}
</style>