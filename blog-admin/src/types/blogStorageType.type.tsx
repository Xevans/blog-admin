import { BlogHeader, BlogSection } from "../components/blog-form/blog-form.component"

export type BlogStorageType = {
    "header": BlogHeader,
    "content": BlogSection[]
}