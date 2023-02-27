/* eslint-disable-next-line */
export interface BannerProps {
  text:string;
}

export function Banner(props: BannerProps) {
  return (<header className="text-xl text-blue-800 mb-4 border-2 border-blue border-b-blue-500 border-t-0 border-l-0 border-r-0">{props.text}</header>  );
}

export default Banner;
