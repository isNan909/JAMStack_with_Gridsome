<template>
  <BlogLayout>
    <div class="markdown-body">
      <h1>{{ $page.post.title }}</h1>
      <small>{{ $page.post.excerpt }}</small>
      <img :src="$page.post.coverImage" alt="Image" />
      <div v-html="$page.post.content" />
      <span>{{ $page.post.date }}</span>
    </div>
  </BlogLayout>
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
