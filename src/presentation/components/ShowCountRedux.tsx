import { useAppSelector } from "../redux/hook"

export const ShowCountRedux = () => {

    const count = useAppSelector(state => state.count);

    return (
        <p>Count: {count.value}</p>
    );
};
