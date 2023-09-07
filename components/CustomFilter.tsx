'use client'
import { useState, Fragment, useContext, useEffect } from "react"
import Image from "next/image"
import { Listbox, Transition } from "@headlessui/react"
import { CustomFilterProps, OptionProps } from "@/types"
import { FilterContext } from "@/contexts"


export default function CustomFilter({title, options}: CustomFilterProps) {
    const [selected, setSelected] = useState<OptionProps>(options[0])
    const { filter, updateFilter } = useContext(FilterContext)

    useEffect(() => {
        if(selected.value) {
            if(selected.value[0] === '2') {
                updateFilter({...filter, year: parseInt(selected.value)})
            } else {
                updateFilter({...filter, fuel: selected.value})
            }
        }
    }, [selected.value])


    return (
        <>
            <div className="w-fit">
                <Listbox
                    value={selected}
                    onChange={(e) => {
                        setSelected(e)
                    }}    
                >
                    <div className="relative w-fit z-10">
                        <Listbox.Button className="custom-filter__btn">
                            <span className="block truncate">{selected.title}</span>
                            <Image 
                                src="/chevron-up-down.svg"
                                width={20}
                                height={20}
                                alt="chevron"
                                className="ml-4 object-contain"
                            />
                        </Listbox.Button>

                        <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="custom-filter__options">
                                {options.map((option, index) => (
                                    <Listbox.Option 
                                        key={index} 
                                        value={option} 
                                        className={({ active }) => `relative cursor-default select-none py-2 px-4 ${
                                            active ? "bg-primary-blue text-white" : "text-gray-900"
                                        }`}
                                    >
                                        {({ selected }) => (
                                            <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                                {option.title}
                                            </span>
                                        )}
                                        
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>

                        </Transition>
                    </div>
                </Listbox>

            </div>
        </>
    )
}