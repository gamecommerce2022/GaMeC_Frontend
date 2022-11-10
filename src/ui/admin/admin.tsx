import React from "react"
import { Route, Routes } from "react-router-dom"
import { NotFoundPage } from "../page"
import { SidebarComponent } from "./component/side_navigator"
import { ProductEdit } from "./product/product_edit"
import { ProductTable } from "./product/product_table"



export const AdminPage = () => {
    return (
        <div className="flex flex-row overflow-y-hidden h-screen">

            <SidebarComponent />


            <div className="flex-1 mx-10">
                <Routes>
                    <Route key="admin-dashboard-page" path="/" element={<div>Dashboard</div>} />
                    <Route key="admin-product-page" path="products" element={<ProductTable />} />
                    <Route key="admin-product-edit-page" path="products/:productId" element={<ProductEdit />} />
                    <Route key="admin-news-page" path="news" element={<div></div>} />
                    <Route key="admin-news-edit-page" path="news/:newsId" element={<div></div>} />
                    <Route key="admin-account-page" path="accounts" element={<div></div>} />
                    <Route key="admin-info-page" path="info" element={<div></div>} />
                    <Route key="admin-cart-page" path="carts" element={<div></div>} />
                    <Route key="admin-not-found-page" path="*" element={<NotFoundPage />} />
                </Routes>
            </div>

        </div>


    )
}