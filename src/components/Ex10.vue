<template>
  <div>
    <button @click="moduleActionClick()">Click</button>
    <p>{{ moduleClicks }}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'FooDa',
  methods: {
    ...mapActions({
      moduleActionClick: 'Ex10/moduleActionClick',
    }),
  },

  computed: mapGetters({
    moduleClicks: 'Ex10/moduleClicks',
  }),
};
</script>
