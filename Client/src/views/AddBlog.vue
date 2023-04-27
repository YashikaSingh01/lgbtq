<template>
    <div class="center">
        <v-row style="margin-top: 5vh;" >
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
                            <p class="addBlogHeadingText">WRITE A BLOG</p>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="8" offset="2" style="margin-top: 3vh;">
                            <v-text-field label="Title" v-model="title"></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="8" offset="2" style="margin-top: 2vh;">
                            <v-text-field label="Subtitle" v-model="subtitle"></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="8" offset="2" style="margin-top: 2vh;">
                            <v-textarea label="Content" v-model="content"></v-textarea>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="8" offset="2" style="margin-top: 2vh; padding-bottom: 5vh;">
                            <v-btn elevation="5" style="color: white; background-color: rgba(109, 58, 69, 1); width: 20vh;" @click="addBlog">
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
import axios from 'axios';
import VueCookies from 'vue-cookies'
import Vue from 'vue'

Vue.use(VueCookies, { expires: '7d'})

export default {
    data() {
        return {
            user: [],
            title: "",
            subtitle: "",
            content: ""
        }
    },

    async mounted () {
        try {
            const response = await axios.post('//localhost:8000/api/getUserInfo', {email: this.$cookies.get("email")})

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

    methods: {
        async created() {
        try {
            const response = await axios.get('//localhost:8000/api/getBlogs')

            const success = (response.status == 200)
            console.log(success)

            if (success) {
                this.$cookies.set("nob", response.data.length)
            }
        }
        catch (err) {
            console.log(err)
        }
    },

        async addBlog() {
            const newBlog = {
                email: this.user.email,
                title: this.title,
                subtitle: this.subtitle,
                content: this.content,
                date: new Date(),
                b_id: (parseInt(this.$cookies.get("nob")) + 1)
            }

            try {
                const response = await axios.post('//localhost:8000/api/addBlog', newBlog)

                const success = (response.status == 200)

                if (success) {
                    console.log('lalallalalalalala')
                    console.log(response.data)
                    this.$cookies.set("nob", parseInt(this.$cookies.get("nob"))+1)
                    this.$router.push('/blogs/' + response.data)
                }
            }
            catch (err) {
                console.log(err)
            }
        }
    },
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