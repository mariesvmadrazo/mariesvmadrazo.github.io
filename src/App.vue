<template>
  <div id="hello-wrapper">
    <h1 class="header">
      Hello! <font-awesome-icon icon="fa-hand"></font-awesome-icon>
    </h1>
    <h1 class="header">
      I'm Maries Madrazo.
    </h1>
    <p class="transition">Electronics engineer turned front-end developer intrigued by food, online games, and good conversations.</p>
    <div id="pic-1">
      <img src="./assets/girl-avatar.png" />
    </div>
  </div>
  <div id="skills-wrapper">
    <h2>Skills</h2>
    <h4 id="front-end-skills">Front End</h4>
    <div class="skills">
      <div class="skill" v-for="(skill, i) in skills.frontEnd" :key="`front-end-skill-${i+1}`"><p1>{{ skill.name }}</p1></div>
    </div>
    <h4 id="back-end-skills">Back End</h4>
    <div class="skills">
      <div class="skill" v-for="(skill, i) in skills.backEnd" :key="`back-end-skill-${i+1}`"><p1>{{ skill.name }}</p1></div>
    </div>
  </div>
  <div id="portfolio-wrapper">
    <h2>Portfolio</h2>
    Ongoing . . .
  </div>
  <div id="footer-wrapper">
    <div id="contact-me-wrapper">
      <h2>Contact Me</h2>
      <div class="contact" v-for="(c,i) in contact" :key="`c-${i+1}`">
        <font-awesome-icon :icon="c.icon"></font-awesome-icon>
        {{ c.text }}
      </div>
    </div>
    <div id="socials-wrapper">
      <h2>Socials</h2>
      <div class="social" v-for="(s,i) in socials" :key="`s-${i+1}`">
        <a :href="s.link" target="_blank">
          <img :src="`${publicPath}${s.img}`"/>
        </a>
      </div>
    </div>
  </div>
  <!-- <HelloWorld />
  <FrontPage /> -->
</template>

<script>

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  //   // FrontPage
  // },
  data () {
    return {
      publicPath: process.env.BASE_URL,
      skills: {
        frontEnd: [
          {
            name: 'HTML5',
            img: '',
          },
          {
            name: 'CSS3',
            img: '',
          },
          {
            name: 'Javascript',
            img: '',
          },
          {
            name: 'Bootstrap',
            img: '',
          },
          {
            name: 'Vue',
            img: '',
          },
          {
            name: 'Vuex',
            img: '',
          },
          {
            name: 'Nuxt.js',
            img: '',
          }
        ],
        backEnd: [
          {
            name: 'C#',
            img: '',
          },
          {
            name: 'MS SQL',
            img: '',
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
  margin-top: 60px;
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

#hello-wrapper, #skills-wrapper {
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30vh 30vw 0 30vw;
}

#pic-1 {
  height: 15vh;
  width: 15vh;
  border-radius: 100px;
  overflow: hidden;
}
#pic-1 img {
  width: 100%;
}

.skills {
  display: flex;
  justify-content: center;
  align-items: center;
}
.skill {
  background-color: #2c3e50;
  color: white;
  margin: 1vh 1vw;
  padding: 1vh 1vw
}

#footer-wrapper {
  width: 100%;
  height: 20vh;
  padding: 2vh 2vw;
  background-color: #2c3e50;
  color: white;
  display: flex;
  flex-direction: row;
  box-sizing: border-box
}
#contact-me-wrapper,
#socials-wrapper {
  width: 50%;
}

#socials-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
}
#socials-wrapper h2 {
  width: 100%
}
.social {
  width: 3vw;
  height: 3vw;
  border-radius: 100px;
  overflow: hidden
}
.social img {
  width: 100%;
}

.transition {
  opacity: 1;
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  transition: opacity 2s cubic-bezier(0.5, 0, 0, 1) 0.4s, transform 2s cubic-bezier(0.5, 0, 0, 1) 0.4s;
}
</style>
