<template>
  <ul>
    <li v-for="content in contents" :key="content.id">
      <nuxt-link :to="`/${content.id}`">
        {{ content.title }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
// export default {
//   async asyncData({ $axios }) {
//     const data = await $axios.$get(
//       // your-service-id部分は自分のサービスidに置き換えてください
//       'https://news-210715.microcms.io/api/v1/news',
//       {
//         // your-api-key部分は自分のapi-keyに置き換えてください
//         headers: { 'X-API-KEY': '79fc7784-05cc-4741-bac2-1d5dd06b9fb0' }
//       }
//     )
//     return data
//   }
// }
export default {
  async asyncData({ $axios }) {
    const data = await $axios.$get(
      process.client ?
        `${location.origin}/api/news`
        :
        `/api/news`
    )
    return data
  }
}
</script>