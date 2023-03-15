<template>
  <nav class="absolute w-full bg-lightYellow flex flex-col">
    <div class="pt-6 pb-2 px-10 flex md:px-20 md:pt-10">
        <div class="slimelight text-5xl md:text-8xl text-black">mvm</div>
    </div>
    <div class="flex w-full fixed justify-end z-10 pt-10 pb-2 px-10 md:px-20">
        <button id="menu-btn" class="hamburger block focus:outline-none" :class="{ open: isMenuActive }" @click="$emit('on-toggle-menu', !isMenuActive)">
            <span class="hamburger-top"></span>
            <span class="hamburger-middle"></span>
            <span class="hamburger-bottom"></span>
        </button>
    </div>
    <!-- <div id="menu" class="fixed flex flex-col items-center justify-center top-0 bottom-0 left-0 right-0 space-y-6 text-black font-bold text-2xl bg-lightYellow" :class="{ hidden: !isMenuActive }"> -->
    <transition-group name="slide">
      <div id="menu" class="fixed flex flex-col items-center justify-center top-0 bottom-0 left-0 right-0 space-y-6 text-black font-bold text-2xl bg-lightYellow" v-if="isMenuActive">
        <div v-for="(shortCut, i) in shortCuts" :key="`shortcut-${i+1}`" @click="$emit('short-cut', shortCut && shortCut.link)" class="cursor-pointer">{{ shortCut.name }}
        </div>
      </div>
    </transition-group>
  </nav>
</template>

<script>
export default {
  props: {
    isMenuActive: {
      type: Boolean
    },
    shortCuts: {
      type: Array
    }
  }

}
</script>

<style scoped>
.hamburger {
  cursor: pointer;
  width: 24px;
  height: 24px;
  transition: all 0.25s;
  position: relative;
}

.hamburger-top,
.hamburger-middle,
.hamburger-bottom {
  position: absolute;
  top: 0;
  left: 0;
  width: 24px;
  height: 2px;
  background: #000;
  transform: rotate(0);
  transition: all 0.5s;
}

.hamburger-middle {
  transform: translateY(7px);
}

.hamburger-bottom {
  transform: translateY(14px);
}

.open {
  transform: rotate(90deg);
  transform: translateY(0px);
}

.open .hamburger-top {
  transform: rotate(45deg) translateY(6px) translate(6px);
}

.open .hamburger-middle {
  display: none;
}

.open .hamburger-bottom {
  transform: rotate(-45deg) translateY(6px) translate(-6px);
}

.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}
.slide-enter-from {
  transform: translate(0, -100%);
}
.slide-leave-to {
  transform: translate(0, -100%);
}
</style>