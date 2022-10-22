<template>
  <nav class="articles-navigation d-flex justify-content-between align-items-center" aria-label="...">
    <a title="" href="#" class="btn-small-white pagination-back">Geri</a>
    <ul class="pagination d-none d-md-flex">
      <li class="page-item active">
        <a class="page-link" href="#">1 <span class="sr-only">(current)</span></a>
      </li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item page-item-more"><a class="page-link" href="#">...</a></li>
      <li class="page-item"><a class="page-link" href="#">25</a></li>
    </ul>
    <a title="" href="blog_post.html" class="btn-small-white pagination-next">İleri</a>
  </nav>
</template>

<script>
export default {
  name: "Navigasyon",
};
</script>

<style></style>
