import { createStore, createHook, Action } from 'react-sweet-state';

type Item = {
    id: string;
    qty: number;
};

type State = {
    items: Item[];
}

const initialState: State = {
    items: [],
};


const addItem = (id: Item["id"]): Action<State> =>
    ({ setState, getState }) => {
        const { items } = getState();
        if (items.find(item => item.id === id)) {
            // if item already exists in the cart
            const newItems = items.map(item => {
                if (item.id === id) {
                    item.qty = item.qty + 1;
                }
                return item;
            })
            setState({ items: newItems })
        } else {
            setState({ items: [...items, { id, qty: 1 }] })
        }
    };

const removeItem = (id: Item["id"]): Action<State> => ({ setState, getState }) => {
    const { items } = getState();
    setState({ items: items.filter(item => item.id !== id) });
};

const updateItem = ({ qty, id }: Item): Action<State> => ({ setState, getState }) => {
    const { items } = getState();
    setState({ items: [...items.filter(item => item.id !== id), { qty, id }] });
}

const actions = { addItem, removeItem, updateItem };

const Store = createStore({
    initialState,
    actions,
});

export const useCart = createHook(Store);