// src/reportWebVitals.js

// This version logs the web vitals metrics to the console
const reportWebVitals = (metric) => {
  console.log(metric); // Customize this function to send data to an analytics service
};

export default reportWebVitals;

// This version loads the web-vitals package and calls each metric function
const reportWebVitalsWithPerformanceData = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry); // Cumulative Layout Shift
      getFID(onPerfEntry); // First Input Delay
      getFCP(onPerfEntry); // First Contentful Paint
      getLCP(onPerfEntry); // Largest Contentful Paint
      getTTFB(onPerfEntry); // Time to First Byte
    });
  }
};

export { reportWebVitalsWithPerformanceData };
