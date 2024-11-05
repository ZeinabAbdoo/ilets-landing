<template>
  <div class="faq-section-n" style="direction:ltr;">
    <h3>Frequently Asked Questions</h3>
    <h2>And answers to all your inquiries</h2>
    <div class="faq-items-n">
      <div class="faq-items-sub">
      <div class="faq-item-min" v-for="(item, index) in faqItems_1" :key="index">
        <button @click="toggleAnswer(index)" :class="{ active: activeIndex === index }">
          {{ item.question }}
          <span :class="{ activeSpan: activeIndex === index }">
            <span v-if="activeIndex === index">-</span>
            <span v-else>+</span>
          </span>
        </button>
        <transition name="fade">
          <div v-show="activeIndex === index" :class="['answer', { 'answer-active': activeIndex === index }]">
            {{ item.answer }}
          </div>
        </transition>
      </div>
      </div>
      <div class="faq-items-sub">
      <div class="faq-item-min" v-for="(item, index) in faqItems_2" :key="index + 3">
        <button @click="toggleAnswer(index + 3)" :class="{ active: activeIndex === index + 3 }">
          {{ item.question }}
          <span :class="{ activeSpan: activeIndex === index + 3 }">
            <span v-if="activeIndex === index + 3">-</span>
            <span v-else>+</span>
          </span>
        </button>
        <transition name="fade">
          <div v-show="activeIndex === index + 3" :class="['answer', { 'answer-active': activeIndex === index + 3 }]">
            {{ item.answer }}
          </div>
        </transition>
      </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ViewThree',
data() {
  return {
    activeIndex: null,
    faqItems_1: [
      {
        question: 'How do I start the preparation program?',
        answer: 'To start the IELTS preparation program, you must first take a placement test at Monglish Academy to ensure that you have passed the A2 level in the adult course.'
      },
      {
        question: 'Are mock tests provided?',
        answer: 'Yes, we offer monthly or bi-weekly mock tests depending on the package you choose. These tests ensure you are fully prepared for the actual test and provide accurate feedback on your performance.'
      },
      {
        question: "Is personal support available during preparation?",
        answer: "Yes, we offer individual support for students in the Immersion Plus package, where the student receives weekly one-on-one sessions focusing on improving listening and speaking skills."
      },
      {
        question: "How can I register for the official IELTS test?",
        answer: "You can register for the official IELTS test through accredited centers like the British Council, IDP, or Cambridge English."
      }
    ],
    faqItems_2: [
      {
        question: "What is the difference between the Academic and General IELTS test?",
        answer: "The IELTS Academic test is intended for academic study, immigration, or work in major government organizations. The IELTS General test is aimed at those who want to work in foreign companies or for non-academic purposes."
      },
      {
        question: "How long is the IELTS certificate valid?",
        answer: "The IELTS certificate is valid for only two years. After this period, you must retake the test if you need to present the certificate again."
      },
      {
        question: "What skills are tested in IELTS?",
        answer: "The IELTS test assesses four main skills: listening, speaking, reading, and writing. All skills are tested on the same day except for speaking, which can be scheduled for a different day."
      },
      {
        question: "Can I get recordings of the lessons?",
        answer: "Yes, all lessons are recorded and made available for you to review at any time to ensure you make the most of the educational content."
      }
    ]
  }
},
  methods: {
    toggleAnswer(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
    navigateToFAQ() {
      this.$router.push('/ar/faq');
    }
  },
};
</script>

<style src="@/assets/styles/ar/ViewThree.css" scoped></style>

