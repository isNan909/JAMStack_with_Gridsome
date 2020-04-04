<template>
  <div>
    <BlogLayout>
      <span class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold"
        ><g-link class="py-4 flex" to="/blog">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-arrow-left mr-3"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline></svg
          >Go back</g-link
        ></span
      >
      <div>
        <h1 class="text-5xl font-extrabold">{{ $page.post.title }}</h1>
        <small class="text-lg mb-4">{{ $page.post.excerpt }}</small>
        <img class="mt-10 w-full" :src="$page.post.coverImage" alt="Image" />
        <div class="text-2xl py-10 " v-html="$page.post.content" />
        <span
          ><b>Time: {{ $page.post.date }}</b></span
        >
      </div>
    </BlogLayout>
  </div>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    excerpt
    coverImage
    content
    date
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  }
};
</script>
