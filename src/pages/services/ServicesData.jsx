import { MdSecurity } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";
import { FaCloud } from "react-icons/fa6";
import { FaMedapps } from "react-icons/fa";
import { LuDatabaseBackup } from "react-icons/lu";
import { PiTreeStructureLight } from "react-icons/pi";
import { BsPatchExclamation } from "react-icons/bs";
import { VscRemoteExplorer } from "react-icons/vsc";
import { RxDesktop } from "react-icons/rx";
import { FaHandsHelping } from "react-icons/fa";
import { CgSoftwareUpload } from "react-icons/cg";

const data = [
    {
        id: 1,
        img: "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/website.png?v=1712943857",
        service: 'Website Developement',
        desc: 'Crafting engaging and functional websites tailored to your needs.',
        url: "website-development",
        icon: <RxDesktop size={32} className='mt-1.5 text-white' />
    },
    {
        id: 2,
        img: "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Untitled_design_-_5.png?v=1712943856",
        service: 'Digital Marketing',
        desc: 'Boost your online presence and reach your target audience effectively.',
        url: "digital-marketing",
        icon: <FaMedapps size={32} className='mt-1.5 text-white' />
    },
    {
        id: 3,
        img: "https://res.cloudinary.com/dezi0bct4/image/upload/v1712528678/Rectangle_1037-3_pqe0us.png",
        service: 'Remote Help Desk',
        desc: 'Instant support and solutions for your IT issues, no matter where you are.',
        url: "desk-support",
        icon: <FaHandsHelping size={32} className='mt-1.5 text-white' />
    },
    {
        id: 4,
        img: "https://res.cloudinary.com/dezi0bct4/image/upload/v1712529026/Rectangle_1037y_oxch8m.png",
        service: 'IT System Management',
        desc: 'Streamline your IT infrastructure for seamless operations.',
        url: "itsm",
        icon: <CgSoftwareUpload size={32} className='mt-1.5 text-white' />
    },
    {
        id: 5,
        img: "https://res.cloudinary.com/dezi0bct4/image/upload/v1712528699/Rectangle_1037-7_lwtchz.png",
        service: 'IT Strategy & Consulting',
        desc: 'Strategic guidance to align technology with your business goals.',
        url: "IT-consulting",
        icon: <MdPeopleAlt size={32} className='mt-1.5 text-white' />
    },
    {
        id: 6,
        img: "https://res.cloudinary.com/dezi0bct4/image/upload/v1712528691/Rectangle_1037-6_cmdwlu.png",
        service: 'Security Management',
        desc: 'Protect your data and systems with robust security measures.',
        url: "security",
        icon: <MdSecurity size={32} className='mt-1.5 text-white' />
    },
    {
        id: 7,
        img: "https://res.cloudinary.com/dezi0bct4/image/upload/v1712528705/Rectangle_1037-9_qszcjl.png",
        service: 'Cloud Solution',
        desc: 'Harness the power of cloud technology for scalable and efficient operations.',
        url: "services",
        icon: <FaCloud size={32} className='mt-1.5 text-white' />
    },
    {
        id: 8,
        img: "https://res.cloudinary.com/dezi0bct4/image/upload/v1712528710/Rectangle_1037gg_w0qlpg.png",
        service: 'Infrastructure Management',
        desc: 'Optimize your IT infrastructure for enhanced performance.',
        url: "infrastructure",
        icon: <PiTreeStructureLight size={32} className='mt-1.5 text-white' />
    },
    {
        id: 9,
        img: "https://res.cloudinary.com/dezi0bct4/image/upload/v1712528682/Rectangle_1037-4_mcueei.png",
        service: 'Backup & Recovery',
        desc: 'Ensure data safety and quick recovery in case of emergencies.',
        url: "backup-and-recovery",
        icon: <LuDatabaseBackup size={32} className='mt-1.5 text-white' />
    },
    {
        id: 10,
        img: "https://res.cloudinary.com/dezi0bct4/image/upload/v1712528688/Rectangle_1037-5_apokfo.png",
        service: 'Patch Management',
        desc: 'Stay up to date and secure with timely software updates.',
        url: "patch-management",
        icon: <BsPatchExclamation size={32} className='mt-1.5 text-white' />
    },
    {
        id: 11,
        img: "https://res.cloudinary.com/dezi0bct4/image/upload/v1712528670/Rectangle_1037-1_igttm2.png",
        service: 'Remote Monitoring',
        desc: 'Monitor your systems remotely for proactive maintenance and issue resolution.',
        url: "remote-monitoring",
        icon: <VscRemoteExplorer size={32} className='mt-1.5 text-white' />
    },
]

export default data;