<template>
  <div>
    <Header />
    <div class="container mx-auto flex-grow">
      <slot />
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
    siteName
  }
}
</static-query>
