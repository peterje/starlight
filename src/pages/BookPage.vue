<template>
  <div class="container">
    <v-sheet class="white elevation-3 text-center px-10 align-center justify-space-around" >
      <div class="pa-6 pa-md-12">
        <h2 class="text-h3 text-lg-h2">The Magic Starts Here</h2>
        <h2 class="text-subtitle-1">Fill out this form to request a booking</h2>
      </div>
      <v-row justify="center">
        <v-col cols="12" class="pb-10" align-self="center">
          <v-form ref="form" v-model="formValid">
            <v-subtitle>General Info</v-subtitle>
            <v-divider ></v-divider>
            <v-text-field v-model="firstName" required label="First Name" :rules="nameRules"> </v-text-field>
            <v-text-field v-model="lastName" required label="Last Name" :rules="nameRules"> </v-text-field>
            <v-text-field
              v-model="email"
              required
              label="Email"
              type="email"
              :rules="emailRules"
            > </v-text-field>
            <v-text-field v-model="address1" required label="Address 1"> </v-text-field>
            <v-text-field v-model="address2" label="Address 2"> </v-text-field>
            <div class="d-flex justify-space-between mb-4">
              <v-text-field v-model="city" required label="City"> </v-text-field>
              <v-spacer/>
              <v-text-field v-model="state" required label="State"> </v-text-field>
              <v-spacer/>
              <v-text-field v-model="zipCode" required label="Postal Code"> </v-text-field>
            </div>
            <v-subtitle>Event Info</v-subtitle>
            <v-divider ></v-divider>
            <div class="d-flex justify-space-between">
              <v-dialog
                ref="date"
                v-model="dateModal"
                :return-value.sync="date"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    label="Date"
                    prepend-icon="mdi-calendar"
                    readonly
                    :rules="dateRules"
                    required
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  scrollable
                >
                  <v-spacer></v-spacer>
                  <v-btn
                    text
                    color="primary"
                    @click="dateModal = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.date.save(date)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-dialog>
              <v-spacer/>
              <v-dialog
                ref="dialog"
                v-model="timeModal"
                :return-value.sync="time"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="time"
                    label="Time"
                    prepend-icon="mdi-clock-time-four-outline"
                    readonly
                    :rules="timeRules"
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-time-picker
                  v-if="timeModal"
                  v-model="time"
                  full-width
                  ampm-in-title
                >
                  <v-spacer></v-spacer>
                  <v-btn
                    text
                    color="primary"
                    @click="timeModal = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.dialog.save(time)"
                  >
                    OK
                  </v-btn>
                </v-time-picker>
              </v-dialog>
            </div>
            <v-select
              v-model="selectedItem"
              :items="items"
              filled
              label="Service"
            ></v-select>
            <v-select
              v-if="selectedItem === 'Princess Party'"
              v-model="selectedPerformers"
              :items="numPerformers"
              filled
              label="Number of Performers"
            ></v-select>
            <v-text-field label="Characters Requested" v-model="characters"> </v-text-field>
            <v-textarea shaped outlined label="Special Requests"></v-textarea>
            <v-text-field label="Promo Code" v-model="code"> </v-text-field>
<!--            <h1 class="display-1 my-4">Request booking for estimate</h1>-->
            <v-btn color="surface" x-large @click="submit" >Request</v-btn>
            <div class="subtitle-1 font-weight-light">Requesting a booking does not require payment</div>
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
import firebase from "firebase";
export default {
  name: 'BookPage',
  components: {
  },
  data()  {
    return {
      // List of images displayed in the carousel
      characters: '',
      code: '',
      selectedPerformers: 1,
      selectedItem: 'Princess Party',
      firstName:'',
      lastName: '',
      email: '',
      address1: '',
      address2:'',
      city: '',
      state: '',
      zipCode: '',
      date: '',
      dateModal: false,
      timeModal: false,
      time: '',
      modal2: false,
      valid: false,
      firstname: '',
      items: ['Princess Party', 'Public Event' ],
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
    },
      submit: async function() {
        const isValid = this.$refs.form.validate()

        if (isValid) {
          this.successModal = true
        }else{
          return
        }
        const ref = firebase.firestore().collection('bookings')
        const new_post = {
          email: this.email,
          contacted: false,
          name: this.firstName + " " + this.lastName,
          date: this.date,
          time: this.time,
          characters: this.characters,
          service: this.selectedItem ,
          performers: this.selectedPerformers,
          address: this.address1 + " " +  this.address2 + " " + this.city + ", " +  this.state,
          archived: false,
          promo: this.code | 'None'
        }
        try{
          await ref.add(new_post)
        }catch (e) {
          console.log(e)
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
