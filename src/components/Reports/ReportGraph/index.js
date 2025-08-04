import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  ResponsiveContainer,
  Rectangle,
} from 'recharts'

import './index.css'

const ReportGraph = props => {
  const {data} = props

  const radiusArray = [12, 12, 0, 0]

  return (
    <ResponsiveContainer width="100%" height={335}>
      <BarChart
        data-testid="barChart"
        data={data}
        barCategoryGap={10}
        margin={{top: 5, right: 20, bottom: 5, left: 5}}
        maxBarSize={82}
        minWidth={330}
        height={335}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="emojiName" tick={false} />
        <YAxis tick={{stroke: '#747474', strokeWidth: 1}} />
        <Tooltip />

        <Bar
          dataKey="count"
          fill="#FFBE38"
          shape={<Rectangle radius={radiusArray} />}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
export default ReportGraph
