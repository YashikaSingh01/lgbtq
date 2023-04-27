<template>
  <v-app>
    <v-app-bar app color="rgba(199, 199, 199, 0.5)" dark>
      <div class="d-flex align-center main-icon">
        <v-btn icon x-large v-on="on" @click="goToLandingPage">
          <v-avatar tile size="90" style="margin-left: 5vh;">
            <v-img alt="Logo" class="shrink mr-2" contain src="@/assets/logo.png" transition="scale-transition"
              width="95" />
          </v-avatar>
        </v-btn>
      </div>

      <!-- <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>

      <p class="appbar-text">Blogs</p>

      <v-spacer></v-spacer>

      <p class="appbar-text">Counselling</p> -->

      <v-spacer></v-spacer>
      <div class="d-flex align-center appbar-text">
        <div class="mr-2">
          <!-- <span @click="goToBlogs">Blogs</span> -->
          <v-btn text color="rgba(109, 58, 69, 1)" style="font-size: 100%;" @click="goToBlogs">Blogs</v-btn>
          <!-- <v-btn
        class="ma-1"
        color="rgba(109, 58, 69, 1)"
        plain
        @click="goToBlogs"
      >
        Blogs
      </v-btn> -->
        </div>

        <div class="mr-2" style="margin-left: 3vh;">
          <!-- <span @click="goToCounselling">Counselling</span> -->
          <v-btn text color="rgba(109, 58, 69, 1)" style="font-size: 100%;" @click="goToCounselling">COUNSELLING</v-btn>
        </div>


        <div class="mr-2" style="margin-left: 3vh;">
          <!-- <v-container fluid style="height: 300px"> -->
          <v-row justify="center">
            <v-menu bottom min-width="200px" rounded offset-y>
              <template v-slot:activator="{ on }">
                <v-btn icon x-large v-on="on">
                  <v-avatar color="brown" size="40">
                    <v-icon dark>
                      mdi-account-circle
                    </v-icon>
                    <span class="white--text text-h5"></span>
                  </v-avatar>
                </v-btn>
              </template>
              <v-card>
                <v-list-item-content class="justify-center">
                  <div class="mx-auto text-center">
                    <v-avatar color="brown">
                      <span class="white--text text-h5">{{ user.firstname[0] }}{{ user.lastname[0] }}</span>
                    </v-avatar>
                    <h3>{{ user.firstname }} {{ user.lastname }}</h3>
                    <p class="text-caption mt-1">
                      {{ user.email }}
                    </p>
                    <v-divider class="my-3"></v-divider>
                    <v-btn depressed rounded text>
                      Edit Account
                    </v-btn>
                    <v-divider class="my-3"></v-divider>
                    <v-btn depressed rounded texts>
                      Logout
                    </v-btn>
                  </div>
                </v-list-item-content>
              </v-card>
            </v-menu>
          </v-row>
          <!-- </v-container> -->
        </div>

        <div class="mr-2" style="margin-left: 3vh;">
          <v-btn text color="rgba(109, 58, 69, 1)" style="font-size: 100%;" @click="goToLogin">LOGIN</v-btn>
        </div>
      </div>



      <!-- <v-btn color="rgba(109, 58, 69, 1)" elevation="2" rounded>
        <span class="mr-2">Download here</span>
      </v-btn> -->

      <!-- <v-btn
        href="@/views/Login.vue"
        target="_blank"
        text
      > -->
      <!-- <v-icon>mdi-open-in-new</v-icon> </v-btn>-->

    </v-app-bar>




    <v-main>
      <router-view />
    </v-main>

    <Footer style="margin-top: 5%;"></Footer>

  </v-app>
</template>

<script>
import Footer from '@/components/Footer.vue'

import VueCookies from 'vue-cookies'
import axios from 'axios'
import Vue from 'vue'

Vue.use(VueCookies, { expires: '7d' })

export default {
  name: 'App',

  data: () => ({
    user: {
      email: "",
      firstname: "",
      lastname: ""
    }
  }),

  async mounted() {
    try {
      if (this.$cookies.get("email")) {
        const response = await axios.post('//localhost:8000/api/getUserInfo', { email: this.$cookies.get("email") })

        const success = (response.status == 200)
        console.log(this.$cookies.get("email"))

        if (success) {
          this.user = response.data
        }
      }
    }
    catch (err) {
      console.log(err)
    }
  },

  components: {
    Footer,
  },

  methods: {
    goToBlogs() {
      this.$router.push('/blogs')
    },
    goToCounselling() {
      this.$router.push('/counselling')
    },
    goToLogin() {
      this.$cookies.remove()
      this.$router.push('/login')
    },
    goToLandingPage() {
      this.$router.push('/')
    },

  },
};
</script>

<style lang="scss" scoped>
@import url('@/assets/styles.css');

.main-icon {
  position: relative;
  top: 60%;
  left: 1%;
}

.appbar-text {
  color: rgba(109, 58, 69, 1);

}
</style>