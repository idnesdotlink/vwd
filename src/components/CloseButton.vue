<template>
  <button
    type="button"
    class="navbar-toggler"
    data-toggle="collapse"
    :data-target="`#${target}`"
    :aria-controls="target"
    :aria-expanded="expanded"
    aria-label="Toggle navigation"
    @click="handleClick"
  />
</template>
<script>
export default {
  name: "CloseButton",
  props: {
    target: { type: [String, Number], default: "" },
    expanded: { type: Boolean, default: false }
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>

