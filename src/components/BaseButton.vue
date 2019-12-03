<template>
  <component
    :is="tag"
    :type="tag === 'button' ? nativeType : ''"
    :disabled="disabled || loading"
    class="btn"
    :class="[
      { 'btn-round': round },
      { 'btn-block': block },
      { 'btn-icon btn-fab': icon },
      { [`btn-${type}`]: type },
      { [`btn-${size}`]: size },
      { 'btn-simple': simple },
      { 'btn-link': link },
      { disabled: disabled && tag !== 'button' }
    ]"
    @click="handleClick"
  >
    <slot name="loading">
      <i v-if="loading" class="fas fa-spinner fa-spin" />
    </slot>
    <slot />
  </component>
</template>
<script>
export default {
  name: "BaseButton",
  props: {
    tag: {
      type: String,
      default: "button"
    },
    nativeType: {
      type: String,
      default: "button"
    },
    round: Boolean,
    icon: Boolean,
    block: Boolean,
    disabled: Boolean,
    loading: Boolean,
    type: {
      type: String,
      default: "default"
    },
    size: {
      type: String,
      default: ""
    },
    simple: {
      type: Boolean
    },
    link: {
      type: Boolean
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>
