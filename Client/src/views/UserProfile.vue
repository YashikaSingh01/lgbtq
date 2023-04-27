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
                            <v-text-field v-model="form.firstName" label="FirstName"></v-text-field>
                            <v-text-field v-model="form.lastName" label="Last Name"></v-text-field>
                            <v-text-field v-model="form.contactEmail" label="Email"></v-text-field>
                            <v-text-field v-model="form.about" label="About"></v-text-field>
                            <v-autocomplete
                                :items="['Female', 'Male', 'Trans', 'Agender', 'Gender-neutral', 'Non-binary', 'Other']"
                                label="Preferences*" multiple required v-model="pref"></v-autocomplete>
                            <v-card-actions>
                            <!-- Add backend for the preferences and display added by user pehle -->

                                <v-btn color="primary" :loading="loading" @click.native="update">
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
export default {
    pageTitle: 'My Profile',
    data() {
        return {
            loading: false,
            form: {
                firstName: 'John',
                lastName: 'Doe',
                contactEmail: 'john@doe.com',
                about: '',
            },
            showAvatarPicker: false
        }
    },
}
</script>