/**
 * Google Analytics gtag function type declarations
 * This extends the Window interface to include the gtag function
 * injected by the Google Tag Manager/Google Analytics script
 */

interface GtagConversionEvent {
  send_to: string;
  value?: number;
  currency?: string;
  [key: string]: any;
}

interface Window {
  gtag?: (
    command: 'event' | 'config' | 'set',
    action: string,
    params?: GtagConversionEvent | Record<string, any>
  ) => void;
}
