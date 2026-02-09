import { createContext, useContext, useState, useCallback, ReactNode } from "react";

type Language = "en" | "hi" | "zh" | "ja" | "th" | "si" | "vi" | "dz";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  "nav.home": { en: "Home", hi: "होम", zh: "首页", ja: "ホーム", th: "หน้าแรก", si: "මුල් පිටුව", vi: "Trang chủ", dz: "མདུན་ཤོག" },
  "nav.destinations": { en: "Destinations", hi: "गंतव्य", zh: "目的地", ja: "目的地", th: "จุดหมาย", si: "ගමනාන්ත", vi: "Điểm đến", dz: "གནས་སྟོན" },
  "nav.packages": { en: "Packages", hi: "पैकेज", zh: "套餐", ja: "パッケージ", th: "แพ็คเกจ", si: "පැකේජ", vi: "Gói", dz: "ཐུམ་སྒྲིལ" },
  "nav.about": { en: "About", hi: "हमारे बारे में", zh: "关于", ja: "について", th: "เกี่ยวกับ", si: "අපි ගැන", vi: "Giới thiệu", dz: "སྐོར་ལས" },
  "nav.contact": { en: "Contact", hi: "संपर्क", zh: "联系", ja: "お問い合わせ", th: "ติดต่อ", si: "සම්බන්ධ", vi: "Liên hệ", dz: "འབྲེལ་གཏུགས" },
  "hero.title": { en: "Discover the Ancient Land of Magadh", hi: "मगध की प्राचीन भूमि की खोज करें", zh: "探索古老的摩揭陀", ja: "古代マガダの地を発見", th: "ค้นพบดินแดนโบราณแห่งมคธ", si: "පුරාණ මගධ දේශය සොයා ගන්න", vi: "Khám phá vùng đất cổ đại Magadh", dz: "མ་ག་དྷའི་སྔོན་གནའི་ས་ཁོངས་རྙེད" },
  "hero.subtitle": { en: "Explore Bihar's rich heritage through curated spiritual journeys, cultural experiences, and historical expeditions", hi: "क्यूरेटेड आध्यात्मिक यात्राओं के माध्यम से बिहार की समृद्ध विरासत का अन्वेषण करें", zh: "通过精心策划的灵性之旅探索比哈尔邦丰富的遗产", ja: "精選されたスピリチュアルジャーニーでビハールの豊かな遺産を探索", th: "สำรวจมรดกอันรุ่มรวยของพิหารผ่านการเดินทางทางจิตวิญญาณ", si: "ආත්මික ගමන් හරහා බිහාර්හි පොහොසත් උරුමය ගවේෂණය කරන්න", vi: "Khám phá di sản phong phú của Bihar qua các hành trình tâm linh", dz: "བི་ཧར་གྱི་གཏེར་རྫས་ལྗོངས་སྐོར" },
  "hero.cta": { en: "Start Your Journey", hi: "अपनी यात्रा शुरू करें", zh: "开始旅程", ja: "旅を始める", th: "เริ่มการเดินทาง", si: "ඔබේ ගමන ආරම්භ කරන්න", vi: "Bắt đầu hành trình", dz: "འགྲུལ་བཞུད་འགོ་བཙུགས" },
  "hero.explore": { en: "Explore Destinations", hi: "गंतव्य स्थलों का अन्वेषण करें", zh: "探索目的地", ja: "目的地を探索", th: "สำรวจจุดหมาย", si: "ගමනාන්ත ගවේෂණය කරන්න", vi: "Khám phá điểm đến", dz: "གནས་ཡུལ་བརྟག" },
  "packages.title": { en: "Our Heritage Packages", hi: "हमारे विरासत पैकेज", zh: "我们的遗产套餐", ja: "ヘリテージパッケージ", th: "แพ็คเกจมรดก", si: "අපේ උරුම පැකේජ", vi: "Gói di sản", dz: "ང་ཚོའི་གཏེར་རྫས་ཐུམ་སྒྲིལ" },
  "destinations.title": { en: "Sacred Destinations", hi: "पवित्र गंतव्य", zh: "神圣目的地", ja: "聖地", th: "จุดหมายศักดิ์สิทธิ์", si: "ශුද්ධ ගමනාන්ත", vi: "Điểm đến linh thiêng", dz: "དམ་པའི་གནས་ཡུལ" },
  "features.title": { en: "Why Choose Magadh Explora", hi: "मगध एक्सप्लोरा क्यों चुनें", zh: "为什么选择摩揭陀探索", ja: "なぜマガダエクスプローラを選ぶのか", th: "ทำไมต้องเลือก Magadh Explora", si: "Magadh Explora තෝරා ගන්නේ ඇයි", vi: "Tại sao chọn Magadh Explora", dz: "Magadh Explora ག་ཅི་སྟེ་གདམ" },
  "testimonials.title": { en: "What Travelers Say", hi: "यात्री क्या कहते हैं", zh: "旅行者说什么", ja: "旅行者の声", th: "นักเดินทางพูดว่า", si: "සංචාරකයින් කියන දේ", vi: "Khách du lịch nói gì", dz: "འགྲུལ་པ་ཚུ་གིས་ག་ཅི་སླབ" },
  "cta.title": { en: "Ready for an Unforgettable Journey?", hi: "एक अविस्मरणीय यात्रा के लिए तैयार?", zh: "准备好难忘的旅程了吗？", ja: "忘れられない旅の準備は？", th: "พร้อมสำหรับการเดินทางที่ไม่ลืมเลือน?", si: "අමතක නොවන ගමනකට සූදානම්ද?", vi: "Sẵn sàng cho hành trình khó quên?", dz: "བརྗེད་མི་སྲིད་པའི་འགྲུལ་བཞུད་ལུ་གྲ་སྒྲིག་ཡོདཔ?" },
  "cta.subtitle": { en: "Book your Bihar heritage tour today and experience the magic of ancient Magadh", hi: "आज ही अपना बिहार विरासत टूर बुक करें", zh: "今天预订您的比哈尔遗产之旅", ja: "今日ビハール遺産ツアーを予約", th: "จองทัวร์มรดกพิหารวันนี้", si: "ඔබේ බිහාර් උරුම සංචාරය අද වෙන්කරවන්න", vi: "Đặt tour di sản Bihar ngay hôm nay", dz: "ད་རིས་བི་ཧར་གཏེར་རྫས་སྐོར་ལམ་གནས་ཚིག་བཀོད" },
  "footer.description": { en: "Curating sacred journeys through Bihar's ancient heritage sites since 2020.", hi: "2020 से बिहार के प्राचीन विरासत स्थलों के माध्यम से पवित्र यात्राओं का आयोजन।", zh: "自2020年以来策划比哈尔古遗产之旅。", ja: "2020年からビハールの古代遺産ツアーを企画。", th: "จัดทริปทางจิตวิญญาณผ่านแหล่งมรดกโบราณตั้งแต่ 2020", si: "2020 සිට බිහාර්හි පුරාණ උරුම අඩවි හරහා ශුද්ධ ගමන් සංවිධානය කිරීම.", vi: "Tổ chức hành trình tâm linh qua các di sản cổ đại Bihar từ 2020.", dz: "2020 ལས་ བི་ཧར་གྱི་གནའ་བོའི་གཏེར་རྫས་ལམ་སྟོན།" },
  "quote.title": { en: "Request a Quote", hi: "एक उद्धरण का अनुरोध करें", zh: "请求报价", ja: "見積もりを依頼", th: "ขอใบเสนอราคา", si: "මිල ගණන් ඉල්ලන්න", vi: "Yêu cầu báo giá", dz: "གོང་ཚད་ཞུ" },
  "share.title": { en: "Share Your Journey", hi: "अपनी यात्रा साझा करें", zh: "分享您的旅程", ja: "旅を共有", th: "แบ่งปันการเดินทาง", si: "ඔබේ ගමන බෙදාගන්න", vi: "Chia sẻ hành trình", dz: "འགྲུལ་བཞུད་བགོ" },
  "builder.title": { en: "Build Your Package", hi: "अपना पैकेज बनाएं", zh: "构建您的套餐", ja: "パッケージを作成", th: "สร้างแพ็คเกจของคุณ", si: "ඔබේ පැකේජය සාදන්න", vi: "Tạo gói của bạn", dz: "ཐུམ་སྒྲིལ་བཟོ" },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");
  const t = useCallback((key: string): string => translations[key]?.[language] ?? key, [language]);
  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};

export const languages: { code: Language; name: string; flag: string }[] = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "th", name: "ไทย", flag: "🇹🇭" },
  { code: "si", name: "සිංහල", flag: "🇱🇰" },
  { code: "vi", name: "Tiếng Việt", flag: "🇻🇳" },
  { code: "dz", name: "རྫོང་ཁ", flag: "🇧🇹" },
];
