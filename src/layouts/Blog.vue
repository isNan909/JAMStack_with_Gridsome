<template>
  <div>
    <header>
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
    </header>
    <slot />
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Footer
  }
}
</script>


<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

