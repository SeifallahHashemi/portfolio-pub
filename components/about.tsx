'use client';
import React, {useEffect} from 'react';
import SectionHeader from "@/components/section-header";
import {useInView} from "react-intersection-observer";
import {useActiveSection} from "@/hooks/useActiveSection";
import useInview from "@/hooks/useInview";

const About = () => {
    const {ref} = useInview("about", 1);
    /*const {ref, inView} = useInView({
        threshold: 0.75,
    });
    const { setActiveSection, timeOfLastClick } = useActiveSection();
    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection('about')
        }
    }, [inView, setActiveSection, timeOfLastClick]);*/
    return (
        <section ref={ref} className={"mb-28 max-w-[45rem] text-justify leading-8 sm:mb-40 scroll-mt-24"} id={"about"}>
            <SectionHeader>درباره من</SectionHeader>
            <p className="mb-3 font-iranSansDn">
                پس از فارغ التحصیلی در رشته{" "}
                <span className="font-bold"> مهندسی پزشکی</span>، تصمیم گرفتم به دنبال علاقه ام به برنامه نویسی بروم. من در یک بوت کمپ برنامه نویسی ثبت نام کردم و{" "}
                <span className="font-bold">توسعه وب فرانت اند </span>رو یاد گرفتم.{" "}
                <span className="italic">بخش مورد علاقه من در برنامه نویسی </span>
                جنبه حل مسئله است. من احساس لذتی که پس از حل مسئله پیدا میکنم رو <span className="underline">دوست دارم.</span> تخصص اصلی من
                <span className="font-bold font-sans">
                    {" "}React, Next.js, MongoDB{" "}
                </span>
                هست. من همچنین با typescript و prisma و framer-motion و... آشنا هستم. من همیشه دنبال یادگیری
                تکنولوژی های جدید هستم. من در حال حاضر به دنبال یک موقعیت شغلی{" "}
                <span className="font-bold"> تمام وقت </span> به عنوان توسعه دهنده Next.js هستم.
            </p>

            <p className={"font-iranSansDn"}>
                <span className="italic">من در اوقات فراغت </span>پلی استیشن بازی میکنم، فوتبال یا سریال تماشا میکنم، فوتسال بازی میکنم. من همچنین {" "}
                <span className="font-bold">در شبکه های اجتماعی</span> فعالیت میکنم. درحال حاظر من
                به دنبال یادگیری کار با{" "}
                <span className="font-bold">هوش مصنوعی chatGPT</span> هستم. علاوه بر اینها
                دنبال یادگیری after-effect , premier نیز هستم.
            </p>
        </section>
    );
};

export default About;