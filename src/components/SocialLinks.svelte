<script>
  import Sprite from "$components/Sprite.svelte";
</script>

<ul class="cmp-social-links">
  <li>
    <a
      class="cmp-social-links__link"
      href="https://github.com/arnest00"
      rel="noopener noreferrer">
      <Sprite
        src="/images/github-logo-spritesheet.png"
        size={192}
        animated
        frames={18}
        frameRate={100}/>
      <span>Check out my GitHub</span>
    </a>
  </li>
  <li>
    <a
      class="cmp-social-links__link"
      href="https://www.linkedin.com/in/osmondarnesto/"
      rel="noopener noreferrer">
      <Sprite
        src="/images/linkedin-logo-spritesheet.png"
        size={192}
        animated
        frames={18}
        frameRate={100}/>
      <span>Connect with me on LinkedIn</span>
    </a>
  </li>
</ul>

<style lang="scss">
  .cmp-social-links {
    &__link {
      width: fit-content;
      color: var(--color-accent);
      display: flex;
      flex-direction: column;

      @media (min-width: 45rem) {
        flex-direction: row;
        align-items: center;
      }
    }
  }
</style>
