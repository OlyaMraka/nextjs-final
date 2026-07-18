'use client';

import { FC, useState } from "react";
import { Input, InputGroup, InputGroupText } from "reactstrap";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import "./searchbar.css";

const SearchBar: FC = () => {
    const [keyWord, setKeyWord] = useState("");

    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const handleSearchClick = () => {
        const params = new URLSearchParams(searchParams.toString());

        params.set("query", keyWord);
        params.delete("genres");

        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="searchbar-block">
            <InputGroup>
                <Input
                    value={keyWord}
                    placeholder="Enter key word"
                    onChange={(e) => setKeyWord(e.target.value)}
                />

                <InputGroupText onClick={handleSearchClick}>
                    Search
                </InputGroupText>
            </InputGroup>
        </div>
    );
};

export default SearchBar;
