import { createContext, useContext, useEffect, useState } from "react";


const SavedJobContext =createContext();

export const useSavedJobContext=()=>useContext(SavedJobContext)

export const SavedJobProvider=({children})=>{

    const [savedJobs,setSavedJobs]=useState([]);

    useEffect(()=>{
        const storedJobs=localStorage.getItem("savedJobs");
        if(storedJobs) setSavedJobs(JSON.parse(storedJobs))
    },[])

    useEffect(()=>{
        localStorage.setItem('savedJobs',JSON.stringify(savedJobs));
    },[savedJobs])


    const saveJob=(job)=>{
        setSavedJobs(prev=>[...prev,job])
    }

    const removeJob=(jobID)=>{
        setSavedJobs(prev=>prev.filter(job=>job.id!==jobID))
    }


    const isSaved=(jobID)=>{
        return savedJobs.some(job=>job.id===jobID);
    }
    return (
        <SavedJobContext.Provider value={{savedJobs,saveJob,removeJob,isSaved}}>
            {children}
        </SavedJobContext.Provider>
    )
}