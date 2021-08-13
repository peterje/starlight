<template>
  <v-sheet class="elevation-3">
    <div class="d-flex flex-column flex-md-row">
      <div class="w-full w-md-half">
        <v-img
          v-show="$vuetify.breakpoint.mdAndUp"
          src="/images/contact.png"
          :max-height="$vuetify.breakpoint.mdAndUp ? undefined : '300'"
          min-height="100%"
          alt=""
        ></v-img>
      </div>
      <div class="w-full w-md-half d-flex align-center">
        <div class="pa-6 pa-md-12">
          <div class="d-flex">
            <v-btn fab class="ma-4 ml-0 surface " href="https://www.facebook.com/pg/starlightstudiony">
              <v-icon x-large >mdi-facebook</v-icon>
            </v-btn>
            <v-btn fab class="ma-4 surface " href="https://www.instagram.com/starlightstudiony/">
              <v-icon x-large >mdi-instagram</v-icon>
            </v-btn>
<!--            <v-btn fab class="ma-4 surface">-->
<!--              <v-icon x-large >mdi-google-plus</v-icon>-->
<!--            </v-btn>-->
          </div>
          <h2 class="text-h3 text-lg-h2">Contact Us <span>
          </span></h2>
          <div class="text-h6 text-lg-h5 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus impedit error labore doloremque fugit! Dolor fugit molestiae vero quos quisquam nobis, eos debitis magni omnis ea incidunt amet voluptate dignissimos!</div>
          <v-form class="mt-2">
            <v-text-field label="Name" outlined solo v-model="name"></v-text-field>
            <v-text-field label="Email" outlined solo v-model="email"></v-text-field>
            <v-text-field label="Phone" outlined solo v-model="phone"></v-text-field>
            <v-textarea label="Message" outlined solo v-model="message"></v-textarea>
            <div class="d-flex justify-center">
              <v-btn submit x-large color="secondary" min-width="180" @click.stop="submit">Send</v-btn>
            </div>
          </v-form>
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
