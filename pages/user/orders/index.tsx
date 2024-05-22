import React from 'react';
import Navbar from '../../../shared/components/Client/user-NAV';
import MainLayout from "../../../shared/components/admin/Layout/MainLayout";
// import { UserOrderTable } from '../../../shared/components/client/UserOrderTable';
import { UserOrderTable } from '../../../shared/components/Client/UserOrderTable';
import Image from 'next/image';
import withClientAuth from '../../../shared/HOC/withClienAuth';

function Orders() {
    return (
        <>
            <MainLayout>
                <div className='px-8 pt-1 pb-[100px]'>
                    <div className='flex flex-row'>
                        <Navbar active={1} />
                        <main>
                            <section className="h-full mx-0 sm:m-8 flex justify-center gap-10">


                                <div data-aos="fade-left" className="w-full flex  flex-col justify-start px-8 py-10 flex-wrap gap-x-1 gap-y-8 sm:bg-whiteLight1">
                                    <h2 className=" font-semibold text-3xl text-grayText2">
                                        Your Orders
                                    </h2>

                                 
                                    <UserOrderTable />
                                    

                                    <div className="flex w-max items-center justify-center gap-2">
                                        <button className="bg-white rounded-md border-2 border-mainRedLight hover:scale-95">
                                            <Image
                                                width={25}
                                                height={0}
                                                src={"/ordersBefore.svg"}
                                                alt="arrow"
                                            />
                                        </button>
                                        <p className="p-1 px-3 bg-white font-medium border-2 text-grayText2 border-mainRedLight rounded-md">
                                            1
                                        </p>
                                        <p className=" text-grayText1 font-medium">03</p>
                                        <button className="bg-white rounded-md border-2 border-mainRedLight hover:scale-95">
                                            <Image
                                                width={25}
                                                height={0}
                                                src={"/ordersnext.svg"}
                                                alt="arrow"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </section>


                        </main>



                    </div>
                </div>
            </MainLayout>
        </>
    );
}

export default withClientAuth(Orders);
