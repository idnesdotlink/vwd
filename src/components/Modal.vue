<template>
  <SlideYUpTransition>
    <div
      v-show="show"
      class="modal fade"
      :class="[
        { 'show d-block': show },
        { 'd-none': !show },
        { 'modal-mini': type === 'mini' }
      ]"
      tabindex="-1"
      role="dialog"
      :aria-hidden="!show"
      @click.self="closeModal"
    >
      <div
        class="modal-dialog"
        :class="[
          { 'modal-notice': type === 'notice' },
          { 'modal-dialog-centered': centered },
          modalClasses
        ]"
      >
        <div
          class="modal-content"
          :class="[
            gradient ? `bg-gradient-${gradient}` : '',
            modalContentClasses
          ]"
        >
          <div
            v-if="$slots.header"
            class="modal-header"
            :class="[headerClasses]"
          >
            <slot name="header" />
            <slot name="close-button">
              <button
                v-if="showClose"
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                @click="closeModal"
              >
                <i class="tim-icons icon-simple-remove" />
              </button>
            </slot>
          </div>

          <div
            v-if="$slots.default"
            class="modal-body"
            :class="bodyClasses"
          >
            <slot />
          </div>

          <div
            v-if="$slots.footer"
            class="modal-footer"
            :class="footerClasses"
          >
            <slot name="footer" />
          </div>
        </div>
      </div>
    </div>
  </SlideYUpTransition>
</template>

<script>
import { SlideYUpTransition } from "vue2-transitions";

export default {
  name: "Modal",
  components: {
    SlideYUpTransition
  },
  props: {
    show: Boolean,
    showClose: {
      type: Boolean,
      default: true
    },
    centered: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: "",
      validator(value) {
        let acceptedValues = ["", "notice", "mini"];
        return acceptedValues.indexOf(value) !== -1;
      }
    },
    modalClasses: { type: [Object, String], default: "" },
    modalContentClasses: { type: [Object, String], default: "" },
    gradient: { type: String, default: "" },
    headerClasses: { type: [Object, String], default: "" },
    bodyClasses: { type: [Object, String], default: "" },
    footerClasses: { type: [Object, String], default: "" },
    watch: {
      type: Function,
      default: function show(val) {
        let documentClasses = document.body.classList;
        if (val) {
          documentClasses.add("modal-open");
        } else {
          documentClasses.remove("modal-open");
        }
      }
    }
  },
  methods: {
    closeModal() {
      this.$emit("update:show", false);
      this.$emit("close");
    }
  }
};
</script>


