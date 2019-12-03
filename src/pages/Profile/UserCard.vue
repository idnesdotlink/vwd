<template>
  <card type="user">
    <div class="author">
      <div class="block block-one" />
      <div class="block block-two" />
      <div class="block block-three" />
      <div class="block block-four" />
      <a href="#">
        <img
          class="avatar"
          src="../../assets/img/anime6.png"
          alt="..."
        >
        <h5 class="title">{{ user.fullName }}</h5>
      </a>
      <p class="description">
        {{ user.title }}
      </p>
    </div>
    <p class="card-description">
      {{ user.description }}
    </p>
    <div
      slot="footer"
      class="button-container"
    >
      <base-button
        icon
        round
        class="btn-facebook"
      >
        <i class="fab fa-facebook" />
      </base-button>
      <base-button
        icon
        round
        class="btn-twitter"
      >
        <i class="fab fa-twitter" />
      </base-button>
      <base-button
        icon
        round
        class="btn-google"
      >
        <i class="fab fa-google-plus" />
      </base-button>
    </div>
  </card>
</template>
<script>
import { Card } from "@/components/index";

import BaseButton from "@/components/BaseButton";

export default {
  components: {
    Card,
    BaseButton
  },
  props: {
    user: {
      type: Object,
      default: () => {
        return {};
      }
    }
  }
};
</script>

