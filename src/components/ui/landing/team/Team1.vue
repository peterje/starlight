<template>
  <v-sheet>
    <v-container class="py-4 py-lg-8">
      <div class="text-center">
        <div class="text-uppercase font-weight-bold body-2 secondary--text mb-2">Meet the magical</div>
        <h2 class="text-h3 text-lg-h2 primary--text">Characters</h2>
        <v-responsive max-width="1200" class="mx-auto">
          <div class="text-h6 text-lg-h5 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus impedit
            error labore doloremque fugit! Dolor fugit molestiae vero quos quisquam nobis, eos debitis magni omnis ea
            incidunt amet voluptate dignissimos!
          </div>
        </v-responsive>
      </div>
      <v-row class="mt-6">
        <v-col
          v-for="(item, i) in team"
          :key="i"
          class="text-center"
        >
          <v-hover v-slot="{ hover }">

            <v-avatar :size="$vuetify.breakpoint.lgAndUp ? 400 : 220">
              <v-img :src="item.image"></v-img>
              <v-expand-transition class="justify-center align-center">
                <div v-if="hover"
                     @click.stop="click(item)"
                     class="d-flex flex-column transition-fast-in-fast-out v-card--reveal text-h2 white--text"
                     :class="item.color"
                     style="height: 100%;"
                >
                  <div class="display-1"> Something catchy</div>
                  <div class="headline"> Description</div>
                </div>
              </v-expand-transition>

            </v-avatar>
          </v-hover>
          <div class="text-h5 mt-3">{{ item.name }}</div>
          <div class="text-h6 secondary--text">{{ item.title }}</div>
        </v-col>
        <v-dialog v-model="dialog" max-width="1200">
          <Feature5 :title="activeCharacter.title" :text="activeCharacter.text"></Feature5>
        </v-dialog>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import Feature5 from "@/components/ui/landing/feature/Feature5";
export default {
  components:{
    Feature5
  },
  methods: {
    click(char) {
      this.activeCharacter = char
      this.dialog = true
    }
  },
  data() {
    return {
      dialog: false,
      activeCharacter: {
        name: 'Elsa',
        title: 'The Snow Queen',
        text: "Get ready to let it go and have an icy blast with our favorite Ice Queen! Since her coronation, she’s learned the importance of family, bravery, and compassion.\n" +
          "\n" +
          "The Ice Queen will tell the story of how love can break through any obstacle. She’ll help your birthday child and friends make their own snow crafts, and she’ll even lead a game of freeze dance with your party guests!",
        image: '/images/characters/elsa.png',
        color: 'elsa-color'
      },
      team: [{
        name: 'Elsa',
        title: 'The Snow Queen',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent maximus turpis purus, vitae laoreet arcu commodo id. Nunc vulputate, magna ac fermentum feugiat, lorem dui convallis mi, sit amet mollis eros dolor et nulla. Curabitur id suscipit est. Vivamus eu molestie dui. Sed efficitur purus at lacus interdum, vitae venenatis justo pretium. Sed elementum volutpat fermentum. In faucibus mauris ac lorem laoreet placerat.",
        image: '/images/characters/elsa.png',
        color: 'elsa-color'
      }, {
        name: 'Anna',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent maximus turpis purus, vitae laoreet arcu commodo id. Nunc vulputate, magna ac fermentum feugiat, lorem dui convallis mi, sit amet mollis eros dolor et nulla. Curabitur id suscipit est. Vivamus eu molestie dui. Sed efficitur purus at lacus interdum, vitae venenatis justo pretium. Sed elementum volutpat fermentum. In faucibus mauris ac lorem laoreet placerat.",
        title: 'Queen of Arendelle',
        image: 'https://via.placeholder.com/480x480',
        color: 'anna-color'
      }, {
        name: 'Rapunzel',
        title: 'Princess of Corona',
        image: 'https://via.placeholder.com/480x480',
        color: 'default-color'
      }, {
        name: 'Cinderella',
        title: 'Coming Soon...',
        image: 'https://via.placeholder.com/480x480',
      }, {
        name: 'Ariel',
        title: 'Coming Soon...',
        image: 'https://via.placeholder.com/480x480',
      }, {
        name: 'Belle',
        title: 'Coming Soon...',
        image: 'https://via.placeholder.com/480x480',
      },]
    }
  }
}
</script>

<style>

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  position: absolute;
  width: 100%;
  cursor: pointer;
}

.elsa-color {
  background-color: rgba(100, 100, 255, .4);
}

.anna-color {
  background-color: rgba(0, 100, 255, .4);
}

.default-color {
  background-color: rgba(255, 100, 255, .4);
}

.v-dialog{
  border: 5px solid white;
}
</style>
