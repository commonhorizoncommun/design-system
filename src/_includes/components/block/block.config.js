module.exports = {
  title: 'Block',
  context: {
    title: 'Text',
    context: {
      type: 'text',
      content:
        '<p class="large">Our movement is made up of people from Canada, Québec, and the many Indigenous nations contained within this territory.</p><p>We come together to win a People’s Agenda— a democratically-designed governing mandate that brings us closer to winning the world we deserve.</p>'
    }
  },
  variants: [
    {
      title: 'Text',
      context: {
        type: 'text',
        content:
          '<p class="large">Our movement is made up of people from Canada, Québec, and the many Indigenous nations contained within this territory.</p><p>We come together to win a People’s Agenda— a democratically-designed governing mandate that brings us closer to winning the world we deserve.</p>'
      }
    },
    {
      title: 'Image',
      context: {
        type: 'image',
        content:
          '<figure data-ratio="auto"><img class="filter-orange-500" src="../../../static/images/march.jpg" alt=""></figure>'
      }
    },
    {
      title: 'Page Navigation',
      context: {
        type: 'page-navigation',
        content:
          "<nav class='toc' aria-label='Table of contents'><ul role='list'><li><a href='#events'>Events</a></li><li><a href='#find-your-local-chapter'>Chapters</a></li><li><a href='#become-a-member'>Become a member</a></li><li><a href='#donate'>Donate</a></li></ul></nav>"
      }
    }
  ]
};
