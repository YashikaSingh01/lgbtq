<template>
  <v-app>
    <v-app-bar
      app
      color="rgba(199, 199, 199, 0.9)"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Logo"
          class="shrink mr-2"
          contain
          src="@/assets/logo.png"
          transition="scale-transition"
          width="60"
        />
      </div>

      <v-spacer></v-spacer>

      

      <v-btn color="rgba(109, 58, 69, 1)" elevation="2" rounded>
        <span class="mr-2">Download here</span>
      </v-btn>

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
};
</script>

<style lang="scss" scoped>
@import url('@/assets/styles.css');
</style>
