// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { useDrag } from "react-dnd";
/* eslint-disable-next-line */
export interface ItemsProps {
  id:string
  name:string
}

export function Items(props: ItemsProps) {
    const [{ isDragging }, drag] = useDrag(() => ({
      type: "input",
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }));
  return (
       <div ref={drag}>
        {props.name}
       </div>
      );
  }

  export default Items;







const enum InputTypes{
  TEXT='text',
  SELECT='select',
  CHECKBOX='checkbox'
  }









// import { useState } from 'react';
// import styles from './items.module.scss';
// import {useSortable} from '@dnd-kit/sortable'
// import {CSS} from '@dnd-kit/utilities'
// /* eslint-disable-next-line */
// export interface ItemsProps {
//   id:string;
// }

// export function Items(props: ItemsProps) {
//   const {
//     attributes,
//     listeners,
//     setNodeRef,
//     transform,
//     transition
// }=useSortable({id: props.id})

// const style ={
//   transform: CSS.Transform.toString(transform),
//   transition
// }
//   return (
//     <div ref={setNodeRef} style={style} {...attributes} {...listeners} className='grid grid-cols-1 shadow-xl p-2 mt-4 bg-blue-100 m-2'>
//       <h1 className='m-9'>{props.id}</h1>
//     </div>
//   );
// }

// export default Items;
