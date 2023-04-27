<template>
    <div>
        <v-carousel v-model="cycle" :show-arrows="false" :continuous="false" :cycle="cycle" hide-delimiter-background
            hide-delimiters height="90vh">
            <v-carousel-item>
                <v-sheet class="" color="rgba(248, 237, 237, 1)" height="" tile>
                    <v-row class="fill-height" align="center" justify="center">
                        <v-col cols="6">
                            <!-- <h3>--insert image--</h3> -->
                            <v-img src="@/assets/images/pexels-cottonbro-studio-3693901.jpg" height="90vh"></v-img>
                        </v-col>
                        <v-col cols="6">
                            <p class="carousel-text">Talk it Out!</p>
                            <p class="carousel-text-small">
                                Discover yourselves, discover love by joining a community of acceptance and support, where
                                love
                                is always in the air.<br>
                                Talk it out loud with pride!
                            </p>
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>


        <v-row style="margin-top: 10vh;">
            <v-col cols="2" offset="1">
                <v-card class="mx-auto rounded-xl center-align" max-width="344" height="30vh" color="purple">
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
            <v-col cols="2" offset="2">
                <v-card class="mx-auto rounded-xl center-align" max-width="344" height="30vh" color="yellow" @click="goToBlogs">
                    <v-card-text>
                        <v-icon x-large style="text-align: center;">mdi-notebook-edit</v-icon>
                        <p class="text-h4 text--primary">
                            Blogs
                        </p>
                        <p class="text--primary">
                            Read blogs! Read people's experiences. Read how they came out and what worked best for them.
                        </p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="2" offset="2">
                <v-card class="mx-auto rounded-xl center-align" max-width="344" height="30vh" color="green">
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

        <v-row style="margin-top: 10vh;">
            <v-col cols="10" offset="1" align-self="center">
                <v-carousel v-model="cycle" :continuous="true" :cycle="cycle" delimiter-icon="mdi-minus"  hide-delimiter-background hide-delimeters
                delimiter-icon- cycle height="70vh">
                    <v-carousel-item>
                        <v-sheet class="" color="rgba(248, 237, 237, 1)" height="100%" tile>
                            <v-row style="height: 100%;">
                                <v-col cols="4" offset="1" align-self="center">
                                    <v-card class="blog-card" elevation="10" height="60vh">
                                        <v-img class="white--text align-end" height="60%" alt=""
                                            src="@/assets/counselor photos/1.png">

                                        </v-img>

                                        <v-card-title style="word-break: keep-all">Anindita Joshi</v-card-title>

                                        <v-card-subtitle class="pb-0">
                                            Baner, Pune
                                        </v-card-subtitle>
                                        <v-card-text class="text--primary" style="margin-top: 0.5vh;">
                                            27 Years
                                            <v-icon>mdi-circle-small</v-icon>
                                            MA, LMHC
                                        </v-card-text>

                                        <v-card-actions>
                                            <v-btn color="rgba(109, 58, 69, 1)" text >
                                                Book an appointment
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-col>
                                <v-col cols="4" offset="2" align-self="center">
                                    <v-card class="blog-card" elevation="10" height="60vh">
                                        <v-img class="white--text align-end" height="60%" alt=""
                                            src="@/assets/counselor photos/4.png">

                                        </v-img>

                                        <v-card-title style="word-break: keep-all">Sakshi Mukherjee</v-card-title>
                                            <v-card-subtitle class="pb-0">
                                            Pashan, Pune
                                        </v-card-subtitle>

                                        <v-card-text class="text--primary" style="margin-top: 0.5vh;">
                                            24 Years
                                            <v-icon>mdi-circle-small</v-icon>
                                            MA, LPC
                                        </v-card-text>

                                        <v-card-actions>
                                            <v-btn color="rgba(109, 58, 69, 1)" text >
                                                Book an appointment
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-col>
                                
                            </v-row>
                        </v-sheet>
                    </v-carousel-item>

                    <v-carousel-item>
                        <v-sheet class="" color="rgba(248, 237, 237, 1)" height="100%" tile>
                            <v-row style="height: 100%;">
                                <v-col cols="4" offset="1" align-self="center">
                                    <v-card class="blog-card" elevation="10" height="60vh">
                                        <v-img class="white--text align-end" height="60%" alt=""
                                            src="@/assets/counselor photos/2.png">
                                        </v-img>

                                        <v-card-title style="word-break: keep-all">Bhavya Singh</v-card-title>

                                        <v-card-subtitle class="pb-0">
                                            Sus, Pune
                                        </v-card-subtitle>
                                        <v-card-text class="text--primary" style="margin-top: 0.5vh;">
                                            43 Years
                                            <v-icon>mdi-circle-small</v-icon>
                                            MDC, MA
                                        </v-card-text>

                                        <v-card-actions>
                                            <v-btn color="rgba(109, 58, 69, 1)" text >
                                                Book an appointment
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-col>
                                <v-col cols="4" offset="2" align-self="center">
                                    <v-card class="blog-card" elevation="10" height="60vh">
                                        <v-img class="white--text align-end" height="60%" alt=""
                                            src="@/assets/counselor photos/3.png">

                                        </v-img>

                                        <v-card-title style="word-break: keep-all">Saloni Samant</v-card-title>
                                            <v-card-subtitle class="pb-0">
                                            Balewadi, Pune
                                        </v-card-subtitle>

                                        <v-card-text class="text--primary" style="margin-top: 0.5vh;">
                                            26 Years
                                            <v-icon>mdi-circle-small</v-icon>
                                            LPC, MDC
                                        </v-card-text>

                                        <v-card-actions>
                                            <v-btn color="rgba(109, 58, 69, 1)" text>
                                                Book an appointment
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-col>
                                
                            </v-row>
                        </v-sheet>
                    </v-carousel-item>

                </v-carousel>
            </v-col>
        </v-row>



    </div>
</template>

<script>
export default {
    methods: {
        goToBlogs() {
            this.$router.push('/blogs')
        }
    },

}
</script>

<style lang="scss" scoped>
.center-align {
    text-align: center;
}

.carousel-text {
    align-self: center;
    font-size: 300%;
    margin-left: 26%;
    margin-right: 10%;
    color: rgba(109, 58, 69, 1);
}

.carousel-text-small {
    align-self: center;
    font-size: 150%;
    margin-left: 26%;
    margin-right: 15%;
    color: rgba(109, 58, 69, 1);
}

.blog-card {
    background-color: rgb(251, 229, 229);
}

@media screen and (max-width: 600px) {
  .my-component {
    background-color: red;
  }
}

</style>