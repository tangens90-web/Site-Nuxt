<template>
<div>
    <section class="header_lol">
        <header class="header">
            <div class="container">
                <div class="navigation">
                    <!-- nav_blocks.scss -->
                    <div class="nav_blocks">
                        <div class="left_header">
                            <div class="name">
                                <h2 @click="goToStartPage">CyberValorant</h2>
                            </div>
                            <div class="nav_block_right">

                                <div class="navigation_bar">
                                    <ul class="nav_list_no_burger">
                                        <li class="nav_item">
                                            <a href=""> Новости</a>
                                        </li>
                                        <li class="nav_item">
                                            <a href=""> Расписание</a>
                                        </li>
                                    </ul>
                                    

                                </div>
                            </div>
                            
                        </div>
                        <div class="right_header">

                            <div class="auth_block">
                                <button type="button" class="button sign_up" @click="openSignOrLog(sign=true,log=false)">Sign up</button>
                                <button type="button" class="button log_in" @click="openSignOrLog(sign=false,log=true)">Log in</button>
                            </div>

                        </div>
                    </div>

                </div>

                <div class="nav_block">
                    <div class="burger_menu" ref="burger">

                        <ul class="nav_list_burger">
                            <li class="nav_item">
                                <div class="auth_block_burger">
                                    <button type="button" class="btn btn-outline-primary" @click="openSignOrLog(sign=true,log=false)">Sign up</button>
                                    <button type="button" class="btn btn-outline-secondary" @click="openSignOrLog(sign=false,log=true)">Log in</button>
                                </div>
                            </li>
                            <li class="nav_item">
                                <a href=""> Новости</a>
                            </li>
                            <li class="nav_item">
                                <a href=""> Расписание</a>
                            </li>
                     
                        </ul>
                    </div>

                  

                    <button class="burger_btn" @click="toggle"><span></span></button>
                </div>

            </div>
        </header>
    </section>

</div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
    name:"MyHeader",

    data() {
        return {}
    },
    methods: {
        // ...mapActions,
        ...mapMutations({
            open: 'signnlog/OPEN_SIGN_OR_LOG_FORM',
        }),
        goToStartPage() {
            this.$router.push({
                path: '/'
            })
        },
        toggle() {
            this.$refs.burger.classList.toggle("opened")
        },

        openSignOrLog(sign, log) {
            this.open({
                sign,
                log
            })
            console.log("qeqeqe", sign, log)
            // this.$store.commit("store/openAnyForm", {sign, log})
        }

    },
    created() {
        this.$store.commit('signnlog/CLOSE_SIGN_AND_LOG_FORMS')
    },

}
</script>

<style scoped>

</style>
