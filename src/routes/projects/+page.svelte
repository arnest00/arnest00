<svelte:head>
	<title>Osmond Arnesto - Projects</title>
</svelte:head>

<script>
  import Projects from '$components/Projects.svelte';
  import projects from '$lib/data/projects';
  import otherWork from '$lib/data/other-work';
</script>

<section>
  <h1>
    Projects
  </h1>
</section>

<section>
  <h2>
    Dev and design work
  </h2>

  <Projects {projects} />
</section>

<section>
  <h2>
    Other work
  </h2>
  
  <Projects projects={otherWork} />
</section>
