import React, { KeyboardEvent, useState } from "react";
import cn from 'classnames'
import style from './Search.module.css'
import { SearchProps } from "./Search.props";
import { Input } from "../Input/Input";
import Button from "../Button/Button";
import GlassIcon from "./glass.svg"
import { useRouter } from "next/router";

const Search = ({ className, ...props }: SearchProps): JSX.Element => {
    const [search, setSearch] = useState<string>('')
    const router = useRouter()

    const goToSearch = (): void => {
        router.push({
            pathname: '/search',
            query: {
                q: search
            }
        })
    }

    const handleKeyDown = (e: KeyboardEvent): void => {
        if (e.key === 'Enter') {
            goToSearch()
        }
    }
    return (
        <form className={cn(className, style.search)} {...props}>
            <Input placeholder="Поиск..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e)}
            />
            <Button aria-label="поиск по сайту" className={cn(style.button)}
                onClick={goToSearch}
            >
                <GlassIcon />
            </Button>
        </form>
    )
}

export default Search