<template>
  <Layout>
    <h1>My Blog Posts</h1>
    <ul>
      <li v-for="post in $page.posts.edges" :key="post.id">
        <g-link :to="post.node.path">
          {{post.node.title}}
          <g-image :src="post.node.coverImage" />
        </g-link>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query Posts{
  posts: allPost {
    edges{
      node{
        path
        title
        excerpt
        coverImage
        content
        date
    }
  }
}
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "My Blog - Posts"
  }
};
</script>
