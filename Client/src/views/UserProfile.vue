<template>
    <v-container fluid>
        <v-layout column>
            <v-card style="margin-top: 5vh;">
                <v-card-text>
                    <v-row>
                        <v-col>
                            <v-flex class="mb-4">
                                <v-avatar size="150" class="mr-4">
                                    <v-img
                                        src="https://media.npr.org/assets/img/2015/04/19/dsc_0129_sq-3005d8eb4ddb83fff5d509df814f6c2cb345b235-s1400.jpg" />
                                </v-avatar>
                            </v-flex>
                        </v-col>
                        <v-col>
                            <v-text-field v-model="firstname" label="FirstName"></v-text-field>
                            <v-text-field v-model="lastname" label="Last Name"></v-text-field>
                            <v-text-field v-model="email" label="Email" editable="false" readonly></v-text-field>
                            <v-text-field v-model="about" label="About"></v-text-field>
                            <v-autocomplete
                                :items="['Female', 'Male', 'Trans', 'Agender', 'Gender-neutral', 'Non-binary', 'Other']"
                                label="Preferences*" multiple required v-model="preferences"></v-autocomplete>
                            <v-card-actions>
                            <!-- Add backend for the preferences and display added by user pehle -->

                                <v-btn color="primary" :loading="loading" @click="saveChanges()">
                                    Save Changes
                                </v-btn>
                            </v-card-actions>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios'
import VueCookies from 'vue-cookies'
import Vue from 'vue'

Vue.use(VueCookies, { expires: '7d'})

export default {
    pageTitle: 'My Profile',

    data() {
        return {
            loading: false,
            user: [],
            firstname: "",
            lastname: "",
            about: "",
            email: "",
            preferences: {},
            showAvatarPicker: false
        }
    },

    async mounted () {
        console.log('hi')
        try {
            const response = await axios.post('//localhost:8000/api/getUserInfo', {email: this.$cookies.get("email")})

            const success = (response.status == 200)

            if (success) {
                this.user = response.data
                console.log(this.user)
                this.firstname = this.user.firstname
                this.lastname = this.user.lastname
                this.email = this.user.email
                this.about = this.user.about
                this.preferences = this.user.preferences
            }
        }
        catch (err) {
            console.log(this.user)
            console.log(err)
        } 
    },

    methods: {
        async saveChanges() {
            const data = {
                firstname : this.firstname,
                lastname : this.lastname,
                about : this.about,
                email : this.email,
                preferences : this.preferences
            }
            try {
                console.log(this.user)
                const response = await axios.post('//localhost:8000/api/updateUser', data)

                const success = (response.status == 200)

                if (success) {
                    this.$router.push('/')
                    this.$cookies.set("email", this.email)
                }
            }
            catch (err) {
                console.log(err)
            }
        }
    },
}
</script>