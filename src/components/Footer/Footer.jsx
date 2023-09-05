export default function Footer() {
    console.log("Footer is being rendered");

    return (
        <div className="bg-black relative h-[100px] flex flex-col justify-center items-center text-center text-white bottom-0 px-20 mt-60 z-50">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Left Box */}
                <div className="">
                    {/* <h2 className="mb-4 font-bold">Left Box Title</h2> */}
                    <p>2023 - Brand</p>
                </div>

                {/* Right Box */}
                <div className="">
                    {/* <h2 className="mb-4 font-bold">Right Box Title</h2> */}
                    <p>PandaTheProgrammer</p>
                </div>
            </div>
        </div>
    )
}
