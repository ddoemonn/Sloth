import { Provider, useDispatch, useSelector } from 'react-redux';
import { RootState, store } from './store';

export function Providers({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
