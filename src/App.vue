<template>
  <div class="relative w-full h-full select-none">
  <NavBar :short-cuts="shortCuts"></NavBar>
  <div class="text-black flex flex-col">
    <div id="hello-wrapper" class="container flex flex-col items-center justify-center w-full mx-auto my-60 md:flex-row">
      <div class="intro">
        <div class="text-4xl">Hello! <font-awesome-icon icon="fa-hand"></font-awesome-icon>
        </div>
        <div class="text-4xl">I'm Maries Madrazo.</div>
        <div class="text-xl w-70 md:w-80">Electronics engineer turned front-end developer intrigued by food, online games, and good conversations.</div>
        </div>
    <div id="pic-1" class="overflow-hidden rounded-full max-w-xs w-5/12 ml-0 mt-5 md:ml-10 md:mt-0">
      <img class="w-full" src="./assets/girl-avatar.png" />
    </div>
  </div>
  <div id="skills-wrapper" class="flex flex-col items-center justify-center px-12 md:px-48 w-full mx-auto my-60">
    <div class="text-2xl">Skills</div>
    <div id="front-end-skills" class="text-xl">Front End</div>
    <div class="skills flex flex-wrap text-md justify-center">
      <div class="skill text-xs md:text-sm tag bg-darkViolet text-white mr-2 mb-2 rounded-3xl flex-shrink-0 capitalize inline-flex flex-row items-center p-1.5 pr-3" v-for="(skill, i) in skills.frontEnd" :key="`front-end-skill-${i+1}`"><img class="rounded-full w-8 mr-2 shadow-lg inline" :src="`${publicPath}${skill.img}`" /><span>{{ skill.name }}</span></div>
    </div>
    <div id="back-end-skills" class="text-xl">Back End</div>
    <div class="skills flex flex-wrap text-md justify-center">
      <div class="skill text-xs md:text-sm tag bg-darkViolet text-white mr-2 mb-2 rounded-3xl flex-shrink-0 capitalize inline-flex flex-row items-center p-1.5 pr-3" v-for="(skill, i) in skills.backEnd" :key="`back-end-skill-${i+1}`"><img class="rounded-full w-8 mr-2 shadow-lg inline" :src="`${publicPath}${skill.img}`" /><span>{{ skill.name }}</span></div>
    </div>
  </div>
  <div id="portfolio-wrapper" class="flex flex-col items-center justify-center w-full mx-auto my-60">
    <div class="text-2xl">Portfolio</div>
    Ongoing . . .
  </div>
  <div class="flex flex-col p-4 md:justify-evenly p-8 md:flex-row w-full bg-darkViolet text-white space-y-4 md:space-y-0">
    <div class="slimelight text-7xl text-white md:pr-20">mvm</div>
    <div class="flex flex-col">
      <div class="text-3xl">Contact Me</div>
      <div class="contact" v-for="(c,i) in contact" :key="`c-${i+1}`">
        <div>
          <font-awesome-icon :icon="c.icon"></font-awesome-icon>
          <span>{{ c.text }}</span>
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      <div class="text-3xl">Socials</div>
      <div class="flex flex-column justify-center">
        <div class="flex social w-10 overflow-hidden rounded-full" v-for="(s,i) in socials" :key="`s-${i+1}`">
          <a :href="s.link" target="_blank">
            <img class="w-full" :src="`${publicPath}${s.img}`"/>
          </a>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
import NavBar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  },
  data () {
    return {
      publicPath: process.env.BASE_URL,
      skills: {
        frontEnd: [
          {
            name: 'HTML5',
            img: 'skills/html5.png',
          },
          {
            name: 'CSS3',
            img: 'skills/css3.png',
          },
          {
            name: 'Javascript',
            img: 'skills/javascript.png',
          },
          {
            name: 'Bootstrap',
            img: 'skills/bootstrap.png',
          },
          {
            name: 'Vue',
            img: 'skills/vue.png',
          },
          {
            name: 'Vuex',
            img: 'skills/vuex.png',
          },
          {
            name: 'Nuxt',
            img: 'skills/nuxtjs.png',
          },
          {
            name: 'Tailwind CSS',
            img: 'skills/tailwindcss.png'
          }
        ],
        backEnd: [
          {
            name: 'C#',
            img: 'skills/c-sharp.png',
          },
          {
            name: 'MS SQL',
            img: 'skills/mssql.png',
          }
        ]
      },
      contact: [
        {
          icon: 'fa-phone',
          text: '+639150780198'
        },
        {
          icon: 'fa-envelope',
          text: 'mariesmadrazo9@gmail.com'
        }
      ],
      socials: [
        {
          img: 'socials/github.png',
          link: 'https://github.com/mavmaz'
        },
        {
          img: 'socials/linkedin.png',
          link: 'https://www.linkedin.com/in/mariesmadrazo/'
        }
      ],
      shortCuts: [
        {
          name: "About",
          link: "about",
          icon: ""
        },
        {
          name: "Projects",
          link: "projects",
          icon: ""
        },
        {
          name: "Skills",
          link: "skills",
          icon: ""
        },
        {
          name: "Portfolio",
          link: "portfolio",
          icon: ""
        },
      ]
    }
  }
}
</script>

<style>
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  scroll-behavior: smooth;
  background-color: #eceac2;
  background-attachment: fixed;
  background-size: cover;
}

html {
  scroll-behavior: smooth;
  background-color: #eceac2;
  background-attachment: fixed;
  background-size: cover;
}

.skill {
  background-color: #F25354;
  color: white;

}


.slimelight {
  font-family: Slimlight;
}

</style>
