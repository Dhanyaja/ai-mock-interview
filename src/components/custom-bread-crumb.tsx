import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Home } from "lucide-react";
import React from "react";

interface CustomBreadCrumbProps {
    breadCrumbPage: string;
    breadCrumbItems: { link: string; label: string }[];
}

const CustomBreadCrumb = ({ breadCrumbPage, breadCrumbItems }: CustomBreadCrumbProps) => {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink
                        href='/'
                        className="flex items-center justify-center hover:text-emerald-500"
                        onMouseEnter={e => (e.currentTarget.style.color = 'rgb(16 185 129)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'black')}
                        style={{ color: "black" }}
                    >
                        <Home className="w-4 h-4 mr-2" />
                        Home
                    </BreadcrumbLink>
                </BreadcrumbItem>

                {breadCrumbItems &&
                    breadCrumbItems.map((item, i) => (
                        <React.Fragment key={i}>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink
                                    href={item.link}
                                    className="hover:text-emerald-500"
                                    onMouseEnter={e => (e.currentTarget.style.color = 'rgb(16 185 129)')}
                                    onMouseLeave={e => (e.currentTarget.style.color = 'black')}
                                    style={{ color: "black" }}
                                >
                                    {item.label}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </React.Fragment>
                    ))}
                <BreadcrumbItem />
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage 
                        onMouseEnter={e => (e.currentTarget.style.color = 'rgb(16 185 129)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'black')}
                        style={{ color: "black", fontWeight: "500" }}>
                        {breadCrumbPage}
                    </BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}

export default CustomBreadCrumb
