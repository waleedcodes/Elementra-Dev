// Google Analytics tracking
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track component usage
export const trackComponentView = (componentName) => {
  event({
    action: 'view_component',
    category: 'Components',
    label: componentName,
  });
};

// Track documentation views
export const trackDocView = (docPage) => {
  event({
    action: 'view_documentation',
    category: 'Documentation',
    label: docPage,
  });
};

// Track search queries
export const trackSearch = (searchTerm) => {
  event({
    action: 'search',
    category: 'Site Search',
    label: searchTerm,
  });
};
