import * as echarts from "echarts";
import { useEffect, useRef } from "react";

const Chart: React.FC = () => {
    const chartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const chartInstance = echarts.init(chartRef.current!);

        const option = {
            title: {
                text: "Пример графика ECharts",
            },
            tooltip: {},
            xAxis: {
                data: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
            },
            yAxis: {},
            series: [
                {
                    name: "Продажи",
                    type: "bar",
                    data: [20, 30, 50, 70, 90, 110, 130],
                },
            ],
        };

        chartInstance.setOption(option);

        // Очистка при размонтировании компонента
        return () => {
            chartInstance.dispose();
        };
    }, []);

    return (
        <div
            ref={chartRef}
            style={{
                width: "100%",
                height: "400px",
            }}
        />
    );
};

export default Chart;
