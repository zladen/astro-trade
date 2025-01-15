// src/features/chart/ui/CandlestickChart.tsx
import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

import { EChartsOption } from "echarts";

export const CandleStickChart: React.FC = () => {
    const chartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const chartInstance = echarts.init(chartRef.current!);

        // Пример данных для графика японских свечей (OHLC)
        const data = [
            ["2025-01-01", 500, 550, 480, 530],
            ["2025-01-02", 530, 600, 520, 580],
            ["2025-01-03", 580, 590, 570, 580],
            ["2025-01-04", 580, 600, 570, 590],
            ["2025-01-05", 590, 620, 580, 610],
            ["2025-01-06", 610, 650, 600, 640],
        ];

        const option: EChartsOption = {
            title: {
                text: "График японских свечей (OHLC)",
            },
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "cross",
                },
            },
            xAxis: {
                type: "category",
                data: data.map((item) => item[0]),
                boundaryGap: false,
            },
            yAxis: {
                scale: true,
                axisLine: { onZero: false },
            },
            series: [
                {
                    name: "Candlestick",
                    type: "candlestick",
                    data: data.map((item) => item.slice(1)),
                    itemStyle: {
                        color: "#00da3c", // Цвет для "бычьих" свечей (up)
                        color0: "#ec0000", // Цвет для "медвежьих" свечей (down)
                        borderColor: "#00da3c",
                        borderColor0: "#ec0000",
                    },
                    markLine: {
                        data: [
                            {
                                name: "Средняя линия",
                                type: "average",
                                valueIndex: 1,
                            },
                        ],
                    },
                },
            ],
        };

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        chartInstance.setOption(option as any);

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

export default CandleStickChart;
