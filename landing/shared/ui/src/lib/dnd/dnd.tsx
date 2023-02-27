import { DndContext,useDraggable,closestCenter,useDroppable } from '@dnd-kit/core';
import { arrayMove,SortableContext,verticalListSortingStrategy,horizontalListSortingStrategy } from '@dnd-kit/sortable';
import { useState } from 'react';
import Items from '../items/items';
/* eslint-disable-next-line */
export interface DndProps {}
const itemList =[
  {
    id:'text',
    name:'text'
  },
  {
    id:'textarea',
    name:'textarea'
  },
  {
    id:'checkbox',
    name:'checkbox'
  },
  {
    id:'checkbox',
    name:"checkbox"
  },
]
export function Dnd(props: DndProps) {
  return (
    <>
      <div>
        {itemList.map((itemList)=>{
        return <Items name={Items.name} id={Items.id}/>
         }) }
      </div>
      <div></div>
    </>
  );
}
export default Dnd;