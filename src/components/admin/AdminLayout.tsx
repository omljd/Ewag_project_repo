import { ReactNode, useEffect, useState } from "react";
import { Navigate, Link, useLocation, useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import { useAuth } from "@/hooks/use-auth";
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  LogOut, 
  Menu, 
  Bell,
  Search,
  ChevronRight,
  MessageSquare,
  BarChart3,
  Layers,
  CheckCircle2
} from "lucide-react";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface AdminLayoutProps {
  children: ReactNode;
}

export const AdminLayout = ({ children }: AdminLayoutProps) => {
  const { user, logout, isLoading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [hasNewNotif, setHasNewNotif] = useState(false);
  const [notifications, setNotifications] = useState<any[]>([]);

  useEffect(() => {
    // Fetch initial leads for notifications dropdown
    fetch('http://localhost:5000/api/consultations')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          const loadedNotifs = data.slice(0, 6).map((item: any) => ({
            title: "New Inquiry",
            desc: `${item.name} sent a message.`,
            time: new Date(item.created_at || Date.now()).toLocaleDateString(),
            icon: MessageSquare,
            color: "text-brand",
            bg: "bg-brand/10"
          }));
          setNotifications(loadedNotifs);
        }
      })
      .catch(err => console.error("Failed to load notifications", err));
  }, []);

  useEffect(() => {
    if (!user) return;
    const socket = io('http://localhost:5000');
    
    socket.on('new_lead', (lead) => {
      setHasNewNotif(true);
      const newNotif = {
        title: "New Inquiry",
        desc: `${lead.name} sent a message.`,
        time: "Just now",
        icon: MessageSquare,
        color: "text-brand",
        bg: "bg-brand/10"
      };
      setNotifications(prev => [newNotif, ...prev]);

      toast('🔔 New Inquiry Received!', {
        description: `${lead.name} is interested in ${lead.service || 'your services'}.`,
        action: {
          label: 'View',
          onClick: () => navigate('/admin/consultations')
        }
      });
    });

    return () => { socket.disconnect(); };
  }, [user, navigate]);

  if (isLoading) return <div className="min-h-screen flex items-center justify-center bg-paper">Loading...</div>;
  if (!user) return <Navigate to="/admin/login" replace />;

  const navItems = [
    { label: "Dashboard", icon: LayoutDashboard, path: "/admin/dashboard" },
    { label: "Customers", icon: MessageSquare, path: "/admin/consultations" },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FD] flex text-ink">
      {/* Sidebar */}
      <aside className="w-64 border-r border-ink/5 bg-paper flex flex-col sticky top-0 h-screen">
        <div className="p-6">
          <Link to="/" className="flex items-center gap-2 mb-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-paper font-display font-bold text-base">E</span>
            <span className="font-display text-lg font-bold tracking-tight">EWAG<span className="text-brand">.</span></span>
          </Link>
          <div className="text-[10px] font-bold uppercase tracking-widest text-ink/30 px-1">Admin Portal</div>
        </div>

        <nav className="flex-1 px-4 space-y-1 mt-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${
                  isActive 
                    ? "bg-brand text-paper shadow-brand font-semibold" 
                    : "text-ink/60 hover:bg-ink/5 hover:text-ink"
                }`}
              >
                <item.icon className={`h-4 w-4 ${isActive ? "text-paper" : "text-ink/40 group-hover:text-brand"}`} />
                <span className="text-sm">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-ink/5">
          <button
            onClick={() => {
              logout();
              navigate("/admin/login");
            }}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-ink/60 hover:bg-destructive/5 hover:text-destructive transition-all group"
          >
            <LogOut className="h-4 w-4 text-ink/40 group-hover:text-destructive" />
            <span className="text-sm">Log Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-20 bg-paper/80 backdrop-blur-md border-bottom border-ink/5 sticky top-0 z-20 px-8 flex items-center justify-between">
          <div className="relative w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-ink/30 group-focus-within:text-brand transition-colors" />
            <input 
              type="text" 
              placeholder="Search data, users, settings..." 
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  toast.info(`Searching for: ${e.currentTarget.value}`);
                }
              }}
              className="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-ink/5 border border-transparent focus:bg-paper focus:border-brand/20 focus:outline-none transition-all text-sm"
            />
          </div>

          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button 
                  onClick={() => setHasNewNotif(false)}
                  className="h-10 w-10 rounded-xl bg-ink/5 flex items-center justify-center hover:bg-ink/10 transition-colors relative"
                >
                  <Bell className="h-4 w-4 text-ink/60" />
                  {hasNewNotif && <span className="absolute top-2.5 right-2.5 h-1.5 w-1.5 rounded-full bg-brand ring-2 ring-paper" />}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80 bg-paper border-ink/5 rounded-2xl shadow-xl p-0 overflow-hidden">
                <div className="p-4 border-b border-ink/5 bg-ink/[0.02]">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-bold">Notifications</h3>
                    <button className="text-[10px] font-bold text-brand hover:underline" onClick={() => { setNotifications([]); toast.success("Notifications cleared"); }}>Mark all read</button>
                  </div>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.length === 0 ? (
                    <div className="p-8 text-center text-xs text-ink/40 font-medium">No new notifications</div>
                  ) : (
                    notifications.map((notif, i) => (
                    <div key={i} className="p-4 hover:bg-ink/[0.02] border-b border-ink/5 last:border-0 cursor-pointer group transition-colors">
                      <div className="flex gap-3">
                        <div className={`h-8 w-8 rounded-lg ${notif.bg} flex items-center justify-center ${notif.color}`}>
                          <notif.icon className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-bold text-ink group-hover:text-brand transition-colors">{notif.title}</div>
                          <div className="text-[10px] text-ink/40 line-clamp-1">{notif.desc}</div>
                          <div className="text-[9px] font-medium text-ink/20 mt-1">{notif.time}</div>
                        </div>
                      </div>
                    </div>
                  )))}
                </div>
                <div className="p-3 bg-ink/[0.01] text-center border-t border-ink/5">
                  <button className="text-[10px] font-bold text-ink/40 hover:text-ink transition-colors" onClick={() => navigate("/admin/consultations")}>View all activity</button>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="h-8 w-px bg-ink/10 mx-2" />
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-sm font-bold text-ink">{user.name}</div>
                <div className="text-[10px] font-bold text-brand uppercase tracking-wider">Super Admin</div>
              </div>
              <div className="h-10 w-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand font-bold">
                {user.name.charAt(0).toUpperCase()}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-8 flex-1">
          {children}
        </main>
      </div>
    </div>
  );
};
