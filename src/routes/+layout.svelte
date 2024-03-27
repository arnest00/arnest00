<script>
  import '$styles/styles.scss';
</script>

<div class="obj-layout">
  <main id="main">
    <slot />
  </main>
</div>

<style>
  main {
    flex-grow: 1;
  }
</style>
