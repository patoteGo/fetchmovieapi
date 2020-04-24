import React from 'react';
import Cardside from '@views/sidebar/Cardside'
const Sidebar = () => {
    return (
       <div className="">
            <Cardside title="Peliculas Favoritas"/>
            <Cardside title="Actores Favoritos"/>
            <Cardside title="Series Favoritos"/>
        </div>

        
    )
}

export default Sidebar;