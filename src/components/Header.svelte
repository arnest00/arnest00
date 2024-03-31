<script>
  import SkipLink from "$components/SkipLink.svelte";
</script>

<header class="cmp-header">
  <SkipLink />

  <nav>
    <ul class="cmp-nav">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/projects">Projects</a>
      </li>
      <li>
        <a href="/contact-me">Contact me</a>
      </li>
    </ul>
  </nav>
</header>

<style lang="scss">
  .cmp-header {
    padding: 1rem 0;
  }

  .cmp-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
</style>
