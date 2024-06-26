"use client"
import React, { useState } from 'react'
import FormSection from '../(components)/FormSection'
import OutputSection from '../(components)/OutputSection'
import { TEMPLATE } from '../../(components)/TemplateListSection'
import Templates from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import { ArrowBigLeftIcon } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '@/utils/AIModel'

interface PROPS{
    params:{
        'template-slug':string
    }
}

const CreateNewContent = (props:PROPS) => {
    const selectTemplate: TEMPLATE|undefined= Templates?.find((item)=>item.slug==props.params['template-slug'])
    const [loading,setLoading] = useState(false)
    const [aiOutput,setAiOutput] = useState<string>('')


    const GenerateAIContent = async(FormData:any)=>{
      setLoading(true)
      const SelectedPrompt = selectTemplate?.aiPrompt;
      const FinalAIPrompt = JSON.stringify(FormData)+", "+SelectedPrompt;
      const result = await chatSession.sendMessage(FinalAIPrompt)
      console.log(result.response.text());
      setAiOutput(result?.response.text())
      setLoading(false)
    }
  return (
    <div className='p-10'>
        <Link href={'/dashboard'}><Button><ArrowBigLeftIcon/>Back</Button></Link>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
        <FormSection loading={loading} userFormInput={(e:any)=>GenerateAIContent(e)} selectTemplate={selectTemplate}/>
        <div className='col-span-2'>
        <OutputSection aiOutput={aiOutput}/>
        </div>
    </div>
    </div>
  )
}

export default CreateNewContent