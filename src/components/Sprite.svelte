<script>
  export let src;
  export let size;
  export let animated = false;
  export let frames = 1;
  export let frameRate = 100;

  const inlineStyles = animated
  ? `
    --animation-steps: ${frames};
    --animation-duration: ${frames * frameRate}ms;
  `
  : '';
</script>

<div
  class="cmp-sprite"
  style:height={size + 'px'}
  style:width={size + 'px'}>
  <img
    class="cmp-sprite__image {animated ? "cmp-sprite__image--animated" : ""}"
    srcset={src}
    alt=""
    aria-hidden="true"
    style={inlineStyles}/>
</div>

<style lang="scss">
  .cmp-sprite {
    display: inline-block;
    overflow: hidden;

    &__image {
      position: relative;
      height: 100%;
      max-width: unset;
      image-rendering: pixelated;
  
      &--animated {
        &:hover,
        .cmp-social-links__link:hover .cmp-sprite & {
          animation: animate-sprite var(--animation-duration) steps(var(--animation-steps));
        }
      }
    }
  }
</style>
