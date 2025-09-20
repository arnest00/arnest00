<script>
  let {
    featured,
    name,
    type,
    description,
    link,
    relatedLinks = []
  } = $props();
</script>

<li class="cmp-project" data-project-type={type} data-featured={featured}>
  <h3 class="cmp-project__name">
    {#if link}
      <a href={link}>
        {name}
      </a>
    {:else}
      {name}
    {/if}
  </h3>

  {#if type !== 'other'}
    <p class="cmp-project__type">
      {type} project
    </p>
  {/if}

  <p class="cmp-project__desc">
    {description}
  </p>

  {#each relatedLinks as link}
    <p class="cmp-project__link">
      <a href={link.url}>
        {link.text}
      </a>
    </p>
  {/each}
</li>

<style lang="scss">
  .cmp-project {
    border: var(--border-stroke) solid var(--color-border);
    border-radius: var(--border-radius);
    padding: 1rem;

    @media (min-width: 45rem) {
      padding: 2rem;
    }

    &[data-project-type="other"]:not([data-featured="true"]) {
      border: transparent;
      padding: 0;
    }

    &__name {
      & a {
        color: var(--color-text);
        text-decoration: underline;

        &:hover {
          text-decoration: none;
        }
      }
    }

    &__type {
      text-transform: uppercase;
    }

    & :last-child {
      margin-bottom: 0;
    }
  }
</style>
