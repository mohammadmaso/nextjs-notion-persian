/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useRef, useEffect } from 'react'
import { Transformer } from 'markmap-lib'
import * as markmap from 'markmap-view'

const { Markmap, loadCSS, loadJS } = markmap

const transformer = new Transformer()
const initValue = `# در حال تولید مایند مپ`

type Props = {
  inputMarkdown?: any
}

export default function MarkmapHooks({ inputMarkdown }: Props) {
  // Ref for SVG element
  const refSvg = useRef<any>()

  const { root, features } = transformer.transform(initValue)

  const markmap = Markmap.create('#mindmap', undefined, root)

  return (
    <>
      <svg className='flex-1' id='mindmap' ref={refSvg} />
    </>
  )
}
