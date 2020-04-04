<template>
  <Layout>
    <ul>
      <div class="flex flex-wrap">
        <li v-for="post in $page.posts.edges" :key="post.id">
          <div class="max-w-sm rounded overflow-hidden shadow-lg lg:pt-12 lg:mr-12 lg:ml-12">
            <g-link :to="post.node.path">
              <img
                class="w-full"
                :src="post.node.coverImage"
                alt="cover image"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{{ post.node.title }}</div>
                <p class="text-gray-700 text-base">
                  {{ post.node.excerpt }}
                </p>
              </div>
            </g-link>
          </div>
        </li>
      </div>
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
        coverImage
        excerpt
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
