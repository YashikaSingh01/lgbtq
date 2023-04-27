<template>
    <div>
        <v-carousel v-model="cycle" :show-arrows-on-hover="true" :continuous="true" :cycle="cycle" hide-delimiter-background
            delimiter-icon="mdi-minus" delimiter-icon- height="100vh">
            <v-carousel-item>
                <v-sheet class="" color="rgba(248, 237, 237, 1)"  tile>
                    <v-row class="" align="center" justify="center">
                        <v-col >
                            <v-img class="carousel-image" src="@/assets/images/pexels-alexander-grey-3738057.jpg">

                            </v-img>
                        </v-col>
                        <v-col >
                            <!-- <p class="carousel-text">The dating app designed to be deleted</p> -->
                            <p class="carousel-text">Get your rainbow on and find your pot of gold</p>
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-carousel-item>

            <v-carousel-item> 
                <v-sheet color="rgba(248, 237, 237, 1)" height="" tile>
                    <v-row class="" align="center" justify="center">
                        <v-col>
                            <v-img class="carousel-image" src="@/assets/images/pexels-anete-lusina-5721335.jpg"
                                >

                            </v-img>
                        </v-col>
                        <v-col >
                            <p class="carousel-text">Get your rainbow on and find your pot of gold</p>
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-carousel-item>

            <v-carousel-item>
                <v-sheet color="rgba(248, 237, 237, 1)" height="" tile>
                    <v-row class="" align="center" justify="center">
                        <v-col>
                            <v-img class="carousel-image" src="@/assets/images/pexels-cottonbro-studio-3693901.jpg"
                                >

                            </v-img>
                        </v-col>
                        <v-col >
                            <p class="carousel-text">Meet your match, whoever they may be</p>
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>
    </div>
</template>

<script>
export default {

}
</script>
    
<style lang="scss" scoped>

.carousel-image{
    height: 100vh;
    width: 50vw;
}

.carousel-text {
    align-self: center;
    font-size: 300%;
    margin-left: 10%;
    margin-right: 10%;
    color: rgba(109, 58, 69, 1);
}

@media screen and (max-width: 600px) {
  .carousel-text{
    align-self: center;
    font-size: 100%;
    margin-left: 10%;
    margin-right: 10%;
    color: rgba(109, 58, 69, 1);
  }

  .carousel-image{
    height: 400px;
    width: 220px;
}

}
</style>