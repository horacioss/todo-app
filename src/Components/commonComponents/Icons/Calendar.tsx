
import { FC } from "react"

type Props = {
  fill: string,
  className: string | undefined,
}

export const Calendar: FC<Props> = ({fill, className}) => {
  return (
    <svg className={className} width={24} height={24} viewBox="0 0 24 24" fill="none" >
      <path d="M11.537 14.292C11.285 14.112 10.994 14.016 10.664 14.004L11.87 12.672C12.014 12.528 12.086 12.384 12.086 12.24C12.086 12.078 12.038 11.949 11.942 11.853C11.846 11.751 11.708 11.7 11.528 11.7H8.774C8.63 11.7 8.51 11.748 8.414 11.844C8.318 11.934 8.27 12.048 8.27 12.186C8.27 12.33 8.318 12.45 8.414 12.546C8.51 12.642 8.63 12.69 8.774 12.69H10.556L9.161 14.211C9.089 14.289 9.038 14.361 9.008 14.427C8.978 14.493 8.963 14.568 8.963 14.652C8.963 14.79 9.002 14.907 9.08 15.003C9.158 15.093 9.263 15.138 9.395 15.138C9.497 15.138 9.626 15.114 9.782 15.066C9.8 15.06 9.854 15.045 9.944 15.021C10.034 14.997 10.139 14.985 10.259 14.985C10.535 14.985 10.769 15.075 10.961 15.255C11.159 15.435 11.258 15.687 11.258 16.011C11.258 16.239 11.204 16.443 11.096 16.623C10.994 16.797 10.859 16.932 10.691 17.028C10.523 17.118 10.346 17.163 10.16 17.163C9.848 17.163 9.563 17.064 9.305 16.866C9.167 16.776 9.038 16.731 8.918 16.731C8.774 16.731 8.651 16.791 8.549 16.911C8.447 17.031 8.396 17.163 8.396 17.307C8.396 17.511 8.507 17.673 8.729 17.793C8.891 17.883 9.08 17.955 9.296 18.009C9.512 18.063 9.728 18.09 9.944 18.09C10.424 18.09 10.844 18.003 11.204 17.829C11.564 17.655 11.843 17.406 12.041 17.082C12.239 16.752 12.338 16.368 12.338 15.93C12.338 15.6 12.269 15.291 12.131 15.003C11.993 14.709 11.795 14.472 11.537 14.292Z" fill={fill}/>
      <path d="M15.1501 11.862C15.0481 11.754 14.9221 11.7 14.7721 11.7C14.6161 11.7 14.4871 11.727 14.3851 11.781L13.0261 12.591C12.9421 12.639 12.8731 12.705 12.8191 12.789C12.7711 12.873 12.7471 12.963 12.7471 13.059C12.7471 13.197 12.7981 13.323 12.9001 13.437C13.0081 13.551 13.1371 13.608 13.2871 13.608C13.3891 13.608 13.4851 13.581 13.5751 13.527L14.1331 13.185V17.451C14.1331 17.607 14.1871 17.739 14.2951 17.847C14.4031 17.949 14.5411 18 14.7091 18C14.8771 18 15.0181 17.949 15.1321 17.847C15.2461 17.739 15.3031 17.607 15.3031 17.451V12.249C15.3031 12.093 15.2521 11.964 15.1501 11.862Z" fill={fill} />
      <path fillRule="evenodd" clipRule="evenodd" d="M4.5 3H7V2H8V3H16V2H17V3H19.5C20.3284 3 21 3.67157 21 4.5V20C21 20.8284 20.3284 21.5 19.5 21.5H4.5C3.67157 21.5 3 20.8284 3 20V4.5C3 3.67157 3.67157 3 4.5 3ZM7 6V4H4.5C4.22386 4 4 4.22386 4 4.5V8H20V4.5C20 4.22386 19.7761 4 19.5 4H17V6H16V4H8V6H7ZM4 20V9H20V20C20 20.2761 19.7761 20.5 19.5 20.5H4.5C4.22386 20.5 4 20.2761 4 20Z" fill={fill} />
    </svg>
  );
}