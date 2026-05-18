import { AdminLayout } from "@/components/admin/AdminLayout";
import { io } from "socket.io-client";
import { 
  Search, 
  Filter, 
  MoreVertical, 
  Mail, 
  Phone, 
  Calendar,
  MessageSquare,
  ChevronRight,
  ExternalLink,
  CheckCircle2,
  Clock,
  AlertCircle,
  Plus,
  Trash2,
  UserPlus
} from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ConsultationsPage = () => {
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newLead, setNewLead] = useState({ name: "", email: "", company: "", service: "" });
  const [isLoading, setIsLoading] = useState(true);

  // Fetch data from real backend
  const fetchConsultations = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("http://localhost:5000/api/consultations");
      if (res.ok) {
        const data = await res.json();
        // Format date and time for frontend
        const formattedData = data.map((item: any) => {
          const dt = new Date(item.created_at);
          return {
            ...item,
            id: item.id.toString(),
            date: dt.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
            time: dt.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
          };
        });
        setInquiries(formattedData);
      } else {
        toast.error("Failed to load customer data");
      }
    } catch (error) {
      toast.error("Error connecting to server");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchConsultations();

    const socket = io('http://localhost:5000');
    socket.on('new_lead', (lead) => {
      // Format it properly before adding
      const dt = new Date(lead.time);
      const formattedLead = {
        ...lead,
        id: lead.id.toString(),
        date: dt.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
        time: dt.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      };
      // Prepend to inquiries
      setInquiries(prev => [formattedLead, ...prev]);
    });

    return () => { socket.disconnect(); };
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "New": return "bg-brand/10 text-brand border-brand/20";
      case "Contacted": return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "In Progress": return "bg-amber-500/10 text-amber-500 border-amber-500/20";
      case "Completed": return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
      default: return "bg-ink/5 text-ink/40 border-ink/10";
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`http://localhost:5000/api/consultations/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setInquiries(inquiries.filter(i => i.id !== id));
        toast.success("Customer record deleted successfully");
      } else {
        toast.error("Failed to delete record");
      }
    } catch (error) {
      toast.error("Error connecting to server");
    }
  };

  const handleUpdateStatus = async (id: string, status: string) => {
    try {
      const res = await fetch(`http://localhost:5000/api/consultations/${id}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
      if (res.ok) {
        setInquiries(inquiries.map(i => i.id === id ? { ...i, status } : i));
        toast.success(`Status updated to ${status}`);
      } else {
        toast.error("Failed to update status");
      }
    } catch (error) {
      toast.error("Error connecting to server");
    }
  };

  const handleAddLead = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/consultations", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newLead)
      });
      if (res.ok) {
        toast.success("New lead added successfully");
        setIsAddModalOpen(false);
        setNewLead({ name: "", email: "", company: "", service: "" });
        fetchConsultations(); // Refresh the list
      } else {
        toast.error("Failed to add lead");
      }
    } catch (error) {
      toast.error("Error connecting to server");
    }
  };

  const filteredInquiries = inquiries.filter(i => 
    i.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    i.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    i.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleExport = () => {
    // Generate CSV content
    const headers = ["ID", "Name", "Email", "Phone", "Company", "Service", "Status", "Date"];
    const csvRows = inquiries.map(i => [
      i.id,
      i.name,
      i.email,
      i.phone,
      i.company,
      i.service,
      i.status,
      i.date
    ].map(val => `"${val}"`).join(","));
    
    const csvContent = [headers.join(","), ...csvRows].join("\n");
    
    // Create blob and download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `ewag_customers_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success("Customer data exported successfully!");
  };

  return (
    <AdminLayout>
      <div className="space-y-8 animate-fade-up">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-display font-bold text-ink">Customer Management</h1>
            <p className="text-ink/50 mt-1">Manage customer records, inquiries, and lead data.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" onClick={handleExport} className="rounded-2xl border-ink/5 hover:bg-ink/5">
              Export CSV
            </Button>
            
            <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
              <DialogTrigger asChild>
                <Button className="bg-brand hover:bg-brand/90 text-paper rounded-2xl px-6">
                  <UserPlus className="mr-2 h-4 w-4" /> Add Manual Lead
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-paper rounded-3xl border-ink/5">
                <DialogHeader>
                  <DialogTitle className="text-xl font-display font-bold">Add New Lead</DialogTitle>
                  <DialogDescription className="text-ink/50">
                    Manually enter a new customer inquiry into the system.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleAddLead} className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-xs font-bold text-ink/40 uppercase tracking-wider">Full Name</label>
                    <Input 
                      id="name" 
                      value={newLead.name} 
                      onChange={(e) => setNewLead({...newLead, name: e.target.value})}
                      placeholder="e.g. John Doe" 
                      required 
                      className="rounded-xl bg-ink/5 border-transparent focus:border-brand/20"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-xs font-bold text-ink/40 uppercase tracking-wider">Email Address</label>
                    <Input 
                      id="email" 
                      type="email"
                      value={newLead.email} 
                      onChange={(e) => setNewLead({...newLead, email: e.target.value})}
                      placeholder="john@example.com" 
                      required 
                      className="rounded-xl bg-ink/5 border-transparent focus:border-brand/20"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="company" className="text-xs font-bold text-ink/40 uppercase tracking-wider">Company</label>
                    <Input 
                      id="company" 
                      value={newLead.company} 
                      onChange={(e) => setNewLead({...newLead, company: e.target.value})}
                      placeholder="Acme Corp" 
                      className="rounded-xl bg-ink/5 border-transparent focus:border-brand/20"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="service" className="text-xs font-bold text-ink/40 uppercase tracking-wider">Service Interested In</label>
                    <Input 
                      id="service" 
                      value={newLead.service} 
                      onChange={(e) => setNewLead({...newLead, service: e.target.value})}
                      placeholder="e.g. Website Design" 
                      className="rounded-xl bg-ink/5 border-transparent focus:border-brand/20"
                    />
                  </div>
                  <DialogFooter className="mt-4">
                    <Button type="submit" className="w-full bg-brand hover:bg-brand/90 text-paper rounded-xl py-6 font-bold">
                      Add Customer
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Stats Mini Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Total Leads", value: inquiries.length, icon: MessageSquare, color: "text-brand" },
            { label: "New Status", value: inquiries.filter(i => i.status === "New").length, icon: AlertCircle, color: "text-brand" },
            { label: "In Progress", value: inquiries.filter(i => i.status === "In Progress").length, icon: Clock, color: "text-amber-500" },
            { label: "Converted", value: inquiries.filter(i => i.status === "Completed").length, icon: CheckCircle2, color: "text-emerald-500" },
          ].map((stat, i) => (
            <div key={i} className="bg-paper border border-ink/5 p-4 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
                <span className="text-[10px] font-bold uppercase tracking-wider text-ink/40">{stat.label}</span>
              </div>
              <div className="text-xl font-display font-bold text-ink">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-ink/30 group-focus-within:text-brand transition-colors" />
            <input 
              type="text" 
              placeholder="Search by name, email, or company..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-paper border border-ink/5 focus:border-brand/20 focus:outline-none transition-all text-sm"
            />
          </div>
          <Button variant="outline" className="px-4 py-2.5 rounded-2xl bg-paper border border-ink/5 text-ink/60 hover:text-ink flex items-center gap-2 text-sm font-bold transition-all">
            <Filter className="h-4 w-4" />
            Filter Status
          </Button>
        </div>

        {/* Leads Table */}
        <div className="bg-paper border border-ink/5 rounded-3xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-ink/5 bg-ink/[0.01]">
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-ink/40">Customer</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-ink/40">Service</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-ink/40">Status</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-ink/40">Date</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-ink/40 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink/5">
                {filteredInquiries.length > 0 ? (
                  filteredInquiries.map((lead) => (
                    <tr key={lead.id} className="group hover:bg-ink/[0.01] transition-colors">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className="h-9 w-9 rounded-xl bg-brand/5 flex items-center justify-center font-bold text-brand text-xs">
                            {lead.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <div className="text-sm font-bold text-ink group-hover:text-brand transition-colors">{lead.name}</div>
                            <div className="text-[10px] text-ink/40">{lead.company} · {lead.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="text-xs font-medium text-ink/60">{lead.service}</div>
                      </td>
                      <td className="px-6 py-5">
                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${getStatusColor(lead.status)}`}>
                          {lead.status}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <div className="text-[10px] font-medium text-ink/40 flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {lead.date}
                        </div>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button 
                            onClick={() => window.open(`mailto:${lead.email}`)}
                            className="h-8 w-8 rounded-lg hover:bg-brand/10 text-ink/40 hover:text-brand transition-all flex items-center justify-center"
                          >
                            <Mail className="h-4 w-4" />
                          </button>
                          
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <button className="h-8 w-8 rounded-lg hover:bg-ink/5 text-ink/40 hover:text-ink transition-all flex items-center justify-center">
                                <MoreVertical className="h-4 w-4" />
                              </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-48 bg-paper border-ink/5 rounded-2xl shadow-xl p-2">
                              <DropdownMenuLabel className="text-[10px] font-bold uppercase tracking-widest text-ink/30 px-3 py-2">Update Status</DropdownMenuLabel>
                              <DropdownMenuItem onClick={() => handleUpdateStatus(lead.id, "Contacted")} className="rounded-xl cursor-pointer">
                                Mark as Contacted
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleUpdateStatus(lead.id, "In Progress")} className="rounded-xl cursor-pointer">
                                Mark In Progress
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleUpdateStatus(lead.id, "Completed")} className="rounded-xl cursor-pointer">
                                Mark Completed
                              </DropdownMenuItem>
                              <DropdownMenuSeparator className="bg-ink/5 my-1" />
                              <DropdownMenuItem 
                                onClick={() => handleDelete(lead.id)}
                                className="rounded-xl text-destructive focus:bg-destructive/10 focus:text-destructive cursor-pointer flex items-center justify-between"
                              >
                                Delete Record <Trash2 className="h-3.5 w-3.5" />
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-6 py-20 text-center text-ink/30 text-sm">
                      No customers found matching your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ConsultationsPage;
