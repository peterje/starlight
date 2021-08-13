<template>
  <div class="container">
    <v-sheet class="white elevation-3 text-center px-10 align-center justify-space-around" >
      <div class="pa-6 pa-md-12">
        <h2 class="text-subtitle-1">Interesting in working with us?</h2>
        <h2 class="text-h3 text-lg-h2">We Are Hiring!</h2>
      </div>
      <v-row justify="center">
        <v-col cols="6" class="pb-10" align-self="center">
          <v-form ref="form" v-model="formValid">
            <div class="subtitle-1">General Info</div>
            <v-divider ></v-divider>
            <div class="d-flex justify-space-around">
              <v-text-field v-model="firstName" required label="First Name" :rules="nameRules"> </v-text-field>
              <v-text-field v-model="lastName" required label="Last Name" :rules="nameRules"> </v-text-field>
            </div>
            <v-text-field
              v-model="email"
              required
              label="Email"
              type="email"
              :rules="emailRules"
            > </v-text-field>
            <div class="d-flex justify-space-between">
              <v-text-field v-model="age" required label="Age" outlined> </v-text-field>
              <v-text-field v-model="height" required label="Height" outlined class="mx-4"> </v-text-field>
              <v-text-field v-model="shoeSize" required label="Shoe Size" outlined> </v-text-field>
            </div>

            <v-divider ></v-divider>
            <v-file-input
              :rules="fileRules"
              accept="image/pdf"
              placeholder="Upload resume"
              prepend-icon="mdi-file-document"
            ></v-file-input>
            <v-file-input
              :rules="fileRules"
              accept="image/png image/jpeg, image/bmp"
              placeholder="Upload headshot"
              prepend-icon="mdi-camera"
            ></v-file-input>
            <v-btn outlined @click.stop="successModal=true">Submit</v-btn>

          </v-form>
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
        </v-col>
      </v-row>
    </v-sheet>
  </div>
</template>

<script type="ts">
export default {
  name: 'BookPage',
  components: {
  },
  data()  {
    return {
      // List of images displayed in the carousel
      selectedPerformers: 1,
      selectedItem: 'Princess Party',
      firstName:'',
      lastName: '',
      email: '',
      age: '',
      shoeSize: '',
      height: '',
      dateModal: false,
      timeModal: false,
      time: '',
      modal2: false,
      valid: false,
      firstname: '',
      items: ['Princess Party', 'Magic Mirror Call', 'Magical Message', 'Public Event' ],
      numPerformers: [1,2,3],
      lastname: '',
      formValid: true,
      addressRules: [
        (v) => !!v || 'Address is required'
      ],
      dateRules: [
        (v) => !!v || 'Date is required'
      ],
      timeRules: [
        (v) => !!v || 'Date is required'
      ],
      nameRules: [
        (v) => !!v || 'Name is required'
      ],
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      fileRules: [
        value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
      ],

      successModal: false

    }
  },
  computed: {
    price: function () {
      if (this.selectedItem === 'Princess Party') {
        return 150 + this.selectedPerformers * 100
      }else if(this.selectedItem === "Magic Mirror Call"){
        return 30
      }else if(this.selectedItem === "Magical Message"){
        return 10
      }

      return 0
    }

  },
  methods: {
    submitForm: function () {
      const isValid = this.$refs.form.validate()

      if (isValid) {
        this.successModal = true
      }
    }
  }
  // TODO: Beautify the quote price
  // Add some text to the submit dialog
  // Add some disclaimer

}
</script>

<style scoped>

</style>
