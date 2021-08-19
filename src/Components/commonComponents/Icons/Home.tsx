
import { FC } from "react"

type Props = {
  fill: string,
  className: string | undefined,
}

export const Home: FC<Props> = ({fill, className}) => {
  return (
    <svg className={className} width={24} height={24} viewBox="0 0 24 24" fill="none" >
      <path d="M9.7 21H4.3C4.13431 21 4 20.8657 4 20.7V11.63C4 11.547 4.03432 11.4678 4.09482 11.4111L11.3161 4.64119C11.7007 4.28058 12.2993 4.28058 12.6839 4.6412L19.9052 11.4111C19.9657 11.4678 20 11.547 20 11.63V20.7C20 20.8657 19.8657 21 19.7 21H14.3C14.1343 21 14 20.8657 14 20.7V15.3C14 15.1343 13.8657 15 13.7 15H10.3C10.1343 15 10 15.1343 10 15.3V20.7C10 20.8657 9.86569 21 9.7 21Z" stroke={fill}/>
    </svg>
  )
}