import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faTwitter,
//   faStackOverflow,
//   faWhatsapp
// } from "@fortawesome/free-brands-svg-icons";
// import {
//   faCircleInfo,
//   faPaperPlane,
//   faEnvelope
// } from "@fortawesome/free-solid-svg-icons";
import { faUser, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import {
  faPowerOff,
  faUserXmark,
  faCirclePlus,
  faPenToSquare
} from "@fortawesome/free-solid-svg-icons";

const iconsObj = {
  // fb: faFacebook,
  // twitter: faTwitter,
  // whatsapp: faWhatsapp,
  // stack: faStackOverflow,
  // email: faEnvelope,
  // mailbox: faPaperPlane,
  // moreInfo: faCircleInfo,
  user: faUser,
  userClose: faUserXmark,
  logout: faPowerOff,
  delete: faTrashCan,
  add: faCirclePlus,
  edit: faPenToSquare
};

const FaIcon = ({ id }) => {
  return <FontAwesomeIcon className="faIcons" icon={iconsObj[id]} />;
};
export default FaIcon;
