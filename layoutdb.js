const baseTypes = {
    WAR: { id: 'war', name: 'War Base', color: 'bg-red-900/50 text-red-400 border-red-700/50' },
    FARM: { id: 'farm', name: 'Farming', color: 'bg-green-900/50 text-green-400 border-green-700/50' },
    TROPHY: { id: 'trophy', name: 'Trophy', color: 'bg-purple-900/50 text-purple-400 border-purple-700/50' },
    CWL: { id: 'cwl', name: 'CWL', color: 'bg-blue-900/50 text-blue-400 border-blue-700/50' },
    HYBRID: { id: 'hybrid', name: 'Hybrid', color: 'bg-yellow-900/50 text-yellow-400 border-yellow-700/50' },
    CLANMADE: { id: 'clanlayout', name: 'Clan Made', color: 'bg-[gold] text-[black] border-[gold]' },
    SOON: { id: 'soon', name: 'Coming Soon!', color: 'bg-[darkorange] text-white-400 border-[orange]' }
};

const layoutsData = {
    7: [
        {
            id: 0701,
            title: "Farming Base TH7 with Link, Anti 3 Stars, Hybrid - plan / layout / design",
            type: baseTypes.HYBRID,
            image: "https://clashofclans-layouts.com/pics/th7_plans/farm/thumb/th7_farm_278.jpg?u=1766850129",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH7%3AHV%3AAAAAAQAAAAMILEE1Sh2WeOXuonFAtZ58",
            date: "Unknown"
        },
        {
            id: 0702,
            title: "Top War Base TH7 with Link, Anti Everything, Hybrid - CWL Defence Plan",
            type: baseTypes.HYBRID,
            image: "https://clashofclans-layouts.com/pics/th7_plans/war/thumb/th7_war_148.jpg?u=1734640505",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH7%3AWB%3AAAAAAQAAAALZG0xZJHDZQP7zpKL_XIAI",
            date: "Unknown"
        },
    ],
    9: [
        {
            id: 0901,
            title: "MAYO V1 (OG)",
            type: baseTypes.CLANMADE,
            image: "assets/previews/th9-mayo-v1-og.png",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH9%3AHV%3AAAAAQQAAAAJKYCo16jZ8nN8FlLNXCmrP",
            date: "3/21/2026"
        },
        {
            id: 0902,
            title: "MAYO V2 (ENHANCED)",
            type: baseTypes.CLANMADE,
            image: "assets/previews/th9-mayo-v2-enhanced.png",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH9%3AHV%3AAAAAQQAAAAJKaxFuyq6ro0Mc2xdP5YaU",
            date: "3/21/2026"
        },
        {
            id: 0903,
            title: "MAYO V3 (FINAL)",
            type: baseTypes.CLANMADE,
            image: "assets/previews/th9-mayo-v3-final.png",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH9%3AHV%3AAAAAQQAAAAJLXiPOFcjz-9GOAfhKfRpi",
            date: "3/31/2026"
        },
        {
            id: 0904,
            title: "RJ",
            type: baseTypes.CLANMADE,
            image: "assets/previews/th9-rj.png",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH9%3AHV%3AAAAAQQAAAAJLXt_sx7d-uAPzq9m_Gb9k",
            date: "3/31/2026"
        },
    ],
};

window.layoutDatabase = layoutsData;