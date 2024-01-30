import { URL } from "url"

export interface ButtonProps {
    text: string
    image: boolean
    pauseForRef?: boolean
    link: URL | ""
}