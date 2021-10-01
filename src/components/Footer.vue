<template>
<html>
  <body>
    <footer>
    <!--===== TOP // KURITSUKU SLOGAN =====-->
      <div class="top box">
          <h2 style="font-family: 'Lora', serif; font-size: 1.5rem">KURITSUKU</h2> <br>
            <p>Treat your skin and earth well with KURITSUKU</p> <br>
          <hr><br>
      </div>
    
    <!--===== MIDDLE =====-->
      <div class="main-content">
    <!--===== LEFT-MID // ABOUT US =====-->
        <div class="left box">
          <h2>About us</h2>
          <div class="content">
            <p>KURITSUKU is a clean skincare brand that provides you with ethically sourced, environmental friendly, and vegan products.</p>
            <br>
            <router-link to="/About" tag="button">More about us</router-link>
            <div class="social">
              <a href=""><i class="bx bxl-instagram"></i></a>
              <a href=""><i class="bx bxl-facebook"></i></a>
              <a href=""><i class="bx bxl-twitter"></i></a>
              <a href=""><i class="bx bxl-youtube"></i></a>
            </div>
          </div>
        </div>

    <!--===== MID // INFORMATION LINKS =====-->
        <div class="center box">
          <h2>Information</h2>
          <div class="content">
            <div><i class="bx bx-chevron-right-circle"></i>
              <span class="text"><a href="">Help Centre / FAQ</a></span>
            </div>
            <div class="mid"><i class="bx bx-chevron-right-circle"></i>
              <span class="text"><a href="">Privacy Policies</a></span>
            </div>
            <div><i class="bx bx-chevron-right-circle"></i>
              <span class="text"><a href="">Terms and Conditions</a></span>
            </div>
          </div>
        </div>

    <!--===== RIGHT-MID // CONTACT US FORM =====-->
        <div class="right box">
          <h2>Contact us</h2>
          <div class="content">
              <div class="email">
                <div class="text">Email *</div>
                <input v-model="email" type="email">
              </div>
              <div class="msg">
                <div class="text">Message *</div>
                <textarea v-model="msg"></textarea>
              </div>
            </div> <br>
                <button v-on:click="checkInput" type="submit">Send</button>
        </div>
      </div>

    <!--===== BOTTOM =====-->
      <div class="bottom">
        <center>
          <span class="credit">Vanessa Josephine <i class="bx bx-copyright"></i> 2021 All rights reserved.</span>
          <span id="pay">    
              <i class="bx bxl-paypal"></i>
              <i class="bx bxl-mastercard"></i>
              <i class="bx bxl-visa"></i>
          </span>
        </center>
      </div>
    </footer>
  </body>
</html>
</template>

<!--===== JAVASCRIPT =====-->
<script src="https://kit.fontawesome.com/5570ba94e1.js" crossorigin="anonymous"></script>
<script>
export default {
    name: 'Footer',
    data () {
        return {
        email:'' ,
        msg:'',
    }},
    methods: {
        checkInput: function () {
            // Only if the user has input the name and email, which the message "Email sent" shall be shown
            if (this.msg && this.email) {
                alert("Email Sent")
            }
            else {
                alert("Unsuccessful!")
            }
        }
    }       
};
</script>

<style scoped>
:root {
  /* Font and Typography */
  --nav-name-font-size: 1.5rem;
  --normal-font-size: .938rem;
}

*{
  margin: 0;
  padding: 0;
  color: black;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.content i, .bottom #pay i {
  font-size: 30px;
}

.bottom .credit i {
  color: white;
}

footer{
  padding-top: 2vw;
  bottom: 0px;
  width: 100%;
  background: #F4F1EC;
}

.top {
  padding: 5px;
  font-size: var(--nav-name-font-size);
  padding: 10px 20px;
}

.top .content p {
  text-align: justify;
}

.main-content{
  display: flex;
}

.main-content .box{
  flex-basis: 50%;
  padding: 10px 20px;
}

.box h2 {
  font-size: var(--nav-name-font-size);
  font-weight: 600;
  text-transform: uppercase;
}
.box .content{
  margin: 20px 0 0 0;
  position: relative;
}
/*===== line start =====*/
hr {
  border: none;
  height: 3px;
  color: #7e9777;
  background-color: #7e9777;
}

.box .content:before{
  position: absolute;
  content: '';
  top: -10px;
  height: 3px;
  width: 100%;
}

.box .content:after{
  position: absolute;
  content: '';
  height: 3px;
  width: 15%;
  background-color: #7e9777;
  top: -10px;
}
/*===== line end =====*/
.left button{
  height: 40px;
  width: 160px;
  border: none;
  border-radius: 60px;
  outline: none;
  color: white;
}

.left button:hover{
  background: #63775d;
  transition: 0.5s;
  transition: 0.5s;
  transform: scale(1.01);
}

.left .content p{
  text-align: justify;
}
.left .content .social i{
  margin: 20px 0 0 0;
  background: #ACC3A6;
  padding: 8px;
  margin-right: 5px;
  text-align: center;
  border-radius: 60px;
  transition: 0.3s;
}

.left .content .social i:hover{
  background: #7e9777;
}

.center .content .text{
  font-size: var(--nav-name-font-size);
  font-weight: 500;
  padding-left: 10px;
  text-decoration: underline;
}

.center .content .text a:hover {
  color: #7e9777;
  transition: 0.5s;
}
.center .content .mid{
  margin: 15px 0;
}
.right .text{
  font-size: var(--nav-name-font-size);
  margin-bottom: 2px;
  color: #656565;
}
.right .msg{
  margin-top: 10px;
}
.right input, .right textarea{
  width: 100%;
  font-size: var(--nav-name-font-size);
  background: #fff;
  padding-left: 10px;
  border-radius: 10px;
  border: 1px solid #ececec;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.right input, .right textarea:hover{
  transition: 0.5s;
  transform: scale(1.01);
}

.right input:focus,
.right textarea:focus{
  outline-color: #3498db;
}

.right input{
  height: 35px;
}

.right{
  margin-top: 10px;
}

.right button{
  height: 40px;
  width: 160px;
  border: none;
  border-radius: 60px;
  outline: none;
  color: white;
}

.right button:hover{
  background: #63775d;
  transition: 0.5s;
  transition: 0.5s;
  transform: scale(1.01);
}

.bottom center{
  padding: 5px;
  font-size: var(--nav-name-font-size);
  background: #7e9777;
  padding: 20px;
  display: flex;
  justify-content: space-between;
}
.bottom center span{
  color: whitesmoke;
}

@media screen and (max-width: 900px) {
  footer{
    position: relative;
    bottom: 0px;
  }
  .main-content{
    flex-wrap: wrap;
    flex-direction: column;
  }
  .main-content .box{
    margin: 5px 0;
  }
}
</style>