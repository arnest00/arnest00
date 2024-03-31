<svelte:head>
	<title>Osmond Arnesto - Web Developer</title>
</svelte:head>

<script>
  import Projects from '$components/Projects.svelte';
  import projects from '$lib/data/projects';
  import otherWork from '$lib/data/other-work';

  const allWork = [...projects, ...otherWork];
</script>

<section>
  <h1 class="util-visually-hidden">
    About Osmond
  </h1>

  <img src="/images/osmond-sprite.png" alt=""/>
  
  <p>
    Hi, I'm <span class="util-text-color--accent">Osmond</span>. I currently work with <a href="https://sparkbox.com/">Sparkbox</a>. While my job title is "web developer," it's a toss-up whether I am solving a development problem in Visual Studio Code or finding a design solution in Figma during my workday.
  </p>

  <p>
    I am experienced in writing accessible HTML and CSS, and I am able to work within a number of JavaScript frameworks. The bulk of my practice has been with React applications, especially Next.js.
  </p>
</section>

<section>
  <h2>
    Featured work
  </h2>

  <Projects projects={allWork} featured />
</section>

<style>
  img {
    display: inline-block;
    width: 120px;
    height: 120px;
    image-rendering: pixelated;
  }
</style>