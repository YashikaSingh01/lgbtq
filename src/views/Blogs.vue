<template>
    <div>

        <v-carousel v-model="cycle" :show-arrows="false" :continuous="false" :cycle="cycle" hide-delimiter-background hide-delimiters height="90vh">
            <v-carousel-item>
            <v-sheet class="" color="rgba(248, 237, 237, 1)" height="" tile>
                <v-row class="fill-height" >
                    <v-col cols="6">
                        <!-- <h3>--insert image--</h3> -->
                        <v-img src="@/assets/images/pexels-alexander-grey-3738057.jpg" height="90vh" width="100%"></v-img>
                    </v-col>
                    <v-col cols="5" offset="1" align-self="center">
                        <p class="carousel-text">Blogs</p>
                        <p class="carousel-text-small">
                            Help the pride members in this significant phase of their lives. <br>
                            Talk about your experiences coming out. <br>
                            Talk about community anecdotes. <br>
                            Talk about your experience with the app.
                        </p>
                    </v-col>
                </v-row>
            </v-sheet>
            </v-carousel-item>
        </v-carousel>

        <!-- <v-sheet color="rgba(248, 237, 237, 1)" height="100%" tile>
            <v-row class="fill-height" align="center" justify="center">
                <v-col cols="6">
                    <v-img src="@/assets/images/pexels-alexander-grey-3738057.jpg" max-height="85vh"></v-img>
                </v-col>
                <v-col cols="4" offset="1" >
                    <p class="carousel-text">Blogs.</p>
                    <p class="carousel-text-small">
                        Help the pride members in this significant phase of their lives. <br>
                        Talk about your experiences coming out. <br>
                        Talk about community anecdotes. <br>
                        Talk about your experience with the app.
                    </p>
                </v-col>
            </v-row>
        </v-sheet> -->

        <v-row style="padding-top: 5%;">
            <v-col cols="3" offset="2">
                <v-card class="blog-card" elevation="10" height="65vh">
                    <v-img class="white--text align-end" height="60%" alt="" src="@/assets/images/pexels-marta-branco-1173576.jpg">

                    </v-img>

                    <v-card-title style="word-break: keep-all">Don't know how to tell to your parents?</v-card-title>

                    <v-card-subtitle class="pb-0">
                        3 minute read.
                    </v-card-subtitle>

                    <v-card-text class="text--primary">
                        Robyn Exton
                        <v-icon>mdi-circle-small</v-icon>
                        19th February 2018
                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="rgba(109, 58, 69, 1)" text @click="openBlog1">
                            Read Now
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="3" offset="2">
                <v-card class="blog-card" elevation="10" height="65vh">
                    <v-img class="white--text align-end" height="60%" alt="" src="@/assets/images/pexels-alexander-grey-3802075.jpg">

                    </v-img>

                    <v-card-title>How I came out being a trans man.</v-card-title>

                    <v-card-subtitle class="pb-0">
                        5 minute read.
                    </v-card-subtitle>

                    <v-card-text class="text--primary">
                        Renee Fonsi
                        <v-icon>mdi-circle-small</v-icon>
                        3rd Macrh 2023
                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="rgba(109, 58, 69, 1)" text >
                            Read Now
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>

        <v-row style="padding-top: 2%;">
            <v-col cols="3" offset="2">
                <v-card class="blog-card" elevation="10" height="60vh">
                    <v-img class="white--text align-end" height="60%" alt="" src="@/assets/images/pexels-cottonbro-studio-3693901.jpg">
                        
                    </v-img>

                    <v-card-title>Don't know how to come out?</v-card-title>

                    <v-card-subtitle class="pb-0">
                        3 minute read.
                    </v-card-subtitle>

                    <v-card-text class="text--primary">
                        Robyn Exton
                        <v-icon>mdi-circle-small</v-icon>
                        19th February 2018
                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="rgba(109, 58, 69, 1)" text>
                            Read Now
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="3" offset="2">
                <v-card class="blog-card" elevation="10" height="60vh">
                    <v-img class="white--text align-end" height="60%" alt="" src="@/assets/images/pexels-alexander-grey-1566842.jpg">
                        
                    </v-img>

                    <v-card-title>How I came out being a trans man.</v-card-title>

                    <v-card-subtitle class="pb-0">
                        5 minute read.
                    </v-card-subtitle>

                    <v-card-text class="text--primary">
                        Renee Fonsi
                        <v-icon>mdi-circle-small</v-icon>
                        3rd Macrh 2023
                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="rgba(109, 58, 69, 1)" text>
                            Read Now
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>

        <!-- <v-row style="padding-top: 2%;">
            <v-col cols="3" offset="2">
                <v-card class="blog-card" elevation="10">
                    <v-img class="white--text align-end" height="200px" alt="" src="@/assets/images/pexels-anete-lusina-5721335.jpg">
                        <v-card-title>Don't know how to talk to your parents?</v-card-title>
                    </v-img>

                    <v-card-subtitle class="pb-0">
                        3 minute read.
                    </v-card-subtitle>

                    <v-card-text class="text--primary">
                        Robyn Exton
                        <v-icon>mdi-circle-small</v-icon>
                        19th February 2018
                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="rgba(109, 58, 69, 1)" text>
                            Read Now
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="3" offset="2">
                <v-card class="blog-card" elevation="10">
                    <v-img class="white--text align-end" height="200px" alt="" src="@/assets/images/pexels-anete-lusina-5721335.jpg">
                        <v-card-title>How I came out being a trans man.</v-card-title>
                    </v-img>

                    <v-card-subtitle class="pb-0">
                        5 minute read.
                    </v-card-subtitle>

                    <v-card-text class="text--primary">
                        Renee Fonsi
                        <v-icon>mdi-circle-small</v-icon>
                        3rd Macrh 2023
                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="rgba(109, 58, 69, 1)" text>
                            Read Now
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row> -->
    </div>
</template>

<script>
export default {
    methods: {
        openBlog1() {
            this.$router.push('/blog1')
        }
    },
}
</script>

<style lang="scss" scoped>
.carousel-text {
    align-self: center;
    font-size: 300%;
    margin-right: 10%;
    color: rgba(109, 58, 69, 1);
}

.carousel-text-small {
    align-self: center;
    font-size: 150%;
    margin-right: 10%;
    color: rgba(109, 58, 69, 1);
}

.blog-card {
    background-color: rgba(248, 237, 237, 1);
}
</style>