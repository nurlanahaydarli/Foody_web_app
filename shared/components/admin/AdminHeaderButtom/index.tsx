import React from 'react';
import styles from '../AdminHeaderButtom/AdminHederButtom.module.css'
import vector from '../../../../public/pizza.svg'
import Image from 'next/image';
import CustomButton from '../Button';
import Select from "../Form/Select";
import {useTranslation} from "next-i18next";

interface PROPS {
    Title?:String;
    typeTitle?:string;
    addTitle?:string;
    typeButton?: boolean;
    addButton?: boolean;
    typeButtonFun?: any ;
    addButtonFun?: any ;
    haveSelect?: boolean;
    selectOption?: any[] | undefined;
    onSelect?: any

}

function AdminHedetbuttom(props:PROPS) {
    let {typeButton,addButton,typeButtonFun,addButtonFun,typeTitle,addTitle ,Title,haveSelect,selectOption,onSelect}=props
    const {t} =useTranslation("common")
    return (
        <div className={'adminHeaderbg '+styles.heder}>
            <h2 className={ styles.title}> {Title}</h2>



             <div className={styles.div}>
                 {!!haveSelect &&
                     <div className='custom_select'>
                         <select name={"rest_id"} onChange={onSelect} >
                             <option value=''>{t("All restaurants")}</option>
                             {selectOption?.map((option)=>(
                                 <option value={option.id}>{option.name}</option>
                             ))}
                         </select>
                     </div>

                 }
                <button 
                className={ styles.typeButton  }
                 style={typeButton?{display:'flex'}:{display:'none'}}
                 onClick={typeButtonFun}
                 >
                    {typeTitle}
                     
                     <Image
                        src={vector}
                        alt="My SVG"
                        width={16}
                        height={16}
                    />



                     </button>
                     
                     <div style={addButton?{display:'flex'}:{display:'none'}} >
                     <CustomButton innerText={''} className={' '} type={'submit'} size={'md'} color={'1'} title={addTitle}  onAction={addButtonFun} icon={true}/>
                     </div>

             </div>



        </div>
    );
}

export default AdminHedetbuttom;
