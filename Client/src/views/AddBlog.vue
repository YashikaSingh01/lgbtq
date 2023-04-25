<template>
    <div class="center">
        <v-row style="margin-top: 5vh;">
            <v-col cols="10" offset="1" style="background-color: rgba(248, 237, 237, 1);">
                <!-- <h1 style="color: white;">Login Page</h1> -->
                <div>
                    <v-row style="margin-top: 3vh;">
                        <v-col cols="1" offset="1" align-self="center">
                            <v-avatar size="100" tile>
                                <v-img src="@/assets/logo.png"></v-img>
                            </v-avatar>
                        </v-col>
                        <v-col cols="4" offset="2" align-self="center">
                            <p class="addBlogHeadingText">ADD A BLOG</p>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="8" offset="2" style="margin-top: 3vh;">
                            <v-text-field label="Title"></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="8" offset="2" style="margin-top: 2vh;">
                            <v-text-field label="Subtitle"></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="8" offset="2" style="margin-top: 2vh;">
                            <v-textarea label="Content"></v-textarea>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="8" offset="2" style="margin-top: 2vh; padding-bottom: 5vh;">
                            <v-btn elevation="5" style="color: white; background-color: rgba(109, 58, 69, 1); width: 20vh;">
                                Add Blog
                            </v-btn>
                        </v-col>
                    </v-row>
                </div>
                <!-- <div class="alertmessage" v-if="alertMessage">{{ alertMessage }}</div> -->
            </v-col>
        </v-row>

    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.addblogsheet {
    margin-top: 10vh;
    color: rgba(109, 58, 69, 1);
    background-color: rgb(221, 214, 216);
}

.addBlogHeadingText {
    font-size: 300%;
    color: rgba(109, 58, 69, 1);
    // font-family: 'Times New Roman', Times, serif;
    word-spacing: 2vh;
}
</style>