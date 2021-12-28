import React from 'react';

export const useMenu = () => {
    const modules = JSON.parse(localStorage.getItem('user')).userData.modules;
    
    let configurationSubMenu = modules.filter(
        (module) => module.setting_module_config.position === "CONFIGURACION-SUB-MENU"
    );

    let configurationMenu = modules.filter(
      (module) => module.setting_module_config.position === "CONFIGURACION-MENU"
    );

    let sidebarDown = modules.filter(
      (module) => module.setting_module_config.position === "SIDEBAR-DOWN"
    );

    let sidebarUp = modules.filter(
      (module) => module.setting_module_config.position === "SIDEBAR-UP"
    );
    
    let sidebarCenter = modules.filter(
      (module) => module.setting_module_config.position === "SIDEBAR-CENTER"
    );

    configurationMenu = configurationMenu.sort((item) => item.order);
    configurationMenu = configurationMenu.sort((item) => item.order);
    sidebarDown = sidebarDown.sort((item) => item.order);
    sidebarUp = sidebarUp.sort((item) => item.order);
    sidebarCenter = sidebarCenter.sort((item) => item.order);

    return {
      configurationSubMenu,
      configurationMenu,
      sidebarUp,
      sidebarCenter,
      sidebarDown,
    };
      
}


 
