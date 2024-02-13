"use client";

import { manufacturers } from '@/constants';
import { SearchManufactureProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image';
import React, { Fragment, useState } from 'react'

const SearchManufacturer = ({manuFacture, setManufacture} : SearchManufactureProps) => {
    const [query,setQuery] = useState('');

    const filterManuFacture = query === "" ? manufacturers : manufacturers.filter(item => (
        item.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, '')
        
    )))
  return (
    <div className='search-manufacturer'>
        <Combobox>
            <div className='relative w-full'>
             <Combobox.Button className="absolute top-[14px]">
             <Image src="/car-logo.svg" width={20} height={20} alt='car logo' ></Image>
             </Combobox.Button>
             <Combobox.Input className="search-manufacturer__input"
             placeholder='Volkswagen'
             displayValue={(manuFacture : string) => manuFacture}
             onChange={(e) => setQuery(e.target.value)}
             >
              <Transition as={Fragment}
               leave='transition ease-in duration-100'
               leaveFrom='opacity-100'
               leaveTo='opacity-0'
               afterLeave={() => setQuery("")}
              >
                <Combobox.Options>
                    {filterManuFacture.length === 0 && query !== "" && (
                        <Combobox.Option
                        value={query}
                        className="search-menufacturer__option"
                        >
                         create "{query}"
                        </Combobox.Option>

                    )}
                </Combobox.Options>

              </Transition>
             </Combobox.Input>
            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer