$(function() {
    const stationList = {
        "M": [
            {
                "Numbering": "M11",
                "Station_Name_JP": "江坂",
                "Station_Name_EN": "Esaka"
            },
            {
                "Numbering": "M12",
                "Station_Name_JP": "東三国",
                "Station_Name_EN": "Higashi-Mikuni"
            },
            {
                "Numbering": "M13",
                "Station_Name_JP": "新大阪",
                "Station_Name_EN": "Shin-Osaka"
            },
            {
                "Numbering": "M14",
                "Station_Name_JP": "西中島南方",
                "Station_Name_EN": "Nishinakajima-Minamigata"
            },
            {
                "Numbering": "M15",
                "Station_Name_JP": "中津",
                "Station_Name_EN": "Nakatsu"
            },
            {
                "Numbering": "M16",
                "Station_Name_JP": "梅田",
                "Station_Name_EN": "Umeda"
            },
            {
                "Numbering": "M17",
                "Station_Name_JP": "淀屋橋",
                "Station_Name_EN": "Yodoyabashi"
            },
            {
                "Numbering": "M18",
                "Station_Name_JP": "本町",
                "Station_Name_EN": "Hommachi"
            },
            {
                "Numbering": "M19",
                "Station_Name_JP": "心斎橋",
                "Station_Name_EN": "Shinsaibashi"
            },
            {
                "Numbering": "M20",
                "Station_Name_JP": "なんば",
                "Station_Name_EN": "Namba"
            },
            {
                "Numbering": "M21",
                "Station_Name_JP": "大国町",
                "Station_Name_EN": "Daikokucho"
            },
            {
                "Numbering": "M22",
                "Station_Name_JP": "動物園前",
                "Station_Name_EN": "Dobutsuen-mae"
            },
            {
                "Numbering": "M23",
                "Station_Name_JP": "天王寺",
                "Station_Name_EN": "Tennoji"
            },
            {
                "Numbering": "M24",
                "Station_Name_JP": "昭和町",
                "Station_Name_EN": "Showacho"
            },
            {
                "Numbering": "M25",
                "Station_Name_JP": "西田辺",
                "Station_Name_EN": "Nishitanabe"
            },
            {
                "Numbering": "M26",
                "Station_Name_JP": "長居",
                "Station_Name_EN": "Nagai"
            },
            {
                "Numbering": "M27",
                "Station_Name_JP": "あびこ",
                "Station_Name_EN": "Abiko"
            },
            {
                "Numbering": "M28",
                "Station_Name_JP": "北花田",
                "Station_Name_EN": "Kita-hanada"
            },
            {
                "Numbering": "M29",
                "Station_Name_JP": "新金岡",
                "Station_Name_EN": "Shinkanaoka"
            },
            {
                "Numbering": "M30",
                "Station_Name_JP": "なかもず",
                "Station_Name_EN": "Nakamozu"
            }
        ],
        "Y": [
            {
                "Numbering": "Y11",
                "Station_Name_JP": "西梅田",
                "Station_Name_EN": "Nishi-Umeda"
            },
            {
                "Numbering": "Y12",
                "Station_Name_JP": "肥後橋",
                "Station_Name_EN": "Higobashi"
            },
            {
                "Numbering": "Y13",
                "Station_Name_JP": "本町",
                "Station_Name_EN": "Hommachi"
            },
            {
                "Numbering": "Y14",
                "Station_Name_JP": "四ツ橋",
                "Station_Name_EN": "Yotsubashi"
            },
            {
                "Numbering": "Y15",
                "Station_Name_JP": "なんば",
                "Station_Name_EN": "Namba"
            },
            {
                "Numbering": "Y16",
                "Station_Name_JP": "大国町",
                "Station_Name_EN": "Daikokucho"
            },
            {
                "Numbering": "Y17",
                "Station_Name_JP": "花園町",
                "Station_Name_EN": "Hanazonocho"
            },
            {
                "Numbering": "Y18",
                "Station_Name_JP": "岸里",
                "Station_Name_EN": "Kishinosato"
            },
            {
                "Numbering": "Y19",
                "Station_Name_JP": "玉出",
                "Station_Name_EN": "Tamade"
            },
            {
                "Numbering": "Y20",
                "Station_Name_JP": "北加賀屋",
                "Station_Name_EN": "Kitakagaya"
            },
            {
                "Numbering": "Y21",
                "Station_Name_JP": "住之江公園",
                "Station_Name_EN": "Suminoekoen"
            }
        ],
        "R": [
            {
                "Numbering": "R20",
                "Station_Name_JP": "天王寺",
                "Station_Name_EN": "Tennoji"
            },
            {
                "Numbering": "R21",
                "Station_Name_JP": "美章園",
                "Station_Name_EN": "Bishoen"
            },
            {
                "Numbering": "R22",
                "Station_Name_JP": "南田辺",
                "Station_Name_EN": "Minami-Tanabe"
            },
            {
                "Numbering": "R23",
                "Station_Name_JP": "鶴ケ丘",
                "Station_Name_EN": "Tsurugaoka"
            },
            {
                "Numbering": "R24",
                "Station_Name_JP": "長居",
                "Station_Name_EN": "Nagai"
            },
            {
                "Numbering": "R25",
                "Station_Name_JP": "我孫子町",
                "Station_Name_EN": "Abikocko"
            },
            {
                "Numbering": "R26",
                "Station_Name_JP": "杉本町",
                "Station_Name_EN": "Sugimotocho"
            },
            {
                "Numbering": "R27",
                "Station_Name_JP": "浅香",
                "Station_Name_EN": "Asaka"
            },
            {
                "Numbering": "R28",
                "Station_Name_JP": "堺市",
                "Station_Name_EN": "Sakaishi"
            },
            {
                "Numbering": "R29",
                "Station_Name_JP": "三国ケ丘",
                "Station_Name_EN": "Mikunigaoka"
            },
            {
                "Numbering": "R30",
                "Station_Name_JP": "百舌鳥",
                "Station_Name_EN": "Mozu"
            },
            {
                "Numbering": "R31",
                "Station_Name_JP": "上野芝",
                "Station_Name_EN": "Uenoshiba"
            },
            {
                "Numbering": "R32",
                "Station_Name_JP": "津久野",
                "Station_Name_EN": "Tsukuno"
            },
            {
                "Numbering": "R33",
                "Station_Name_JP": "鳳",
                "Station_Name_EN": "Otori"
            },
            {
                "Numbering": "R34",
                "Station_Name_JP": "富木",
                "Station_Name_EN": "Tonoki"
            },
            {
                "Numbering": "R35",
                "Station_Name_JP": "北信太",
                "Station_Name_EN": "Kita-Shinoda"
            },
            {
                "Numbering": "R36",
                "Station_Name_JP": "信太山",
                "Station_Name_EN": "Shinodayama"
            },
            {
                "Numbering": "R37",
                "Station_Name_JP": "和泉府中",
                "Station_Name_EN": "Izumi-Fuchu"
            },
            {
                "Numbering": "R38",
                "Station_Name_JP": "久米田",
                "Station_Name_EN": "Kumeda"
            },
            {
                "Numbering": "R39",
                "Station_Name_JP": "下松",
                "Station_Name_EN": "Shimomatsu"
            },
            {
                "Numbering": "R40",
                "Station_Name_JP": "東岸和田",
                "Station_Name_EN": "Higashi-Kishiwada"
            },
            {
                "Numbering": "R41",
                "Station_Name_JP": "東貝塚",
                "Station_Name_EN": "Higashi-Kaizuka"
            },
            {
                "Numbering": "R42",
                "Station_Name_JP": "和泉橋本",
                "Station_Name_EN": "Izumi-Hashimoto"
            },
            {
                "Numbering": "R43",
                "Station_Name_JP": "東佐野",
                "Station_Name_EN": "Higashi-Sano"
            },
            {
                "Numbering": "R44",
                "Station_Name_JP": "熊取",
                "Station_Name_EN": "Kumatori"
            },
            {
                "Numbering": "R45",
                "Station_Name_JP": "日根野",
                "Station_Name_EN": "Hineno"
            },
            {
                "Numbering": "R46",
                "Station_Name_JP": "長滝",
                "Station_Name_EN": "Nagataki"
            },
            {
                "Numbering": "R47",
                "Station_Name_JP": "新家",
                "Station_Name_EN": "Shinge"
            },
            {
                "Numbering": "R48",
                "Station_Name_JP": "和泉砂川",
                "Station_Name_EN": "Izumi-Sunagawa"
            },
            {
                "Numbering": "R49",
                "Station_Name_JP": "和泉鳥取",
                "Station_Name_EN": "Izumi-Tottori"
            },
            {
                "Numbering": "R50",
                "Station_Name_JP": "山中渓",
                "Station_Name_EN": "Yamanakadani"
            },
            {
                "Numbering": "R51",
                "Station_Name_JP": "紀伊",
                "Station_Name_EN": "Kii"
            },
            {
                "Numbering": "R52",
                "Station_Name_JP": "六十谷",
                "Station_Name_EN": "Musota"
            },
            {
                "Numbering": "R53",
                "Station_Name_JP": "紀伊中ノ島",
                "Station_Name_EN": "Kii-Nakanoshima"
            },
            {
                "Numbering": "R54",
                "Station_Name_JP": "和歌山",
                "Station_Name_EN": "Wakayama"
            }
        ]
    };
    const htmlTemprate =
        `<div class="map-station-wrapper">
            <div class="map-station-name-ja">
                <span>$STATION_NAME_JA$</span>
                <div class="direction-arrow">
                    <div class="chevron"></div>
                    <div class="chevron"></div>
                    <div class="chevron"></div>
                </div>
            </div>
            <div class="map-station-number">
                <div class="filler-band">
                    <div class="numbering">
                        <span class="char">$CHAR$</span>
                        <span class="num">$NUMBER$</span>
                    </div>
                    <div class="direction-arrow">
                        <div class="chevron"></div>
                        <div class="chevron"></div>
                        <div class="chevron"></div>
                    </div>
                </div>
            </div>
            <div class="map-station-name-en">
                <span>$STATION_NAME_EN$</span>
            </div>
        </div>`;

    for (const e of stationList.M) {
        let element = htmlTemprate
            .replace("$STATION_NAME_JA$", e.Station_Name_JP.length > 2
                ? e.Station_Name_JP
                : e.Station_Name_JP.length > 1
                    ? e.Station_Name_JP.slice(0, -1)+"　"+e.Station_Name_JP.slice(1)
                    : "　"+e.Station_Name_JP+"　")
            .replace("$STATION_NAME_EN$", e.Station_Name_EN)
            .replace("$CHAR$", e.Numbering.slice(0, 1))
            .replace("$NUMBER$", e.Numbering.slice(-2));
        $("#appendflag").before(element);
    }
})