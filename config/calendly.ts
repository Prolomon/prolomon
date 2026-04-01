declare global {
  interface Window {
    Calendly?: {
      initPopupWidget?: (options: { url: string }) => void;
      [key: string]: any;
    };
  }
}

export const calendlyFunc = () => {
  if (
    typeof window !== "undefined" &&
    window.Calendly &&
    typeof window.Calendly.initPopupWidget === "function"
  ) {
    window.Calendly.initPopupWidget({
      url: "https://calendly.com/taiwooyetade67/booking",
    });
  } else {
    console.error("Calendly widget is not loaded.");
  }
  return false;
};
