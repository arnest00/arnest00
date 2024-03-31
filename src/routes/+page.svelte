<svelte:head>
	<title>Osmond Arnesto - Web Developer</title>
</svelte:head>

<script>
  import Projects from '$components/Projects.svelte';
  import Sprite from '$components/Sprite.svelte';
  import projects from '$lib/data/projects';
  import otherWork from '$lib/data/other-work';

  const allWork = [...projects, ...otherWork];
</script>

<section>
  <h1 class="util-visually-hidden">
    About Osmond
  </h1>

  <Sprite
    src="/images/osmond-spritesheet.png"
    size={96}/>
  <Sprite
    src="/images/arthur-spritesheet.png"
    size={96}
    animated
    frames={12}
    frameRate={150}/>
  
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
