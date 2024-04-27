import React from 'react'
import ScrollToTop from 'react-scroll-up'
import { useDevice } from '../../hook/useDevice';
import { Link } from "react-router-dom";
const ScrollUp = () => {
    const { isMobile } = useDevice()

    return (
        <div className=' relative'>
            {/* <ScrollToTop showUnder={20} >
                <div className={isMobile ? "bg-[#3980F1] mt-3 w-[40px] h-[40px] rounded-full flex justify-center items-center border-black hover:scale-125 transition duration-100" : "bg-[#3980F1] mt-3 w-[50px] h-[50px] rounded-full flex justify-center items-center border-black hover:scale-125 transition duration-100"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 15 15"><path fill="white" fill-rule="evenodd" d="M11.146 6.854a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 3.207zm0 6a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 .708.708L7.5 9.207z" clip-rule="evenodd" /></svg>
                </div>
            </ScrollToTop> */}
            <div className={isMobile ? "fixed bottom-12 left-[88%] cursor-pointer z-50" : "fixed bottom-[110px] left-[92%] lg:left-[92.7%] xl:left-[95.7%] cursor-pointer z-50"}>
                <div className={isMobile ? "bg-[#3980F1] mt-3 w-[40px] h-[40px] rounded-full flex justify-center items-center border-black hover:scale-125 transition duration-100" : "bg-[#3980F1] mt-3 w-[50px] h-[50px] rounded-full flex justify-center items-center border-black hover:scale-125 transition duration-100"}>
                    <Link to='https://www.facebook.com/profile.php?id=61557290282733' target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24"><path fill="white" d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396z" /></svg>
                    </Link>
                </div>
                <div className={isMobile ? "bg-[#3980F1] mt-3 w-[40px] h-[40px] rounded-full flex justify-center items-center border-black hover:scale-125 transition duration-100" : "bg-[#3980F1] mt-3 w-[50px] h-[50px] rounded-full flex justify-center items-center border-black hover:scale-125 transition duration-100"}>
                    <Link href='' target='_blank' rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24"><path fill="white" d="M12.49 10.272v-.45h1.347v6.322h-.77a.576.576 0 0 1-.577-.573v.001a3.273 3.273 0 0 1-1.938.632a3.284 3.284 0 0 1-3.284-3.282a3.284 3.284 0 0 1 3.284-3.282a3.273 3.273 0 0 1 1.937.632zM6.919 7.79v.205c0 .382-.051.694-.3 1.06l-.03.034a7.714 7.714 0 0 0-.242.285L2.024 14.8h4.895v.768a.576.576 0 0 1-.577.576H0v-.362c0-.443.11-.641.25-.847L4.858 9.23H.192V7.79zm8.551 8.354a.48.48 0 0 1-.48-.48V7.79h1.441v8.354zM20.693 9.6a3.306 3.306 0 1 1 .002 6.612a3.306 3.306 0 0 1-.002-6.612m-10.14 5.253a1.932 1.932 0 1 0 0-3.863a1.932 1.932 0 0 0 0 3.863m10.14-.003a1.945 1.945 0 1 0 0-3.89a1.945 1.945 0 0 0 0 3.89" /></svg>
                    </Link>
                </div>
                <div className={isMobile ? "bg-[#3980F1] mt-3 w-[40px] h-[40px] rounded-full flex justify-center items-center border-black hover:scale-125 transition duration-100" : "bg-[#3980F1] mt-3 w-[50px] h-[50px] rounded-full flex justify-center items-center border-black hover:scale-125 transition duration-100"}>
                    <Link href='tel:190063960' target='_blank' rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24"><path fill="white" d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48" /></svg>
                    </Link>
                </div>
                <div className={isMobile ? "bg-[#3980F1] mt-3 w-[40px] h-[40px] rounded-full flex justify-center items-center border-black hover:scale-125 transition duration-100" : "bg-[#3980F1] mt-3 w-[50px] h-[50px] rounded-full flex justify-center items-center border-black hover:scale-125 transition duration-100"}>
                    <Link href='tel:190063960' target='_blank' rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24"><g fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="64" stroke-dashoffset="64" d="M8 3C8.5 3 10.5 7.5 10.5 8C10.5 9 9 10 8.5 11C8 12 9 13 10 14C10.3943 14.3943 12 16 13 15.5C14 15 15 13.5 16 13.5C16.5 13.5 21 15.5 21 16C21 18 19.5 19.5 18 20C16.5 20.5 15.5 20.5 13.5 20C11.5 19.5 10 19 7.5 16.5C5 14 4.5 12.5 4 10.5C3.5 8.5 3.5 7.5 4 6C4.5 4.5 6 3 8 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0" /><animateTransform attributeName="transform" begin="0.6s;lineMdPhoneCallLoop0.begin+2.6s" dur="0.5s" type="rotate" values="0 12 12;15 12 12;0 12 12;-12 12 12;0 12 12;12 12 12;0 12 12;-15 12 12;0 12 12" /></path><path stroke-dasharray="4" stroke-dashoffset="4" d="M14 7.04404C14.6608 7.34734 15.2571 7.76718 15.7624 8.27723M16.956 10C16.6606 9.35636 16.2546 8.77401 15.7624 8.27723" opacity="0"><set id="lineMdPhoneCallLoop0" attributeName="opacity" begin="0.7s;lineMdPhoneCallLoop0.begin+2.7s" to="1" /><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s;lineMdPhoneCallLoop0.begin+2.7s" dur="0.2s" values="4;8" /><animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s;lineMdPhoneCallLoop0.begin+3.3s" dur="0.3s" values="0;4" /><set attributeName="opacity" begin="1.6s;lineMdPhoneCallLoop0.begin+3.6s" to="0" /></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M20.748 9C20.3874 7.59926 19.6571 6.347 18.6672 5.3535M15 3.25203C16.4105 3.61507 17.6704 4.3531 18.6672 5.3535" opacity="0"><set attributeName="opacity" begin="1s;lineMdPhoneCallLoop0.begin+3s" to="1" /><animate fill="freeze" attributeName="stroke-dashoffset" begin="1s;lineMdPhoneCallLoop0.begin+3s" dur="0.2s" values="10;20" /><animate fill="freeze" attributeName="stroke-dashoffset" begin="1.5s;lineMdPhoneCallLoop0.begin+3.5s" dur="0.3s" values="0;10" /><set attributeName="opacity" begin="1.8s;lineMdPhoneCallLoop0.begin+3.8s" to="0" /></path></g></svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ScrollUp
