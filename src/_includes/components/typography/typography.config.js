module.exports = {
  title: 'Typography',
  context: {
    level: 'p',
    text: 'A Common Horizon member is someone who has agreed to abide by our principles, pays dues, and has received an orientation to Common Horizon either online or through a local chapter.'
  },
  variants: [
    {
      title: 'Header Level 1',
      context: {
        level: 'h1',
        text: 'Who We Are'
      }
    },
    {
      title: 'Header Level 2',
      context: {
        level: 'h2',
        text: 'Our Structure'
      }
    },
    {
      title: 'Header Level 3',
      context: {
        level: 'h3',
        text: 'Members'
      }
    },
    {
      title: 'Subheader',
      context: {
        level: 'p',
        levelClass: 'subhead',
        text: 'We are a membership-based organization.'
      }
    },
    {
      title: 'Paragraph',
      context: {
        level: 'p',
        text: 'A Common Horizon member is someone who has agreed to abide by our principles, pays dues, and has received an orientation to Common Horizon either online or through a local chapter.'
      }
    },
    {
      title: 'Paragraph (Small)',
      context: {
        level: 'p',
        levelClass: 'small',
        text: 'Northern Alberta Jubilee Auditorium'
      }
    },
    {
      title: 'Paragraph (Large)',
      context: {
        level: 'p',
        levelClass: 'large',
        text: 'Our government is supposed to work for us— the people. But right now, the wealthiest corporations are calling the shots on climate.'
      }
    },
    {
      title: 'Paragraph (Meta)',
      context: {
        level: 'p',
        levelClass: 'meta',
        text: 'Northern Alberta Jubilee Auditorium'
      }
    },
    {
      title: 'Blockquote',
      context: {
        level: 'blockquote',
        text: 'The best way to join Common Horizon is to attend a welcome call, chapter meeting, training, or other Common Horizon event in your community'
      }
    }
  ]
};
