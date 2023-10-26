import { CSSProperties, ReactNode } from "react"

export type RowProps = {
  children?: ReactNode
  gap?: number
  justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly"
  color?: string
  background?: string
}

export default function Row(props: RowProps) {
  const style: CSSProperties = {
    display: "flex",
    flexDirection: "row"
  }

  if (props.gap) {
    style.gap = props.gap;
  }

  if (props.justify) {
    style.justifyContent = props.justify;
  }

  if (props.color) {
    style.color = props.color;
  }

  if (props.background) {
    style.background = props.background;
  }

  return (
    <div style={style}>
      {props.children}
    </div>
  )
}