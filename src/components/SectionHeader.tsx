

export const SectionHeader = ({ eyebrow, title, description }: {
    eyebrow: string,
    title: string,
    description: string
}) => {
    return (
    <>
            <div className="flex justify-center">
                <p className="uppercase font font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
                    {eyebrow}
                </p>
            </div>
            <h2 className="font-serif text-3xl mt-6 text-center">
                {title}  </h2>
            <p className="text-white/60 mt-4 max-w-md mx-auto text-center md:text-lg lg:text-xl">
                {description}  </p></>
    )
}
