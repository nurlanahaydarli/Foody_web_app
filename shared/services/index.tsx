import {
    RestaurantSingleApiResponse,
    PostDataType,
    BasketPostDataType,
    RestaurantApiResponse,
    CategoryApiResponse,
    CategoryPostDataType,
    InitialCategoryState,
    ApiResponse

} from "../interfaces/";
import { AxiosPromise } from "axios";
import { instanceAxios } from "../helpers/instanceAxios";


//  =============================== GET CATEGORY ===============================
export const getCategories = (): AxiosPromise<CategoryApiResponse> =>
    instanceAxios({ method: "GET", url: "category" });


// =============================== GET RESTAURANT ===============================
export const getRestaurants = (): AxiosPromise<RestaurantApiResponse> =>
    instanceAxios({ method: "GET", url: "restuarants" });

export const searchRestaurants = (query: string): AxiosPromise<RestaurantApiResponse> =>
    instanceAxios({ method: 'GET', url: `restuarants`, params: { name: query } });

// =============================== GET RESTAURANT_BY_ID ===============================
export const getRestaurantById = (
    restaurantID: string | number
): AxiosPromise<RestaurantSingleApiResponse> =>
    instanceAxios({
        method: "GET",
        url: `restuarants/${restaurantID}`,
    });

// =============================== GET BASKET ===============================
export const GetBasket = (): AxiosPromise => {
    const accessToken = localStorage.getItem("access_token");
    return instanceAxios({
        method: "GET",
        url: "basket",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
};

//===============================  ADD BASKET ===============================
export const AddBasket: (
    basketProduct: BasketPostDataType
) => AxiosPromise<BasketPostDataType> = (basketProduct) => {
    const accessToken = localStorage.getItem("access_token");
    return instanceAxios({
        method: "POST",
        url: `basket/add`,
        data: basketProduct,
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
};

// =============================== DELETE BASKET ===============================
export const deleteBasket: (
    basketProduct: BasketPostDataType
) => AxiosPromise<BasketPostDataType> = (basketProduct) => {
    const accessToken = localStorage.getItem("access_token");
    return instanceAxios({
        method: "DELETE",
        url: `basket/delete`,
        data: basketProduct,
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
};

// =============================== CLEAR BASKET ===============================
export const clearBasket: (
    basketId: BasketPostDataType
) => AxiosPromise<BasketPostDataType> = (basketId) => {
    const accessToken = localStorage.getItem("access_token");
    return instanceAxios({
        method: "DELETE",
        url: `basket/clear`,
        data: basketId,
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
};


// =============================== ADD CATEGORY ===============================
export const PostCategory: (
    newCategory: InitialCategoryState
) => AxiosPromise<CategoryPostDataType> = (newCategory) => {
    return instanceAxios({
        method: "POST",
        url: 'category',
        data: newCategory,
    });
};

// =============================== DELETE CATEGORY ===============================
export const DeleteCategory = (
    categoryId: string | number
): AxiosPromise<CategoryApiResponse> =>
    instanceAxios({
        method: "DELETE",
        url: `category/${categoryId}`,
    });

// =============================== EDIT CATEGORY ===============================
export const EditCategory = (
    editedCategory: CategoryPostDataType
): AxiosPromise<CategoryApiResponse> => {
    return instanceAxios({
        method: "PUT",
        url: `category/${editedCategory.id}`,
        data: editedCategory,
    });
};

// =============================== GET PRODUCTS ===============================
export const GetProducts = (): AxiosPromise<ApiResponse> =>
    instanceAxios({ method: "GET", url: 'products' });

// =============================== GET ORDERS  ===============================
export async function getOrder() {
    try {
        const accessToken = localStorage.getItem("access_token");
        const response = await instanceAxios.get(`/order`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response
    } catch (error) {
        console.log("order's error: ", error);
    }
}



// =============================== DELETE ORDERS ===============================

export const deleteOrder = async (id: string | number) => {
    try {
        let item: any = localStorage.getItem("access_token")
        let accessToken = JSON.parse(item)

        const response = await instanceAxios.delete(`/order`, {
            data: {
                "order_id": id,
            },
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        });
        return response;
    } catch (error) {
        console.log(error)
    }
}

// =============================== DELETE ORDER ===============================
export const DeleteOrder = (
    OrderID: string | number
) =>{
    const accessToken = localStorage.getItem("access_token");
    instanceAxios({
        method: "DELETE",
        url: `order`,
        data:{
            order_id:OrderID
        },
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });


}
// =============================== GET ORDER HISTORY ===============================
export const GetOrderHistory = () =>{
   
    const accessToken = localStorage.getItem("access_token");
    return instanceAxios({
        method: "GET",
        url: "order/history",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    })
}
    
    // =============================== PUT AUTH USET ===============================

    export const PutAuthUser = (body:object) =>{
   
        const accessToken = localStorage.getItem("access_token");
        return instanceAxios({
            method: "GET",
            url: "auth/user",
            data:body,
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
    }