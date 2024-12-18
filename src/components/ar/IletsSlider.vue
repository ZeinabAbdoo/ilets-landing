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
          <div class="kids-card-content">
            <p class="kids-card-description" v-html="club.description"></p>
            <h3 class="kids-card-title">{{ club.title }}</h3>
          </div>
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
    const itemsToShow = ref(3);
    const clubs = ref([
      { id: 1, title: 'ساعتين و45 دقيقة.', description: 'مدة الاختبار' },
      { id: 2, title: 'يمكن بشكل ورقي أو أونلاين.', description: 'إجراء الاختبار' },
      { id: 3, title: 'Academic (للدراسة والهجرة) وGeneral (للعمل في الشركات الأجنبية).', description: 'نوعا الاختبار' },
      { id: 4, title: 'الاستماع، التحدث، القراءة، الكتابة.', description: 'يختبر المهارات الأربعة' },
      { id: 5, title: 'تتراوح بين 5 و 9.', description: 'الدرجة المطلوبة' },
      { id: 6, title: '250 دولار.', description: 'رسوم الاختبار' },
      { id: 7, title: 'سنتين فقط.', description: 'صلاحية الشهادة' },
      { id: 8, title: '3 جهات رئيسية', description: 'اختبار دولي يُقدمه' }
    ]);
    
    let autoplayInterval = null; 

    const updateItemsToShow = () => {
      itemsToShow.value = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
    };

    const goToSlide = (index) => {
      currentSlide.value = index;
    };

    const autoplay = () => {
      currentSlide.value = (currentSlide.value - 1) % clubs.value.length; 
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
  padding: 2% 0 1% 0; 
}
.carousel {
  position: relative; 
}
.kids-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 1em;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); 
  font-family: 'DIN Next LT Arabic', sans-serif;
  font-weight: 500;
  width: 90%; 
  height: 200px; 
  background: linear-gradient(111.84deg, #2C80AC 0%, #165E84 100%);
  color: #ffffff;
  transition: transform 0.3s; 
  direction: rtl;
}
.kids-card-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
}
.kids-card-title {
  font-size: 26px; 
  margin-bottom: 0.5rem;
}
.kids-card-description {
  font-size: 22px;
  color: #ffffff;
  font-family: 'DIN Next LT Arabic-n';
  font-weight: 300;
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
  transition: background-color 0.3s; /* Smooth background color change */
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
    width: 90%;
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
