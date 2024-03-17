import { ShowCountZustand } from "../components/ShowCountZustand";
import { useCountStore } from "../zustand/store";

export const HomeScreenZustand = () => {

	const increaseBy = useCountStore(state => state.increaseBy);

	return (
		<div>
			<h1>Zustand</h1>

			<ShowCountZustand />


			<button onClick={() => increaseBy(1)} >
				+1
			</button>
			<button onClick={() => increaseBy(-1)} >
				-1
			</button>
		</div>
	)
}
