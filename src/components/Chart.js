import { useEffect, useRef } from 'react';

export default function Chart({ data, compareData }) {
  const containerRef = useRef(null);

  useEffect(() => {
    let chart;
    let mainSeries;
    let compareSeries;

    async function loadChart() {
      const mod = await import('https://cdn.jsdelivr.net/npm/lightweight-charts@4.1.0/dist/lightweight-charts.esm.production.js');
      const { createChart } = mod;

      chart = createChart(containerRef.current, { width: 600, height: 400 });
      mainSeries = chart.addCandlestickSeries();
      mainSeries.setData(data);

      if (compareData) {
        compareSeries = chart.addLineSeries({ color: 'red' });
        compareSeries.setData(compareData);
      }
    }

    loadChart();

    return () => {
      if (chart) {
        chart.remove();
      }
    };
  }, [data, compareData]);

  return <div ref={containerRef} />;
}
