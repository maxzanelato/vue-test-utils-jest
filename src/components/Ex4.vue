<template>
  <div>
    <transition>
      <p v-if="show">Foo</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'FooApp',
  data() {
    return {
      show: true,
    };
  },
};
</script>
