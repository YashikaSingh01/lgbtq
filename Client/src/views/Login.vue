<template>
    <div class="center">
        <v-row style="margin-top: 5vh;">
            <v-col cols="4" offset="4" style="background-color: rgba(248, 237, 237, 1);">
                <!-- <h1 style="color: white;">Login Page</h1> -->
                <v-avatar size="100" tile>
                    <v-img src="@/assets/logo.png"></v-img>
                </v-avatar>
                <v-text-field label="Email" v-model="email" style="margin-top: 2vh;"></v-text-field>
                <v-text-field label="Password" type="password" v-model="password" style="margin-top: 2vh;"></v-text-field>
                <v-btn block elevation="2" @click="submit()" style="margin-top: 2vh;">
                    SIGN IN
                </v-btn>


                <!-- <v-row style="margin-top: 2vh;"> -->
                <v-dialog v-model="dialog" persistent max-width="600px">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn block color="" v-bind="attrs" v-on="on" style="margin-top: 2vh;">
                            REGISTER
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                            <span class="text-h5">User Profile</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12" sm="6">
                                        <v-text-field label="First name*" v-model="firstname" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-text-field label="Last name*" v-model="lastname"></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field label="Email*" required v-model="email"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-text-field label="Password*" type="password" required
                                            v-model="password"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-text-field label="Confirm Password*" type="password" 
                                        v-model="c_pass" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <!-- <v-text-field label="Date of Birth*" required></v-text-field> -->

                                        <v-menu ref="menu" v-model="menu" :close-on-content-click="false"
                                            transition="scale-transition" offset-y min-width="auto">
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-text-field v-model="dob" label="Date of birth*"
                                                    prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"
                                                    required></v-text-field>
                                            </template>
                                            <v-date-picker v-model="dob" :active-picker.sync="activePicker"
                                                :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                                                min="1950-01-01" @change="save"></v-date-picker>
                                        </v-menu>


                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-autocomplete
                                            :items="['Female', 'Male', 'Trans', 'Agender', 'Gender-neutral', 'Non-binary', 'Other']"
                                            label="Gender*" v-model="gender" required></v-autocomplete>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-autocomplete
                                            :items="['Female', 'Male', 'Trans', 'Agender', 'Gender-neutral', 'Non-binary', 'Other']"
                                            label="Preferences*" multiple required v-model="pref"></v-autocomplete>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-area label="About"></v-area>
                                    </v-col>
                                </v-row>
                            </v-container>
                            <small>*indicates required field</small>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="dialog = false">
                                Close
                            </v-btn>


                            <v-dialog v-model="dialog1" persistent max-width="600px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn color="blue darken-1" text v-bind="attrs" v-on="on" @click="cons()">
                                        Next
                                    </v-btn>
                                </template>
                                <v-card>
                                    <v-card-title>
                                        <span class="text-h5">Upload pictures</span>
                                    </v-card-title>
                                    <v-card-text>
                                        <v-container>
                                            <v-btn color="blue-grey"
                                                class="ma-2 white--text" @click="loader = 'loading'">
                                                Upload
                                                <v-icon right dark>
                                                    mdi-cloud-upload
                                                </v-icon>
                                            </v-btn>
                                        </v-container>
                                    </v-card-text>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="blue darken-1" text @click="dialog1 = false">
                                            Back
                                        </v-btn>
                                        <v-btn color="blue darken-1" text @click="registerUser()">
                                            Save
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>

                            </v-dialog>


                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <!-- </v-row> -->






                <div class="alertmessage" v-if="alertMessage">{{ alertMessage }}</div>
            </v-col>
        </v-row>

    </div>
</template>

<script>
import axios from 'axios'
import getAuth from 'firebase/auth'
import VueCookies from 'vue-cookies'
import Vue from 'vue'

Vue.use(VueCookies, { expires: '7d'})


export default {
    data() {
        return {
            email: "",
            password: "",
            dialog: false,
            dialog1: false,
            firstname: "",
            lastname: "",
            c_pass: "",
            gender: "",
            pref: [],

            activePicker: null,
            dob: null,
            menu: false,

        }
    },

    watch: {
        menu(val) {
            val && setTimeout(() => (this.activePicker = 'YEAR'))
        },
    },

    computed: {
        alertMessage() {
            if (!this.email) {
                return 'Please enter a username'
            }
            else {
                if (!this.password) {
                    return 'Please enter a password'
                }
                else if (this.password.length < 8) {
                    return 'Password should be at least 8 characters long'
                } else if (this.password.length > 20) {
                    return 'Password should not be more than 20 characters long'
                } else {
                    return null
                }
            }
        }
    },

    methods: {
        save(date) {
            this.$refs.menu.save(date)
        },

        async submit() {
            if (this.alertMessage) {
                // this.$router.push('/landingPage')
                return
            }

            try {
                const response = await axios.post('//localhost:8000/api/login', { email: this.email, password: this.password })

                const success = (response.status == 200)
                console.log(success)

                if (success) {
                    this.$router.push('/')
                    this.$cookies.set("email", this.email)
                }
            }
            catch (err) {
                console.log(err)
            }

        },

        async registerUser() {
            const newUser = {
                email: this.email,
                firstname: this.firstname,
                lastname: this.lastname,
                password: this.password,
                gender: this.gender,
                preferences: this.pref,
                dob: this.dob
            }

            try {
                const response = await axios.post('//localhost:8000/api/signup', newUser)

                const success = (response.status == 200)

                if (success) {
                    this.$router.push('/')
                    this.$cookies.set("email", this.email)
                }
            }
            catch (err) {
                console.log(err)
            }
        },

        cons() {
            console.log(this.username)
            console.log(this.firstname)
            console.log(this.lastname)
            console.log(this.c_pass)
            console.log(this.gender)
            console.log(this.pref)
            console.log(this.dob)
        }
    },
}


</script>

<style lang="scss" scoped>
.alertmessage {
    font-size: 100%;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 7%;
    color: rgba(109, 58, 69, 1);
}
</style>