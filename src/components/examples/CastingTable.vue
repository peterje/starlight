<template>
  <v-card class="my-1">
    <v-data-table
      v-if="bookings"
      v-model="selectedUsers"
      :headers="headers"
      :items="bookings"
      :search="searchQuery"
      class="flex-grow-1"
    >
      <template v-slot:item.id="{ item }">
        <div class="font-weight-bold"># {{ item.id }}</div>
      </template>

      <template v-slot:item.email="{ item }">
        <div class="d-flex align-center py-1">
          <div class="ml-1 caption font-weight-bold">
            {{ item.email }}
          </div>
        </div>
      </template>

      <template v-slot:item.contacted="{ item }">
        <v-icon v-if="item.contacted" small color="success" @click="setNoContacted(item.id)">
          mdi-check-circle
        </v-icon>
        <v-icon v-else small @click="setContacted(item.id)">
          mdi-circle-outline
        </v-icon>
      </template>

      <template v-slot:item.resume="{ item }">
        <a :href="item.resume">Resume</a>
      </template>

      <template v-slot:item.headshot="{ item }">
        <a :href="item.headshot">Headshot</a>
      </template>

      <template v-slot:item.disabled="{ item }">
        <div>{{ item.disabled.toString() | capitalize }}</div>
      </template>

      <template v-slot:item.role="{ item }">
        <v-chip
          label
          small
          class="font-weight-bold"
          :color="item.role === 'ADMIN' ? 'primary' : undefined"
        >{{ item.role | capitalize }}</v-chip>
      </template>

      <template v-slot:item.created="{ item }">
        <div>{{ item.created }}</div>
      </template>

      <template v-slot:item.lastSignIn="{ item }">
        <div>{{ item.lastSignIn }}</div>
      </template>

    <template v-slot:item.archived="{ item }">
      <v-icon v-if="item.archived" small color="success" @click="archiveItem(item)">
        mdi-check-circle
      </v-icon>
      <v-icon v-else small @click="archiveItem(item)">
        mdi-circle-outline
      </v-icon>
    </template>

    </v-data-table>
  </v-card>
</template>

<script>
import users from './content/users'
import firebase from 'firebase'

export default {
  props:{
    showArchived: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      searchQuery: '',
      selectedUsers: [],
      headers: [
        { text: 'Contacted', value: 'contacted' },
        { text: 'Name', value: 'name' },
        { text: 'Age', value: 'age' },
        { text: 'Email', value: 'email' },
        { text: 'Height', value: 'height' },
        { text: 'Shoe', value: 'shoe' },
        { text: 'Resume', value: 'resume' },
        { text: 'Headshot', value: 'headshot' },
        { text: 'Archived', value: 'archived' },
        { text: '', sortable: false, align: 'right', value: 'action' }
      ],
      users,
      bookings : undefined
    }
  },
  async created() {
    console.log(this.showArchived)
    this.bookings = []
    const ref = firebase.firestore().collection('casting').onSnapshot((snapshot => {
      this.bookings = snapshot.docs.map(doc => {
        return {id: doc.id, ...doc.data()};
      }).filter(item => {
        if(this.showArchived) {
          return true
        } else {
          return !item.archived
        }
      })
    }))
  },
  watch: {
    selectedUsers(val) {
    }
  },
  methods: {
    async archiveItem(item){
      await firebase.firestore().collection('casting').doc(item.id).update({
        archived: !item.archived
      });
    },
    searchUser() {},
    open() {},
    setContacted(id){
      console.log(id)
      firebase.firestore().collection('casting').doc(id).update({contacted: true})
      this.$forceUpdate()
    },
    setNoContacted(id){
      firebase.firestore().collection('casting').doc(id).update({contacted: false})
      this.$forceUpdate()
    }
  }
}
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
