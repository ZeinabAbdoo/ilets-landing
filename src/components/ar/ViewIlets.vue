<template>
  <div class="faq-section-n">
    <h3>أسئلة شائعة</h3>
    <h2>وإجابات لكل استفساراتكم</h2>
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
          question: 'كيف أبدأ في برنامج التحضير؟',
          answer: 'للبدء في برنامج التحضير لاختبار IELTS، يجب عليك أولاً إجراء اختبار تحديد المستوى في أكاديمية مونجلش للتأكد من أنك اجتزت مستوى A2 في دورة الكبار.'
        },
        {
          question: 'هل يتم تقديم الاختبارات التجريبية؟',
          answer: 'نعم، نحن نقدم اختبارات تجريبية شهرية أو كل أسبوعين حسب الباقة التي تختارها. هذه الاختبارات تضمن استعدادك الكامل للاختبار الفعلي وتوفر لك تغذية راجعة دقيقة حول أدائك.'
        },
        {
          question: "هل يتوفر دعم شخصي أثناء التحضير؟",
          answer: "نعم، نقدم دعمًا فرديًا للطلاب في باقة Immersion Plus، حيث يحصل الطالب على جلسات دعم فردية أسبوعية تركز على تحسين مهارات الاستماع والتحدث."
        },
        {
          question: "كيف يمكنني التسجيل في اختبار IELTS الرسمي؟",
          answer: "يمكنك التسجيل في اختبار IELTS الرسمي عبر المراكز المعتمدة مثل المجلس الثقافي البريطاني (British Council)، IDP، أو Cambridge English."
        }
      ],
      faqItems_2: [
        {
          question: "ما الفرق بين اختبار IELTS الأكاديمي و العام؟",
          answer: "اختبار IELTS Academic مخصص للدراسة الأكاديمية والهجرة أو العمل في منظمات حكومية كبرى. بينما IELTS General موجه لأولئك الذين يرغبون في العمل في شركات أجنبية أو لأغراض غير أكاديمية."
        },
        {
          question: "ما هي مدة صلاحية شهادة IELTS؟",
          answer: "شهادة IELTS صالحة لمدة سنتين فقط. بعد انتهاء هذه الفترة، يجب عليك إعادة إجراء الاختبار إذا كنت بحاجة إلى تقديم الشهادة مرة أخرى."
        },
        {
          question: "ما هي المهارات التي يتم اختبارها في IELTS؟",
          answer: "يختبر اختبار IELTS أربع مهارات رئيسية هي: الاستماع، التحدث، القراءة، والكتابة. يتم اختبار جميع المهارات في نفس اليوم ما عدا التحدث، الذي يمكن إجراؤه في يوم مختلف."
        },
        {
          question: "هل يمكنني الحصول على تسجيلات الحصص؟",
          answer: "نعم، جميع الحصص يتم تسجيلها وإتاحتها لك للمراجعة في أي وقت لضمان الاستفادة القصوى من المحتوى التعليمي."
        }
      ]
    };
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

