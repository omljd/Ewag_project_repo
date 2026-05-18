import { AdminLayout } from "@/components/admin/AdminLayout";
import { 
  TrendingUp, 
  Users, 
  MessageSquare, 
  Clock,
  ArrowUpRight,
  ChevronRight,
  MoreVertical,
  Layers,
  Mail,
  Phone,
  Globe,
  Briefcase
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const DashboardPage = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const [recentCustomers, setRecentCustomers] = useState<any[]>([]);
  const [statsData, setStatsData] = useState({
    total: 0,
    newLeads: 0,
    converted: 0
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/consultations");
        if (res.ok) {
          const data = await res.json();
          
          // Calculate Stats
          setStatsData({
            total: data.length,
            newLeads: data.filter((d: any) => d.status === 'New').length,
            converted: data.filter((d: any) => d.status === 'Completed').length
          });

          // Get top 4 recent customers
          const recent = data.slice(0, 4).map((item: any) => {
            const dt = new Date(item.created_at);
            return {
              ...item,
              time: dt.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
            };
          });
          setRecentCustomers(recent);
        }
      } catch (error) {
        console.error("Failed to load dashboard data", error);
      }
    };
    
    fetchDashboardData();
  }, []);

  const stats = [
    { label: "Total Customers", value: statsData.total.toString(), trend: "All Time", icon: MessageSquare, color: "text-brand", bg: "bg-brand/10", path: "/admin/consultations" },
    { label: "Recent Leads", value: statsData.newLeads.toString(), trend: "New", icon: Users, color: "text-blue-600", bg: "bg-blue-600/10", path: "/admin/consultations" },
    { label: "Converted", value: statsData.converted.toString(), trend: "Completed", icon: Layers, color: "text-emerald-600", bg: "bg-emerald-600/10", path: "/admin/consultations" },
    { label: "Avg Response", value: "1.4h", trend: "-15min", icon: Clock, color: "text-orange-600", bg: "bg-orange-600/10", path: "/admin/consultations" },
  ];

  const handleViewProfile = (customer: any) => {
    setSelectedCustomer(customer);
    setIsDetailOpen(true);
  };

  const handleContactClient = (customer: any) => {
    window.location.href = `mailto:${customer.email}?subject=Regarding your EWAG Inquiry`;
    toast.success(`Opening email for ${customer.name}`);
  };

  return (
    <AdminLayout>
      <div className="space-y-8 animate-fade-up">
        {/* Welcome Section */}
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-2xl font-display font-bold text-ink">Dashboard Overview</h1>
            <p className="text-ink/50 mt-1">Here's what's happening with EWAG today.</p>
          </div>
          <div className="text-sm font-bold text-ink/40">
            Last updated: <span className="text-ink">Just now</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Link key={stat.label} to={stat.path} className="bg-paper border border-ink/5 p-6 rounded-3xl shadow-sm hover:shadow-md transition-all group">
              <div className="flex justify-between items-start mb-4">
                <div className={`h-12 w-12 rounded-2xl ${stat.bg} flex items-center justify-center ${stat.color} transition-transform group-hover:scale-110`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-[10px] font-bold px-2 py-1 bg-ink/5 rounded-full text-ink/40 flex items-center gap-1">
                  {stat.trend} <ArrowUpRight className="h-2 w-2" />
                </div>
              </div>
              <div className="text-2xl font-display font-bold text-ink">{stat.value}</div>
              <div className="text-sm font-medium text-ink/40 mt-1">{stat.label}</div>
            </Link>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="bg-paper border border-ink/5 rounded-3xl p-8 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-lg font-bold text-ink">Recent Customers</h3>
              <Link to="/admin/consultations" className="text-xs font-bold text-brand hover:underline flex items-center gap-1">
                View All <ChevronRight className="h-3 w-3" />
              </Link>
            </div>
            
            <div className="space-y-6">
              {recentCustomers.map((inquiry, i) => (
                <div key={i} className="flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-xl bg-ink/5 flex items-center justify-center font-bold text-ink/40">
                      {inquiry.name?.charAt(0) || 'U'}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-ink group-hover:text-brand transition-colors">{inquiry.name}</div>
                      <div className="text-xs text-ink/40">{inquiry.company} · {inquiry.service}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                      inquiry.status === "New" ? "bg-brand/10 text-brand" : "bg-ink/5 text-ink/40"
                    }`}>
                      {inquiry.status}
                    </span>
                    <div className="text-right min-w-[60px]">
                      <div className="text-xs font-medium text-ink/30">{inquiry.time}</div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="h-8 w-8 rounded-lg hover:bg-ink/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <MoreVertical className="h-4 w-4 text-ink/30" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-40 bg-paper border-ink/5 rounded-2xl shadow-xl p-2">
                        <DropdownMenuItem onClick={() => handleViewProfile(inquiry)} className="rounded-xl cursor-pointer">
                          View Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleContactClient(inquiry)} className="rounded-xl cursor-pointer">
                          Contact Client
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </div>

      {/* Customer Detail Modal */}
      <Dialog open={isDetailOpen} onOpenChange={setIsDetailOpen}>
        <DialogContent className="sm:max-w-[500px] bg-paper rounded-3xl border-ink/5 p-0 overflow-hidden">
          {selectedCustomer && (
            <>
              <div className="h-32 bg-gradient-to-r from-brand to-indigo-600 relative">
                <div className="absolute -bottom-10 left-8 h-20 w-20 rounded-2xl bg-paper shadow-xl flex items-center justify-center text-3xl font-display font-bold text-brand border-4 border-paper">
                  {selectedCustomer.name?.charAt(0) || 'U'}
                </div>
              </div>
              <div className="pt-14 px-8 pb-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-display font-bold text-ink">{selectedCustomer.name}</h2>
                  <p className="text-ink/40 font-medium">{selectedCustomer.company}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-ink/30 flex items-center gap-2">
                      <Mail className="h-3 w-3" /> Email
                    </div>
                    <div className="text-sm font-bold text-ink">{selectedCustomer.email}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-ink/30 flex items-center gap-2">
                      <Phone className="h-3 w-3" /> Phone
                    </div>
                    <div className="text-sm font-bold text-ink">{selectedCustomer.phone}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-ink/30 flex items-center gap-2">
                      <Briefcase className="h-3 w-3" /> Service
                    </div>
                    <div className="text-sm font-bold text-ink">{selectedCustomer.service}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-ink/30 flex items-center gap-2">
                      <Globe className="h-3 w-3" /> Status
                    </div>
                    <div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand/10 text-brand">
                        {selectedCustomer.status}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex gap-3">
                  <Button onClick={() => handleContactClient(selectedCustomer)} className="flex-1 bg-brand hover:bg-brand/90 text-paper rounded-xl py-6 font-bold">
                    Email Client
                  </Button>
                  <Button variant="outline" onClick={() => setIsDetailOpen(false)} className="flex-1 rounded-xl py-6 font-bold border-ink/5">
                    Close
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default DashboardPage;
