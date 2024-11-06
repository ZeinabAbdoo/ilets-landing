<template>
  <PopUp />
  <div style="background-color: #fff;">
    <div class="ilets-sec1">
      <div class="text-container">
        <p class="sub-title">
          يشترط اجتياز اختبار تحديد مستوى اللغة الإنجليزية (A2 علي الاقل) في مونجلش
        </p>
        <h1 class="ielts-heading">تحضيرك لاختبار <span class="ielts-text-heading">IELTS</span></h1>
        <p class="prgrph-1">يبـــــــــدأ هنا مع</p>
        <p class="prgrph-2">مونجــــــــــــــــــــلش!</p>
        <p class="prgrph-3">
          استعد لاجتياز اختبار IELTS بنجاح مع برامج التحضير المتكاملة لدينا. مع مدرسين معتمدين، ومصادر تعليمية شاملة، ودروس تفاعلية، للمساعدة على تحقيق الدرجة التي تحتاجها. سجل الآن!
        </p>
        <button @click="sendMessage" id="ilets-prep-btn">
          ابدأ رحلة التحضير الآن
          <i class="fab fa-whatsapp"></i>
        </button>
      </div>
    </div>
    
    <div class="ilets-sec3">
      <h2>ما هو اختبار IELTS؟ </h2>
      <h1>كل ما تحتاج معرفته عن اختبار IELTS</h1>
      <IletsSlider />
    </div>

    <div class="ilets-sec5">
      <div class="founder-info">
        <h1>كيف نقوم بإعدادك لاختبار IELTS؟</h1>
        <p>
          في أكاديمية مونجلش، نقدم لك أفضل برنامج تحضيري لاختبار IELTS الذي يجعلك على أتم الاستعداد لتحقيق أعلى الدرجات والوصول إلى طموحاتك الأكاديمية والمهنية.        
        </p>
        <h3>
          دعنا نساعدك في تحقيق حلمك بالنجاح في اختبار IELTS!
        </h3>
        <button @click="sendMessage" id="ilets-prep-btn">
        انضم إلينا الآن       
        </button>
      </div>
      <div class="founder2-images">
        <IletsSlider2 />
       </div>
    </div>

  <div class="kids-sec9">
    <div class="kids-sec9-content">
      <div class="kids-sec9-text">
        <h3>مميزات برنامج التحضير</h3>
        <h2>لاخــــــــــــــتبار IELTS في الأكاديمية</h2>
        <p>نحن نحرص على تقديم أفضل تجربة تعليمية لضمان تفوقك في اختبار الـ IELTS، لذلك نقدم لك مجموعة من المميزات الحصرية التي تشمل:</p>
        <div @click="toggleDescription2(1)" class="kids-sec9-title" :class="{ active: activeDescription === 1 }">
          <span>01. ضمان الحصول على +7 في الـ IELTS:</span>
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
        <p v-if="activeDescription === 1">نضمن لك الحصول على درجة +7 أو أعلى بفضل طرق التحضير المبتكرة والدعم الكامل من معلمينا.</p>

        <div @click="toggleDescription2(2)" class="kids-sec9-title" :class="{ active: activeDescription === 2 }">
          <span>02. تقييم مستواك بشكل دوري</span>
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
        <p v-if="activeDescription === 2">يتم تقييم مستواك بشكل دوري وتقديم نصائح فردية لتحسين أدائك باستمرار.</p>

        <div @click="toggleDescription2(3)" class="kids-sec9-title" :class="{ active: activeDescription === 3 }">
          <span>03. مصادر تعليمية مجانية</span>
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
        <p v-if="activeDescription === 3">استمتع بمجموعة من الموارد التعليمية المجانية التي تساعدك على التدرب بشكل فعال وتحقيق أفضل النتائج.</p>

        <div @click="toggleDescription2(4)" class="kids-sec9-title" :class="{ active: activeDescription === 4 }">
          <span>04. محاكاة حقيقية للاختبار</span>
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
        <p v-if="activeDescription === 4">نعمل على تقديم جلسات محاكاة فعلية لاختبار IELTS لضمان جاهزيتك الكاملة للامتحان.</p>
      </div>
      <div class="kids-sec9-images">
        <img src="@/assets/images/ilets/sec3.png">
      </div>
    </div>
  </div>

  <div class="background-div">
    <button class="start-btn" @click="sendMessage" id="whatsapp-ilets-btn">ابدأ الآن</button>
  </div>

    <PackagesIlets />

    <div class="ilets-sec5">
      <div class="founder-info">
        <h3>تواصل فعّال لتقديم</h3>
        <h1>
         أفضل تجربة لعملائنا
        </h1>
        <p>ماذا يقول طلابنا عن برامج التحضير لاختبار IELTS في مونجلش؟</p>
      </div>

      <div class="founder2-images">
        <img src="@/assets/images/ilets/list.png">
      </div>
    </div>

    <ViewIlets />

    <div class="full-section">
      <div class="Last-section">
        <h1>مازلت تحتاج للمساعدة ؟</h1>
        <p>يسعدنا استقبال رسائلكم والرد على جميع استفساراتكم.</p>
        <a href="https://www.monglish.co.uk/ar/contact" class="contact-btn">تواصل معنا</a>
      </div>
    </div>

    <FormSection2 />

    <div class="full-section-2">
      <div class="inner-section">
        <h1>
          ابدأ رحلتك نحو التفوق في اختبار IELTS
          <br>
          <span>
            مع مونجلش الآن!
          </span>
        </h1>
        <p>
          لا تضيع المزيد من الوقت! انضم لبرنامج التحضير الاحترافي لاختبار IELTS واستفد من الدعم الكامل والموارد المتقدمة. احجز مكانك اليوم لتحصل على أفضل تجربة تعليمية تضمن لك النجاح والتفوق.
        </p>
        <button @click="sendMessage" id="ilets-btn">إشترك معنا الأن
          <i class="fab fa-whatsapp"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import IletsSlider from '../../components/ar/IletsSlider.vue';
  import IletsSlider2 from '../../components/ar/IletsSlider2.vue';
  import PackagesIlets from '../../components/ar/PackagesIlets.vue';
  import ViewIlets from '../../components/ar/ViewIlets';
  import FormSection2 from '../../components/ar/FormSection2.vue';
  import PopUp from '../../components/ar/PopUp2.vue';

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
  .ilets-sec1, .ilets-sec3, .ilets-sec5, .kids-sec9, .full-section, .full-section-2 {
    font-family: 'DIN Next LT Arabic';
    font-weight: 700;
  }

  .ilets-sec1 {
    background-image: url('@/assets/images/ilets/bg1-1.png');
    background-size: cover;
    background-position: center;
    position: relative;
    text-align: right;
    padding: 2rem 4rem;
    height: 140vh;
    direction: rtl;
    z-index: 1;
    display: flex;
    align-items: flex-start;
    margin-top: -85px;
  }

  .text-container {
    max-width: 45%;
    position: relative;
    z-index: 2;
    padding: 8rem 2rem;
    color: #ffffff;
  }

  .sub-title {
    border: 1px solid #FFFFFF;
    background: #CAD2D74D; 
    opacity: 0.8;
    padding: 16px;
    border-radius: 16px;
    font-size: 16px;
    width: fit-content;
  }

  h1.ielts-heading{
    font-size: 36px;
    display: flex;
    align-items: center;
    column-gap: 30px;
    margin-block: 0;
  }

  h1 .ielts-text-heading {
    font-size: 140px;
    font-family: 'DIN Next LT Arabic';
    font-weight: 700;
  }

  .prgrph-1{
    font-size: 80px;
    color: #ffffff;
    line-height: 10px;
  }

  .prgrph-2{
    color: #F47D21;
    font-size: 110px;
  }

  .prgrph-3{
    font-size: 20px;
  }

  .prgrph-1, .prgrph-2, .prgrph-3{
    margin-block: 0;
  }

  @media (max-width: 768px) {
    .ilets-sec1 {
      background-image: url('@/assets/images/ilets/mob1.png');
      background-size: contain;
      background-repeat: no-repeat;
      padding-inline: 2rem;
      margin-top: -326px;
    }
    .text-container {
      max-width: max-content;
      padding-block: 35rem;
      padding-inline: 0;
      margin-block: 0;
    }

    .sub-title {
      border: 1px solid #ffffff;
      background: rgba(208, 239, 255, 0.6);
      padding: 16px;
      font-size: 14px;
      color: #165E84;
      display: flex;
      margin-block: 0;
    }
    h1.ielts-heading{
      font-size: 24px;
    }
    h1 .ielts-text-heading {
      font-size: 60px;
    }
    .prgrph-1{
      font-size: 32px;
      text-align: center;
    }
    .prgrph-2{
      font-size: 40px;
      text-align: center;
    }
    .prgrph-3{
      font-size: 14px;
    }
    .prgrph-1, .prgrph-2, .prgrph-3 {
      margin-block: 5px;
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
    max-width: 45%;
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
      max-width: 100%;
    }
  }

  .ilets-sec3 {
    font-family: 'DIN Next LT Arabic';
    font-weight: 500;
    text-align: center;
    direction: rtl;
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
    padding: 5% 1%; 
    position: relative;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    direction: rtl;
    text-align: right; 
  }
  .founder2-images {
    flex: 1; 
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .founder2-images img {
    max-width: 100%;
    height: auto;
  }
  .founder-info {
    flex: 1.5; 
    max-width: 50%;
    padding-right: 3%;
  }
  .founder-info h3 {
    font-size: 1.9rem;
    margin-bottom: 20px;
    font-weight: 500;
    text-transform: uppercase; 
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
  .founder-info ol {
    padding: 0;
    list-style-position: inside; 
  }
  .founder-info ol li {
    font-size: 1.2rem;
    margin-bottom: 10px;
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
    .founder2-images img {
      max-width: 100%; 
    }
    .founder2-images {
      max-width: 100%; 
    }
  }
  @media (max-width: 480px) {
    .founder-info {
      text-align: center;
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
    .founder2-images {
      max-width: 100%; 
    }
  }

  .full-section{
      background-color: #fff;
    padding: 2% 6% 1% 6%;
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
    direction: rtl;
    text-align: right;
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
    background: linear-gradient(111.84deg, #2C80AC 0%, #165E84 100%);
    color: white;
    padding: 10px 20px;
    border-radius: 25px;
    text-align: center;
    text-decoration: none;
    font-family: 'DIN Next LT Arabic', sans-serif;
    font-size: 20px;
    font-weight: 500;
    position: absolute;
    left: 20px; 
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
    padding: 0 20%;
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
    background-image: url('@/assets/images/ilets/sec5.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
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
    position: absolute;
    bottom: 50px;
    right: 50px;
  }

  @media (max-width: 768px) {
    .background-div {
      height: 900px;
      background-image: url('@/assets/images/ilets/sec5-mob.png');
    }

    .start-btn {
      max-width: 60%;
      bottom: 60%; 
      right: 0;
      left: 0;
      margin: 0 auto; 
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
    font-family: 'DIN Next LT Arabic-n';
  }
  .kids-sec9-text h3 {
    font-size: 2rem;
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
  }
  @media (min-width: 768px) {
    .kids-sec9-content {
      flex-direction: row;
    }
    .kids-sec9-images img {
      width: 100%;
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
