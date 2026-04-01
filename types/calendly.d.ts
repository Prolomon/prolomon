// TypeScript declaration for Calendly on the window object
export {};

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget?: (options: { url: string }) => void;
      [key: string]: any;
    };
  }
}
