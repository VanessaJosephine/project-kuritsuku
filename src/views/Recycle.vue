<template>
<div class="recycle">
<div class="aboutus" style="font-family: 'Lora', serif;">
    <p>We’re here to create radical beauty—the kind that pushes boundaries, that believes in better. And we're excited to announce that KURITSUKU is now working with Pact Collective to recycle the hard-to-recycle.</p><br><br>
    <p>At KURITSUKU, we do everything we can to simplify and source materials that are both safe for the planet and safe for the product. But packaging is just one piece; where it goes when you’re done, another.</p><br><br>
    <p>Now, we invite our Indonesian customers to mail in up to 5 empty beauty products per month—ours or another brand’s, we don’t discriminate—and Pact Collective will break it down responsibly, so it doesn’t end up in a landfill.</p>
</div>
<div class="step">
    <div class="stepcontent">
        <i class="far fa-edit"></i><br>
        <h3>STEP ONE</h3><br>
         <strong>Fill out the form for a prepaid shipping label.</strong><br>
    </div>
    <div class="stepcontent">
        <i class="fas fa-box-open"></i><br>
        <h3>STEP TWO</h3><br>
         <strong>Attach label to a box, envelope, or container.</strong><br>
    </div>
    <div class="stepcontent">
        <i class="fas fa-dolly-flatbed"></i><br>
        <h3>STEP THREE</h3><br>
        <strong>Mail your package back to us with USPS</strong><br>
    </div>
</div> 
<div class="container">

    <div class="header"></div>
    <div id="Recycle" class="tabcontent fade" style="display: block;">
    <div class="outer-box">
    <div class="form-box">
        <div id="form">
            <input id="name" type="text" v-model="name" placeholder="Name ..."><br><br>

            <input id="email" type="text" v-model="email" placeholder="Email ..."><br><br>
            
            <input id="address" type="text" v-model="address" placeholder="Address Line ..."><br><br>
            
            <input id="city" type="text" v-model="city" placeholder="City..."><br><br><br><br>

            <button v-on:click="checkInput">Submit</button>
        </div>
    </div>
    </div>
    </div>
    <div class="bottom"></div>
</div>
</div>
    

</template>

<script src="../assets/script.js"></script>
<script>
export default {
    name: 'Recycle',
    el: '#form',
    data () {
        return {
        name:'' ,
        address:'' ,
        email:'' ,
        city:'',
    }},
    methods: {
        checkInput: function () {
            if (this.address && this.name && this.email && this.city) {
                alert("Sign up Successful!")
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

.aboutus {
    display: block;
    background-color: #f4f1ec;
    padding: 10vh 15vw;
    height: auto;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.aboutus p {
    font-size: 30px;
}

.aboutus div p {
    margin: 1.5vw;
}

.step {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.stepcontent {
    margin: 1.5vw;
    height: auto;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
    margin-bottom: 20px;
}

i {
    font-size: 50px;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #7e9777;
}

@media (max-width: 1500px){
    .aboutus p {
        font-size: 20px;
    }
    .aboutus {
    padding: 10vh 15vw;
}
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
    .step {
        grid-template-columns: 1fr;
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

</style>