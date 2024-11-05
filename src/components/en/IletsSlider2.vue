<template>
  <div class="kids-carousel-container">
    <Carousel
      ref="carousel"
      v-model="currentSlide"
      :items-to-show="itemsToShow"
      :wrap-around="true"
      snap-align="center"
      class="carousel"
    >
      <Slide v-for="club in clubs" :key="club.id">
        <div class="kids-card">
          <img :src="club.image" alt="" class="kids-card-image" />
        </div>
      </Slide>
    </Carousel>

    <div class="pagination">
      <button
        v-for="(_, index) in clubs"
        :key="index"
        @click="goToSlide(index)"
        :class="{ active: currentSlide === index }"
      ></button>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';

export default {
  components: { Carousel, Slide },
  setup() {
    const carousel = ref(null);
    const currentSlide = ref(0);
    const itemsToShow = ref(4);
    const clubs = ref([
      { id: 1, image: require('@/assets/images/ilets/en/1.png') },
      { id: 2, image: require('@/assets/images/ilets/en/2.png') },
      { id: 3, image: require('@/assets/images/ilets/en/3.png') },
      { id: 4, image: require('@/assets/images/ilets/en/4.png') },
      { id: 5, image: require('@/assets/images/ilets/en/5.png') },
      { id: 6, image: require('@/assets/images/ilets/en/6.png') },
      { id: 7, image: require('@/assets/images/ilets/en/7.png') },
      { id: 8, image: require('@/assets/images/ilets/en/8.png') },
    ]);

    let autoplayInterval = null; 

    const updateItemsToShow = () => {
      itemsToShow.value = window.innerWidth < 768 ? 1 : 4;
    };

    const goToSlide = (index) => {
      currentSlide.value = index;
    };

    const autoplay = () => {
      currentSlide.value = (currentSlide.value + 1) % clubs.value.length; 
    };

    watch(currentSlide, (newValue) => {
      console.log('Current slide changed to:', newValue);
    });

    onMounted(() => {
      updateItemsToShow();
      window.addEventListener('resize', updateItemsToShow);
      autoplayInterval = setInterval(autoplay, 3000); 
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', updateItemsToShow);
      clearInterval(autoplayInterval); 
    });

    return {
      carousel,
      currentSlide,
      itemsToShow,
      clubs,
      goToSlide,
    };
  },
};
</script>

<style scoped>
.kids-carousel-container {
  width: 100%;
  margin: 0 auto;
  direction: rtl;
}
.carousel {
  position: relative; 
}
.kids-card {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1em;
  width: 100%; 
  height: 300px; 
  color: #165E84;
  transition: transform 0.3s; 
}
.kids-card-image {
  max-width: 100%;
  max-height: 100%;
  border-radius: 1em;
}
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 2%;
}
.pagination button {
  margin: 0 0.5rem;
  padding: 0.5rem;
  border: none;
  background-color: #e0e0e0;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s; 
}
.pagination button:hover {
  background-color: #d5d5d5; 
}
.pagination button.active {
  background-color: #f77919;
  padding: 0.5rem 1rem;
}
@media (max-width: 767px) {
  .kids-card {
    width: 100%;
  }
  .pagination button {
    margin: 0 0.25rem;
    padding: 0.4rem;
  }
  .pagination button.active {
    padding: 0.4rem 0.8rem;
  }
}
@media (min-width: 768px) {
  .kids-card {
    width: 90%; 
  }
}
@media (min-width: 1024px) {
  .kids-card {
    width: 90%;
  }
}
</style>
