'use client';

import type {FC} from "react";
import {Pagination, PaginationItem, PaginationLink} from "reactstrap";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import "./pagination.css";

const PaginationComponent: FC = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const params = new URLSearchParams(searchParams.toString());
    const currentPage = Number(params.get("page") || 1);

    const onNextClick = () => {
        const parsedPageValue = +currentPage + 1;
        params.set("page", parsedPageValue.toString());

        router.push(`${pathname}?${params.toString()}`);
    };

    const onPreviousClick = () => {
        const parsedPageValue = +currentPage - 1;
        params.set("page", parsedPageValue.toString());

        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="pagination-block">
            <Pagination>
                <PaginationItem>
                    <PaginationLink onClick={onPreviousClick} previous/>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        {currentPage}
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink onClick={onNextClick} next/>
                </PaginationItem>
            </Pagination>
        </div>
    );
};

export default PaginationComponent;
