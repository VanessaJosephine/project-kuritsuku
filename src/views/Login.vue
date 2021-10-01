<template>
<div class="container">
<div class="header">
    <h2><strong style="font-family: 'Lora', serif;">Sign up / Log in</strong></h2>
    <hr><br>
    <!-- LINK BUTTONS -->
    <div class="tab">
    <button class="tablinks" onclick="openCategory(event, 'Sign Up')">Sign Up</button>
    <button class="tablinks" onclick="openCategory(event, 'Log In')">Log In</button>
    </div>
</div>   

    <!-- SIGN UP -->
    <div id="Sign Up" class="tabcontent fade" style="display: block;">
    <div class="outer-box">
    <div class="form-box">
        <div id="title"><h2>Sign Up</h2></div><br><br>
        <div id="form">
            <input id="name" type="text" v-model="name" placeholder="Name ..."><br><br>

            <input id="email" type="text" v-model="email" placeholder="Email ..."><br><br>
            
            <input id="password" type="password" v-model="password" placeholder="Password ..."><br><br>
            
            <input id="passwordconfirm" type="password" v-model="passwordconfirm" placeholder="Confirm password ..."><br><br><br><br>

            <button v-on:click="checkInput">Submit</button>
        </div>
    </div>
    </div>
    </div>

    <!-- SECOND SLIDE -->
    <div id="Log In" class="tabcontent fade">
    <div class="outer-box">
    <div class="form-box">
        <div id="title"><h2>Log In</h2></div><br><br>
        <div id="form">
        
            <input id="email" type="text" v-model="email" placeholder="Email ..."><br><br>
                
            <input id="password" type="password" v-model="password" placeholder="Password ..."><br><br><br><br>
        
            <button v-on:click="checkInput">Submit</button>
        
        </div>
    </div>
    </div>
    </div>

<div class="bottom"></div>
</div>
    

</template>

<script src="../assets/script.js"></script>
<script>
export default {
    name: 'Login',
    el: '#form',
    data () {
        return {
        name:'' ,
        password:'' ,
        email:'' ,
        passwordconfirm:'',
    }},
    methods: {
        checkInput: function () {
            var pass = this.password === this.passwordconfirm;
            if (pass && this.name && this.email) {
                alert("Sign up Successful!")
                window.location.href = '/'
            }
            else {
                alert("Unsuccessful!")
            }
        }
    }        
};
</script>


<style scoped>

.container {
  margin: 0 auto;
  max-width: 1170px;
  background-color: #acc3a6b9;
  border-radius: 20px;
}

.header {
  margin-top: 30px;
  border-radius: 20px 20px 0 0;
  padding: 3vh;
  background-color: #f4f1ec;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.bottom {
  margin-bottom: 30px;
  border-radius: 0 0 20px 20px;
  padding: 3vh;
  background-color: #f4f1ec;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

hr {
  border: none;
  height: 3px;
  margin-top: 5px;
  margin-left: 20px;
  width: 170px;
  color: #7e9777;
  background-color: #7e9777;
}

@media (max-width: 850px)
{
    .header button {
        width: 80px;
    }
}


.header #home {
    color: white;
    padding: 20px;
    font-weight: bold;
    cursor: pointer;
    font-size: 1.5em;
}

#home a:hover {
    color: #7e9777;
    transition: 0.5s;
}

#form [type]
{
    width: 50vw;
    padding: 15px;
    font-size: 15px;
    border: none;
    border-radius: 20px;  
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);      
}

#form [type]:hover {
    background-color: whitesmoke;
    transition: 0.5s;
    transform: scale(1.01);
}

.form-box {
    margin-top: 20px;
    margin-bottom: 20px;
}

.outer-box {
    display: flex;
    justify-content: center;
}

#title {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #7e9777;
    padding: 10px;
    border-radius: 56px;
    color: white;
}

#form button {
    width: 160px;
    justify-content: center;
    align-items: center;
    background-color: #7e9777;
    padding: 10px;
    border: 2px solid #7e9777;
    border-radius: 56px;
    display: flex;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    color: white;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

#form button:hover {
    transition: 0.5s;
    transform: scale(1.01);
    background-color: #688361;
    border: 2px solid #688361;
}
/* TAB */
.tab {
    padding: 10px;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  
}

/* Style the buttons inside the tab */
.tab button {
    float: left;
    outline: none;
    cursor: pointer;
    transition: 0.5s;
    border-radius: 0;
    box-shadow: 0 0 0 0 rgba(0,0,0,0.2);
}

/* Change background color of buttons on hover */
.tab button:hover {
    transition: 0.5s;
    transform: scale(1.01);
    background-color: #63775d;
    border: 2px solid #63775d; 
}

/* Create an active/current tablink class */
.tab button.active {
  background-color: #63775d;
}

/* Style the tab content */
.tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}

/* Fading animation */
.fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
}
</style>