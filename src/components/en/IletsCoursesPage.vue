<template>
  <PopUp />

  <div style="background-color: #fff;">
    <div class="ilets-sec1">
      <div class="text-container">
        <picture>
          <source media="(max-width: 768px)" srcset="@/assets/images/ilets/content1en.png">
          <img src="@/assets/images/ilets/content1en.png" alt="Description" />
        </picture>
        <button @click="sendMessage" id="ilets-prep-btn">
        Start your preparation journey now        
        </button>
      </div>
    </div>
    
    <div class="ilets-sec3">
      <h2>What is the IELTS test?</h2>
      <h1>Everything You Need to Know About the IELTS Test</h1>
      <IletsSlider />
    </div>

  <div class="ilets-sec5">
    <div class="founder-info">
      <h1>How do we prepare you for the IELTS test?</h1>
      <p>
        At Monglish Academy, we offer you the best preparatory program for the IELTS test that fully equips you to achieve the highest scores and reach your academic and professional aspirations.        
      </p>
      <h3>
        Let us help you achieve your dream of success in the IELTS test!
      </h3>
      <button @click="sendMessage" id="ilets-prep-btn">
        Join us now       
      </button>
    </div>
      <div class="founder2-images">
        <IletsSlider2 />
    </div>
  </div>

<div class="kids-sec9">
  <div class="kids-sec9-content">
    <div class="kids-sec9-text">
      <h3>Features of the Preparation Program</h3>
      <h2>For the IELTS Exam at the Academy</h2>
      <p>We strive to provide the best educational experience to ensure your success in the IELTS exam, which is why we offer you a range of exclusive features, including:</p>
      
      <div @click="toggleDescription2(1)" class="kids-sec9-title" :class="{ active: activeDescription === 1 }">
        <span>01. Guarantee of achieving +7 in the IELTS:</span>
        <span class="caret">
          <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 13.75L11 20.75M11 20.75L18 27.75M11 20.75L29 20.75" stroke="url(#paint0_linear_134_3907)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="20" cy="20" r="19.5" transform="matrix(-1 0 0 1 40 0.75)" stroke="#FF994A"/>
            <defs>
              <linearGradient id="paint0_linear_134_3907" x1="10.7783" y1="27.6071" x2="30.0534" y2="15.1832" gradientUnits="userSpaceOnUse">
                <stop stop-color="#F47D21"/>
                <stop offset="1" stop-color="#FF9D52"/>
                <stop offset="1" stop-color="#FF9D52"/>
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
      <p v-if="activeDescription === 1">We guarantee that you will achieve a score of +7 or higher thanks to innovative preparation methods and full support from our teachers.</p>

      <div @click="toggleDescription2(2)" class="kids-sec9-title" :class="{ active: activeDescription === 2 }">
        <span>02. Regular assessment of your level</span>
        <span class="caret">
          <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 13.75L11 20.75M11 20.75L18 27.75M11 20.75L29 20.75" stroke="url(#paint0_linear_134_3907)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="20" cy="20" r="19.5" transform="matrix(-1 0 0 1 40 0.75)" stroke="#FF994A"/>
            <defs>
              <linearGradient id="paint0_linear_134_3907" x1="10.7783" y1="27.6071" x2="30.0534" y2="15.1832" gradientUnits="userSpaceOnUse">
                <stop stop-color="#F47D21"/>
                <stop offset="1" stop-color="#FF9D52"/>
                <stop offset="1" stop-color="#FF9D52"/>
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
      <p v-if="activeDescription === 2">Your level will be assessed regularly with personalized advice to continuously improve your performance.</p>

      <div @click="toggleDescription2(3)" class="kids-sec9-title" :class="{ active: activeDescription === 3 }">
        <span>03. Free educational resources</span>
        <span class="caret">
          <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 13.75L11 20.75M11 20.75L18 27.75M11 20.75L29 20.75" stroke="url(#paint0_linear_134_3907)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="20" cy="20" r="19.5" transform="matrix(-1 0 0 1 40 0.75)" stroke="#FF994A"/>
            <defs>
              <linearGradient id="paint0_linear_134_3907" x1="10.7783" y1="27.6071" x2="30.0534" y2="15.1832" gradientUnits="userSpaceOnUse">
                <stop stop-color="#F47D21"/>
                <stop offset="1" stop-color="#FF9D52"/>
                <stop offset="1" stop-color="#FF9D52"/>
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
      <p v-if="activeDescription === 3">Enjoy a range of free educational resources that help you practice effectively and achieve the best results.</p>

      <div @click="toggleDescription2(4)" class="kids-sec9-title" :class="{ active: activeDescription === 4 }">
        <span>04. Real test simulations</span>
        <span class="caret">
          <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 13.75L11 20.75M11 20.75L18 27.75M11 20.75L29 20.75" stroke="url(#paint0_linear_134_3907)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="20" cy="20" r="19.5" transform="matrix(-1 0 0 1 40 0.75)" stroke="#FF994A"/>
            <defs>
              <linearGradient id="paint0_linear_134_3907" x1="10.7783" y1="27.6071" x2="30.0534" y2="15.1832" gradientUnits="userSpaceOnUse">
                <stop stop-color="#F47D21"/>
                <stop offset="1" stop-color="#FF9D52"/>
                <stop offset="1" stop-color="#FF9D52"/>
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
      <p v-if="activeDescription === 4">We provide real simulation sessions for the IELTS test to ensure your complete readiness for the exam.</p>
    </div>

    <div class="kids-sec9-images">
      <img src="@/assets/images/ilets/sec3.png" alt="IELTS Preparation">
    </div>
  </div>
</div>

<div class="background-div">
  <h3>Immersion Clubs</h3>
  <h1>The ideal way to ensure excellence.</h1>
  <p>Our preparatory program is not limited to theoretical lessons only; we offer you:</p>
  <p class="bold">Book your seat in the IELTS preparation program!</p>
  <button class="start-btn" @click="sendMessage" id="whatsapp-ilets-btn">Start Now</button>
  
  <div class="columns-wrapper">  
    <div class="column-div">  
      <img src="@/assets/images/ilets/sec5-1.png">
      <h3>Immersion Clubs</h3>
      <p>Give you the opportunity to practice English through daily interactive sessions that help you improve your pronunciation and develop your skills in a fun and effective way.</p>
    </div>
  
    <div class="divider"></div> 

    <div class="column-div">  
      <img src="@/assets/images/ilets/sec5-2.png">
      <h3>Best Quality at the Lowest Price</h3>
      <p>With all these amazing features, we offer you the best IELTS preparatory experience at the lowest possible price.</p>
    </div>
  </div>
</div>

    <PackagesIlets />

    <div class="ilets-sec5">
      <div class="founder-info">
        <h1>
         Effective communication to provide the best experience for our customers
        </h1>
        <p>What do our students say about the IELTS preparation programs at Monglish?</p>
      </div>

      <div class="founder2-images">
        <img src="@/assets/images/ilets/list2.png">
      </div>
    </div>

    <ViewIlets />

    <div class="full-section">
      <div class="Last-section">
        <h1>Do you still need help?</h1>
        <p>We are happy to receive your messages and respond to all your inquiries.</p>
        <a href="https://www.monglish.co.uk/ar/contact" class="contact-btn">Contact us</a>
      </div>
    </div>

    <FormSection2 />

    <div class="full-section-2">
      <div class="inner-section">
        <h1>
            Start your journey towards excelling in the IELTS test          
            <br>
          <span>
            With Monglish now!          
            </span>
        </h1>
        <p>
            Don't waste any more time! Join the professional IELTS preparation program and benefit from full support and advanced resources. Reserve your spot today to get the best educational experience that guarantees your success and excellence.
        </p>
        <button @click="sendMessage" id="ilets-btn">
            Sign Up Now
          <i class="fab fa-whatsapp"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import IletsSlider from '../../components/en/IletsSlider.vue';
import IletsSlider2 from '../../components/en/IletsSlider2.vue';
import PackagesIlets from '../../components/en/PackagesIlets.vue';
import ViewIlets from '../../components/en/ViewIlets.vue';
import FormSection2 from '../../components/en/FormSection2.vue';
import PopUp from '../../components/en/PopUp2.vue';

export default {
  name: "IletsCourses",
  components: {
    IletsSlider,IletsSlider2,PackagesIlets,ViewIlets,FormSection2,
    PopUp
  },
  data() {
    return {
      activeDescription: null,
    }
  },
  methods: {
    toggleDescription2(id) {
      this.activeDescription = this.activeDescription === id ? null : id;
    },
    async sendMessage() {
      try {
        const response = await fetch(`https://service.monglish.co.uk/api/custom-phone-numbers`);
        if (!response.ok) {
          console.log('Network response was not ok');
        }
        const data = await response.json();
        this.getNumber = data.phone_number;

        if (this.chatInput !== '' && this.getNumber) {
          const baseUrl = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
              ? 'whatsapp://send'
              : 'https://web.whatsapp.com/send';
          const url = `${baseUrl}?phone=${this.getNumber}&text=${this.chatInput}`;
          window.open(url, '_blank');
        }
      } catch (error) {
        console.error('Error fetching phone number:', error);
        console.log(this.getNumber);
      }
    }
  }
}


</script>

<style scoped>
.ilets-sec1 {
  background-image: url('@/assets/images/ilets/bg1-en.png');
  background-size: cover;
  background-position: center;
  position: relative;
  text-align: right;
  padding: 0;
  height: 120vh;
  direction: ltr;
  margin-top: -85px;
  z-index: 1;
}
@media (max-width: 768px) {
  .ilets-sec1 {
    background-image: url('@/assets/images/ilets/mob1.png');
  }
}
.ilets-sec2 {
  position: relative; 
  z-index: 2; 
}
.ilets-img {
  width: 100%;
  height: 30vh;
  margin-top: -180px;
  z-index: 10;
}
@media (max-width: 768px) {
  .ilets-img {
    height: 20vh;
    margin-top: -100px;
  }
}
.sec1-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8% 3% 8% 3%;
}
.ilets-sec1 button , .ilets-sec5 button{
  width: 100%;
  max-width: 25%;
  padding: 0.5rem 0.25rem;
  background: linear-gradient(45deg, #fe9b4f, #f77919);
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1.2rem;
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
  transition: background 0.3s ease, transform 0.3s ease;
  margin-top: 20px;
}
@media (max-width: 768px) {
  .sec1-content img{
    padding-top: 500px; 
  }
  .ilets-sec1 button , .ilets-sec5 button{
    margin: 15px auto 0 auto;
    max-width: 70%;
  }
}

.ilets-sec3 {
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
  text-align: center;
  direction: ltr;
  background-color: #fff;
  padding: 2%;
}
.ilets-sec3 h1{
  color: #165E84;
  font-size: 48px;
}
.ilets-sec3 h2{
  color: #000;
  font-size: 36px;
}
@media (max-width: 768px) {
   .ilets-sec3 h1{
        font-size: 28px;
    }
    .ilets-sec3 h2{
        padding: 5% 0 0 0;
        font-size: 22px;
    } 
}

.ilets-sec5 {
  background-image: url('@/assets/images/bg.jpg');
  background-size: cover;
  background-position: center;
  font-family: 'DIN Next LT Arabic', sans-serif;
  color: white;
  display: flex;
  padding: 2%; 
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  direction: ltr;
  text-align: left; 
}
.founder2-images {
  flex: 1; 
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 60%;
}
.founder2-images img {
  max-width: 100%;
  height: auto;
}
.founder-info {
  flex: 1.5; 
  max-width: 40%;
  padding-right: 3%;
}
.founder-info h1 {
  font-size: 3rem;
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
  margin-bottom: 20px;
  line-height: 1.2;
}
.founder-info p {
  font-size: 1.2rem;
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
  margin-bottom: 20px;
  line-height: 1.2;
}
@media (max-width: 1200px) {
  .ilets-sec5 {
    flex-direction: column;
    height: auto;
  }
  .founder-info {
    max-width: 90%;
    margin-bottom: 20px;
    padding-right: 0;
  }
}
@media (max-width: 768px) {
  .founder-info h1 {
    font-size: 2.2rem;
  }
  .founder-info h3 {
    font-size: 1.5rem;
  }
  .founder-info p {
    font-size: 1rem;
  }
  .founder2-images{
    width: 100%;
  }
  .founder2-images img {
    max-width: 100%; 
  }
}
@media (max-width: 480px) {
  .founder-info {
    text-align: center;
  }
  .founder2-images{
    width: 100%;
  }
  .founder-info h1 {
    font-size: 1.8rem;
  }
  .founder-info h3 {
    font-size: 1.3rem;
  }
  .founder-info ol li {
    font-size: 1rem;
    margin-bottom: 8px;
  }
  .founder2-images img {
    max-width: 100%; 
  }
}

.full-section{
    background-color: #fff;
    padding: 2% 6% 1% 6%;
    direction: ltr;
}
.Last-section h1 {
  font-size: 40px;
  line-height: 60px;
  font-family: 'DIN Next LT Arabic', sans-serif;
  font-weight: 500;
}
.Last-section {
  width: 100%;
  background-color: #eee;
  border-radius: 15px;
  direction: ltr;
  text-align: left;
  position: relative;
  padding: 20px;
  margin: 20px auto;
}
.Last-section p {
  font-family: 'DIN Next LT Arabic', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
}
.contact-btn {
  display: inline-block;
  background: linear-gradient(45deg, #fe9b4f, #f47e23);
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  text-align: center;
  text-decoration: none;
  font-family: 'DIN Next LT Arabic', sans-serif;
  font-size: 20px;
  font-weight: 500;
  position: absolute;
  right: 20px; 
  bottom: 20px;
}
@media (max-width: 768px) {
  .Last-section {
    width: 95%;  /* Full width for mobile */
    padding: 10px;  /* Adjust padding */
    margin: 20px auto;  /* Adjust margin */
  }
  .Last-section h1 {
    font-size: 28px;  /* Smaller font size for mobile */
    line-height: 40px;  /* Adjust line height */
  }
  .Last-section p {
    font-size: 16px;  /* Smaller font size for mobile */
    line-height: 24px;  /* Adjust line height */
  }
  .contact-btn {
    padding: 8px 16px;  /* Adjust padding */
    font-size: 18px;  /* Smaller font size for mobile */
    position: relative;  /* Change position to relative */
    left: auto;  /* Reset right position */
    bottom: auto;  /* Reset bottom position */
    margin-top: 10px;  /* Add margin for spacing */
  }
}

.full-section-2 {
  background-color: #fff;
  padding: 4%;
}
.inner-section {
  background-image: url('@/assets/images/ilets/fif.png');
  background-size: cover;
  background-position: center;
  font-family: 'DIN Next LT Arabic', sans-serif;
  border-radius: 20px;
  padding: 2% 5%;
  color: #000;
  text-align: center;
  direction: ltr;
}
.inner-section h1 {
  color: #000;
  font-size: 48px;
  font-weight: 500;
  margin-bottom: 20px;
}
.inner-section h1 span {
  color: #fff;
  background-color: #f77919;
  padding: 0 10px;
  line-height: 1; 
  display: inline-block; 
  padding-bottom: 12px; 
}
.inner-section p {
  font-size: 1.2rem;
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
  margin-bottom: 20px;
  line-height: 1.5;
  padding: 0 10%;
  color: #343434;
}
.inner-section button {
  width: 100%;
  max-width: 25%;
  padding: 0.5rem 0.25rem;
  background: linear-gradient(45deg, #fe9b4f, #f77919);
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1.2rem;
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
  transition: background 0.3s ease, transform 0.3s ease;
  margin-top: 20px;
}
.inner-section button:hover {
  transform: scale(1.05);
  background: linear-gradient(45deg, #f77919, #fe9b4f);
}
@media (max-width: 1200px) {
  .inner-section h1 {
    font-size: 40px; 
  }
  .inner-section p {
    font-size: 1.1rem;
    padding: 0 15%; 
  }
  .inner-section button {
    max-width: 30%; 
  }
}
@media (max-width: 768px) {
  .inner-section {
    padding: 5% 10%; 
  }
  .inner-section h1 {
    font-size: 32px; 
  }
  .inner-section p {
    font-size: 1rem;
    padding: 0 10%; 
  }
  .inner-section button {
    max-width: 40%; 
  }
}
@media (max-width: 480px) {
  .inner-section {
    padding: 8% 5%; 
  }
  .inner-section h1 {
    font-size: 28px; 
  }
  .inner-section p {
    font-size: 0.9rem;
    padding: 0 5%; 
  }
  .inner-section button {
    max-width: 60%;
    font-size: 1rem; 
  }
}

.background-div {
  width: 100%;
  height: 500px;
  background-image: url('@/assets/images/ilets/sec5.jpg'); 
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; 
  padding: 20px;
  text-align: left; 
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
  direction: ltr;
}

h1 {
  font-size: 2.5rem;
  font-weight: 700;
}

h3 {
  font-size: 1.8rem;
}

p {
  font-size: 1.2rem;
}

.bold {
  font-size: 1.3rem;
}

.start-btn {
  width: 100%;
  max-width: 25%;
  padding: 0.5rem 0.25rem;
  background: linear-gradient(45deg, #fe9b4f, #f77919);
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1.2rem;
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
  margin: 1% 0;
}

/* Columns layout */
.columns-wrapper {
  display: flex;
  align-items: center; /* Align items vertically */
}

.column-div {
  width: 48%; /* Each column takes 48% width */
}

.divider {
  width: 1px;
  height: 100%;
  background-color: white; /* White line between the columns */
  margin: 0 2%; /* Small space between columns */
}

/* Mobile View */
@media (max-width: 768px) {
  .background-div {
    height: 900px;
    background-image: url('@/assets/images/ilets/sec5-mobb.png'); /* Mobile background for English version */
  }

  h1 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }

  .columns-wrapper {
    flex-direction: column; /* Stack columns in mobile view */
  }

  .column-div {
    width: 100%;
  }

  .divider {
    display: none; /* Hide the divider in mobile view */
  }

  .start-btn {
    max-width: 60%;
    margin: 0 auto; /* Center the button */
  }
}

.kids-sec9 {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1em;
  background-color: #fff;
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
  color: #4e5354;
  position: relative;
  direction: ltr;
  text-align: left;
}
.kids-sec9-content {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: auto;
}
.kids-sec9-images img {
  padding: 2%;
}
.kids-sec9-text {
  padding-right: 1em;
  max-width: 100%;
  text-align: center;
}
.kids-sec9-text h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #165e84;
    text-align: left;
  font-family: 'DIN Next LT Arabic-n';
}
.kids-sec9-text h3 {
  font-size: 2rem;
    text-align: left;
}
.kids-sec9-text .kids-sec9-title {
  font-size: 1.3rem;
  font-weight: 500;
  margin: 1rem 0;
  cursor: pointer;
  color: #6f8286;
  font-family: 'DIN Next LT Arabic';
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.kids-sec9-text .kids-sec9-title.active {
  color: #ff6f00;
}
.kids-sec9-text .caret svg path {
  fill: #6f8286; 
  transition: fill 0.3s ease;
}
.kids-sec9-text .kids-sec9-title.active .caret svg path {
  fill: #ff6f00; 
}
.kids-sec9-text .caret {
  transition: transform 0.3s ease;
}
.kids-sec9-text .kids-sec9-title.active .caret {
  transform: rotate(180deg);
}
.kids-sec9-text p {
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.6;
  text-align: left;
}
@media (min-width: 768px) {
  .kids-sec9-content {
    flex-direction: row;
  }
  .kids-sec9-images img {
    width: 100%;
    margin: 0;
  }
  .kids-sec9-text {
    max-width: 100%;
    text-align: right;
  }
  .kids-sec9-text h2 , .kids-sec9-text h3 {
    font-size: 2.4rem;
  }
  .kids-sec9-text .kids-sec9-title {
    font-size: 1.5rem;
  }
  .kids-sec9-text p {
    font-size: 1.2rem;
  }
}
@media (min-width: 1024px) {
  .kids-sec9-content {
    padding: 40px;
  }
  .kids-sec9-text h2 , .kids-sec9-text h3 {
    font-size: 2.8rem;
  }
  .kids-sec9-text .kids-sec9-title {
    font-size: 1.6rem;
  }
  .kids-sec9-text p {
    font-size: 1.3rem;
  }
}
</style>
