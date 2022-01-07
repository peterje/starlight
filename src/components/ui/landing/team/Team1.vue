<template>
  <v-sheet>
    <v-container class="py-4 py-lg-8">
      <div class="text-center">
        <div class="text-uppercase font-weight-bold body-2 secondary--text mb-2">Meet the magical</div>
        <h2 class="text-h3 text-lg-h2 primary--text">Characters</h2>
        <v-responsive max-width="1200" class="mx-auto">
<!--          <div class="text-h6 text-lg-h5 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus impedit-->
<!--            error labore doloremque fugit! Dolor fugit molestiae vero quos quisquam nobis, eos debitis magni omnis ea-->
<!--            incidunt amet voluptate dignissimos!-->
<!--          </div>-->
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
                  <div class="display-1">{{item.name}}</div>
<!--                  <div class="headline"> Description</div>-->
                </div>
              </v-expand-transition>

            </v-avatar>
          </v-hover>
          <div class="text-h5 mt-3">{{ item.name }}</div>
<!--          <div class="text-h6 secondary&#45;&#45;text">{{ item.title }}</div>-->
        </v-col>
        <v-dialog v-model="dialog" max-width="800">
          <v-sheet max-height="600" class="text-center pa-2" color="surface">
            <span class="display-2">
            {{activeCharacter.name}}
            </span>
            <v-carousel hide-delimiters class="py-2">
              <v-carousel-item v-for="item in activeCharacter.carouselImages" :key="item">
                <v-img :src="item"  max-height="600" contain aspect-ratio="1"></v-img>
              </v-carousel-item>
            </v-carousel>
          </v-sheet>


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
        image: '/images/characters/ElsaIcon2.png',
        carouselImages: ['/images/elsa/1.jpg','/images/elsa/2.jpg','/images/elsa/3.jpg'],
        color: 'elsa-color'
      },
      team: [{
        name: 'Elsa',
        title: 'The Snow Queen',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent maximus turpis purus, vitae laoreet arcu commodo id. Nunc vulputate, magna ac fermentum feugiat, lorem dui convallis mi, sit amet mollis eros dolor et nulla. Curabitur id suscipit est. Vivamus eu molestie dui. Sed efficitur purus at lacus interdum, vitae venenatis justo pretium. Sed elementum volutpat fermentum. In faucibus mauris ac lorem laoreet placerat.",
        image: '/images/characters/ElsaIcon2.jpg',
        carouselImages: ['/images/elsa/1.jpg','/images/elsa/2.jpg','/images/elsa/3.jpg'],
        color: 'elsa-color'
      }, {
        name: 'Anna',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent maximus turpis purus, vitae laoreet arcu commodo id. Nunc vulputate, magna ac fermentum feugiat, lorem dui convallis mi, sit amet mollis eros dolor et nulla. Curabitur id suscipit est. Vivamus eu molestie dui. Sed efficitur purus at lacus interdum, vitae venenatis justo pretium. Sed elementum volutpat fermentum. In faucibus mauris ac lorem laoreet placerat.",
        title: 'Queen of Arendelle',
        image: '/images/characters/AnnaIcon2.jpg',
        carouselImages: ['/images/anna/1.jpg','/images/anna/2.jpg','/images/anna/3.jpg', '/images/anna/4.jpg'],
        color: 'anna-color'
      }, {
        name: 'Rapunzel',
        title: 'Princess of Corona',
        image: '/images/characters/RapunzelIcon.png',
        carouselImages: ['/images/rapunzel/1.jpg','/images/rapunzel/2.jpg','/images/rapunzel/3.jpg', '/images/rapunzel/4.jpg', '/images/rapunzel/5.png', '/images/rapunzel/6.png'],
        color: 'rapunzel-color'
      }, {
        name: 'Cinderella',
        title: 'Coming Soon...',
        image: '/images/characters/CinderellaIcon.jpg',
        carouselImages: ['/images/cinderella/1.jpg', '/images/cinderella/2.jpg'],
        color: 'cinderella-color'
      }, {
        name: 'Ariel',
        title: 'Coming Soon...',
        image: '/images/characters/ArielIcon.jpg',
        carouselImages: ['/images/ariel/1.jpg', '/images/ariel/2.jpg', '/images/ariel/3.jpg', '/images/ariel/4.jpg'],
        color: 'ariel-color'
      }, {
        name: 'Belle',
        title: 'Coming Soon...',
        image: '/images/characters/BelleIcon.jpg',
        carouselImages: ['/images/belle/1.jpg', '/images/belle/2.jpg', '/images/belle/3.jpg'],
        color: 'belle-color'
      },{
        name: 'Aurora',
        title: 'Coming Soon...',
        image: '/images/characters/AuroraIcon.jpg',
        color: 'aurora-color'
      },{
        name: 'Jasmine',
        title: 'Coming Soon...',
        image: '/images/characters/JasmineIcon.png',
        carouselImages: ['/images/jasmine/1.png', '/images/jasmine/2.png', '/images/jasmine/3.jpg', '/images/jasmine/4.jpg'],
        color: 'jasmine-color'
      },{
        name: 'Moana',
        title: 'Coming Soon...',
        image: '/images/characters/MoanaIcon.jpg',
        color: 'moana-color'
      },{
        name: 'Tiana',
        title: 'Coming Soon...',
        image: '/images/characters/TianaIcon.jpg',
        carouselImages: ['/images/tiana/1.jpg', '/images/tiana/2.jpg', '/images/tiana/3.jpg', '/images/tiana/4.jpg'],
        color: 'tiana-color'
      },{
        name: 'Snow White',
        title: 'Coming Soon...',
        image: '/images/characters/SnowWhiteIcon.jpg',
        carouselImages: ['/images/snowwhite/1.jpg', '/images/snowwhite/2.jpg'],
        color: 'ariel-color'
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

.rapunzel-color {
  background-color: rgba(244,244,155,0.4);
}
.cinderella-color {
  background-color: rgba(195,238, 255, .4);
}
.ariel-color {
  background-color: rgba(236, 32,32, .4);
}
.belle-color {
  background-color: rgba(255,221,15, .4);
}
.aurora-color {
  background-color: rgba(251,131,152, .4);
}
.jasmine-color {
  background-color: rgba(127,201,177, .4);
}
.moana-color {
  background-color: rgba(206,73,28, .4);
}
.tiana-color {
  background-color: rgba(148,216,147, .4);
}
.v-dialog{
  border: 5px solid white;
}
</style>
