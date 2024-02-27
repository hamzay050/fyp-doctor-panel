import * as React from 'react';
// import  PieChart  from '@mui/x-charts/PieChart';
import {PieChart} from "@mui/x-charts"

const PieCharts =() => {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 20, label: 'Satisfied' },
            { id: 1, value: 5, label: ' No Satisfied' },
            // { id: 2, value: 20, label: 'Woman' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
}
export default PieCharts