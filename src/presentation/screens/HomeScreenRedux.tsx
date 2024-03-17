import { ShowCountRedux } from "../components/ShowCountRedux"
import { incrementBy } from "../redux/counterSlice";
import { useAppDispatch } from "../redux/hook"

export const HomeScreenRedux = () => {

	const dispatch = useAppDispatch();

	return (
		<div>
			<ShowCountRedux />
			
			<button onClick={() => dispatch(incrementBy(1))} >
				+1
			</button>
			<button onClick={() => dispatch(incrementBy(-1))} >
				-1
			</button>
		</div>
	)
}
