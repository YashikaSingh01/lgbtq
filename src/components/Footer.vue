<template>
    <div class="black-bg text-white">
        <v-row>
            <v-col cols="4" offset="1">
                <v-img class="footer-img" src="@/assets/logo (white).png" alt="Logo" contain max-width="100" max-height="100">

                </v-img>
            </v-col>
            <v-col cols="1"></v-col>
            <v-col cols="2">
                <v-list class="footer-list">
                    <v-list-item dark>
                        <v-list-item-content>
                            <v-list-item-subtitle style="margin-bottom: 10%; margin-top: 5%;">
                                Index
                            </v-list-item-subtitle>

                            <v-list-item-title class="footer-list-item">
                                Mission
                            </v-list-item-title>
                            <v-list-item-title class="footer-list-item">
                                Press
                            </v-list-item-title>
                            <v-list-item-title class="footer-list-item">
                                Blog
                            </v-list-item-title>
                            <v-list-item-title class="footer-list-item">
                                Contact
                                <v-icon>mdi-instagram</v-icon>
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-col>
            <v-col cols="2">
                <v-list class="footer-list">
                    <v-list-item dark>
                        <v-list-item-content>
                            <v-list-item-subtitle style="margin-bottom: 10%; margin-top: 5%;">
                                Resourcer
                            </v-list-item-subtitle>

                            <v-list-item-title class="footer-list-item">
                                FAQs
                            </v-list-item-title>
                            <v-list-item-title class="footer-list-item">
                                Trust and Safety
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-col>
            <v-col cols="2">
                <v-list class="footer-list">
                    <v-list-item dark>
                        <v-list-item-content>
                            <v-list-item-subtitle style="margin-bottom: 10%; margin-top: 5%;">
                                Legal
                            </v-list-item-subtitle>

                            <v-list-item-title class="footer-list-item">
                                Security
                            </v-list-item-title>
                            <v-list-item-title class="footer-list-item">
                                Terms
                            </v-list-item-title>
                            <v-list-item-title class="footer-list-item">
                                Privacy
                            </v-list-item-title>
                            <v-list-item-title class="footer-list-item">
                                Cookie Policy
                            </v-list-item-title>
                            <v-list-item-title class="footer-list-item">
                                Cookie Settings
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.black-bg {
    background-color: black;
}

.text-white {
    color: white;
}

.footer-list {
    background-color: black;
}

.footer-list-item {
    margin-bottom: 5%;
}

.footer-img {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 12%;
}


</style>