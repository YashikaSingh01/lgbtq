<template>
    <div class="center">
        <v-row style="margin-top: 5vh;">
            <v-col cols="4" offset="4"
                style="background-color: rgba(248, 237, 237, 1);">
                <!-- <h1 style="color: white;">Login Page</h1> -->
                <v-avatar size="100" tile>
                    <v-img src="@/assets/logo.png"></v-img>
                </v-avatar>
                <v-text-field label="Username" v-model="username" style="margin-top: 2vh;"></v-text-field>
                <v-text-field label="Password" type="password" v-model="password" style="margin-top: 2vh;"></v-text-field>
                <v-btn block elevation="2" @click="submit" style="margin-top: 2vh;">
                    SIGN UP
                </v-btn>


                <!-- <v-row style="margin-top: 2vh;"> -->
                    <v-dialog v-model="dialog" persistent max-width="600px" >
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
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field label="First name*" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field label="Last name*" hint=""></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field label="Email*" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field label="Password*" type="password" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6">
                                            <v-text-field label="Age*" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6">
                                            <v-autocomplete
                                                :items="['Lesbian', 'Gay', 'Bisexual', 'Trans', 'Queer', 'Pansexual', 'Other']"
                                                label="Gender"></v-autocomplete>
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
                                <v-btn color="blue darken-1" text @click="dialog = false">
                                    Save
                                </v-btn>
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
export default {
    data() {
        return {
            username: "",
            password: "",
            dialog: false
        }
    },

    computed: {
        alertMessage() {
            if (!this.username) {
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
        async submit () {
            if (this.alertMessage) {
                // this.$router.push('/landingPage')
                return
            }

            try {
                const response = await axios.post('//localhost:8000/api/login', {username: this.username, password: this.password})

                const success = response.status
                console.log(success)

                if(success) {
                    this.$router.push('/landingPage')
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
.alertmessage {
    font-size: 100%;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 7%;
    color: rgba(109, 58, 69, 1);
}
</style>