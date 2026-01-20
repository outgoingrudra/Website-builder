import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import type { Project } from '../types'
import { Loader2Icon } from 'lucide-react'

export default function Projects() {


  const {projectId} =  useParams()
  const navigate = useNavigate()

  const [project, setProject] = useState<Project | null >(null)
  const [loading , setLoading] = useState(true)
  const [isGenerating , setIsGenerating] = useState(false)
  const [device , setDevice] =  useState<'phone' | 'desktop' | 'tablet'>("desktop")
  const [isMenuOpen , setIsMenuOpen] = useState(false)
  const [isSaving , setIsSaving] = useState(false)
  
  const fetchProject = async()=>{

  }

  useEffect(()=>{
    fetchProject()
  },[])

  if(loading)
     return (
    <>
       <div className="flex items-center justify-center h-screen">
        <Loader2Icon className='size-7 animate-spin text-violet-200' />

       </div>
    </>
    )

  

  return (
    <div>Projects</div>
  )
}
