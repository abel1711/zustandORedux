import { create } from 'zustand'

type CountState = {
    count: number;
    increaseBy: (value: number) => void;
}


export const useCountStore = create<CountState>()((set) => ({
    count: 0,
    increaseBy(value) {
        set(state => ({ count: state.count + value }))
    },
}))