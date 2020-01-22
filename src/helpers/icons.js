import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faTrash,
    faSignOutAlt,
    faTrashRestore,
    faUserEdit,
    faAtom,
    faFeatherAlt,
    faMapPin,
    faMobileAlt,
    faPaperPlane,
    faLock
} from "@fortawesome/free-solid-svg-icons";


const Icons = () => {
    return library.add(faTrash, faSignOutAlt, faTrashRestore, faUserEdit, faAtom, faFeatherAlt, faMapPin, faMobileAlt, faPaperPlane, faLock)
};

export default Icons;