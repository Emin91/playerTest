import {useSelector, TypedUseSelectorHook} from 'react-redux';
import rootReducer from "../modules/redux/reducers";

export type AppStateType = ReturnType<typeof rootReducer>;
export const useSelectorTs: TypedUseSelectorHook<AppStateType> = useSelector;
