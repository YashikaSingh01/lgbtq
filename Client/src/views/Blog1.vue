<template>
    <div>
        <v-carousel v-model="cycle" :show-arrows="false" :continuous="false" :cycle="cycle" hide-delimiter-background
            hide-delimiters height="90vh">
            <v-carousel-item>
                <v-sheet class="" color="rgba(248, 237, 237, 1)" height="" tile>
                    <v-row class="fill-height">
                        <v-col cols="6">
                            <!-- <h3>--insert image--</h3> -->
                            <v-img src="@/assets/images/pexels-marta-branco-1173576.jpg" height="90vh" width="100%"></v-img>
                        </v-col>
                        <v-col cols="4" offset="1" align-self="center">
                            <p class="carousel-text">Don’t know how to talk to your parents about this?</p>
                            <p class="carousel-text-small">
                                Robyn Exton
                                <v-icon>mdi-circle-small</v-icon>
                                19th February 2018
                            </p>
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>

        <v-row style="margin-top: 5vh;">
            <v-col cols="8" offset="2">
                <p>
                    Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                    to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type specimen book.
                </p>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                    an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <p>
                    Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                    to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type specimen book.
                </p>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                    an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <p>
                    Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                    to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type specimen book.
                </p>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                    an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>

            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {

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
}</style>