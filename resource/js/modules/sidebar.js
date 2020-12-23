export default class sidebar {
    constructor() {
        let IS_EXTENDED_CONTAINER = false;
        let IS_SIDEBAR_COLLAPSE = false;
        let IS_COLLAPSE_ON_RESIZE = false;
    }

    hideSidebar = async ()=>{
        IS_SIDEBAR_COLLAPSE = true;
    }

    showSidebar = async ()=>{
        IS_SIDEBAR_COLLAPSE = false;
    }
}