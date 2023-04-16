<template>
    <div class="center">
        <v-row style="margin-top: 5vh;">
            <v-col cols="8" sm="6" offset-sm="3" md="4" offset-md="4" offset="2"
                style="background-color: rgba(248, 237, 237, 1);">
                <!-- <h1 style="color: white;">Login Page</h1> -->
                <v-avatar size="100" tile>
                    <v-img src="@/assets/logo.png"></v-img>
                </v-avatar>
                <v-text-field label="Username" v-model="username"></v-text-field>
                <v-text-field label="Password" type="password" v-model="password"></v-text-field>
                <v-btn block elevation="2" @click="submit" >
                    SIGN UP
                </v-btn>
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
        submit() {
            if (!this.alertMessage) {
                this.$router.push('/landingPage')
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