import { useCountStore } from "../zustand/store"

export const ShowCountZustand = () => {
    const count = useCountStore(state => state.count);
    return (
        <nav>Count: {count}</nav>
    )
}
