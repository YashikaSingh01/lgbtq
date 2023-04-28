<template>
    <div>
        <v-carousel v-model="cycle" :show-arrows="false" :continuous="false" :cycle="cycle" hide-delimiter-background
            hide-delimiters height="90vh">
            <v-carousel-item>
                <v-sheet class="" color="rgba(248, 237, 237, 1)" height="" tile>
                    <v-row class="fill-height">
                        <v-col cols="6">
                            <!-- <h3>--insert image--</h3> -->
                            <v-img src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1656649737.jpg" height="90vh" width="100%"></v-img>
                        </v-col>
                        <v-col cols="4" offset="1" align-self="center">
                            <p class="carousel-text">{{ blog.title }}</p>
                            <p class="carousel-text-small">
                                {{ getUserName(blog.email) }}
                                <v-icon>mdi-circle-small</v-icon>
                                {{ getDate(blog.date) }} {{ getMonth(blog.date) }} {{ getYear(blog.date) }}
                            </p>
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>

        <v-row style="margin-top: 5vh;">
            <v-col cols="8" offset="2">
                <p>
                    {{ blog.content }}
                </p>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import axios from 'axios'
import VueCookies from 'vue-cookies'
import Vue from 'vue'

Vue.use(VueCookies, { expires: '7d'})

export default {
    data() {
        return {
            id: 0,
            blog: {},
            blogsList: [],
            fullname: ""
        }
    },

    async created() {
        try {
            const response = await axios.get('//localhost:8000/api/getBlogs')

            const success = (response.status == 200)
            console.log(success)

            if (success) {
                this.blogsList = response.data
                console.log(this.blogsList)
                this.blog = this.blogsList.find(rec => rec.b_id == this.$route.params.id);
                console.log(this.blog)
            }
        }
        catch (err) {
            console.log(err)
        }
    },

    mounted () {
        this.blog = this.blogsList.find(rec => rec.b_id == this.$route.params.id);
        console.log(this.blogsList)
    },

    methods: {
        async getUserName(userEmail) {
            try {
                const response = await axios.post('//localhost:8000/api/getUserName', {email: userEmail})

                const success = (response.status == 200)
                console.log(success)

                if (success) {
                    console.log(response.data)
                    return response.data
                }
            }
            catch (err) {
                console.log(err)
            }

            return ""
        },

        getDate(dateString) {
                const dateTimeArray = dateString.split('T');
                const dateOnly = dateTimeArray[0];
                const date = dateOnly.split('-')
                return date[2]
        },

        getMonth(dateString) {
            const dateTimeArray = dateString.split('T');
            const dateOnly = dateTimeArray[0];
            const dateArray = dateOnly.split('-')
            if(dateArray[1] == "01")
                return "January";
            else if(dateArray[1] == "02")
                return "February";
            else if (dateArray[1] == "03")
                return "March";
            else if (dateArray[1] == "04")
                return "April";
            else if (dateArray[1] == "05")
                return "May";
            else if (dateArray[1] == "06")
                return "June";
            else if (dateArray[1] == "07")
                return "July";
            else if (dateArray[1] == "08")
                return "August";
            else if (dateArray[1] == "09")
                return "September";
            else if (dateArray[1] == "10")
                return "October";
            else if (dateArray[1] == "11")
                return "November";
            else if (dateArray[1] == "12")
                return "December";
        },

        getYear(dateString) {
            const dateTimeArray = dateString.split('T');
            const dateOnly = dateTimeArray[0];
            const dateArray = dateOnly.split('-')
            return dateArray[0];
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
}</style>