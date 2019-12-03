<template>
  <div
    class="card"
    :class="[type && `card-${type}`]"
  >
    <div
      v-if="$slots.image"
      class="card-image"
    >
      <slot name="image" />
    </div>
    <div
      v-if="$slots.header || title"
      class="card-header"
      :class="isRTL ? 'text-right' : 'text-left'"
    >
      <slot name="header">
        <h5
          v-if="subTitle"
          class="card-category"
        >
          {{ subTitle }}
        </h5>
        <h2 class="card-title">
          <i
            v-if="icon"
            class="tim-icons"
            :class="icon"
          />{{ title }}
        </h2>
      </slot>
    </div>
    <div
      v-if="$slots.default"
      class="card-body"
    >
      <slot />
    </div>
    <div
      v-if="$slots['image-bottom']"
      class="card-image"
    >
      <slot name="image-bottom" />
    </div>
    <slot name="raw-content" />
    <div
      v-if="$slots.footer"
      class="card-footer text-left"
    >
      <slot name="footer" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    title: { type: String, default: "" },
    subTitle: { type: String, default: "" },
    type: { type: String, default: "" },
    icon: { type: String, default: "" }
  },
  computed: {
    isRTL() {
      return this.$rtl.isRTL;
    }
  }
};
</script>

