import React from 'react'

export default function page(
  {
    searchParams
  }:{
    searchParams: { [key: string]: string | string[] | undefined }
  }
) {
  console.log(searchParams);
  return (
    <div>page</div>
  )
}