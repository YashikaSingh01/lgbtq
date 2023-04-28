<template>
    <div>
        <Carousel></Carousel>
        <!-- <h1>WELCOME {{ this.user.firstname }}!</h1> -->
        <v-row style="margin-top: 4vh;">
            <v-col cols="6" offset="3">

                <p class="center-align text-below-carousel">FIND A REAL CONNECTION</p>
                <p class="center-align text-below-carousel">
                    We also believe in the power of technology to create a community and bring everyone closer.
                    That's what "The Pride Fringe" is all about - bringing together a diverse world of the LGBTQ+ members
                    to connect, chat, make friends and find love.
                </p>
            </v-col>
        </v-row>

        <v-row class="">
            <v-col v-bind:cols="computedCols" v-bind:offset="computedOffset">
                <v-card class="mx-auto rounded-xl center-align " color="purple" @click="goToCounseling">
                    <v-card-text>
                        <v-icon x-large style="text-align: center;">mdi-wechat</v-icon>
                        <p class="text-h4 text--primary">
                            Talk it out
                        </p>
                        <div class="text--primary">
                            You can talk to counsellors about coming out and how adapting to this change is affecting you.
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col v-bind:cols="computedCols" v-bind:offset="computedOffset2">
                <v-card class="mx-auto rounded-xl center-align " color="yellow" @click="goToBlogs">
                    <v-card-text>
                        <v-icon x-large style="text-align: center;">mdi-notebook-edit</v-icon>
                        <p class="text-h4 text--primary">
                            Blogs
                        </p>
                        <div class="text--primary">
                            Read blogs! Read people's experiences. Read how they came out and what worked best for them.
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>


            <v-col v-bind:cols="computedCols" v-bind:offset="computedOffset2">
                <v-card class="mx-auto rounded-xl center-align" color="green">
                    <v-card-text>
                        <v-icon x-large style="text-align: center;">mdi-heart-outline</v-icon>
                        <p class="text-h4 text--primary">
                            Safe Space
                        </p>
                        <div class="text--primary">
                            Often queer people, we need queer spaces - because the only way to make connections is by
                            feeling safe.
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <br><br>

        <v-row>
            <v-col cols="10" offset="1">
                <div class="blogs-div rounded-xl">
                    <v-row style="height: 55vh;" align="start">
                        <v-col cols="6">
                            <p class="center-align coming-out-text" style="padding: 5%">
                                Coming out is a beautiful experience. But, it is HARD. It is hard to step outside of the
                                norm that
                                society forces on us and in some cases, it can be unsafe. We have many users who join TPF to
                                discover themselves while keeping thelselves sage in their home environment. Finally, being
                                able to
                                safely chat with other queer people. make friends, and maybe even matches is often a healing
                                and
                                rewarding experience for our users. And they can do it all without coming out!
                            </p>
                            <!-- <div class="center-align-button">
                                <v-btn color="rgba(109, 58, 69, 1)" elevation="2" rounded dark>
                                    <span class="mr-2">Download here</span>
                                </v-btn>
                            </div> -->
                        </v-col>
                        <v-col cols="6">
                            <v-img class="rounded-xl" height="51vh" src="@/assets/images/pexels-alexander-grey-3738057.jpg">

                            </v-img>
                        </v-col>
                    </v-row>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import VueCookies from 'vue-cookies'
import axios from 'axios'
import Vue from 'vue'

Vue.use(VueCookies, { expires: '7d' })

export default {
    computed: {
        computedCols() {
            if (this.$vuetify.breakpoint.mdAndUp) {
                return 2;
            } else if (this.$vuetify.breakpoint.smAndUp) {
                return 4;
            } else {
                return 6;
            }
        },

        computedOffset() {
            if (this.$vuetify.breakpoint.mdAndUp) {
                return 1;
            } else if (this.$vuetify.breakpoint.smAndUp) {
                return 3;
            } else {
                return 3;
            }
        },

        computedOffset2() {
            if (this.$vuetify.breakpoint.mdAndUp) {
                return 2;
            } else if (this.$vuetify.breakpoint.smAndUp) {
                return 3;
            } else {
                return 3;
            }
        }
    },

    components: {
        Carousel,
    },

    data() {
        return {
            user: {}
        }
    },

    methods: {
        goToCounseling() {
            this.$router.push('/counselling')
        },
        goToBlogs() {
            this.$router.push('/blogs')
        }
    },

    async afterMount() {
        try {
            const response = await axios.post('//localhost:8000/api/getUserInfo', { email: this.$cookies.get("email") })

            const success = (response.status == 200)
            console.log(this.$cookies.get("email"))

            if (success) {
                this.user = response.data
            }
        }
        catch (err) {
            console.log(err)
        }
    },
}
</script>

<style lang="scss" scoped>
.center-align {
    text-align: center;
}

.text-below-carousel {
    font-size: 120%;
}

.blogs-div {
    background-color: rgba(248, 237, 237, 1);
    margin-top: 3%;
}

.center-align-button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 4%;
}

.coming-out-text {
    margin: 5%;
    font-size: 120%;
}

@media screen and (max-width: 600px) {

    // .carousel {
    //     height: 400px;
    // }

    .text-below-carousel {
        font-size: 80%;
    }

    .coming-out-text {
    margin: 5%;
    font-size: 75%;
}

}
</style>