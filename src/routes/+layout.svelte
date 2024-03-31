<script>
  import Footer from '$components/Footer.svelte';
  import Header from '$components/Header.svelte';
  import '$styles/styles.scss';
</script>

<div class="obj-layout">
  <Header />
  <main id="main" class="obj-layout__main-content">
    <slot />
  </main>
  <Footer />
</div>
