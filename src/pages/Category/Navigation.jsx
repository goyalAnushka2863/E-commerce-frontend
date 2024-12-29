import React, { useState, useEffect } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AiOutlineCheck } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
const Navigation = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState({});

    const toggleDropdown = (key) => {
        setActiveDropdown((prev) => (prev === key ? null : key));
    };

    const closeDropdown = () => {
        setActiveDropdown(null);
    };
    const selectOption = (dropdownKey, option) => {
        setSelectedOptions((prev) => ({
            ...prev,
            [dropdownKey]: option,
        }));
    };
    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest("#dropdownMenuContainer")) {
                closeDropdown();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const dropdownData = [
        {
            key: 0,
            label: "Color",
            options: ["Red", "Blue", "Green", "Black"],
        },
        {
            key: 1,
            label: "Category",
            options: ["Treatments", "Moisturizers", "Featured"],
        },
        {
            key: 2,
            label: "Price Range",
            options: ["$0 - $10", "$10 - $50", "$50+"],
        },
        {
            key: 3,
            label: "Sort By",
            options: ["Category 1", "Category 2", "Category 3"],
        },
    ];
    const crossdata = ['$0-$10', 'SkinCare', 'Green']
    return (
        <>
            <div className='flex items-center mx-36 mt-16 text-xl gap-5'>
                <span>Home Page</span>
                <span>&gt;</span>
                <span>Navigation</span>
                <span>&gt;</span>
                <span>Eye Care</span>
            </div>
            <div className="flex flex-col mx-36 mt-12 justify-center">
                <span className='heading'>- Eye Care Products</span>
                <span className="text-[40px] font-semibold">Explore the Eye Care Products</span>
                <div id="dropdownMenuContainer" className={`flex justify-between w-full mt-12 gap-5`}>
                    {dropdownData.map((dropdown) => (
                        <div key={dropdown.key} className={`flex flex-col relative w-64  ${activeDropdown === dropdown.key ? "rounded-3xl border" : ""}`}>
                            <button
                                className={`flex justify-between items-center rounded-3xl text-lg py-3 px-5 font-medium border border-gray-300 shadow-md ${activeDropdown === dropdown.key ? "bg-white border-none rounded-b-none" : ""}`}
                                onClick={() => toggleDropdown(dropdown.key)}
                            >
                                <span>{dropdown.label}</span>
                                <span>
                                    {activeDropdown === dropdown.key ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                </span>
                            </button>
                            {activeDropdown === dropdown.key && (
                                <div
                                    id="dropdownMenu"
                                    className={`absolute top-full left-0  w-full py-3 px-5 bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-10  ${activeDropdown === dropdown.key ? "rounded-b-3xl" : ""}`}
                                >
                                    {dropdown.options.map((option, index) => (
                                        <a
                                            key={index}
                                            href="#"
                                            className="flex justify-between px-4 py-2 text-sm text-gray-700  hover:text-gray-400"
                                            onClick={() => selectOption(dropdown.key, option)}
                                        >
                                            <span>{option}</span>
                                            {selectedOptions[dropdown.key] === option && (
                                                <AiOutlineCheck className="text-green-500" />
                                            )}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-lg flex gap-10 font-medium">
                    {crossdata.map((_, i)=>(
                        <button className="py-3 px-5 flex items-center shadow-md bg-gray-100 w-fit rounded-full gap-10">
                        <span>{crossdata[i]}</span>
                        <RxCross2 />
                    </button>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Navigation;
