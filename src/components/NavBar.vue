<script setup lang="ts">
import { ref } from 'vue';

const hide = ref(false);

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    hide.value = false;
  } else {
    hide.value = true;
  }
  prevScrollpos = currentScrollPos;
}

</script>

<template>
    <nav :class="{ hideNav: hide }" class="navigation navbar has-background-black" role="navigation" aria-label="main navigation" style="height: 5vh;">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://wretcheddeity.com/">
          <img src="/images/logo/logo_white_nobg.png" alt="Band Logo">
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-start">
          <RouterLink class="link has-text-primary-light" to="/">Home</RouterLink>
          <RouterLink class="link has-text-primary-light" to="/discog">Discography</RouterLink>
          <RouterLink class="link has-text-primary-light" to="/schedule">Schedule</RouterLink>
          <RouterLink class="link has-text-primary-light" to="/shop">Shop</RouterLink>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <a class="link" href="https://www.instagram.com/wretcheddeity/" target="_blank">
            <ion-icon name="logo-instagram" size="large" style="color: white;"></ion-icon>
          </a>
          <a class="link" href="https://www.facebook.com/thewretcheddeity" target="_blank">
            <ion-icon name="logo-facebook" size="large" style="color: white;"></ion-icon>
          </a>
          <a class="link" href="mailto:wretcheddeathmetal@gmail.com">
            <ion-icon name="mail-outline" size="large" style="color: white;"></ion-icon>
          </a>
        </div>
      </div>
    </nav>
</template>

<style>
.navigation {
  position: fixed; /* Make it stick/fixed */
  top: 0; /* Stay on top */
  width: 100%; /* Full width */
  transition: top 0.3s; /* Transition effect when sliding down (and up) */
}
.hideNav {
  top: -60px;
}
</style>