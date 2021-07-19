<template>
  <Layout>

    <div class="v-container">
      <v-alert
        dense
        type="info"
      >
        I'm a dense alert with a <strong>type</strong> of info
      </v-alert>
      <h1>
        <svg-icon :iconFile="iconAccount" class="blue--text" />
       Hello, world!
       </h1>
    </div>

  </Layout>
</template>

<script>
import { mdiAccount } from '@mdi/js'
import SvgIcon from '@/components/svgIcon.vue'
export default {
  metaInfo: {
    title: 'SVDMQE',
  },
  components: {
    SvgIcon
  },
  data: () => ({
    iconAccount: mdiAccount
  }),
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
