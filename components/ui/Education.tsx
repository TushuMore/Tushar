import Link from "next/link";

export function Education() {
    return (
        <>
            <div className="w-full h-max pt-10">
                <h2 className="text-4xl text-purple font-bold text-center">Education</h2>

                {/* box 1 */}
                <div className='flex items-center flex-wrap justify-start w-full h-max bg-black-300 rounded-sm p-5 sm:p-3 mt-10'>
                    <span className='text-4xl sm:text-3xl xs:text-2xl'>◽</span>
                    <h1 className='text-purple font-bold text-2xl sm:text-xl xs:text-lg' >Primary Education : </h1>
                    <p className='px-5 sm:px-3 sm:text-[14px] xs:text-[12px]'>
                        Completed my primary education at <span className="bg-black-100 px-2 py-[2px] xs:px-1 xs:py-[1px]">Nutan Prathamic Vidya Mandir, Jamner</span>.
                    </p>
                </div>

                {/* box 2 */}
                <div className='flex items-center flex-wrap justify-start w-full h-max bg-black-300 rounded-sm p-5 sm:p-3 my-5 sm:my-2'>
                    <span className='text-4xl sm:text-3xl xs:text-2xl'>◽</span>
                    <h1 className='text-purple font-bold text-2xl sm:text-xl xs:text-lg' >Secondary Education : </h1>
                    <p className='px-5 sm:px-3 sm:text-[14px] xs:text-[12px]'>
                        Completed my secondary education at <span className="bg-black-100 px-2 py-[2px] xs:px-1 xs:py-[1px]">New English School, Jamner</span>.
                    </p>
                </div>

                {/* box 3 */}
                <div className='flex items-center flex-wrap justify-start w-full h-max bg-black-300 rounded-sm p-5 sm:p-3 '>
                    <span className='text-4xl sm:text-3xl xs:text-2xl'>◽</span>
                    <h1 className='text-purple font-bold text-2xl sm:text-xl xs:text-lg' >Graduation : </h1>
                    <p className='px-5 sm:px-3 sm:text-[14px] xs:text-[12px]'>
                    Pursuing BCA degree form <span className="bg-black-100 px-2 py-[2px] xs:px-1 xs:py-[1px]">GDM Arts,KRN Commerce and MD Science College, Jamner</span>.
                    </p>
                </div>
            </div>
        </>
    )
}