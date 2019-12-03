<template>
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    :data-target="target"
    :aria-controls="target"
    :aria-expanded="toggled"
    aria-label="Toggle navigation"
  />
</template>
<script>
export default {
  props: {
    target: {
      type: [String, Number],
      default: ""
    },
    toggled: {
      type: Boolean,
      default: false
    }
  }
};
</script>
