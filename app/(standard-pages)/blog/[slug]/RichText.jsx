"use client";

import { Children, useEffect, useState } from "react"

export default function RichText({ src, maxWidth = '', className }) {

  const [nodes, setNodes] = useState(JSON.parse(src))

  useEffect(() => {
    console.log('rich text src', nodes)
  }, [src, nodes])
  return (
    <div className={className}>
      {nodes.map((node, index) => {
        const { type, image, children } = node
        if (type === 'h1') {
          if (children.length === 1 && children[0].text === '') return null

          return (
            <h1 className="text-3xl lg:text-5xl">{children.map(childNode => <>{childNode.text}</>)}</h1>
          )
        }

        // if (type === 'h2') {
        //   if (children.length === 1 && children[0].text === '') return null

        //   return (
        //     <h2 className={`mt-8 ${maxWidth ? `w-[100%] max-w-[${maxWidth}]` : ''}`}>{children.map(childNode => <>{childNode.text}</>)}</h2>
        //   )
        // }

        if (type === 'h2') {
          return <h2 style={{ marginBlock: '2em 0.75em', fontSize: 'clamp(20px, calc(0.5vw + 1em), 28px)', }}>{children.map(childNode => <>{childNode.text}</>)}</h2>
        }

        if (type === 'paragraph') {
          if (children.length === 1 && children[0].text === '') return null

          return (
            <p key={`node_${index}`} style={{ maxWidth, marginBlockEnd: '1em' }}>{children.map((childNode, childNodeIndex) => <span key={`node_${index}_childNode_${childNodeIndex}`}>{childNode.text}</span>)}</p>
          )
        }

        if (type === 'image') {

          return (
            <picture>
              <img src={image.url} alt={image.description} width={image.width} height={image.height} className="max-w-full rounded-md" />
            </picture>
          )
        }
      })}

      
    </div>
  )
}
