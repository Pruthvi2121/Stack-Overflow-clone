


import {BiQuestionMark , BiFile} from 'react-icons/bi'
import {BsBag, BsTag} from 'react-icons/bs'
import {AiOutlineUser, AiOutlineInbox} from 'react-icons/ai'
import {TbBadge} from 'react-icons/tb'
import {CiBullhorn} from 'react-icons/ci'
import {MdOutlineComment} from 'react-icons/md'



const size="1rem"
export const Sidebardata = [
            {
                title:"QUESTIONS",
                path:"/",
                icon:<BiQuestionMark size={size}  />,
            },
            {
                title:"JOBS",
                path:"/jobs",
                icon:<BsBag size={size}  />,
            },
            {
                title:"DOCUMENTATION",
                path:"/docs",
                icon:<BiFile size={size}   />,
            },
            {
                title:"TAGS",
                path:"/tags",
                icon:<BsTag size={size}   />,
            },
            {
                title:"USERS",
                path:"/users",
                icon:<AiOutlineUser size={size}  />,
            },
            {
                title:"BADGES",
                path:"/badges",
                icon:<TbBadge size={size}  />,
            },
            {
                title:"ASK QUESTION",
                path:"/ask",
                icon:<CiBullhorn size={size} />,
            },
            {
                title:"STACK EXCHANGE",
                path:"/stack",
                icon:<MdOutlineComment size={size} />,
            },
            {
                title:"INBOX",
                path:"/inbox",
                icon:<AiOutlineInbox size={size} />,
            }
        ]