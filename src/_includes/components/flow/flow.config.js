const blocks = [
  {
    tag: 'h1',
    text: 'Who We Are'
  },
  {
    tag: 'h2',
    text: 'Our Structure'
  },
  {
    tag: 'h3',
    text: 'Members'
  },
  {
    tag: 'p',
    class: 'subheader',
    text: 'We are a membership-based organization.'
  },
  {
    tag: 'p',
    class: 'large',
    text: 'Our government is supposed to work for us— <strong>the people</strong>. But right now, the wealthiest corporations are calling the shots on climate.'
  },
  {
    tag: 'p',
    text: 'A Common Horizon member is someone who has agreed to abide by our principles, pays dues, and has received an orientation to Common Horizon either online or through a local chapter.'
  },
  {
    tag: 'blockquote',
    text: 'The best way to join Common Horizon is to attend a welcome call, chapter meeting, training, or other Common Horizon event in your community'
  }
];

module.exports = {
  title: 'Flow',
  preview: 'no-padding',
  context: {
    blocks
  },
  variants: [
    {
      title: 'Cream 50',
      context: {
        background: 'cream-50',
        blocks
      }
    },
    {
      title: 'Cream 100',
      context: {
        background: 'cream-100',
        blocks
      }
    },
    {
      title: 'Orange 500',
      context: {
        background: 'orange-500',
        blocks
      }
    },
    {
      title: 'Orange 700',
      context: {
        background: 'orange-700',
        blocks
      }
    },
    {
      title: 'Purple 100',
      context: {
        background: 'purple-100',
        blocks
      }
    },
    {
      title: 'Purple 650',
      context: {
        background: 'purple-650',
        blocks
      }
    },
    {
      title: 'Purple 700',
      context: {
        background: 'purple-700',
        blocks
      }
    },
    {
      title: 'Cream 150 to Purple 100',
      context: {
        background: 'cream-150-to-purple-100 bg--gradient',
        blocks
      }
    },
    {
      title: 'Purple 50 to Cream 150',
      context: {
        background: 'purple-50-to-cream-150 bg--gradient',
        blocks
      }
    },
    {
      title: 'Purple 50 to Cream 50',
      context: {
        background: 'purple-50-to-cream-50 bg--gradient',
        blocks
      }
    }
  ]
};
