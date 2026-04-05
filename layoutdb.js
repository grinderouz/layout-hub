const baseTypes = {
    WAR: { id: 'war', name: 'War Base', color: 'bg-red-900/50 text-red-400 border-red-700/50' },
    FARM: { id: 'farm', name: 'Farming', color: 'bg-green-900/50 text-green-400 border-green-700/50' },
    TROPHY: { id: 'trophy', name: 'Trophy', color: 'bg-purple-900/50 text-purple-400 border-purple-700/50' },
    CWL: { id: 'cwl', name: 'CWL', color: 'bg-blue-900/50 text-blue-400 border-blue-700/50' },
    HYBRID: { id: 'hybrid', name: 'Hybrid', color: 'bg-yellow-900/50 text-yellow-400 border-yellow-700/50' },
    CLANMADE: { id: 'clanlayout', name: 'Clan Made', color: 'bg-[gold] text-[black] border-[gold]' },
    ART: { id: 'art', name: 'ART', color: 'bg-pink-900/50 text-pink-400 border-pink-700/50' },
    SOON: { id: 'soon', name: 'Coming Soon!', color: 'bg-[darkorange] text-white-400 border-[orange]' }
};

const layoutsData = {
    7: [
        {
            id: 0701,
            title: "Farming Base TH7 with Link, Anti 3 Stars, Hybrid - plan / layout / design",
            type: baseTypes.HYBRID,
            image: "https://clashofclans-layouts.com/pics/th7_plans/farm/thumb/th7_farm_278.jpg",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH7%3AHV%3AAAAAAQAAAAMILEE1Sh2WeOXuonFAtZ58",
            date: "Unknown"
        },
        {
            id: 0702,
            title: "Top War Base TH7 with Link, Anti Everything, Hybrid - CWL Defence Plan",
            type: baseTypes.HYBRID,
            image: "https://clashofclans-layouts.com/pics/th7_plans/war/thumb/th7_war_148.jpg",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH7%3AWB%3AAAAAAQAAAALZG0xZJHDZQP7zpKL_XIAI",
            date: "Unknown"
        },
    ],
    8: [
        {
            id: 0801,
            title: "Top War Base TH8 with Link, Anti Everything - Anti 2 Stars CWL Plan 2026",
            type: baseTypes.WAR,
            image: "https://clashofclans-layouts.com/pics/th8_plans/war/thumb/th8_war_143.jpg",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH8%3AWB%3AAAAACAAAAALdvtC5M7zuTQ3itUC9tPmA",
            date: "Unknown"
        },
        {
            id: 0802,
            title: "Farming Base TH8 with Link - plan / layout / design",
            type: baseTypes.FARM,
            image: "https://clashofclans-layouts.com/pics/th8_plans/farm/thumb/th8_farm_311.jpg",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH8%3AHV%3AAAAACAAAAALdv0zzGBYBMlmsiwiBqH8i",
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
        {
            id: 0905,
            title: "Anti 3 Stars Base TH9 with Link - best plan / layout / design",
            type: baseTypes.TROPHY,
            image: "https://clashofclans-layouts.com/pics/th9_plans/defence/thumb/th9_defence_259.jpg",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH9%3AHV%3AAAAAKwAAAAKPW0weLSa4Es9gxkloKYkV",
            date: "Unknown"
        },
        {
            id: 0906,
            title: "Anti 2 Stars Base TH9 with Link - best plan / layout / design",
            type: baseTypes.TROPHY,
            image: "https://clashofclans-layouts.com/pics/th9_plans/defence/thumb/th9_defence_257.jpg",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH9%3AHV%3AAAAAKwAAAAKNVsQrrC6-g5vc-UTpvyPr",
            date: "Unknown"
        },
        {
            id: 0907,
            title: "Anti 2 Stars Base TH9 with Link - best plan / layout / design",
            type: baseTypes.WAR,
            image: "https://clashofclans-layouts.com/pics/th9_plans/war/thumb/th9_war_129.jpg",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH9%3AWB%3AAAAAKwAAAAKNVmHcHTUbLvrMUolwr6lo",
            date: "Unknown"
        },
    ],
    10: [
        {
            id: 1001,
            title: "Top War Base TH10 with Link - CWL Defence Plan 2026",
            type: baseTypes.WAR,
            image: "https://clashofclans-layouts.com/pics/th10_plans/war/thumb/th10_war_198.jpg",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH10%3AWB%3AAAAASAAAAAIUWjPlh01ibVIgnOlRSaGq",
            date: "Unknown"
        },
        {
            id: 1002,
            title: "Farming Base TH10 with Link, Hybrid - plan / layout / design",
            type: baseTypes.FARM,
            image: "https://clashofclans-layouts.com/pics/th10_plans/farm/thumb/th10_farm_228.jpg",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH10%3AHV%3AAAAASAAAAAIVzp2ZN_diaGAQNQD9lDSi",
            date: "Unknown"
        },
    ],
    11: [
        {
            id: 1101,
            title: "Top War Base TH11 with Link, Anti Air / Electro Dragon, Hybrid - CWL Defence Plan 2026",
            type: baseTypes.WAR,
            image: "https://clashofclans-layouts.com/pics/th11_plans/war/thumb/th11_war_200.jpg",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH11%3AWB%3AAAAAFwAAAAKwuXhU1GXES3dWAoSWJ3QC",
            date: "Unknown"
        },
        {
            id: 1102,
            title: "Unbeatable Base TH11 with Link, Hybrid - best plan / Anti Loot / design",
            type: baseTypes.HYBRID,
            image: "https://clashofclans-layouts.com/pics/th11_plans/defence/thumb/th11_defence_132.jpg",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH11%3AHV%3AAAAAFwAAAAKxVvAsT9id6qwHoLMBk48j",
            date: "Unknown"
        },
    ],
    12: [
        {
            id: 1201,
            title: "Defense (Trophy) Base TH12 with Link - plan / layout / design - Clash of Clans 2026",
            type: baseTypes.TROPHY,
            image: "https://clashofclans-layouts.com/pics/th12_plans/defence/thumb/th12_defence_147.jpg",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH12%3AHV%3AAAAAMQAAAAJ1J7ehj-2iTH8zUNT97ifL",
            date: "Unknown"
        },
    ],
    13: [
        {
            id: 1301,
            title: "Top War Base TH13 with Link, Anti Everything - CWL Defence Plan 2026",
            type: baseTypes.WAR,
            image: "https://clashofclans-layouts.com/pics/th13_plans/war/original/th13_war_300.jpg",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH13%3AWB%3AAAAADgAAAALPSu_SPvErfN-Msd28w3Pq",
            date: "Unknown"
        },
        {
            id: 1302,
            title: "Anti 3 Stars Base TH13 with Link, Hybrid - best plan / layout / design",
            type: baseTypes.HYBRID,
            image: "https://clashofclans-layouts.com/pics/th13_plans/defence/original/th13_defence_63.jpg",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH13%3AHV%3AAAAADgAAAAJL3hEtYLXb8xM4jDCIMjI6",
            date: "Unknown"
        },
        {
            id: 1303,
            title: "Top Troll Funny Base TH13 with Link - Funny Art Plan",
            type: baseTypes.ART,
            image: "https://clashofclans-layouts.com/pics/th13_plans/troll/original/th13_troll_7.jpg",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH13%3AHV%3AAAAADgAAAAJMTCw-SX3XcewzkVAL-FOU",
            date: "Unknown"
        },
        {
            id: 1304,
            title: "Anti 3 Stars Base TH13 with Link - best plan / layout / design",
            type: baseTypes.TROPHY,
            image: "https://clashofclans-layouts.com/pics/th13_plans/defence/original/th13_defence_137.jpg",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH13%3AHV%3AAAAADgAAAALMXsRFgDeXHQ0w6MoSN8Ma",
            date: "Unknown"
        },
        {
            id: 1305,
            title: "Farming Base TH13 with Link, Anti 2 Stars - plan / layout / design",
            type: baseTypes.FARM,
            image: "https://clashofclans-layouts.com/pics/th13_plans/farm/original/th13_farm_77.jpg",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH13%3AHV%3AAAAADgAAAALGbaLn3M33DZpUtp8uoqyg",
            date: "Unknown"
        },
    ],
    14: [
        {
            id: 1401,
            title: "Anti 3 Stars Base TH14 with Link, Hybrid - best plan / layout / design",
            type: baseTypes.HYBRID,
            image: "https://clashofclans-layouts.com/pics/th14_plans/defence/original/th14_defence_86.jpg",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH14%3AHV%3AAAAAQAAAAAJHlm4AHw_5BlMVv_jo-aK_",
            date: "Unknown"
        },
        {
            id: 1402,
            title: "Top War Base TH14 with Link, Anti Everything - Anti 2 Stars CWL Plan 2026",
            type: baseTypes.WAR,
            image: "https://clashofclans-layouts.com/pics/th14_plans/war/original/th14_war_228.jpg",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH14%3AWB%3AAAAAQAAAAAJGG5leOaPtMYFqGRSV2i_g",
            date: "Unknown"
        },
    ],
};

window.layoutDatabase = layoutsData;