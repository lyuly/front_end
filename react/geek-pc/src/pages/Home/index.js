import './index.sass'
import Bar from '@/components/Bar'

function Home() {

  return (
    <div>
      <Bar
        title='主流框架使用满意度'
        xData={['React', 'Vue', 'Angular']}
        yData={['70', '20', '10']}
        style={{width: '500px', height: '400px'}}
      />
    </div>
  )
}

export default Home