<template>
    <div class="center">
        <v-row>
            <v-col cols="8" sm="6" offset-sm="3" md="4" offset-md="4" offset="2" style="background-color: rgba(248, 237, 237, 1);">
                <!-- <h1 style="color: white;">Login Page</h1> -->
                <v-avatar size="100" tile>
                    <v-img src="@/assets/logo.png"></v-img>
                </v-avatar>
                <v-text-field label="Username" v-model="username"></v-text-field>
                <v-text-field label="Password" type="password" v-model="password"></v-text-field>
                <v-btn block elevation="2">
                    LOGIN
                </v-btn>
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
        
    }
</script>

<style lang="scss" scoped>

</style>