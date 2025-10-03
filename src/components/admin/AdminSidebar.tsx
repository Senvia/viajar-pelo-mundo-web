import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  PlusCircle,
  FileText,
  FolderOpen,
  Megaphone,
  Mail,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    title: "Visão Geral",
    url: "/admin/dashboard",
    icon: LayoutDashboard,
  },
];

const packageItems = [
  {
    title: "Lista de Pacotes",
    url: "/admin/pacotes",
    icon: Package,
  },
  {
    title: "Criar Novo Pacote",
    url: "/admin/criar-pacote",
    icon: PlusCircle,
  },
];

const blogItems = [
  {
    title: "Posts",
    url: "/admin/blog/posts",
    icon: FileText,
  },
  {
    title: "Categorias",
    url: "/admin/blog/categorias",
    icon: FolderOpen,
  },
  {
    title: "Anúncios",
    url: "/admin/blog/anuncios",
    icon: Megaphone,
  },
  {
    title: "Newsletter",
    url: "/admin/blog/newsletter",
    icon: Mail,
  },
];

export function AdminSidebar() {
  const { state } = useSidebar();

  const getNavClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "bg-primary/10 text-primary font-medium"
      : "hover:bg-muted/50";

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        {/* Main Menu */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavClass}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Packages Section */}
        <SidebarGroup>
          <SidebarGroupLabel>Pacotes de Viagem</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {packageItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavClass}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Blog Section */}
        <SidebarGroup>
          <SidebarGroupLabel>Blog</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {blogItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavClass}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
