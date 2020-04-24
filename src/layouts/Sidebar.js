import React from 'react';
import Cardside from '@views/sidebar/Cardside'
const Sidebar = () => {
    return (
       <div className="fixed-bottom offset-9 col-3 sm-d-block">
            <Cardside title="Peliculas Favoritas"/>
            <Cardside title="Actores Favoritos"/>
            <Cardside title="Series Favoritos"/>
        </div>

        
    )
}

export default Sidebar;