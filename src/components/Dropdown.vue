<template>
  <component
    :is="tag"
    v-click-outside="closeDropDown"
    class="dropdown nav-item"
    :class="{ show: isOpen }"
    @click="toggleDropDown"
  >
    <slot />
  </component>
</template>
<script>
// import ClickOutside from 'vue-click-outside';

export default {
  name: "DropDown",
  props: {
    tag: {
      type: String,
      default: "li"
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleDropDown() {
      this.isOpen = !this.isOpen;
    },
    closeDropDown() {
      this.isOpen = false;
    }
  }
};
</script>


