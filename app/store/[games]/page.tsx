import React from 'react'

type Props = {
  params: {
    [key: string]: string | string[]
  }
}

export default function page({ params }: Props) {
  return (
    <div>page {params.games}</div>
  )
}

