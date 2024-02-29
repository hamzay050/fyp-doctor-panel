import {PieChart} from "@mui/x-charts"
import { GET } from '@/services/httpClient';
import { ProfileContext } from '@/context/profileContext';
import { useContext,useState,useEffect } from 'react';
import { AppContext } from "@/context/appContext";

const PieCharts =() => {
  const {setIsLoading,setSnackbarState}=useContext(AppContext)
  const {profileData}=useContext(ProfileContext)
  const [completedCount, setCompletedCount] = useState(0)
  const [rejectedCount, setRejectedCount] = useState(0)
  
  useEffect(()=>{
    async function fetchData(){
      try {
        setIsLoading(true)
        const getCompletedAppointment= await GET(`/appointment/completed/appointments/${profileData?._id}`)
        const getRejectedAppointment= await GET(`/appointment/rejected/appointments/${profileData?._id}`)
        setCompletedCount(getCompletedAppointment.length)
        setRejectedCount(getRejectedAppointment.length)
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        setSnackbarState({
          severity: "error",
          open: true,
          message: "Failed to fetch,try again",
        })
      }
    }
    fetchData()
  },[profileData?._id])

  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: completedCount, label: 'Completed' },
            { id: 1, value: rejectedCount, label: ' Rejected' },
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