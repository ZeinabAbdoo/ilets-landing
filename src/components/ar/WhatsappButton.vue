<template>
    <div id="whatsapp-chat" :class="{ hide: !isChatVisible }">
      <div class="header-chat" :class="{ 'hide-header': isNewMessageVisible }">
        <div class="head-home">
          <h3><i class="fab fa-whatsapp"></i> Whatsapp</h3>
          <p>Contact us via WhatsApp</p>
        </div>
        <div class="get-new" :class="{ hide: !isNewMessageVisible }">
          <a class="back-chat" href="#" @click="backToChat"><i class="fas fa-chevron-left"></i></a>
          <div id="get-label">{{ getLabel }}</div>
          <div id="get-nama">{{ getNama }}</div>
        </div>
      </div>
      <div class="home-chat" :class="{ hide: isNewMessageVisible }">
        <a class="informasi" href="#" title="Chat Whatsapp" @click="showChatDetails('Customer Service', 'Monglish Chat', '+201092237499')">
          <div class="info-avatar">
            <img src="https://4.bp.blogspot.com/-X1Xs2iRKabY/XXWzkqQ-iDI/AAAAAAAAA5w/HSyhR0gIXvUzlAx5XgaZzmlrCJkTgrOFQCLcBGAs/s70/supportfemale.png"/>
          </div>
          <div class="info-chat">
            <span class="chat-label">Service</span>
            <span class="chat-nama">Monglish Chat</span>
          </div>
          <span class="my-number">+201092237499</span>
        </a>
      </div>
      <div class="start-chat" :class="{ hide: !isNewMessageVisible }">
        <div class="first-msg"><span>Hello👋<br>Can we help you?</span></div>
        <div class="blanter-msg">
          <textarea id="chat-input" v-model="chatInput" placeholder="Type your message and press send" maxlength="120" rows="1"></textarea>
          <button id="send-it" @click="sendMessage">
            <i class="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
      <div id="get-number">{{ getNumber }}</div>
      <a class="close-chat" href="#" @click="toggleChatVisibility">✖</a>
    </div>
    <a class="blantershow-chat" href="#" title="Show Chat" @click="toggleChatVisibility">
      <svg class="joinchat__button__send" width="40" height="40" viewBox="0 0 400 400" stroke-linecap="round" stroke-width="33">
        <path class="joinchat_svg__plain" :class="{ hidden: !isPlainVisible }" d="M168.83 200.504H79.218L33.04 44.284a1 1 0 0 1 1.386-1.188L365.083 199.04a1 1 0 0 1 .003 1.808L34.432 357.903a1 1 0 0 1-1.388-1.187l29.42-99.427"></path>
        <path class="joinchat_svg__chat" :class="{ hidden: isPlainVisible }" d="M318.087 318.087c-52.982 52.982-132.708 62.922-195.725 29.82l-80.449 10.18 10.358-80.112C18.956 214.905 28.836 134.99 81.913 81.913c65.218-65.217 170.956-65.217 236.174 0 42.661 42.661 57.416 102.661 44.265 157.316"></path>
      </svg>
      <i class="fab fa-whatsapp"></i>
    </a>
</template>

<script>
export default {
  data() {
    return {
      isChatVisible: false,
      isNewMessageVisible: false,
      isPlainVisible: true,
      chatInput: '',
      getLabel: '',
      getNama: '',
      getNumber: '',
    };
  },
  mounted() {
    this.animateSVG();
  },
  methods: {
    toggleChatVisibility() {
      this.isChatVisible = !this.isChatVisible;
    },
    showChatDetails(label, nama, number) {
      this.getLabel = label;
      this.getNama = nama;
      this.getNumber = number;
      this.isNewMessageVisible = true;
    },
    backToChat() {
      this.isNewMessageVisible = false;
    },
    async sendMessage() {
      try {
        const response = await fetch(`https://service.monglish.co.uk/api/get-phone-number`);
        if (!response.ok) {
          console.log('Network response was not ok');
        }
        const data = await response.json();
        this.getNumber = data.phone_number;

        // Define the base URL for WhatsApp, depending on the platform
        const baseUrl = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
          ? 'whatsapp://send'
          : 'https://web.whatsapp.com/send';

        // Create the WhatsApp URL
        const url = this.chatInput !== ''
          ? `${baseUrl}?phone=${this.getNumber}&text=${this.chatInput}` // With a message
          : `${baseUrl}?phone=${this.getNumber}`; // Without a message

        // Open WhatsApp
        window.open(url, '_blank');
      } catch (error) {
        console.error('Error fetching phone number:', error);
      }
    },
    animateSVG() {
      setInterval(() => {
        this.isPlainVisible = !this.isPlainVisible;
      }, 2000);
    },
  },
};
</script>

<style scoped>
@import url('https://use.fontawesome.com/releases/v5.8.2/css/all.css');
@import url('https://fonts.googleapis.com/css?family=Lato');
a:link,a:visited {
	color: #444;
	text-decoration: none;
	transition: all .4s ease-in-out;
}
#whatsapp-chat {
	position: fixed;
	background: #fff;
	width: 100%;
	max-width: 400px; /* Ensures it doesn't exceed 400px */
	border-radius: 25px;
	box-shadow: 0 1px 15px rgba(32, 33, 36, .28);
	bottom: 20px; /* Adjusted for smaller screens */
	right: 10px; /* Adjusted for smaller screens */
	overflow: hidden;
	z-index: 99;
	animation-name: showchat;
	animation-duration: 600ms;
	font-family: 'DIN Next LT Arabic';
}

@media (min-width: 576px) {
	#whatsapp-chat {
		width: 350px; /* Adjust width for small screens */
	}
}

@media (min-width: 768px) {
	#whatsapp-chat {
		width: 400px; /* Default width for larger screens */
	}
}

@media (min-width: 992px) {
	#whatsapp-chat {
		width: 400px; /* Default width for larger screens */
	}
}

@media (min-width: 1200px) {
	#whatsapp-chat {
		width: 400px; /* Default width for extra large screens */
	}
}

a.blantershow-chat {
	background: linear-gradient(#25d366, #25d366) 14% 84%/16% 16%;
	color: #fff;
	position: fixed;
	z-index: 98;
	bottom: 2%;
	right: 1%;
	font-size: 3em;
	border-radius: 30px;
	box-shadow: 0 1px 15px rgba(32, 33, 36, .28);
  display: flex;
}
a.blantershow-chat i {
	transform: scale(1.2);
	margin: 0 10px 0 0;
}
a.blantershow-chat svg{
  margin: 5px 10px;
}
.header-chat {
	background: linear-gradient(#25d366, #25d366) 14% 84%/16% 16%;
	color: #fff;
	padding: 25px 20px;
}
.header-chat h3 {
	margin: 0 0 10px;
	font-size: 30px;
  font-weight: 100;
}
.header-chat p {
	font-size: 14px;
	line-height: 1.7;
	margin: 0;
}
.head-home{
    text-align: left;
    direction: ltr;
}
.info-avatar {
	position: relative;
}
.info-avatar img {
	border-radius: 100%;
	width: 50px;
	float: left;
}
a.informasi {
	padding: 20px;
	display: block;
	overflow: hidden;
	animation-name: showhide;
	animation-duration: 600ms;
}
a.informasi:hover {
	background: #f1f1f1;
}
.info-chat span , .get-new {
	display: block;
    direction: ltr;
    text-align: left;
}
#get-label,span.chat-label {
	font-size: 12px;
	color: #888
}
#get-nama,span.chat-nama {
	margin: 5px 0 0;
	font-size: 15px;
	font-weight: 700;
	color: #222
}
#get-label,#get-nama {
	color: #fff
}
span.my-number {
	display: none;
}
textarea#chat-input {
    width: 100%;
    border: solid 1px #e2e2e2;
    border-radius: 30px;
    font-size: 13px;
    height: 45px;
    margin: 0;
    outline: none;
    resize: none;
    overflow: hidden;
    text-align: left;
    padding: 12px 20px 13px 14px;
}
textarea#chat-input::placeholder {
    width: 98%;
}
button#send-it {
  color: #25d366;
  width: 35px;
  font-size: 20px;
  font-weight: 700;
  padding: 8px;
  background-color: transparent; /* Use transparent instead of 'none' */
  margin-top: 10px;
  border-radius: 50%;
  position: absolute;
  right: 5%;
  height: 35px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none; /* Remove button border */
  cursor: pointer; /* Ensure button has pointer cursor */
}

button#send-it:hover {
  background-color: rgba(37, 211, 102, 0.2); /* Optional: Add hover effect */
}
.first-msg {
	background: #f5f5f5;
	padding: 30px;
	text-align: left;
    direction: ltr;
}
.first-msg span {
	background: #e2e2e2;
	color: #333;
	font-size: 14.2px;
	line-height: 1.7;
	border-radius: 10px;
	padding: 15px 20px;
	display: inline-block
}
.start-chat .blanter-msg {
	display: flex;
	padding: 10px;
}
#get-number {
	display: none
}
a.close-chat {
  position: absolute;
  top: 5px;
  right: 15px;
  color: #fff;
  font-size: 1.1em; 
  font-weight: 500;
  background-color: rgba(32, 33, 36, .4);
  width: 35px; 
  height: 35px;
  display: flex; 
  align-items: center; 
  justify-content: center;
  border-radius: 50%;
  text-align: center;
  text-decoration: none; 
}
a.close-chat:hover {
  background-color: #444; 
}
a.back-chat {
	position: absolute;
	top: 5px;
	right: 55px;
	color: #fff;
	background-color: rgba(32, 33, 36, .4);
	width: 35px; 
	height: 35px;
	display: flex; 
	align-items: center; 
	justify-content: center;
	border-radius: 50%;
	text-align: center;
	line-height: 1; 
	text-decoration: none; 
}
a.back-chat:hover {
  background-color: #444; 
}
@keyframes showhide {
	from {
		opacity: 0
	}
}
@keyframes showchat {
	from {
		opacity: 0
	}
}
@media screen and (max-width:480px) {
	#whatsapp-chat {
		width: auto;
		left: 5%;
		right: 5%;
		font-size: 80%
	}
}
.hide {
	display: none;
	animation-name: showhide;
	animation-duration: 600ms;
	opacity: 1
}
.show {
	display: block;
	animation-name: showhide;
	animation-duration: 600ms;
	opacity: 1
}
.joinchat__button__send {
	fill: none;
	stroke: #ffffff;
}
.joinchat_svg__plain,.joinchat_svg__chat {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: draw 2s linear infinite;
}
.joinchat_svg__plain.hidden {
  visibility: hidden;
}
.joinchat_svg__chat.hidden {
  visibility: hidden;
}
@keyframes draw {
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes showPlain {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes showChat {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.hide-header .head-home {
    display: none;
}
</style>