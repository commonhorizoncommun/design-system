module.exports = {
  title: 'Section',
  preview: 'no-padding',
  context: {
    columns: {
      1: {
        span: 12,
        block: {
          type: 'text',
          content:
            '<p class="large">Our movement is made up of people from Canada, Québec, and the many Indigenous nations contained within this territory.</p><p>We come together to win a People’s Agenda— a democratically-designed governing mandate that brings us closer to winning the world we deserve.</p>'
        }
      }
    }
  },
  variants: [
    {
      title: '1/2, 1/2',
      context: {
        columns: {
          1: {
            span: 6,
            block: {
              type: 'text',
              content:
                '<p class="large">Our movement is made up of people from Canada, Québec, and the many Indigenous nations contained within this territory.</p><p>We come together to win a People’s Agenda— a democratically-designed governing mandate that brings us closer to winning the world we deserve.</p>'
            }
          },
          2: {
            span: 6,
            block: {
              type: 'image',
              content:
                '<figure data-ratio="auto"><img class="filter-orange-500" src="../../../static/images/march.jpg" alt=""></figure>'
            }
          }
        }
      }
    },
    {
      title: '1/3, 2/3',
      context: {
        columns: {
          1: {
            span: 4,
            block: {
              type: 'text',
              content:
                '<p class="large">Our movement is made up of people from Canada, Québec, and the many Indigenous nations contained within this territory.</p><p>We come together to win a People’s Agenda— a democratically-designed governing mandate that brings us closer to winning the world we deserve.</p>'
            }
          },
          2: {
            span: 8,
            block: {
              type: 'image',
              content:
                '<figure data-ratio="auto"><img class="filter-orange-500" src="../../../static/images/march.jpg" alt=""></figure>'
            }
          }
        }
      }
    },
    {
      title: '2/3, 1/3',
      context: {
        columns: {
          1: {
            span: 8,
            block: {
              type: 'text',
              content:
                '<p class="large">Our movement is made up of people from Canada, Québec, and the many Indigenous nations contained within this territory.</p><p>We come together to win a People’s Agenda— a democratically-designed governing mandate that brings us closer to winning the world we deserve.</p>'
            }
          },
          2: {
            span: 4,
            block: {
              type: 'image',
              content:
                '<figure data-ratio="auto"><img class="filter-orange-500" src="../../../static/images/march.jpg" alt=""></figure>'
            }
          }
        }
      }
    },
    {
      title: 'Solid background',
      context: {
        background: 'bg--cream-50',
        columns: {
          1: {
            span: 6,
            block: {
              type: 'text',
              content:
                '<p class="large">Our movement is made up of people from Canada, Québec, and the many Indigenous nations contained within this territory.</p><p>We come together to win a People’s Agenda— a democratically-designed governing mandate that brings us closer to winning the world we deserve.</p>'
            }
          },
          2: {
            span: 6,
            block: {
              type: 'image',
              content:
                '<figure data-ratio="auto"><img class="filter-orange-500" src="../../../static/images/march.jpg" alt=""></figure>'
            }
          }
        }
      }
    },
    {
      title: 'Gradient background',
      context: {
        background: 'bg--gradient bg--cream-150-to-purple-100',
        columns: {
          1: {
            span: 6,
            block: {
              type: 'text',
              content:
                '<p class="large">Our movement is made up of people from Canada, Québec, and the many Indigenous nations contained within this territory.</p><p>We come together to win a People’s Agenda— a democratically-designed governing mandate that brings us closer to winning the world we deserve.</p>'
            }
          },
          2: {
            span: 6,
            block: {
              type: 'image',
              content:
                '<figure data-ratio="auto"><img class="filter-orange-500" src="../../../static/images/march.jpg" alt=""></figure>'
            }
          }
        }
      }
    }
  ]
};
