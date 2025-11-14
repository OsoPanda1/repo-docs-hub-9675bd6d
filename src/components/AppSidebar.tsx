import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Brain, Shield, Wallet, ShoppingBag, Box, Users, GraduationCap, Music,
  Home, FileText, BookOpen, Code, Database, Network, Cpu, Sparkles,
  MessageSquare, Blocks, Lock, Globe, Zap, TrendingUp, Settings
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
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

const mainItems = [
  { title: "Inicio", url: "/", icon: Home },
  { title: "Dashboard", url: "/dashboard", icon: TrendingUp },
];

const platformItems = [
  { title: "Isabella AI", url: "/isabella", icon: Brain },
  { title: "DreamSpaces XR", url: "/dreamspaces", icon: Box },
  { title: "TAMV Economy", url: "/economy", icon: Wallet },
  { title: "Marketplace", url: "/marketplace", icon: ShoppingBag },
  { title: "ANUBIS Security", url: "/anubis", icon: Shield },
  { title: "Hybrid DAO", url: "/dao", icon: Users },
  { title: "Universidad TAMV", url: "/university", icon: GraduationCap },
  { title: "KAOS Music", url: "/kaos", icon: Music },
];

const docsItems = [
  { title: "Inicio Docs", url: "/docs", icon: BookOpen },
  { title: "Quickstart", url: "/docs/quickstart", icon: Zap },
  { title: "Arquitectura", url: "/docs/architecture", icon: Cpu },
  { title: "Infraestructura", url: "/docs/infrastructure", icon: Database },
  { title: "Red & Protocolos", url: "/docs/network", icon: Network },
  { title: "Configuración", url: "/docs/config", icon: Settings },
];

const modulesItems = [
  { title: "Isabella AI NextGen", url: "/docs/isabella-ai", icon: Brain },
  { title: "ANUBIS Dekateotl", url: "/docs/dekateotl", icon: Shield },
  { title: "DreamSpaces XR", url: "/docs/dreamspaces", icon: Box },
  { title: "ID-NVIDA™", url: "/docs/idnvida", icon: Lock },
  { title: "Knowledge Cells", url: "/docs/knowledge-cells", icon: Blocks },
  { title: "Korima Codex", url: "/docs/korima", icon: Code },
  { title: "Quantum Sentinel", url: "/docs/quantum-sentinel", icon: Sparkles },
  { title: "TAMV Titans", url: "/docs/titans", icon: Users },
];

const philosophyItems = [
  { title: "Manifiesto", url: "/docs/manifest", icon: FileText },
  { title: "Dignidad Digital", url: "/docs/digital-dignity", icon: Globe },
  { title: "Historia del Fundador", url: "/docs/founder-story", icon: MessageSquare },
  { title: "Web 4.5", url: "/docs/web45", icon: Network },
];

const technicalItems = [
  { title: "Base de Datos", url: "/docs/database", icon: Database },
  { title: "API Reference", url: "/docs/api", icon: Code },
  { title: "Endpoints", url: "/docs/api-endpoints", icon: Zap },
  { title: "Modelos", url: "/docs/models", icon: Cpu },
  { title: "Componentes", url: "/docs/components", icon: Blocks },
];

const guidesItems = [
  { title: "Guía de Roles", url: "/docs/roles-guide", icon: Users },
  { title: "Creatividad", url: "/docs/creativity", icon: Sparkles },
  { title: "Ejemplos", url: "/docs/examples", icon: Code },
  { title: "Glosario", url: "/docs/glossary", icon: BookOpen },
  { title: "Roadmap", url: "/docs/implementation-roadmap", icon: TrendingUp },
  { title: "Estado del Proyecto", url: "/docs/project-status", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar
      className={collapsed ? "w-16" : "w-72"}
      collapsible="icon"
    >
      <SidebarContent className="overflow-y-auto">
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel>Navegación Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)}>
                    <a href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Platform Modules */}
        <SidebarGroup>
          <SidebarGroupLabel>Plataforma TAMV</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {platformItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)}>
                    <a href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Documentation with Accordion */}
        {!collapsed && (
          <SidebarGroup>
            <SidebarGroupLabel>Documentación</SidebarGroupLabel>
            <SidebarGroupContent>
              <Accordion type="multiple" className="w-full">
                <AccordionItem value="docs-base" className="border-0">
                  <AccordionTrigger className="px-2 py-2 text-sm hover:bg-accent">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      <span>Documentación Base</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <SidebarMenu>
                      {docsItems.map((item) => (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton asChild isActive={isActive(item.url)} className="pl-6">
                            <a href={item.url}>
                              <item.icon className="h-3 w-3" />
                              <span className="text-xs">{item.title}</span>
                            </a>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="modules" className="border-0">
                  <AccordionTrigger className="px-2 py-2 text-sm hover:bg-accent">
                    <div className="flex items-center gap-2">
                      <Blocks className="h-4 w-4" />
                      <span>Módulos Core</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <SidebarMenu>
                      {modulesItems.map((item) => (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton asChild isActive={isActive(item.url)} className="pl-6">
                            <a href={item.url}>
                              <item.icon className="h-3 w-3" />
                              <span className="text-xs">{item.title}</span>
                            </a>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="philosophy" className="border-0">
                  <AccordionTrigger className="px-2 py-2 text-sm hover:bg-accent">
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      <span>Filosofía & Visión</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <SidebarMenu>
                      {philosophyItems.map((item) => (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton asChild isActive={isActive(item.url)} className="pl-6">
                            <a href={item.url}>
                              <item.icon className="h-3 w-3" />
                              <span className="text-xs">{item.title}</span>
                            </a>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="technical" className="border-0">
                  <AccordionTrigger className="px-2 py-2 text-sm hover:bg-accent">
                    <div className="flex items-center gap-2">
                      <Code className="h-4 w-4" />
                      <span>Referencia Técnica</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <SidebarMenu>
                      {technicalItems.map((item) => (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton asChild isActive={isActive(item.url)} className="pl-6">
                            <a href={item.url}>
                              <item.icon className="h-3 w-3" />
                              <span className="text-xs">{item.title}</span>
                            </a>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="guides" className="border-0">
                  <AccordionTrigger className="px-2 py-2 text-sm hover:bg-accent">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4" />
                      <span>Guías & Recursos</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <SidebarMenu>
                      {guidesItems.map((item) => (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton asChild isActive={isActive(item.url)} className="pl-6">
                            <a href={item.url}>
                              <item.icon className="h-3 w-3" />
                              <span className="text-xs">{item.title}</span>
                            </a>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
    </Sidebar>
  );
}
