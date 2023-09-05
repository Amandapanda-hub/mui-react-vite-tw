import { useState } from 'react';

export default function Options() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const options = [
        { name: 'Option A', data: 'This is the content for Option A' },
        { name: 'Option B', data: 'Heres some information about Option B' },
        { name: 'Option C', data: 'Details regarding Option C can be found here' },
        { name: 'Option D', data: 'Option D is described in this section' }
    ];

    return (
        // Outer container with full width
        <div className="bg-white w-full flex items-center justify-center h-screen">
            {/* Inner container with constrained width */}
            <div className="p-8 text-black space-y-10 mx-auto w-3/4">
                <h1 className="text-6xl md:text-8xl uppercase mb-20">Options Title</h1>
                {options.map((option, index) => (
                    <div key={index} className="mb-4 relative border-t border-b border-black">
                        <h2
                            className="p-4 cursor-pointer flex justify-between font-bold text-3xl"
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            {option.name}
                            <span className="text-lg">
                                {openIndex === index ? '-' : '+'}
                            </span>
                        </h2>
                        {openIndex === index && (
                            <div className="p-4">
                                <p className=''>{option.data}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
