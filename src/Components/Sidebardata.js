
import { CgProfile } from 'react-icons/cg'
import { BsCardChecklist} from 'react-icons/bs'
import { GiHouse} from 'react-icons/gi'
import {BsGraphUp} from 'react-icons/bs'
import {TbMathSymbols} from 'react-icons/tb'


import {BiQuestionMark , BiFile} from 'react-icons/bi'
import {BsBag, BsTag} from 'react-icons/bs'
import {AiOutlineUser, AiOutlineInbox} from 'react-icons/ai'
import {TbBadge} from 'react-icons/tb'
import {CiBullhorn} from 'react-icons/ci'
import {MdOutlineComment} from 'react-icons/md'

import {GiReceiveMoney, GiPayMoney} from 'react-icons/gi'


const size="1rem"
export const Sidebardata = [
            {
                title:"QUESTIONS",
                path:"/",
                icon:<BiQuestionMark size={size}  />,
            },
            {
                title:"JOBS",
                path:"/",
                icon:<BsBag size={size}  />,
            },
            {
                title:"DOCUMENTATION",
                path:"/",
                icon:<BiFile size={size}   />,
            },
            {
                title:"TAGS",
                path:"/",
                icon:<BsTag size={size}   />,
            },
            {
                title:"USERS",
                path:"/",
                icon:<AiOutlineUser size={size}  />,
            },
            {
                title:"BADGES",
                path:"/",
                icon:<TbBadge size={size}  />,
            },
            {
                title:"ASK QUESTION",
                path:"/",
                icon:<CiBullhorn size={size} />,
            },
            {
                title:"STACK EXCHANGE",
                path:"/",
                icon:<MdOutlineComment size={size} />,
            },
            {
                title:"INBOX",
                path:"/",
                icon:<AiOutlineInbox size={size} />,
            }
        ]