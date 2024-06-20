import React, { useEffect, useState } from 'react';
import style from '../login-register/login_register.module.css'
import loginIcon from '../../public/login.svg'
import registerIcon from '../../public/register.svg'
import Image from 'next/image';
import SignInForm from '../../shared/components/Client/login-register/loginForum';
import RegisterForm from '../../shared/components/Client/login-register/RegisterForum';
import ChangeLanguage from "../../shared/components/Language/ChangeLanguage";
import {useRouter} from "next/router";
function Login_register() {
    let [singin,setsingin]=useState(true)
    let [mobile,setmobile]=useState(false)
  
    useEffect(()=>{
        if(window.innerWidth<800){
            setmobile(true)
        }else{
            setmobile(false)
        }
      
        
        
    },[mobile])
    let {push}=useRouter()
    return (<div>
        <div className={style.Body +' w-full h-full p-7 '}>
            <header  className={style.blackbg + '  h-28 flex items-center justify-between  p-9 rounded-md '}>
                <h2 className={style.headerText} >Foody.</h2>
                <ChangeLanguage/>
            </header>
            <div className={mobile?' flex flex-col gap-3 ':' flex flex-row gap-3 '}>
                <div className={mobile?style.blackbg +' flex justify-center items-center mt-5 rounded-md ':style.blackbg +' flex w-3/5 justify-center items-center mt-5 rounded-md ' }>
                {singin?<Image
                src={loginIcon}
                alt='Image'
                className={style.loginIcon}
                width={600}
                height={728}
                />:
                <Image
                src={registerIcon}
                alt='Image'
                // className={style.loginIcon}
                width={600}
                height={728}
                />}
                </div>
                <div
                className={mobile?style.loginbg +'  h-full mt-5 rounded-md':style.loginbg +' w-2/5 h-full mt-5 rounded-md'}
                >
                   <div className='flex flex-row  gap-16 justify-center h-full  mt-20'>
                    <h2 className={singin? style.headerTextActive: style.headerTextDeActive}  onClick={()=>setsingin(true)}>Login</h2>
                    <h2 className={!singin? style.headerTextActive: style.headerTextDeActive} onClick={()=>setsingin(false)}>Register</h2>
                   </div>
                   {singin?<SignInForm/>:<RegisterForm setsingin={()=>{
                    setsingin(true)
                   }}/>}
                    
                    

                </div>
            </div>
        </div>
        
    </div>
        
    );
}

export default Login_register;