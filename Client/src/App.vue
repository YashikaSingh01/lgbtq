<template>
  <v-app>
    <v-app-bar
      app
      color="rgba(199, 199, 199, 0.5)"
      dark
    >
      <div class="d-flex align-center main-icon">
        <v-img
          alt="Logo"
          class="shrink mr-2"
          contain
          src="@/assets/logo.png"
          transition="scale-transition"
          width="95"
        />
      </div>

      <!-- <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>

      <p class="appbar-text">Blogs</p>

      <v-spacer></v-spacer>

      <p class="appbar-text">Counselling</p> -->

      <v-spacer></v-spacer>
    <div class="d-flex align-center appbar-text">
      <div class="mr-2" >
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
      <router-view/>
    </v-main>

    <Footer style="margin-top: 5%;"></Footer>

  </v-app>
  
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
  name: 'App',

  data: () => ({
    //
    
  }),

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
      this.$router.push('/login')
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

.appbar-text{
  color: rgba(109, 58, 69, 1);

}
</style>