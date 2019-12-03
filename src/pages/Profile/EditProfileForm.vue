<template>
  <card>
    <template slot="header">
      <h5 class="title">
        Edit Profile
      </h5>
    </template>
    <div class="row">
      <div class="col-md-5 pr-md-1 text-left">
        <base-input
          v-model="model.company"
          label="Company (disabled)"
          placeholder="Company"
          disabled
        />
      </div>
      <div class="col-md-3 px-md-1 text-left">
        <base-input
          v-model="model.username"
          label="Username"
          placeholder="Username"
        />
      </div>
      <div class="col-md-4 pl-md-1 text-left">
        <base-input
          label="Email address"
          type="email"
          placeholder="mike@email.com"
        />
      </div>
    </div>

    <div class="row">
      <div class="col-md-6 pr-md-1 text-left">
        <base-input
          v-model="model.firstName"
          label="First Name"
          placeholder="First Name"
        />
      </div>
      <div class="col-md-6 pl-md-1 text-left">
        <base-input
          v-model="model.lastName"
          label="Last Name"
          placeholder="Last Name"
        />
      </div>
    </div>

    <div class="row">
      <div class="col-md-12 text-left">
        <base-input
          v-model="model.address"
          label="Address"
          placeholder="Home Address"
        />
      </div>
    </div>

    <div class="row">
      <div class="col-md-4 pr-md-1 text-left">
        <base-input v-model="model.city" label="City" placeholder="City" />
      </div>
      <div class="col-md-4 px-md-1 text-left">
        <base-input
          v-model="model.country"
          label="Country"
          placeholder="Country"
        />
      </div>
      <div class="col-md-4 pl-md-1 text-left">
        <base-input label="Postal Code" placeholder="ZIP Code" />
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 text-left">
        <base-input>
          <label>About Me</label>
          <textarea
            v-model="model.about"
            rows="4"
            cols="80"
            class="form-control"
            placeholder="Here can be your description"
          />
        </base-input>
      </div>
    </div>
    <template slot="footer">
      <base-button type="success" fill>
        Save
      </base-button>
    </template>
  </card>
</template>
<script>
import { Card, BaseInput } from "@/components/index";

import BaseButton from "@/components/BaseButton";

export default {
  components: {
    Card,
    BaseInput,
    BaseButton
  },
  props: {
    model: {
      type: Object,
      default: () => {
        return {};
      }
    }
  }
};
</script>

