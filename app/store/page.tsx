import React from 'react'

export default function page(
  {
    searchParams
  }:{
    searchParams: { [key: string]: string | string[] | undefined }
  }
) {
  return (
    <div>Store Page. Search: {searchParams.category}</div>
  )
}