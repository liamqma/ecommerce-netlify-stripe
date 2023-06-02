import { createStore, createHook, createSubscriber, Action } from 'react-sweet-state';
import Cookies from 'js-cookie'

export type CartItem = {
    id: string; // price_id
    qty: number;
};

type State = {
    items: CartItem[];
}

const itemsFromCookie = Cookies.get("items");

const initialState: State = {
    items: itemsFromCookie ? JSON.parse(itemsFromCookie) : [],
};


const addItem = (id: CartItem["id"]): Action<State> =>
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

const removeItem = (id: CartItem["id"]): Action<State> => ({ setState, getState }) => {
    const { items } = getState();
    setState({ items: items.filter(item => item.id !== id) });
};

const updateItem = ({ qty, id }: CartItem): Action<State> => ({ setState, getState }) => {
    const { items } = getState();
    if (qty <= 0) {
        setState({ items: items.filter(item => item.id !== id) });
    } else {
        setState({ items: items.map(item => item.id === id ? { qty, id } : item) });
    }
}

const removeItems = (): Action<State> => ({ setState, getState }) => {
    setState({ items: [] });
};

const actions = { addItem, removeItem, updateItem, removeItems };

const Store = createStore({
    initialState,
    actions,
});

export const ItemsSubscriber = createSubscriber(Store);

export const useCart = createHook(Store);