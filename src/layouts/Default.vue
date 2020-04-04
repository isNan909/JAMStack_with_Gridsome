<template>
  <div>
    <Header />
    <div class="flex-grow">
      <div class="container mx-auto">
        <slot />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "~/components/Footer.vue";
import Header from "~/components/Navbar.vue";
export default {
  components: {
    Footer,
    Header
  }
};
</script>

<static-query>
query {
  metadata {
    siteName,
    siteDescription
  }
}
</static-query>
