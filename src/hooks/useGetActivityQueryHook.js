import { useGetActivityQuery } from "../Service/activityApi";





const useGetActivityQueryHook =
() => {
     const {data ,  error, isLoading} = useGetActivityQuery();
console.log(data);

//  if (isLoading) return <h1>Loading..</h1>
//  if (error) return <h1>Error loading data</h1>
 // if (isLoading) return null 

 const months =[
   "Jan","Feb","Mar","Apr","May","Jun",
  "Jul","Aug","Sep","Oct","Nov","Dec"
]
 let activityDetails =[];

 if (data?.posts){
  activityDetails = months.map((month , index) =>({

    

    month,
    value:data.posts.slice(index * 1, (index + 1 ) * 5).length * 1

  }));
 }
  return{ 
   activityDetails,
   isLoading,
   error

  }
}

export default  useGetActivityQueryHook;



