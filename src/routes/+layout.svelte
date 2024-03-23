<script>
  import './styles.scss'
</script>

<div>
  <main>
    <slot />
  </main>
</div>

<style lang="scss">
    main {
      width: 75vw;
      height: 100vh;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-transform: lowercase;
    }
</style>
