<template>
<div>
    <section class="authorization" v-if="log">

        <div class="sign_up_block">
            <div class="sign_form">
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model.trim="email">
                        <span v-if="!emailCheck">Введён неправильный Email адрес</span> <br>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" v-model.trim="password">

                        <span v-if="!passwordCheck">Неправильный пароль</span> <br>
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
        sendToLogIn() {
            this.openSign()

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
        closeForm() {
            this.closeLoginForm()
            
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
    /* form{
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%) ;
        background-color: yellowgreen;
        z-index:5;
    }
    .send{
      color: blue;
      cursor: pointer;
    } */

    
</style>