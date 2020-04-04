<template>
  <div>
    <BlogLayout>
      <h6><g-link class="nav__link" to="/blog">Go back</g-link></h6>
      <div>
        <h1>{{ $page.post.title }}</h1>
        <small>{{ $page.post.excerpt }}</small>
        <img :src="$page.post.coverImage" alt="Image" />
        <div v-html="$page.post.content" />
        <span>{{ $page.post.date }}</span>
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
