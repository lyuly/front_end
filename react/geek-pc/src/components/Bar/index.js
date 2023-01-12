import { useEffect, useRef } from 'react'
import * as echarts from 'echarts'

function Bar({ title, xData, yData, style}) {
  const domRef = useRef()
  const chartInit = () => {
    if (domRef.current === null) {
      return
    }
    echarts.dispose(domRef.current)
    const myChart = echarts.init(domRef.current)
    var option = {
      title: {
        text: title
      },
      tooltip: {},
      xAxis: {
        data: xData
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: yData
        }
      ]
    }
    myChart.setOption(option);
  }

  useEffect(() => {
    chartInit()
  })

  return (
    <div>
      <div ref={domRef} style={style}></div>
    </div>
  )
}

export default Bar