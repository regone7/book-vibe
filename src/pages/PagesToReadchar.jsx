import { useEffect, useState } from "react";
import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
};
const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
const PagesToReadchar = () => {
    const [bkcharts, setBkcharts] = useState([]);
    // console.log(bkcharts)
    useEffect(() => {
        fetch('/mydata.json')
            .then(res => res.json())
            .then(data => {
                const chartdata = data;
                const barchart = chartdata.map(chart => {
                    const obj = {
                        bookname: chart.bookName,
                        bookpage: chart.totalPages

                    }
                    return obj;
                })
                console.log(barchart)
                setBkcharts(barchart);
            })
    }, [])

    return (
        <div className="flex justify-center items-center lg:mt-32  ">
             <BarChart
                width={1500}
                height={300}
                data={bkcharts}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookname" />
                <YAxis />
                <Bar dataKey="bookpage" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {bkcharts.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};

export default PagesToReadchar;