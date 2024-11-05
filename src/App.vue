<template>
  <div id="app">
    <component :is="currentNavbar" />
    <router-view />
    <component :is="currentFooter" />
    <component :is="WhatsappButton" />
  </div>
</template>

<script>
import MonglishNavbarAr from './components/ar/MonglishNavbar.vue';
import MonglishNavbarEn from './components/en/MonglishNavbar.vue';
import MonglishFooterAr from './components/ar/MonglishFooter.vue';
import MonglishFooterEn from './components/en/MonglishFooter.vue';
import WhatsappButtonAr from './components/ar/WhatsappButton.vue';
import WhatsappButtonEn from './components/en/WhatsappButton.vue';

export default {
  name: 'App',
    data() {
    return {
      currentNavbar: 'MonglishNavbarAr',
      currentFooter: 'MonglishFooterAr',
      WhatsappButton: 'WhatsappButtonAr',
    };
  },
  watch: {
    '$route'(to) {
      if (to.path.startsWith('/en')) {
        this.currentNavbar = 'MonglishNavbarEn';
        this.currentFooter = 'MonglishFooterEn';
        this.WhatsappButton = 'WhatsappButtonEn';
      } else {
        this.currentNavbar = 'MonglishNavbarAr';
        this.currentFooter = 'MonglishFooterAr';
        this.WhatsappButton = 'WhatsappButtonAr';
      }
    }
  },
  components: {
    MonglishNavbarAr,
    MonglishFooterAr,
    MonglishFooterEn,
    WhatsappButtonAr,
    WhatsappButtonEn,
    MonglishNavbarEn
  }
}
</script>

<style>
  @font-face {
    font-family: 'DIN Next LT Arabic';
    src: url('@/assets/fonts/DINNextLTArabic-Regular-3.ttf') format('truetype');
  }

  #app{
    width : 100%;
  }
</style>
