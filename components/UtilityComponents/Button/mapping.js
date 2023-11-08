import linkResolver from "../../../lib/routes";
// import mediaMapping, { getMediaType } from '../Media/mapping';

const getMappedDrawer = (buttonChild) => {
  const openInDrawer = buttonChild?.openInDrawer;

  if (!openInDrawer) return null;
  return {
    id: buttonChild?.content,
  };
};

const getButtonType = (button) => {
  // Use manually set button type if available

  if (button?.buttonType) return button?.buttonType;
  const openInDrawer = button?.openInDrawer;

  if (openInDrawer) {
    return "content-drawer";
  } else {
    // Use DatoCMS _modelApiKey
    const model = button?._modelApiKey;

    switch (model) {
      case "internal_navigation_button":
      case "internal_button":
        return "internal";
      case "action_button":
        return "no-action";
      case "anchor_button":
        return "anchor_button";
      case "external_navigation_button":
      case "external_button":
      default:
        return "external";
    }
  }
};

const getButton = (button) => {
  if (!button) return "";
  let buttonType = getButtonType(button);
  // console.log("buttonType", buttonType);
  let link = "/";
  if (buttonType === "internal") {
    link = button?.link ? linkResolver(button?.link) : "/";
    // console.log("link", button?.link);
  }

  if (button?.anchorId) {
    link = `${link}#${button?.anchorId}`;
  }

  /**
   * Recursively get nested buttons
   * - Ex: dropdown menu
   */
  let nestedButtons = null;
  if (button?.buttons) {
    // eslint-disable-next-line no-use-before-define
    nestedButtons = getButtons(button?.buttons);
    buttonType = "category";
  }
  console.log("link", button);
  // Get nested media
  // const media = !button.openInDrawer && mediaMapping(button?.media?.[0]);
  const getButtonURL = (buttonType) => {
    // console.log("buttonType", buttonType);
    switch (buttonType) {
      case "internal":
        return link;
      case "no-action":
        return button?.link;
      case "anchor_button":
        return `#${button?.link}`;
      case "external_button":
      default:
        return button?.link;
    }
  };
  const buttonUrl = getButtonURL(buttonType);
  // console.log("buttonUrl", buttonUrl);
  return {
    buttonId: button?.id,
    buttonText: button?.label,
    buttonType: buttonType,
    buttonRole: button?.role,
    buttonStyle: button?.style || null,
    buttonUrl,
    buttonTarget: button?.openInNewTab ? "_blank" : "_self",
    // buttonMedia: media || null,
    aria: {
      label: button?.aria?.label || button?.label || media?.alt || buttonUrl,
      selected: button?.aria?.selected,
      controls: button?.aria?.controls,
    },
    drawer: getMappedDrawer(button),
    buttons: nestedButtons,
  };
};

const getButtons = (data) => {
  if (!data) return "";
  const buttons = data?.map((button) => getButton(button));
  return buttons;
};

export default getButtons;
