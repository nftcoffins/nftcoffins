import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'
import { useEffect } from 'react'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useResetScroll = (deps?: any[]) => {
    useEffect(() => {
        document.documentElement.scrollIntoView({ block: 'start', behavior: 'auto' })
    }, deps)
}
