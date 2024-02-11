import React from 'react'

const AppMenu=({handleActiveMenu, activeMenu}) => {
    console.log(activeMenu);
    const menus=[
        {
            key: "secure",
            name: "Secure",
            type: "branding"
        },
        {
            key: "home",
            name: "Home",
        },
        {
            key: "history",
            name: "History"
        },
        {
            key: "insigths",
            name: "Insigths"
        }
    ]
    return (
        <div className=' cursor-pointer w-[40%] flex justify-start gap-10 align-middle content-center self-center items-center'>
            {menus.length>0? menus.map(menu =>
                <div onClick={() => handleActiveMenu(menu.key)} key={menu.key} className={` ${menu.type==="branding"? "text-red-400":""} hover:text-[#3498DB] hover:font-bold hover:font-Rob font-Pop ${activeMenu===menu.key? "text-[#3498DB]":""}`}>
                    {menu.name}
                </div>
            ):null}
        </div>
    )
}

export default AppMenu
