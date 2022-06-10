<template>
<div>
    <section class="authorization" v-if="log">

        <div class="sign_up_block">
            <div class="sign_form">
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model.trim="email" placeholder="Enter your email" >
                        <span v-if="!emailCheck">Введён неправильный Email адрес</span> <br>
                    </div>
                    <div class="form-group">
                        <div class="password">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="login_password" v-model.trim="password" placeholder="Enter password">
                        <a href="#" class="login-password-control" @click.prevent="showPassword($event,`login_password`)"></a>

                        <span v-if="!passwordCheck">Неправильный пароль</span> <br>
                    </div>
                    </div>

                    <p @click="sendToLogIn" class="send">If you already have account, pls log in</p>
                    <div class="buttons_cont">
                        <button class="auth_button buttons--sign_up" @click.prevent="submit({email,password})">Log In</button>
                        <button class="auth_button buttons--log_in" @click.prevent="closeForm">Cancel</button>
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
            email: "",
            password: "",
            emailCheck: true,
            passwordCheck: true

        }
    },
    methods: {
        ...mapMutations({
        closeLoginForm:'signnlog/CLOSE_LOGIN_FORM',
        openSign:'signnlog/SEND_TO_SIGN_FORM'
      }),
        showPassword(evt,id){
        console.log(id)
        
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
        sendToLogIn() {
            this.openSign()
            console.log("login")
            
            this.closeHints()
        },
        validateEmail(emailAdress) {
            let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return emailAdress.match(regexEmail) ? true : false

        },
        submit({
            email,
            password
        }) {
            this.emailCheck = true
            this.passwordCheck = true

            if (this.validateEmail(email) && password.length >= 5) {

                this.$store.dispatch('addUser', {
                    email,
                    password
                })
                this.closeForm()
                this.email = this.password = ''
            } else {
                if (!this.validateEmail(email)) {
                    this.emailCheck = false

                }
                if (!(password.length >= 5)) {
                    this.passwordCheck = false
                }
            }
        },
        closeHints(){
        this.emailCheck = true
        this.passwordCheck = true
        },
        closeForm() {
            this.closeLoginForm()
            this.closeHints()
            this.email = this.password = ''
        }
    },
    computed: {
        log() {
            return this.$store.getters["signnlog/log"]
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
    .login-password-control {
	position: absolute;
	top: 57px;
	right: 6px;
	display: inline-block;
	width: 25px;
	height: 25px;
	background: url(https://snipp.ru/demo/495/view.svg) 0 0 no-repeat;
}
    .login-password-control.view {
	background: url(https://snipp.ru/demo/495/no-view.svg) 0 0 no-repeat;
}

    
</style>