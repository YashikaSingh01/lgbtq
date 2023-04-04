<template>
    <div>
        <v-carousel v-model="cycle" :show-arrows="false" :continuous="false" :cycle="cycle" hide-delimiter-background hide-delimiters 
        cycle height="90vh">
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
                            Discover yourselves, discover love by joining a community of acceptance and support, where love
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
                <v-card class="mx-auto rounded-xl center-align" max-width="344" color="#F0E3F5">
                    <v-card-text>
                        <v-icon x-large style="text-align: center; margin-top: 2vh;">mdi-wechat</v-icon>
                        <p class="text-h5 text--primary" style="margin-top: 2vh">
                            Tell us about yourself
                        </p>
                        <div class="text--primary">
                            Pride Counselling is accepting of people from every gender, orientation, and identity.
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="2" offset="2">
                <v-card class="mx-auto rounded-xl center-align" max-width="344" color="yellow">
                    <v-card-text>
                        <v-icon x-large style="text-align: center;">mdi-notebook-edit</v-icon>
                        <p class="text-h5 text--primary" style="margin-top: 2vh;">
                            Get matched to a licensed therapist
                        </p>
                        <p class="text--primary">
                            Our therapists have relevant expertise, experience, and training to provide therapy services for
                            LGBTQ+ members
                        </p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="2" offset="2">
                <v-card class="mx-auto rounded-xl center-align" max-width="344" color="green">
                    <v-card-text>
                        <v-icon x-large style="text-align: center;">mdi-heart-outline</v-icon>
                        <p class="text-h5 text--primary" style="margin-top: 2vh">
                            Start talking!
                        </p>
                        <div class="text--primary">
                            Message whenever you want. Schedule sessions that work with your schedule.
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>



    </div>
</template>

<script>
export default {

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
    background-color: rgba(248, 237, 237, 1);
}
</style>