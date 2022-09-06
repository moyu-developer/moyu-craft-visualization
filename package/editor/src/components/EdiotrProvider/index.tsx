import { CSSProperties, ReactNode } from "react"

export interface EditorProviderProps {
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  children?: ReactNode
}

const EditorProvider: React.FC<EditorProviderProps> = ({
  width,
  height,
  children,
  ...props
}) => {

  return (
    <div style={{width, height}} >
      {children}
    </div>
  )
}

export default EditorProvider