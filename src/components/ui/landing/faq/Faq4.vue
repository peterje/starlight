<template>
  <v-sheet>
    <v-container class="py-4 py-lg-8">
      <v-responsive max-width="1200" class="mx-auto text-center">
        <h2 class="text-h3 text-lg-h2">Frequently Asked Questions</h2>
        <div style="width: 80px; height: 4px" class="my-4 primary mx-auto" />
      </v-responsive>

      <v-row class="mt-6">
        <v-col
          v-for="(item, i) in faq"
          :key="i"
          cols="12"
          lg="6"
        >
          <div class="text-h4 font-weight-bold primary--text" >
            {{ item.question }}
          </div>
          <div class="text-h6 mt-2">
            {{ item.answer }}
          </div>
        </v-col>
      </v-row>

      <v-responsive max-width="1200" class="mx-auto text-center">
        <div class="text-h6 text-lg-h5">Any other questions?</div>
        <div class="text-h6 text-lg-h5">Feel free to email us! <span class="primary--text">starlightstudiony@gmail.com</span></div>
      </v-responsive>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      faq: [{
        question: 'Booking',
        answer: 'The booking process begins here - on our website! Review the option available under the “services” tab for your desired service type. If you need help deciding on what service option is right for your event, take a look at the rest of this page or send us an email, we are happy to help! Once you’ve decided, fill out the form under the “book” tab to tell us more about your event. Once we have received your request, we will reach out to you via email to confirm the details of your event! Once everything looks good, we will generate a digital invoice and send via email which you can pay online with any debit or credit card right from home!'
      }, {
        question: 'Date and Time',
        answer: 'We highly recommend that you schedule the arrival of the performer for 30 minutes past the start time of your event. This will ensure all of your guests have plenty of time to arrive and settle in prior to the performer arriving and beginning activities. Generally, events take place on weekend days between 9:00am and 5:00pm. Weekday events can occasionally be accommodated under special circumstances.'
      }, {
        question: 'Group Size / Number of Performers',
        answer: 'Our rule of thumb is one performer for every 10 children. Especially if your little guests are under the age of three, we highly suggest adhering to this guideline. Consider adding an additional character if you have a larger group attending your event, or a longer timeframe. If your prince or princess is turning four or older, a 15 child group size can occasionally be accommodated.  event duration For the littlest members of our kingdom, (under the age of three) a 30 minute event can be perfect to keep everyone engaged without becoming over stimulated. While children four and older can enjoy all the magic of the 60 minute event!  '
      }, {
        question: 'Location',
        answer: 'All prices include travel up to 30 miles from New Paltz, New York. Locations outside of that radius require a fee of $1.00 per mile. We ask that you refrain from choosing a location or venue that provides entertainment services such as a gym, zoo, or circus. Our professional performers will engage your guests from start to finish, and we find that little ones are able to most successfully engage with the performer when there is not additional stimulus.'
      }
      ]
    }
  }
}
</script>
