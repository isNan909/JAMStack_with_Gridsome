<template>
  <header class="flex items-center justify-center px-4 py-3 bg-gray-900">
    <div>
      <strong>
        <g-link class="text-white" to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {}
  },
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>