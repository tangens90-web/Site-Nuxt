<template>
<div>
  <section class="authorization" v-if="sign">

    <div class="sign_up_block">
    <div class="sign_form">
            <form >
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model.trim="email" placeholder="Enter your email">
                  <span v-if="!emailBool">Введён неправильный Email адрес</span> <br>
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                  <div class="password">
                  <label for="enter_password">Password</label>
                  <input type="password" class="form-control" id="password" v-model.trim="password" placeholder="Enter password">
                  <a href="#" class="password-control" @click.prevent="showPassword($event,`password`)"></a>
                  </div>
                  <span v-if="!passwordLength">Пароль должен быть больше 5 символов</span>
                  <span v-if="!passwordBool">Пароли не совпадают</span> <br>

                </div>
                <div class="form-group">
                  <div class="password">
                  <label for="confirm_password">Confirm Password</label>
                  <input type="password" class="form-control" id="confirmPassword" v-model.trim="confirmed_password" placeholder="Confirm your password">
                  <a href="#" class="password-control" @click.prevent="showPassword($event,`confirmPassword`)"></a>
                  </div>                  
                  <span v-if="!passwordBool">Пароли не совпадают</span> <br>
                </div>
                <p @click="sendToLogIn" class="sendToLogIn">If you already have account, pls log in</p>
                <div class="buttons_cont">
                <button class="auth_button buttons--sign_up" @click.prevent="submit({email,password,confirmed_password})">Sign In</button>
                <button class="auth_button buttons--log_in" @click.prevent="closeForm" >Cancel</button>
            </div>
              </form>


        </div>
    </div>

</section>
</div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    
    data() {
        return {
            email:"",
            password:"",
            confirmed_password:"",  
            emailBool:true,
            passwordBool:true,
            passwordLength:true
        }
    },
    methods: {
      ...mapMutations({
        closeSignForm:'signnlog/CLOSE_SIGN_FORM',
        openLogin:'signnlog/SEND_TO_LOGIN_FORM'
      }),
      showPassword(evt,id){

        let input = document.getElementById(`${id}`)
        console.log(input)
        
        if(input.getAttribute('type')=='password'){
          evt.target.classList.add('view');
          input.setAttribute('type', 'text');
        }
        else{
          evt.target.classList.remove('view');
          input.setAttribute('type', 'password');
        }
        return false
        
      },
      sendToLogIn(){
        this.openLogin()
        this.closeHints()
        this.email = this.password = this.confirmed_password = ''
      },
       validateEmail (emailAdress){
      let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return emailAdress.match(regexEmail)? true:false 
     
      },
      closeHints(){
        this.emailBool = true
        this.passwordBool = true
        this.passwordLength = true
        },
      submit({email,password,confirmed_password}) {
        this.emailBool=true
        this.passwordBool=true
        this.passwordLength = true
        console.log(password,confirmed_password)
        if(this.validateEmail(email) && password.length>=5 && (password===confirmed_password)){
         
          this.$store.dispatch('signin/register',{email,password,confirmed_password})
          this.closeForm()
          
        }
        else{
          if(!this.validateEmail(email)){
            this.emailBool=false
            
            
          }
          if(!(password.length>=5)){
            this.passwordLength = false
          }
          
          if(!(password==confirmed_password) && password.length>=5){
              this.passwordBool = false
          }
        }
      },

      closeForm(){
        this.closeSignForm()
        this.closeHints()
        this.email = this.password = this.confirmed_password = ''
      }
    },
    computed: {
      sign() {
        return this.$store.getters["signnlog/sign"]
      }
    },
    
}
</script>
<style scoped>
   .password {
	/* width: 300px; */
	  margin: 17px auto;
	  position: relative;
  }
  .password-control {
    position: absolute;
    top: 57px;
    right: 6px;
    display: inline-block;
    width: 25px;
    height: 25px;
    background: url(https://snipp.ru/demo/495/view.svg) 0 0 no-repeat;
}
.password-control.view {
	  background: url(https://snipp.ru/demo/495/no-view.svg) 0 0 no-repeat;
}
.sendToLogIn{
  width: 90%;
  margin: 0 auto;
  cursor: pointer;
  color:rgb(90, 90, 240);
}
   
    
</style>