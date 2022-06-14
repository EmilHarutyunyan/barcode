import { getProductAll, getProductByID, product } from './ProductAPI';

export function productReducer(state = {}, action) {
  if (action.type === 'add-product') {
    return {
      product: action.payload.product,
    };
  } else if (action.type === 'get-product') {
    return {
      product: action.payload.product,
    };
  } else if (action.type === 'get-product-id') {
    return {
      product: action.payload.product,
    };
  } else if (action.type === 'res-product-id') {
    return {
      product: {},
    };
  }
  return state;
}


export const initialProduct = {
  product: {},
};

export function selectProduct(state) {
  return state.product.product;
}

export function productDispatch(data) {
  return {
    type: 'add-product',
    payload: { product: data },
  };
}

export function getProductDispatch(data) {
  return {
    type: 'get-product',
    payload: { product: data },
  };
}

export function getByIdProductDispatch(data) {
  return {
    type: 'get-product-id',
    payload: { product: data },
  };
}
export function resByIdProductDispatch() {
  return {
    type: 'res-product-id',
  };
}

export function productScannerSystemReducer(state = {}, action) {
  if (action.type === 'product-get-system') {
    return {
      productSystem: action.productSystem,
    };
  } else if (action.type === 'product-res-system') {
    return {
        productSystem: action.productSystem,
    };
  }
  return state;
}

export function selectProductSystem(state) {
  return state.productSystem.productSystem;
}

export const initialProductSystem = {
  productSystem: {},
};

export function getProductSystemDispatch(data) {
  return {
    type: 'product-get-system',
    productSystem: data,
  };
}

export function resProductSystemDispatch() {
  return {
    type: 'product-res-system',
    productSystem: {},
  };
}

export function productScannerSubSystemReducer(state = {}, action) {
  if (action.type === 'product-get-sub-system') {
    return {
      productSubSystem: action.productSubSystem,
    };
  } else if (action.type === 'product-res-sub-system') {
    return {
      productSubSystem: action.productSubSystem,
    };
  }
  return state;
}
export function selectProductSubSystem(state) {
  return state.productSubSystem.productSubSystem;
}

export const initialProductSubSystem = {
  productSubSystem: {},
};

export function getProductSubSystemDispatch(data) {
  return {
    type: 'product-get-sub-system',
    productSubSystem: data,
  };
}

export function resProductSubSystemDispatch() {
  return {
    type: 'product-res-sub-system',
    productSubSystem: {},
  };
}
export function getProductSubSystem(data) {
  return (dispatch, getState) => {
    return getProductByID(data).then(response => {
      dispatch(getProductSubSystemDispatch(response.data.results[0]));
    });
  };
}
export function resProductSubSystem() {
  return (dispatch, getState) => {
      dispatch(resProductSubSystemDispatch());
  };
}

export function getProductSystem(data) {
  return (dispatch, getState) => {
    return getProductByID(data).then(response => {
      dispatch(getProductSystemDispatch(response.data.results[0]));
    });
  };
}

export function resProductSystem() {
    return (dispatch, getState) => {
        dispatch(resProductSystemDispatch());
    };
  }

export function getProduct(data) {
  return (dispatch, getState) => {
    return getProductAll(data).then(response => {
      dispatch(getProductDispatch(response.data.results));
    });
  };
}

export function getProductId(id) {
  return (dispatch, getState) => {
    return getProductByID(id).then(response => {
      dispatch(getByIdProductDispatch(response.data.results));
    });
  };
}

export function resProductId() {
  return (dispatch, getState) => {
    dispatch(resByIdProductDispatch());
  };
}

export function addProduct(data) {
  return (dispatch, getState) => {
    return product(data).then(responseProduct => {
      dispatch(productDispatch(responseProduct.data));
    });
  };
}
