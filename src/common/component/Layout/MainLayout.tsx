import { Breadcrumb, Layout, Menu } from "antd"
import { Content, Header } from "antd/es/layout/layout"
import Sider from "antd/es/layout/Sider"
import { HTMLAttributes } from "react";
import { menuList } from "../../../lib"

interface MainLayoutProps extends HTMLAttributes<HTMLDivElement> {
    crumbs?: string[];
}
export const MainLayout = ({ children, crumbs, ...props }: MainLayoutProps) => {
    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
            
            </Header>
            <Layout>
                <Sider width={200} style={{ background: 'brown' }}>
                    <Menu
                        items={menuList.common}
                        mode="vertical"
                    />
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: 'white',
                        }}
                    >
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}