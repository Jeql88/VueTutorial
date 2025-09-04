<template>
  <div>
    <h1>{{ part.title }}</h1>
    <div>
      {{ part.description }}
    </div>
  </div>
</template>
<script>
import getPartsMixin from "./get-parts-mixin";

export default {
  name: "PartInfo",
  mixins: [getPartsMixin],
  props: {
    partType: { type: String, required: false },
    id: {
      type: [Number, String],
      required: false,
      validator(value) {
        return Number.isInteger(+value);
      },
    },
  },
  computed: {
    part() {
      const { partType, id } = this.$route.params;
      return this.parts[partType].find((part) => part.id === +id);
    },
  },
};
</script>
<style lang=""></style>
