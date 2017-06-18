import productsAction from '../constants/productsActions';
import _ from 'lodash';

export default function products(state = {}, action) {
    switch (action.type) {
    case productsAction.ADD_NEW_PRODUCT:
        // Il faut probablement creer un nouveau state avec le nouveau produit !
        return state;
    default:
        return state;
    }
}
