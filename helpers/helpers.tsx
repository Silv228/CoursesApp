import { MenuItemSidebar } from "@/interfaces/menu.interface";
import { TopLevelCategory } from "@/interfaces/page.interface";
import CourseIcon from "./icons/courses.svg"
import ServicesIcon from "./icons/services.svg"
import BooksIcon from "./icons/books.svg"
import ProductsIcon from "./icons/products.svg"

export const firstLevelMenu: MenuItemSidebar[] = [
    { name: 'Курсы', route: 'courses', icon: <CourseIcon />, id: TopLevelCategory.Courses },
    { name: 'Сервисы', route: 'services', icon: <ServicesIcon />, id: TopLevelCategory.Services },
    { name: 'Книги', route: 'books', icon: <BooksIcon />, id: TopLevelCategory.Books },
    { name: 'Товары', route: 'products', icon: <ProductsIcon />, id: TopLevelCategory.Products },
]
export const priceRu = (price: number): string => (price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '))

export const declination = (count: number): string => {
    const endWordArray = ["вов", "в", "ва", "ва", "ва", "вов"]
    return `отзы${endWordArray[(count % 10) <= 5 ? (count % 10) : 5 ] }`
}