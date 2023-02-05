export const openUrl = (to: string) => window?.open(to, "_blank");

export const scrollToElement = (selector: string) => {
  const el = document.querySelector(selector);
  if (el) {
    el.scrollIntoView();
  }
};
