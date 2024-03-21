import inctance from "@/api/axios";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const {toast} = useToast()
    const getData =async () => {
        try {
            const response = await inctance.get(url, {
                headers: {
                    'X-API-KEY': import.meta.env.VITE_KEY
                }
            })
            setData(response.data.docs)
            return response.data.docs
        }catch(error){
        
        toast({
            variant:"desktructive",
            title: error.message,
            deskcription: "",
        })

        
        }
   
}

useEffect(() =>{
    getData();
}, [url]);

return { data, getData };
}
