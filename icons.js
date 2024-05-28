// icons.js
const requireIcons = (context) => {
    const icons = {};
    context.keys().forEach((key) => {
      const iconName = key.replace('./', '').replace('.svg', '');
      icons[iconName] = context(key).default;
    });
    return icons;
  };
  
  const iconsInfo = requireIcons(require.context('./public/img/svg/iconsInfo', false, /\.svg$/));
  const mobileBtn = requireIcons(require.context('./public/img/svg/mobile-btn', false, /\.svg$/));
  const social = requireIcons(require.context('./public/img/svg/social', false, /\.svg$/));
  const general = requireIcons(require.context('./public/img/svg', false, /\.svg$/));
  
  export { iconsInfo, mobileBtn, social, general };
  