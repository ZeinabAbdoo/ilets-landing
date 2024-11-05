<template>
  <div class="content-slider-container">
    <!-- Text Content Section -->
    <div class="text-content">
      <h1>عملاؤنا يشهدون لنا!</h1>
      <p>
        نحن فخورون بآراء عملائنا الإيجابية التي تشجعنا على تقديم الأفضل دائماً. تقييماتهم هي دليل على أننا نقدم قيمة
        حقيقية لعملائنا.
      </p>
      <h2>أصوات المتدربين تتحدث <br>عن <span>تجربة التعلم المتميزة في الأكاديمية</span></h2>
    </div>

    <!-- Slider Section -->
    <div class="video-slider-component">
      <div class="slider-container">
        <button class="slider-nav left" @click="prevSlide">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
            stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
        <div class="image-container">
  <img
    :src="currentImage.src"
    :alt="currentImage.alt"
    @click="openPopup(currentImage.videoSrc)"
    class="image-thumbnail"
  />
  <svg height="80px" width="80px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 491.444 491.444" xml:space="preserve" fill="#000000" class="video-icon">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <path style="fill:#FF9D52;" d="M0.11,245.721c-1.434,61.225,11.068,122.791,39.645,145.883c80.101,64.726,331.832,64.726,411.932,0c28.577-23.093,41.079-84.659,39.646-145.883H0.11z"></path>
      <path style="fill:#F47D21;" d="M451.687,105.91c-72.82-72.82-339.111-72.82-411.932,0C15.231,130.434,1.463,187.925,0.11,245.721h491.223C489.98,187.925,476.213,130.434,451.687,105.91z"></path>
      <path style="fill:#FFFFFF;" d="M320.941,232.105L190.51,136.284c-11.159-8.199-26.9-0.231-26.9,13.617v95.82h164.225C327.834,240.6,325.537,235.481,320.941,232.105z"></path>
      <path style="fill:#FFFFFF;" d="M190.51,355.161l130.432-95.823c4.595-3.375,6.893-8.496,6.893-13.617H163.609v95.824C163.609,355.391,179.351,363.359,190.51,355.161z"></path>
    </g>
  </svg>
</div>

        <button class="slider-nav right" @click="nextSlide">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
            stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Popup Overlay -->
    <div v-if="isPopupOpen" class="popup-overlay" @click="closePopup">
      <div class="popup-content" @click.stop>
        <button class="close-button" @click="closePopup">&times;</button>
        <iframe v-if="currentVideoSrc" :src="currentVideoSrc" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen class="popup-video"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPopupOpen: false,
      currentVideoSrc: '',
      currentSlide: 0,
      images: [
        {
          videoSrc: 'https://www.youtube.com/embed/jtEK65Jkb2c?autoplay=1',
          src: require('@/assets/images/video/6.png'),
          alt: 'Video 1 Thumbnail',
        },
        {
          videoSrc: 'https://www.youtube.com/embed/jdWsjo_IpWE?autoplay=1',
          src: require('@/assets/images/video/7.png'),
          alt: 'Video 2 Thumbnail',
        },
      ],
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentSlide];
    },
  },
  methods: {
    openPopup(videoSrc) {
      this.currentVideoSrc = videoSrc;
      this.isPopupOpen = true;
    },
    closePopup() {
      this.isPopupOpen = false;
      this.currentVideoSrc = '';
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.images.length;
    },
    prevSlide() {
      this.currentSlide =
        (this.currentSlide - 1 + this.images.length) % this.images.length;
    },
  },
};
</script>

<style scoped>
.content-slider-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: white;
  direction: rtl;
}

.text-content {
  flex: 1;
  padding-right: 5%;
}

.text-content h1 {
  color: #165e84;
  font-size: 48px;
  font-weight: 700;
  font-family: 'DIN Next LT Arabic';
  margin-bottom: 3%;
}

.text-content h2 {
  color: #3D3D3D;
  font-size: 40px;
  font-weight: 500;
  font-family: 'DIN Next LT Arabic';
  line-height: 52px;

}

.text-content h2 span {
  color: #165e84;
  line-height: 52px;
}

.text-content p {
  color: #4b4b4b;
  font-size: 20px;
  width: 70%;
  margin-bottom: 2%;
}

.text-content button {
  padding: 12px;
  background: linear-gradient(45deg, #fe9b4f, #f47e23);
  color: white;
  border: none;
  border-radius: 25px;
  width: 40%;
  cursor: pointer;
  font-size: 20px;
}

.video-slider-component {
  flex: 1;
}

.slider-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-container {
  position: relative;
  display: inline-block;
}

.image-thumbnail {
  width: 400px;
  object-fit: cover;
  cursor: pointer;
}

.video-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none; 
  transition: transform 0.3s ease; 
  pointer-events: none; 
}

.image-container:hover .video-icon {
  transform: translate(-50%, -50%) scale(1.5);
}

.video-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none; 
  transition: transform 0.3s ease; 
  pointer-events: none; 
}

.image-container:hover .video-icon {
  transform: translate(-50%, -50%) scale(1.5);
}

.slider-nav {
  color: #165e84;
  cursor: pointer;
  position: absolute;
  z-index: 10;
  background-color: transparent;
  transition: color 0.3s ease;
  border: none;
}
.slider-nav svg{
  width:50px;
  height:50px;
}

.slider-nav.left {
  left: 5vw;
}

.slider-nav.right {
  right: 5vw;
}

.slider-nav:hover {
  color: #2178a6;
}

.slider-nav:active {
  color: #fff;
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-content {
  width: 26vw;
  height: 95vh;  
  overflow: hidden;
  position: relative;
}

.popup-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@keyframes popupIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.close-button {
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 4rem;
  cursor: pointer;
  transition: color 0.3s ease; 
}

.close-button:hover {
  color: #d9534f; 
}
@media (max-width: 850px) {
  .content-slider-container {
    display: block; 
  }
  
  h1 {
    font-size: 30px;
  }

  .slider-nav.left {
    left: 0;
  }

  .slider-nav.right {
    right: 0;
  }

  .popup-content {
    width: 95%;
    height: auto;
  }

  .popup-video {
    height: calc(100vw * (16 / 9));
    width: 100%;
  }

  .carousel-track {
    justify-content: center;
  }

  .item {
    transform: none !important;
    opacity: 1 !important;
  }

  img {
    width: 80%;
    height: auto;
  }
      .text-content h1 ,.text-content p , .text-content h2 , .text-content button{
    padding-right: 0;
    padding-left: 0;
    text-align: center;
    width: 100%;
  }
}
</style>
