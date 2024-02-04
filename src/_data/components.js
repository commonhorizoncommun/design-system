const slugify = require('@sindresorhus/slugify');
const requireGlob = require('require-glob');

function convertComponent(component) {
  // Extract variants from component and remove them
  let { variants = [], title, preview, slug, context } = component;
  delete component.variants;

  // Back out if the component isn't valid
  if (!component || !title) {
    return;
  }

  // Set sensible defaults for previews & slugs
  component.preview = preview || 'default';
  const parentSlug = slug || slugify(title.toLowerCase());

  // Loop the variants, returning a merged combo of component, then variant
  variants = variants.map((variant) => {
    const variantSlug = slugify(variant.title.toLowerCase());
    const variantPreview = variant.preview
      ? variant.preview || 'default'
      : preview || 'default';

    return {
      ...component,
      ...variant,
      context: {
        context,
        ...variant.context
      },
      variant: true,
      variantPreview,
      originalTitle: variant.title,
      title: `${title} - ${variant.title}`,
      slug: `${parentSlug}-${variantSlug}`
    };
  });

  // Return the main component and any variants
  return [
    {
      slug: parentSlug,
      ...component
    },
    ...variants
  ];
}

function reducer(options, tree, fileObject) {
  if (!fileObject) {
    return tree;
  }
  if (tree.components === undefined) {
    tree.components = [];
  }
  const path = fileObject.path.split('/');
  tree.components.push({
    ...fileObject.exports,
    name: path.at(-2)
  });
  return tree;
}

function prepareMenu(groups) {
  const menu = groups.map((group) => {
    const [parent, ...variants] = group;
    return {
      title: parent.title,
      url: `/components/${parent.slug}/`,
      children:
        variants?.map(({ title, slug }) => ({
          title,
          url: `/components/${slug}/`
        })) || []
    };
  });

  menu.sort((a, b) => (a.title > b.title ? 1 : -1));

  return menu;
}

module.exports = async function () {
  // Pull in all the config files
  const modules = await requireGlob('../_includes/**/*.config.js', {
    reducer,
    bustCache: true
  });

  // Convert the components into our required format
  const componentGroups = modules.components
    .map((component) => convertComponent(component))
    .filter(Boolean);

  // Return the components and the menu, broken down into categories
  return {
    components: componentGroups.flat(),
    menu: prepareMenu(componentGroups)
  };
};
