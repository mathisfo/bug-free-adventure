import { useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { useTheme } from 'next-themes'


const DonutChart = ({progress}: {progress:number}) => {
  const { theme} = useTheme()
  const [ size, setSize ] = useState(25)

  const data = [{ title: 'To go', value: `${progress}`, color: `${theme == "dark" ? "#f97316" : '#60a5fa' }`}]


  const [hovered, setHovered] = useState<number | undefined>(undefined);

  const data1 = data.map((entry, i) => {
    if (hovered === i) {
      return {
        ...entry,
        color: `${theme == "dark" ? "#FB6712": "#3b82f6"}`
      };
    }
    return entry;
  });


 return (
  <>
    <PieChart
      data={data1}
      totalValue={100} 
      background="#bfbfbf"
      
      startAngle={270}
      style={{ height: '176px' }}
      rounded
      lineWidth={size}
      label={({ dataEntry }) => dataEntry.value + '%' }
      
      labelStyle={(index) => ({
        fill: data1[index].color,
        fontSize: '14px',
        fontFamily: 'sans-serif',
      })}
      labelPosition={0}
      animate
      onMouseOver={(_, index) => {
        setHovered(index)
        setSize(30)
      }}
      onMouseOut={() => {
        setHovered(undefined);
        setSize(25)
      }}
    />
    </>
 )}

 export default DonutChart

