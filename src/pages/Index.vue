<template>
  <Layout>
    <div class="mt-0 flex-row text-center ">
      <h1 class="text-3xl font-extrabold p-10">Welcome to our blog with Gridsome!</h1>
      <g-link to="/blog">
        <button
          class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mb-10"
        >
          Read Blogs
        </button></g-link
      >
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Our Blog - Home"
  }
};
</script>

<style></style>
