
import { FC } from "react"

type Props = {
  fill: string,
  className: string | undefined,
}

export const Chart: FC<Props> = ({fill, className}) => {
  return (
    <svg className={className} width={24} height={24} viewBox="0 0 24 24" fill="none" >
      <path fillRule="evenodd" clipRule="evenodd" d="M14 4H13.5V4.5V8.63636H9H8.5V9.13636V13.2727H4H3.5V13.7727V19.9545H4.5V14.2727H8.5V19.9545H9.5V13.7727V9.63636H13.5V19.9545H14.5V9.13636V5H19.5V19.9545H20.5V4.5V4H20H14ZM2 20.9848H22V19.9848H2V20.9848Z" fill={fill}/>
    </svg>
  );
}