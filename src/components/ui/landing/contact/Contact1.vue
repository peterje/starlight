<template>
  <v-sheet>
    <v-container class="py-8">
      <v-row>
        <v-col cols="12" md="6">
          <h3 class="text-h3">Contact Us</h3>
          <div class="text-h6 text-lg-h5 my-3">We would love to hear from you! Email us or use the form below, and we will respond via email as soon as we can.</div>
          <v-divider></v-divider>
          <div class="font-weight-bold text-body-1">
            <div class="d-flex align-center mt-3">
              <v-icon>mdi-email-outline</v-icon>
              <span class="ml-1">
                <a href="#" class="text-decoration-none">starlightstudiony@gmail.com</a>
              </span>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <h3 class="text-h3">Send a Message</h3>
          <v-form class="mt-2">
            <v-text-field label="Name" v-model="name"></v-text-field>
            <v-text-field label="Email" v-model="email"></v-text-field>
            <v-text-field label="Phone" v-model="phone"></v-text-field>
            <v-textarea label="Message" v-model="message"></v-textarea>
            <v-btn submit large color="secondary" @click="submit" min-width="180">Send</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog v-model="successModal" width="500">
      <v-sheet class="pa-5 flex-column">
        <v-row justify="center">
          <div class="title">Thanks!</div>
        </v-row>
        <v-row justify="center">
          <div class="subtitle-1" v-if="error == true">Sorry, that didn't go through. Please try contacting at our email.</div>
          <div class="subtitle-1" v-else>Your request has been processed.</div>
        </v-row>
        <v-row class="justify-center pt-4">
          <v-btn color="surface" @click="successModal = false">Okay</v-btn>
        </v-row>
      </v-sheet>
    </v-dialog>
  </v-sheet>
</template>

<script>
import firebase from "firebase";

export default{
  data(){
    return {
      name: '',
      email: '',
      phone: '',
      error: false,
      message: '',
      successModal: false
    }
  },
  methods:{
    submit: async function(){
      const ref = firebase.firestore().collection('messages')
      const new_post = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.message
      }
      try{
        await ref.add(new_post)
        this.successModal = true
      }catch (e) {
        this.error = true
        this.successModal = false
        console.log(e)
      }
    }
  }
}
</script>
