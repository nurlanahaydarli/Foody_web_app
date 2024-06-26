import {useRouter} from "next/router";
import MainLayout from "../../shared/components/admin/Layout/MainLayout";
import React, {useEffect} from "react";
import styles from './restaurants.module.css'
import styles_products from '../../shared/components/Client/Products/products.module.css'
import BasketContainer from "../../shared/components/Client/BasketItem/BasketContainer";
import {getRestaurantById} from "../../shared/services";
import {useQuery} from "react-query";
import Loading from "../../shared/components/Loading/Loading";
import ProductsCard from "../../shared/components/Client/Products/ProductCard";
import {sortDataByCreated} from "../../shared/utils/sortData";
import {GetServerSideProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

export default function RestaurantDetail() {
    let router = useRouter()

    const {t}=useTranslation('common')
    const { id } = router.query;
    const {
        data: restaurantData,
    } = useQuery(['singleRestaurant', id], () =>
        getRestaurantById(id as string)
    );

    const restaurant = restaurantData?.data.result.data
    const products = restaurant ? restaurant.products : [];


    return (
        <>
            <MainLayout>
                {restaurant ?
                <>
                    <div className='lg:px-8 px-3 pt-1 pb-[100px]'>
                        <div className={styles.restaurant_top}>
                            <img src={restaurant.img_url || undefined}  alt={restaurant.name} className={styles.cover_width} />
                        </div>
                        <div className={`${styles.restaurant_detail} lg:flex-nowrap flex-wrap flex justify-between items-center`}>
                            <div className={styles.left_top}>
                                <h1>
                                    {restaurant.name}
                                </h1>
                                <p>{restaurant.address}</p>
                            </div>
                            <div className={`flex items-center md:justify-end w-full justify-between md:flex-nowrap flex-wrap  ${styles.top_right} gap-10`}>
                                <div className={styles.restaurant_desc}>
                                    <p>{t("Cuisine")}</p>
                                    <span>{restaurant.cuisine}</span>
                                </div>
                                <div className={`${styles.action} flex items-center gap-10`}>
                                    <span>{restaurant.delivery_price} &#8380; {t("Delivery")}</span>
                                    <button onClick={()=>router.back()}>{t("Go Back")}</button>
                                </div>
                            </div>
                        </div>
                        <div className="flex lg:flex-nowrap flex-wrap max-w-screen-xl mx-auto">
                            <div className="lg:w-4/6  w-full">
                                <div className={styles_products.products_container}>
                                    <h2 className={`text-center ${styles_products.products_title}`}>{t("Products")}</h2>
                                    <div className={styles_products.products_list}>
                                        <ul>
                                            {products?.map((product)=>(
                                                <li key={product.id}>
                                                    <ProductsCard  {...product} id={String(product.id)}  />
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-2/6  w-full">
                                <BasketContainer size={'md'} />
                            </div>
                            {/*<div className="w-full lg:hidden flex justify-center ">*/}
                            {/*    <button  className={styles.basket_btn}>Basket</button>*/}
                            {/*</div>*/}
                        </div>

                    </div>
                </>
                :<Loading/>}
            </MainLayout>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale as string, ["common"])),
    },
});