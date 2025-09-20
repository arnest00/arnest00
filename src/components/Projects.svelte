<script>
  import Project from "$components/Project.svelte";
  let { featured = false, projects = [] } = $props();

  const filteredProjects = featured
    ? projects.filter((project) => project.isFeatured)
    : projects;
</script>

<ul class="obj-flex obj-flex--column">
  {#each filteredProjects as project}
    <Project
      featured={featured}
      name={project.name}
      type={project.type}
      description={project.description}
      link={project.link}
      relatedLinks={project.relatedLinks} />
  {/each}
</ul>
