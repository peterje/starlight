<template>
  <div class="my-3 fill-height">
    <h1 class="text-h4">Bookings</h1>
    <v-divider class="my-2"></v-divider>
    <UserTable />
  </div>
</template>

<script>
import UserTable from "@/components/examples/UserTable";
export default{
  components: {
    UserTable
  }
}
</script>
