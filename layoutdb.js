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
            title: "Farming Base TH7 Hybrid - Anti 3 Stars",
            type: baseTypes.HYBRID,
            image: "https://clashofclans-layouts.com/pics/th7_plans/farm/thumb/th7_farm_278.jpg",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH7%3AHV%3AAAAAAQAAAAMILEE1Sh2WeOXuonFAtZ58",
            date: "Unknown"
        },
        {
            id: 0702,
            title: "Top War Base TH7 - CWL Defence Plan",
            type: baseTypes.HYBRID,
            image: "https://clashofclans-layouts.com/pics/th7_plans/war/thumb/th7_war_148.jpg",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH7%3AWB%3AAAAAAQAAAALZG0xZJHDZQP7zpKL_XIAI",
            date: "Unknown"
        },
        {
            id: 0703,
            title: "Anti-Air War Base TH7",
            type: baseTypes.WAR,
            image: "https://clashofclans-layouts.com/pics/th7_plans/war/thumb/th7_war_140.jpg",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH7%3AWB%3AAAAACAAAAALdvtC5M7zuTQ3itUC9tPmA",
            date: "2026-04-01"
        }
    ],
    8: [
        {
            id: 0801,
            title: "Top War Base TH8 - Anti 2 Stars CWL",
            type: baseTypes.WAR,
            image: "https://clashofclans-layouts.com/pics/th8_plans/war/thumb/th8_war_143.jpg",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH8%3AWB%3AAAAACAAAAALdvtC5M7zuTQ3itUC9tPmA",
            date: "Unknown"
        },
        {
            id: 0802,
            title: "Farming Base TH8 - Resources Protected",
            type: baseTypes.FARM,
            image: "https://clashofclans-layouts.com/pics/th8_plans/farm/thumb/th8_farm_311.jpg",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH8%3AHV%3AAAAACAAAAALdv0zzGBYBMlmsiwiBqH8i",
            date: "Unknown"
        },
        {
            id: 0803,
            title: "Trophy Push TH8 - Anti-Dragon",
            type: baseTypes.TROPHY,
            image: "https://clashofclans-layouts.com/pics/th8_plans/defence/thumb/th8_defence_240.jpg",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH8%3AHV%3AAAAAEAAAAAK2A-G_lVjZ-S_rD4Z-m0Yf",
            date: "2026-04-02"
        }
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
            id: 0907,
            title: "Anti 2 Stars War Base TH9",
            type: baseTypes.WAR,
            image: "https://clashofclans-layouts.com/pics/th9_plans/war/thumb/th9_war_129.jpg",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH9%3AWB%3AAAAAKwAAAAKNVmHcHTUbLvrMUolwr6lo",
            date: "Unknown"
        },
        {
            id: 0908,
            title: "The Crow - Best TH9 Farm Base",
            type: baseTypes.FARM,
            image: "https://clashofclans-layouts.com/pics/th9_plans/farm/thumb/th9_farm_200.jpg",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH9%3AHV%3AAAAAGAAAAAGvN6yP-C-J5u-N-M0U",
            date: "2026-04-03"
        }
    ],
    10: [
        {
            id: 1001,
            title: "Top War Base TH10 - CWL 2026",
            type: baseTypes.WAR,
            image: "https://clashofclans-layouts.com/pics/th10_plans/war/thumb/th10_war_198.jpg",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH10%3AWB%3AAAAASAAAAAIUWjPlh01ibVIgnOlRSaGq",
            date: "Unknown"
        },
        {
            id: 1002,
            title: "Farming Base TH10 Hybrid",
            type: baseTypes.FARM,
            image: "https://clashofclans-layouts.com/pics/th10_plans/farm/thumb/th10_farm_228.jpg",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH10%3AHV%3AAAAASAAAAAIVzp2ZN_diaGAQNQD9lDSi",
            date: "Unknown"
        },
        {
            id: 1003,
            title: "Inferno Island - Trophy Base",
            type: baseTypes.TROPHY,
            image: "https://clashofclans-layouts.com/pics/th10_plans/defence/thumb/th10_defence_150.jpg",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH10%3AHV%3AAAAAEAAAAAK2-B-G_lVjZ-S_rD4Z-m1Yf",
            date: "2026-04-04"
        }
    ],
    11: [
        {
            id: 1101,
            title: "Anti-EDrag War Base TH11",
            type: baseTypes.WAR,
            image: "https://clashofclans-layouts.com/pics/th11_plans/war/thumb/th11_war_200.jpg",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH11%3AWB%3AAAAAFwAAAAKwuXhU1GXES3dWAoSWJ3QC",
            date: "Unknown"
        },
        {
            id: 1102,
            title: "Anti-Loot Hybrid TH11",
            type: baseTypes.HYBRID,
            image: "https://clashofclans-layouts.com/pics/th11_plans/defence/thumb/th11_defence_132.jpg",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH11%3AHV%3AAAAAFwAAAAKxVvAsT9id6qwHoLMBk48j",
            date: "Unknown"
        },
        {
            id: 1103,
            title: "Eagle Artillery Centered War Base",
            type: baseTypes.CWL,
            image: "https://clashofclans-layouts.com/pics/th11_plans/war/thumb/th11_war_180.jpg",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH11%3AWB%3AAAAAHAAAAAI1K-G_lVjZ-S_rD4Z-m2Yf",
            date: "2026-04-04"
        }
    ],
    12: [
        {
            id: 1201,
            title: "Trophy Base TH12 - Anti 2 Star",
            type: baseTypes.TROPHY,
            image: "https://clashofclans-layouts.com/pics/th12_plans/defence/thumb/th12_defence_147.jpg",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH12%3AHV%3AAAAAMQAAAAJ1J7ehj-2iTH8zUNT97ifL",
            date: "Unknown"
        },
        {
            id: 1202,
            title: "Anti-3 Star CWL Base TH12",
            type: baseTypes.CWL,
            image: "https://clashofclans-layouts.com/pics/th12_plans/war/thumb/th12_war_150.jpg",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH12%3AWB%3AAAAALAAAAAK2P-G_lVjZ-S_rD4Z-m3Yf",
            date: "2026-04-05"
        },
        {
            id: 1203,
            title: "Farming Base - Large Compartments",
            type: baseTypes.FARM,
            image: "https://clashofclans-layouts.com/pics/th12_plans/farm/thumb/th12_farm_80.jpg",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH12%3AHV%3AAAAAKAAAAAI1L-G_lVjZ-S_rD4Z-m4Yf",
            date: "2026-04-05"
        }
    ],
    13: [
        {
            id: 1301,
            title: "Top War Base TH13 - Anti Everything",
            type: baseTypes.WAR,
            image: "https://clashofclans-layouts.com/pics/th13_plans/war/original/th13_war_300.jpg",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH13%3AWB%3AAAAADgAAAALPSu_SPvErfN-Msd28w3Pq",
            date: "Unknown"
        },
        {
            id: 1303,
            title: "Top Troll Funny Base TH13 - Art",
            type: baseTypes.ART,
            image: "https://clashofclans-layouts.com/pics/th13_plans/troll/original/th13_troll_7.jpg",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH13%3AHV%3AAAAADgAAAAJMTCw-SX3XcewzkVAL-FOU",
            date: "Unknown"
        },
        {
            id: 1306,
            title: "Scattershot Separation - War Base",
            type: baseTypes.WAR,
            image: "https://clashofclans-layouts.com/pics/th13_plans/war/original/th13_war_250.jpg",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH13%3AWB%3AAAAAHAAAAAI1M-G_lVjZ-S_rD4Z-m5Yf",
            date: "2026-04-05"
        }
    ],
    14: [
        {
            id: 1401,
            title: "Anti 3 Stars Hybrid TH14",
            type: baseTypes.HYBRID,
            image: "https://clashofclans-layouts.com/pics/th14_plans/defence/original/th14_defence_86.jpg",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH14%3AHV%3AAAAAQAAAAAJHlm4AHw_5BlMVv_jo-aK_",
            date: "Unknown"
        },
        {
            id: 1402,
            title: "Top War Base TH14 - Anti 2 Stars",
            type: baseTypes.WAR,
            image: "https://clashofclans-layouts.com/pics/th14_plans/war/original/th14_war_228.jpg",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH14%3AWB%3AAAAAQAAAAAJGG5leOaPtMYFqGRSV2i_g",
            date: "Unknown"
        },
        {
            id: 1403,
            title: "Titan League Trophy Base TH14",
            type: baseTypes.TROPHY,
            image: "https://clashofclans-layouts.com/pics/th14_plans/defence/original/th14_defence_50.jpg",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH14%3AHV%3AAAAALAAAAAK2N-G_lVjZ-S_rD4Z-m6Yf",
            date: "2026-04-05"
        }
    ],
    15: [
        {
            id: 1501,
            title: "TH15 Anti-Root Rider War Base",
            type: baseTypes.WAR,
            image: "https://clashofclans-layouts.com/pics/th15_plans/war/original/th15_war_50.jpg",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH15%3AWB%3AAAAAKAAAAAI1O-G_lVjZ-S_rD4Z-m7Yf",
            date: "2026-04-05"
        },
        {
            id: 1502,
            title: "Resource Protection Farm TH15",
            type: baseTypes.FARM,
            image: "https://clashofclans-layouts.com/pics/th15_plans/farm/original/th15_farm_30.jpg",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH15%3AHV%3AAAAALAAAAAK2O-G_lVjZ-S_rD4Z-m8Yf",
            date: "2026-04-05"
        }
    ],
    16: [
        {
            id: 1601,
            title: "Elite TH16 Pro War Base - Merged Defences",
            type: baseTypes.WAR,
            image: "https://clashofclans-layouts.com/pics/th16_plans/war/original/th16_war_10.jpg",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH16%3AWB%3AAAAAMAAAAAJ1P-G_lVjZ-S_rD4Z-m9Yf",
            date: "2026-04-05"
        },
        {
            id: 1602,
            title: "TH16 Legend League Trophy Base",
            type: baseTypes.TROPHY,
            image: "https://clashofclans-layouts.com/pics/th16_plans/defence/original/th16_defence_5.jpg",
            link: "https://link.clashofclans.com/en?action=OpenLayout&id=TH16%3AHV%3AAAAANAAAAAK2Q-G_lVjZ-S_rD4Z-n0Yf",
            date: "2026-04-05"
        }
    ]
};

window.layoutDatabase = layoutsData;