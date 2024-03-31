const projects = [
  {
    name: 'Design system migration',
    isFeatured: true,
    type: 'client',
    description: 'A large manufacturing company needed help moving their design system from Sketch to Figma, although this grew in scope to include creating new component designs, updating outdated component designs, and addressing some accessibility issues. We would work with them again later to write documentation for their system.',
  },
  {
    name: 'osmondarnesto.com',
    isFeatured: false,
    type: 'side',
    description: 'This very website! I was interested in learning Svelte, and thought I\'d knock out two birds with one stone and give my portfolio a much-needed facelift.',
    link: 'https://osmondarnesto.com/',
    relatedLinks: [
      {
        url: 'https://github.com/arnest00/arnest00',
        text: 'osmondarnesto.com repo'
      },
    ],
  },
  {
    name: 'mageHand',
    isFeatured: true,
    type: 'side',
    description: 'An app that provides tools for tabletop RPG players of the 5th edition of a certain game that can\'t be named because of copyright reasons. Currently only supports searching for spells via the Open 5e API.',
    link: 'https://magehand.vercel.app/',
    relatedLinks: [
      {
        url: 'https://github.com/arnest00/magehand',
        text: 'mageHand repo'
      },
    ],
  },
  {
    name: 'Site redesign build',
    isFeatured: false,
    type: 'client',
    description: 'I fixed existing bugs and built responsive and customizable components for one of a Fortune 500 software company\'s web properties. The interesting part about this project was working within their custom content management system.',
  },
  {
    name: 'mealWise',
    isFeatured: false,
    type: 'side',
    description: 'A meal-planning app that generates a shopping list based on the ingredients in recipes planned for a given week. In addition to a cohort project, Sparkbox apprentices were also tasked with building something solo, and I took the opportunity to start learning Typescript.',
    relatedLinks: [
      {
        url: 'https://github.com/arnest00/mealwise',
        text: 'mealWise repo'
      },
    ],
  },
  {
    name: 'Team Availability',
    isFeatured: false,
    type: 'internal',
    description: 'A team management app that allows project managers to see how many hours a team member has in a given week. Team member pages can detail their current projects, skills, bios, and past projects. I built this with my cohort when I was an apprentice at Sparkbox.',
    link: 'https://fellowship-availability.netlify.app/',
    relatedLinks: [
      {
        url: 'https://github.com/sparkbox/team-availability',
        text: 'Team Availability repo'
      },
    ],
  },
  {
    name: 'deltaChannel',
    isFeatured: false,
    type: 'side',
    description: 'An anonymous textboard, where you can have all the fun in participating in the community of the internet without signing up for an account. There\'s a fun theme switcher feature that allows users to change the site\'s color scheme that I am pretty proud of. Also, this must have been when I learned that I liked naming my personal projects in camel case.',
    relatedLinks: [
      {
        url: 'https://github.com/arnest00/delta-channel',
        text: 'deltaChannel repo'
      },
    ],
  },
  {
    name: 'Funnel World Character Generator',
    isFeatured: false,
    type: 'side',
    description: 'A tool that generates a villager for use in Jason Lutes\'s tabletop RPG, Funnel World.',
    relatedLinks: [
      {
        url: 'https://github.com/arnest00/delta-channel',
        text: 'Funnel World Character Generator repo'
      },
    ],
  },
];

export default projects;
