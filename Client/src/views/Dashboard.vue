<template>
    <div>
        <v-row>
            <v-col cols="6" offset="3" align-self="center">
                <v-card class="mx-auto" max-width="400" height="600" style="margin-top: 4vh;" align-self="center">
                    <v-img class="white--text align-end" height="500px"
                        src="https://toronto.citynews.ca/wp-content/blogs.dir/sites/10/2016/04/22/image7336171_hd.jpg">
                        <v-card-title>Sarah Green</v-card-title>
                    </v-img>

                    <v-card-subtitle class="pb-0">
                        37 years old
                    </v-card-subtitle>

                    <v-card-text class="text--primary">
                        <div>Loves badminton and beaches</div>
                        <div>Serious relationship</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-col cols="6" sm="3">
                            <v-btn color="orange" block text style="margin-left: 10vh;" cols="6">
                                <mdi-thumb-down>Dislike</mdi-thumb-down>
                            </v-btn>
                        </v-col>
                        <v-col cols="6" sm="3">
                            <v-btn color="orange" block text style="margin-left: 11vh;">
                                Like
                            </v-btn>
                        </v-col>
                    </v-card-actions>
                </v-card>
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
            potentialUsers: []
        }
    },

    async mounted () {
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
        };
    },

    async afterMount() {
        try {
            const response = await axios.post('//localhost:8000/api/getPotentialMatches', { preferences: this.user.preferences })

            if (success) {
                this.potentialUsers = response.data
                console.log(this.potentialUsers)
            }
        }
        catch (err) {
            console.log(err)
        };
    }
}

