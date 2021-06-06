import { ComponentType, ElementType, MemoExoticComponent } from 'react'

export type ComponentLike = ElementType | ComponentType | MemoExoticComponent<ComponentType>
