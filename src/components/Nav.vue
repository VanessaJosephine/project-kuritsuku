<template>
<!-- Vue Router is used to routes the user to different pages with ease -->
    <body>
        <header class="header">
            <!--===== NORMAL LOGO  =====-->
            <router-link to="/">
            <a class="header-logo" style="font-family: 'Lora', serif;">KURITSUKU</a>
            </router-link>

            <i class='bx bx-menu header-toggle' id="header-toggle"></i>
            <!--===== LOGO INSIDE THE HAMBURGER ICON MENU =====-->
            <nav class="nav" id="nav-menu">
                <div class="nav-body bd-grid">
                    <router-link to="/">
                    <a class="nav__perfil">                        
                        <div>
                            <span class="navbar-logo" style="font-family: 'Lora', serif;">KURITSUKU</span>
                        </div>
                    </a>
                    </router-link>
    
                    <div class="navbar-menu">
                        <ul class="navbar-itemlist">
                            
                            <!--===== SHOP CATEGORY  =====-->
                            
                            <li class="navbar-item dropdown">
                                <a href="/#Category" class="navbar-link dropdown-link">
                                Category <i class='fas fa-chevron-up dropdown-i'></i>
                                </a>  
                                <ul class="dropdown-menu">
                                    <li class="dropdown-item">
                                      <router-link class="navbar-link"
                                      :to="{ name: 'category-overview',
                                      params: { category: 'Cleanser'}}" >Cleanser
                                      </router-link>
                                    </li>
                                    <li class="dropdown-item">
                                      <router-link class="navbar-link"
                                      :to="{ name: 'category-overview',
                                      params: { category: 'Toner'}}" >Toner
                                      </router-link>
                                    </li>
                                    <li class="dropdown-item">
                                      <router-link class="navbar-link"
                                      :to="{ name: 'category-overview',
                                      params: { category: 'Moisturizer'}}" >Moisturizer
                                      </router-link>
                                    </li>
                                    <li class="dropdown-item">
                                      <router-link class="navbar-link"
                                      :to="{ name: 'category-overview',
                                      params: { category: 'Serum'}}" >Serum
                                      </router-link>
                                    </li>
                                </ul>
                            </li>
                            

                            <!--===== USER CART  =====-->
                                
                            <li class="navbar-item">
                              <router-link to="/Cart" class="navbar-link dropdown-link">
                                Cart<i class='fas fa-shopping-cart' style="margin-right: 5px;"></i>
                                <counter-badge :count="cartCount"></counter-badge>
                              </router-link>
                            </li>
                            

                            <!--===== USER FAV LIST  =====-->
                             
                            <li class="navbar-item">
                              <router-link to="/Favorite" class="navbar-link dropdown-link">
                                Favorite<i class='fas fa-heart' style="margin-right: 5px;"></i>
                                <counter-badge-fav :count="favCount"></counter-badge-fav>
                              </router-link>
                            </li>
                            

                            <!-- ==== USER PROFILE PAGE ====-->
                            
                            <li class="navbar-item">
                              <router-link to="/Login" class="navbar-link dropdown-link">
                                Profile<i class='fas fa-user-circle' style="margin-right: 5px;"></i></router-link></li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    </body>
</template>

<script>
import CounterBadge from '@/components/CounterBadge';
import CounterBadgeFav from '@/components/CounterBadgeFav';

export default {
    name: 'Nav',
    components: {
      CounterBadge,
      CounterBadgeFav
    },
    computed: {
      // Counts the length of the cart
    cartCount() {
      return this.$store.state.cart.length
    },
    // Counts the length of the my-favorite
    favCount() {
      return this.$store.state.fav.length
    },
    },
    mounted() {
    window.addEventListener('load', () => {
        /*===== EXPANDER MENU  =====*/
        // The menu inside the hamburger icon will be shown only when the icon is clicked
        const showMenu = (toggleId, navId)=>{
            const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId)
        
            if(toggle && nav){
            toggle.addEventListener('click', ()=>{
                nav.classList.toggle('show')
                toggle.classList.toggle('bx-x')
            })
            }
        }
        showMenu('header-toggle','nav-menu')

        /*===== ACTIVE AND REMOVE MENU =====*/
        const navLink = document.querySelectorAll('.navbar-link');   

        function linkAction(){
        /*Active link*/
        navLink.forEach(n => n.classList.remove('active'));
        this.classList.add('active');
        }
        navLink.forEach(n => n.addEventListener('click', linkAction));                
    })   
}
};

</script>

<style scoped>
:root {
  /*===== Font and typography =====*/
  --body-font: 'Lora', serif;
  --nav-name-font-size: 1.5rem;
  --normal-font-size: .938rem;
}

@media screen and (min-width: 920px) {
  :root {
    --nav-name-font-size: 1rem;
    --normal-font-size: 1rem;
  }
}

/*===== BASE =====*/
*, ::before, ::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  font-weight: 600;
  box-sizing: border-box;
  position: sticky;
  width: 100%;
  height: auto;
  top: 0;
  display: grid;
  align-items: center;
  z-index: 1; /* The layer of the component */
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
}

.bd-grid {
  max-width: 1024px;
  display: grid;
  grid-template-columns: 100%;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}

/*===== HEADER =====*/

.header {
  box-sizing: border-box;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 3rem;
  padding: 0 1rem;
  background-color: #ACC3A6;
  border-radius: 0 0 50px 50px;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-logo {
  color: white;
  margin-left: 20px;
}

.header-logo:hover {
  color: #63775d;
  transition: 0.5s;
}

.header-toggle {
  font-size: 1.7rem;
  margin-right: 20px;
  cursor: pointer;
  color: white;
  transition: 0.5s;
}

.header-toggle:hover {
  color: #63775d;
  transition: 0.5s;
}

/*===== NAVBAR =====*/
@media screen and (max-width: 920px) {
  .nav {
    position: fixed;
    top: 0;
    left: -100%;
    background-color: #ACC3A6;
    width: 288px;
    height: 70vh;
    border-radius: 0 0 60px 0;
    padding: 2rem 0;
    z-index: 100;
    transition: .5s;
    overflow-y: auto;
  }
}

.nav-body {
  display: flex;
  flex-direction: column;
}

.nav__perfil {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 3rem;
}

.navbar-logo {
  display: block;
  font-size: 1.5rem;
  color: white;
  transition: 0.5s;
}

.navbar-logo:hover {
  color: #63775d;
}

.navbar-item {
  margin-bottom: 2rem;
}

.navbar-item a {
  background-color: #7e9777;
  border-radius: 20px;
  padding: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-link {
  color:white;
}

.navbar-link:hover {
  background-color: #63775d;
  transition: 0.5s;
}

/*Show menu*/
.show {
  left: 0;
}

/*Active link*/
.active {
  color: white;
}

/*=== DROPDOWN ===*/
.dropdown-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.dropdown-i {
  font-size: 1rem;
  transition: .5s;
  margin-left: 5px;
}

.dropdown-menu {
  margin: 1rem 0 0 1rem;
  display: none;
}

.dropdown-item {
  margin: 1rem 0;
}

.dropdown:hover > .dropdown-menu {
  display: block;
}

.dropdown:hover .dropdown-i {
  transform: rotate(180deg);
}

/* ===== MEDIA =====*/
@media screen and (min-width: 576px) {
  .nav {
    width: 288px;
    top: 0;
  }
}

@media screen and (min-width: 920px) {
  body {
    margin: 0;
    top: 0;
  }
  .header {
    height: calc(3rem + 1rem);
    top: 0;
  }
  .header-logo, .header-toggle {
    display: none;
    top: 0;
  }
  .nav {
    width: 100%;
    top: 0;
  }
  .nav-body {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .nav__perfil {
    flex-direction: row;
    text-align: initial;
    margin-bottom: 0;
  }

  .navbar-logo {
    color: white;
  }

  .navbar-logo:hover {
    color: #63775d;
    transition: 0.5s;
  }
  
  .navbar-itemlist {
    display: flex;
    align-items: center;
  }
  .navbar-item {
    margin: 0 1.5rem;
    padding: 1.4rem 0;
  }
  .navbar-link {
    color: white;
  }
  .navbar-link:hover {
    background-color: #63775d;
  }
  
  /*Active link new color*/
  .active {
    color:white;
  }
  .dropdown {
    position: relative;
  }
  .dropdown-menu {
    position: fixed;
    margin: 0;
    top: calc(3rem + 1rem);
    padding: .5rem 1.5rem;
    background-color: #ACC3A6;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 20px 20px;
  }
  .dropdown-item {
    margin: 1rem 0;
  }
  .dropdown-link {
    width: 120px;
  }
}

@media screen and (min-width: 1024px) {
  .bd-grid {
    margin-left: auto;
    margin-right: auto;
    top: 0;
  }
}
</style>