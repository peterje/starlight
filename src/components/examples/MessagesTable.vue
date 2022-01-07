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

       <template v-slot:item.message = "{item}">
         <div class="" style="overflow: auto">
           {{item.message}}
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
  props: ['showArchived'],
  data() {
    return {
      searchQuery: '',
      selectedUsers: [],
      headers: [
        { text: 'Name', align: 'left', value: 'name' },
        { text: 'Contacted', value: 'contacted' },
        { text: 'Email', value: 'email' },
        { text: 'Phone', value: 'phone' },
        { text: 'Message', value: 'message' },
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
    const ref = firebase.firestore().collection('messages').onSnapshot((snapshot => {
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
    },
  },
  methods: {
    async archiveItem(item){
      await firebase.firestore().collection('messages').doc(item.id).update({
        archived: !item.archived
      });
    },

    searchUser() {},
    open() {},
    setContacted(id){
      console.log(id)
      firebase.firestore().collection('messages').doc(id).update({contacted: true})
      this.$forceUpdate()
    },
    setNoContacted(id){
      firebase.firestore().collection('messages').doc(id).update({contacted: false})
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
