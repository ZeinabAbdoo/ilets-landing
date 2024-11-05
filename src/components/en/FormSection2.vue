<template>
  <div class="form-section">
    <div class="content-container">
      <div class="text-container">
        <h1>Enter your details</h1>
        <p>
            Reserve your seat today and join thousands of students who have achieved remarkable success through our interactive, internationally accredited programs. With full support and advanced educational resources, we will be with you every step of the way to achieve your language goals. Don’t miss the opportunity!        
            </p>
      </div>
      <form @submit.prevent="register" class="pop-form">
        <div class="inline-group">
          <div class="form-pop">
            <label for="fullName" class="pop-label">Full Name</label>
            <input type="text" class="pop-input" id="fullName" placeholder="Full Name" v-model="fullName" required />
          </div>
          <div class="form-pop">
            <label for="phoneNumber" class="pop-label">Country code followed by WhatsApp number</label>
            <vue-tel-input 
                class="pop-input" 
                style="direction:ltr; color:black;"
                v-model:phoneNumber="phoneNumber" 
                v-model:country="country" 
                @input="onPhoneInput" 
                @validate="onPhoneValidate" 
                mode="international" 
                :preferred-countries="['SA', 'KW', 'AE', 'QA', 'EG', 'JO', 'OM', 'YE', 'BH', 'IQ']" 
                defaultCountry="SA" 
                :inputOptions="inputOptions" 
                :inputprops="{ name: 'phoneNumber', id: 'phoneNumber', required: true, placeholder: 'Phone number' }" 
                :disabled="loading" 
            />
          </div>
        </div>
        <div class="form-pop">
          <label for="email" class="pop-label">Email</label>
          <input type="email" class="pop-input" id="email" placeholder="example@email.com" v-model="email" required />
        </div>
        <input type="hidden" v-model="fullPhoneNumber" />
        <input type="hidden" v-model="countryCode" />
        <button type="submit" class="pop-btn">Sign Up Now</button>
      <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
      </form>
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
      successMessage: '', 
    };
  },
  methods: {
    onPhoneInput(formattedNumber, phoneObject) {
      if (phoneObject && phoneObject.number) {
        this.fullPhoneNumber = phoneObject.number;
      }
    },
    onPhoneValidate(isValid, phoneObject) {
      this.isValidPhone = isValid;
      if (isValid && phoneObject && phoneObject.number) {
        this.fullPhoneNumber = phoneObject.number;
      }
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
            this.successMessage = 'Form submitted successfully!'; 
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
.form-section {
  background-image: url('@/assets/images/form.png');
  background-size: cover;
  background-position: center;
  direction: ltr;
  text-align: left;
  color: #fff;
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
  display: flex;
  justify-content: center;
  padding: 40px;
  transition: background 0.5s;
}

.content-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin: 0 auto;
  padding: 10% 3%;
  border-radius: 15px;
}

.form-pop {
  width: 100%;
}

.text-container {
  width: 50%;
  padding: 10px;
}

.text-container h1 {
  margin-bottom: 15px;
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
  font-size: 48px;
}

.text-container p {
  color: #fff;
  margin-bottom: 25px;
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
  font-size: 20px;
}

.pop-form {
  direction: ltr;
  text-align: left;
  width: 50%;
}

.pop-input {
  width: calc(100% - 1.25em);
  padding: 0.8em;
  margin: 0;
  border-radius: 15px;
  background-color: #f3f7ff;
  color: #000;
  border: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: border 0.3s;
  height: 50px;
}

.pop-input:focus {
  border: 2px solid #ff9442;
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
  margin-bottom: 5px;
}

.inline-group {
  display: flex;
  justify-content: space-between;
}

.pop-btn {
  background: linear-gradient(45deg, #ff9442, #ff6f00);
  color: white;
  border: none;
  padding: 0.1em 0 0.4em 0;
  cursor: pointer;
  border-radius: 20px;
  width: 97%;
  margin-top: 20px;
  font-size: 1.3em;
  transition: background 0.3s, transform 0.3s;
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
}

.pop-btn:hover {
  background: linear-gradient(45deg, #ff6f00, #ff9442);
}

.success-message {
  margin-top: 20px;
  padding: 10px;
  background-color: rgba(0, 128, 0, 0.1);
  color: #008000;
  border: 1px solid #008000;
  border-radius: 5px;
  text-align: center;
}

@media (max-width: 1200px) {
  .content-container {
    padding: 5% 2%;
  }
  .text-container, .pop-form {
    width: 48%;
  }
  .text-container h1 {
    font-size: 42px;
  }
  .text-container p {
    font-size: 18px;
  }
}

@media (max-width: 992px) {
  .content-container {
    flex-direction: column;
    align-items: center;
  }
  .text-container, .pop-form {
    width: 100%;
    text-align: center;
  }
  .text-container h1 {
    font-size: 36px;
  }
  .text-container p {
    font-size: 16px;
  }
  .pop-form {
    text-align: center;
    direction: rtl;
  }
  .inline-group {
    flex-direction: column;
  }
  .pop-btn {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .form-section {
    padding: 30px 20px;
  }
  .text-container h1 {
    font-size: 28px;
  }
  .text-container p {
    font-size: 16px;
  }
  .pop-input {
    width: 100%;
  }
}

@media (max-width: 576px) {
  .form-section {
    padding: 20px 10px;
  }

  .text-container h1 {
    font-size: 24px;
  }

  .text-container p {
    font-size: 14px;
  }
}
</style>