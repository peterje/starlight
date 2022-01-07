<template>
  <v-sheet class="elevation-3">
    <div class="d-flex flex-column flex-md-row">
      <div class="w-full w-md-half">
        <v-img
          v-show="$vuetify.breakpoint.mdAndUp"
          src="/images/contact.jpg"
          :max-height="$vuetify.breakpoint.mdAndUp ? undefined : '300'"
          alt=""
        ></v-img>
      </div>
      <div class="w-full w-md-half d-flex align-center">
        <div class="pa-6 pa-md-12 justify-center text-center">
          <div class="d-flex">
            <v-btn fab class="ma-4 ml-0 surface " href="https://www.facebook.com/pg/starlightstudiony">
              <v-icon x-large >mdi-facebook</v-icon>
            </v-btn>
            <v-btn fab class="ma-4 surface " href="https://www.instagram.com/starlightstudiony/">
              <v-icon x-large >mdi-instagram</v-icon>
            </v-btn>
          </div>
          <h2 class="text-h3 text-lg-h2">Ready to book your experience?</h2>
          <v-btn color="secondary" x-large to="/book" class="mt-2">Start here!</v-btn>
        </div>
      </div>
    </div>
    <v-dialog v-model="successModal" width="500">
    <v-sheet class="pa-5 flex-column">
      <v-row justify="center">
        <div class="title">Thanks!</div>
      </v-row>
      <v-row justify="center">
        <div class="subtitle-1" >Your request has been processed.</div>
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
export default {
  data(){
    return{
      successModal : false,
      uid: '',
      name: '',
      email : '',
      phone : '',
      message: ''
    }
  },
  methods:{
    submit(name, email, phone, message){
      this.successModal = true;
      const postData = {
        author: this.name,
        phone: this.phone,
        email: this.email,
        message: this.message,
      };
      const newPostKey = firebase.database().ref().child('messages').push().key;
      const updates = {}
      updates['/messages/' + newPostKey ] = postData;
      return firebase.database().ref().update(updates);
    }
  }
}
</script>
