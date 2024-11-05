<template>
    <div v-if="showPopup2" class="popup-overlay" @click="closePopup2">
      <div class="popup-content" @click.stop :class="{ 'popup-disabled': loading }">
        <button class="close-button" @click="closePopup2" :disabled="loading">&times;</button>
        <div class="popup-body">
          <div class="popup-text">
            <h2>Register now!</h2>
            <h1>Enjoy discount 50%</h1>
            <div class="pop-card">
              <p>On Immersion packages</p>
            </div>
            <p class="pop-desc">And get a free trial! For a limited time</p>
            <form @submit.prevent="register" class="pop-form" :class="{ 'form-disabled': loading }">
              <div class="inline-group">
                <div class="form-pop">
                  <label for="fullName" class="pop-label">Full Name</label>
                  <input type="text" class="pop-input" id="fullName" placeholder="Full Name" v-model="fullName" 
                    required :disabled="loading" />
                </div>
                <div class="form-pop">
                  <label for="phoneNumber" class="pop-label">Phone Number</label>
                  <vue-tel-input 
                    class="pop-input" 
                    v-model:phoneNumber="phoneNumber" 
                    v-model:country="country" 
                    @input="onPhoneInput" 
                    @validate="onPhoneValidate" 
                    mode="international" 
                    :preferred-countries="['SA', 'KW', 'AE', 'QA', 'EG', 'JO', 'OM', 'YE', 'BH', 'IQ']" 
                    defaultCountry="SA" 
                    :inputOptions="inputOptions" 
                    :inputprops="{ name: 'phoneNumber', id: 'phoneNumber', required: true, placeholder: 'Phone Number' }" 
                    :disabled="loading" 
                  />
                </div>
              </div>
              <div class="form-pop">
                <label for="email" class="pop-label">Email</label>
                <input type="email" class="pop-input" id="email" placeholder="example@email.com" v-model="email" 
                  required :disabled="loading" />
              </div>
              <input type="hidden" v-model="fullPhoneNumber" />
              <button type="submit" class="pop-btn" :disabled="loading">Register</button>
            </form>
            <div v-if="loading" class="spinner-overlay">
              <div class="spinner"></div>
            </div>
            <p class="pop-bottom">Personal details are kept by monglish_frontend and will only be used in connection with your application. Please read 
              <a href="/ar/terms-and-conditions">our terms of use</a> for more information.</p>
          </div>
          <div class="popup-image"></div>
        </div>
      </div>
    </div>
</template>

<script>
  import axios from "axios";
  import { VueTelInput } from 'vue3-tel-input';
  import 'vue3-tel-input/dist/vue3-tel-input.css';

  export default {
    components: {
      VueTelInput,
    },
    data() {
      return {
        showPopup2: false,
        fullName: '',
        email: '',
        phoneNumber: '',
        country: null,
        inputOptions: {
          hiddenInput: true,
        },
        isValidPhone: false,
        fullPhoneNumber: '',
        loading: false,
      };
    },
    mounted() {
      const popupShown2 = sessionStorage.getItem('popupShown2');
      if (!popupShown2) {
        this.showPopup2 = true;
      }
    },
    methods: {
      onPhoneInput(formattedNumber, phoneObject) {
        if (phoneObject && phoneObject.number) {
          console.log('Phone Input:', formattedNumber, phoneObject);
          this.fullPhoneNumber = phoneObject.number;
        }
      },
      onPhoneValidate(isValid, phoneObject) {
        console.log('Validation Result:', isValid);
        this.isValidPhone = isValid;

        if (isValid && phoneObject && phoneObject.number) {
          this.fullPhoneNumber = isValid.number;
        } else if (!isValid) {
          console.warn('Phone number is not valid.');
        }
      },
      closePopup2() {
        this.showPopup2 = false;
        sessionStorage.setItem('popupShown2', 'true');
      },
      register() {
      if (!this.fullPhoneNumber) {
        console.error('Phone number is missing or invalid.');
        return;
      }
      this.loading = true;
      const payload = {
        name: this.fullName,
        email: this.email,
        phone: this.fullPhoneNumber,
        stage: 'ilets-landing', 
      };
      
      console.log("Payload before sending:", payload);

      let headers = { 'Content-Type': 'application/json' };
      axios.post(`/api/free-session-forms`, payload, { headers })
        .then(response => {
          const data = response.data;
          if (response.status === 201) {
            console.log('Form submitted successfully:', data);
            this.successMessage = 'تم التسجيل بنجاح!'; 
            this.fullName = '';
            this.email = '';
            this.phoneNumber = '';
            this.fullPhoneNumber = '';
            this.country = null; 
          } else {
            console.error('Error in response:', data.message || 'Unknown error');
          }
        })
        .catch(error => {
          console.error('Error submitting form:', error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    },
  };
</script>

<style scoped>
  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.75);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    font-family: 'DIN Next LT Arabic-n', sans-serif;
    overflow: auto;
    direction: ltr;
  }

  .popup-content {
    background: white;
    display: flex;
    max-width: 900px;
    width: 100%;
    max-height: 100%;
    border-radius: 20px;
    position: relative;
  }

  .popup-body {
    display: flex;
    width: 100%;
  }

  .popup-text {
    flex: 1;
    padding: 30px;
    text-align: start;
    line-height: 1.5;
    margin-top: 10px;
  }

  .popup-text h2 {
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 15px;
    margin-top: 10px;
  }

  .popup-text h1 {
    font-size: 2em;
    font-weight: 700;
    line-height: 90%;
    color: #ff6f00;
    margin-bottom: 20px;
  }

  .pop-card {
    background: linear-gradient(45deg, #ff9442, #ff6f00);
    color: white;
    border-radius: 0 25px 25px 0;
    margin-inline-start: -30px;
    padding-inline-start: 30px;
    margin-top: 10px;
    padding-top: 8px;
    padding-bottom: 16px;
  }

  .pop-card p {
    line-height: 90%;
    font-size: 1.75em;
    font-weight: 500;
  }

  .pop-desc {
    line-height: 1.5;
    font-size: 22px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .popup-image {
    flex: 1;
    background-image: url('@/assets/images/popup2-en.jpeg');
    background-size: cover;
    background-position: top center;
    border-radius: 0 20px 20px 0;
    padding: 3.75em;
    width: 100%;
  }

  .close-button {
    position: absolute;
    top: -1.25rem;
    right: 0.625em;
    background: none;
    border: none;
    font-family: 'DIN Next LT Arabic', sans-serif;
    font-size: 3.75em;
    font-weight: 500;
    cursor: pointer;
  }

  form div {
    margin-bottom: 1.25em; /* adjusted to relative unit */
  }

  .pop-form {
    text-align: left;
    direction: ltr;
  }

  .pop-input {
    width: calc(100% - 1.25em);
    padding: 0.625em;
    margin: 0;
    border-radius: 30px;
    background-color: #f3f7ff;
    border: none;
  }

  form .form-pop {
    margin-bottom: 20px;
  }

  .pop-label {
    display: block;
    margin-right: 0.75em;
    text-align: left;
    font-weight: 500;
    color: #bababa;
    margin-top: 0;
    /* Consistent spacing */
    margin-bottom: 5px;
    /* Added spacing below label */
  }

  .pop-bottom {
    color: #979797;
    font-family: 'DIN Next LT Arabic-n';
    font-weight: 700;
    margin-top: 20px;
    /* Consistent margin */
  }

  .pop-bottom a {
    color: #165e84;
    text-decoration: underline;
  }

  .inline-group {
    display: flex;
    justify-content: space-between;
  }

  .inline-group .form-group {
    width: 48%;
  }

  .pop-btn {
    background: linear-gradient(45deg, #ff9442, #ff6f00);
    color: white;
    border: none;
    padding: 0.25rem 0.25rem;
    cursor: pointer;
    border-radius: 20px;
    width: 60%;
    margin-inline: 20%;
    font-size: 1.5em;
    font-family: 'DIN Next LT Arabic', sans-serif;
  }

  .pop-bottom {
    color: #979797;
  }

  /* Small screens (max-width: 768px) */
  @media (max-width: 1000px) {
    .popup-overlay {
      align-items: flex-start;
    }

    .popup-content {
      max-width: 90%;
      margin-block: 50px;
    }

    .popup-text {
      padding: 1.5em;
    }

    .popup-text h2 {
      font-size: 1.5em;
    }

    .popup-text h1 {
      font-size: 2.25em;
    }

    .pop-card {
      margin-inline-start: -1.5em;
    }

    .pop-card p {
      font-size: 1.25em;
    }

    .pop-desc {
      font-size: 1.25em;
    }

    .popup-image {
      display: none;
    }

    .close-button {
      top: -35px;
      right: 10px;
    }

    .pop-input {
      width: calc(100% - 1em);
    }

    .pop-btn {
      padding: 0.75em 1em;
      font-size: 1.25em;
    }
  }

  .vue-tel-input {
    direction: ltr;
  }

  .vue-tel-input:focus-within {
    box-shadow: unset !important;
  }

  /* loading spinner */
  .popup-disabled {
    pointer-events: none; /* Disable interaction while loading */
  }

  .form-disabled {
    pointer-events: none; /* Disable form interaction while loading */
  }

  .spinner-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(128, 128, 128, 0.5); /* Gray background with 0.8 opacity */
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000; /* Ensure spinner is above everything else */
  }

  .spinner {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left-color: #ffe100;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  /* loading spinner */
</style>
